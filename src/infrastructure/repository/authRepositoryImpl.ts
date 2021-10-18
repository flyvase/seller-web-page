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

import { AuthError } from '../../core/error/authErrors';
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
  ): Promise<AuthError | null> {
    const authClient = getAuth();
    try {
      const credential = await signInWithEmailAndPassword(
        authClient,
        email,
        password
      );
      if (credential.user == null) {
        return new AuthError('authentication error');
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case 'auth/user-not-found':
            return new AuthError('user not found', e.code);
          case 'auth/invalid-email':
            return new AuthError('invalid email', e.code);
          case 'auth/wrong-password':
            return new AuthError('wrong password', e.code);
        }
      }
      return new AuthError('unknown error');
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
