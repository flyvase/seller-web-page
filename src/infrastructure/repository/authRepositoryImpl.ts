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

import {
  InvalidEmailError,
  UnexpectedAuthError,
  UserNotFoundError,
  WrongPasswordError,
} from '../../core/error/authErrors';
import { AuthEntity } from '../../domain/entity/authEntity';
import { AuthRepository } from '../../domain/repository/authRepository';

export class AuthRepositoryImpl implements AuthRepository {
  async googleSignIn(): Promise<void> {
    const authClient = getAuth();
    const provider = new GoogleAuthProvider();
    await signInWithRedirect(authClient, provider);
  }

  async passwordSignIn(email: string, password: string): Promise<boolean> {
    const authClient = getAuth();
    try {
      const credential = await signInWithEmailAndPassword(
        authClient,
        email,
        password
      );
      if (credential.user == null) {
        throw new Error();
      }
    } catch (e) {
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case 'auth/user-not-found':
            throw new UserNotFoundError();
          case 'auth/invalid-email':
            throw new InvalidEmailError();
          case 'auth/wrong-password':
            throw new WrongPasswordError();
        }
      }
      throw new UnexpectedAuthError((e as Error).message);
    }
    return true;
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
