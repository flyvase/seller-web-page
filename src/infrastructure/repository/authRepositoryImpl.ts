import firebase from 'firebase';
import { createContext } from 'react';

import { AuthEntity } from '../../domain/entity/authEntity';
import { AuthRepository } from '../../domain/repository/authRepository';

export class AuthRepositoryImpl implements AuthRepository {
  async googleSignIn(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  }

  async authResult(): Promise<boolean> {
    const credential = await firebase.auth().getRedirectResult();
    return credential.user != null;
  }

  authObserver(callback: (auth: AuthEntity | null) => void): () => void {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      if (user == null) {
        callback(null);
      } else {
        callback(new AuthEntity(user.uid));
      }
    });
    return () => cancel();
  }

  signOut(): Promise<void> {
    return firebase.auth().signOut();
  }
}

export const AuthRepositoryContext = createContext<AuthRepository>(
  new AuthRepositoryImpl()
);
