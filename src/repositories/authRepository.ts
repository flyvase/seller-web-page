import firebase from 'firebase';
import { createContext } from 'react';

import { Auth } from '../entities/auth';
import { AuthInterface } from '../interfaces/authInterface';

export class AuthRepository implements AuthInterface {
  async googleSignIn(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  }

  authObserver(callback: (auth: Auth | null) => void): () => void {
    const cancel = firebase.auth().onAuthStateChanged((user) => {
      if (user == null) {
        callback(null);
      } else {
        callback(new Auth(user.uid));
      }
    });
    return () => cancel();
  }
}

export const AuthRepositoryContext = createContext<AuthRepository>(
  new AuthRepository()
);
