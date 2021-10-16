import { FirebaseError } from '@firebase/util';
import {
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import { AuthEntity } from '../../domain/entity/authEntity';
import { AuthRepository } from '../../domain/repository/authRepository';

export class AuthRepositoryImpl implements AuthRepository {
  async googleSignIn(): Promise<void> {
    const authClient = getAuth();
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(authClient, provider);
  }

  async passwordSignIn(
    email: string,
    password: string
  ): Promise<string | null> {
    const authClient = getAuth();
    try {
      await signInWithEmailAndPassword(authClient, email, password);
    } catch (e) {
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case 'auth/user-not-found':
            return 'ユーザーが見つかりませんでした';
          case 'auth/invalid-email':
            return '無効なメールアドレスです';
          case 'auth/wrong-password':
            return 'パスワードが間違っています';
        }
      }
      return '不明なエラーが発生しました';
    }
    return null;
  }

  async authResult(): Promise<boolean> {
    const authClient = getAuth();
    const credential = await getRedirectResult(authClient);
    if (credential == null) {
      return false;
    } else {
      return credential.user != null;
    }
  }

  authObserver(callback: (auth: AuthEntity | null) => void): () => void {
    const authClient = getAuth();
    const cancel = onAuthStateChanged(authClient, async (user) => {
      if (user == null) {
        callback(null);
      } else {
        const token = await user.getIdToken();
        callback(new AuthEntity(user.uid, token));
      }
    });
    return () => cancel();
  }

  signOut(): Promise<void> {
    const authClient = getAuth();
    return signOut(authClient);
  }
}
