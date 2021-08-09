import firebase from 'firebase';
import { createContext } from 'react';

import { AuthInterface } from '../interfaces/authInterface';

export class AuthRepository implements AuthInterface {
  async googleSignIn(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  }

  get uid(): string | undefined {
    return firebase.auth().currentUser?.uid;
  }
}

export const AuthRepositoryContext = createContext<AuthRepository>(
  new AuthRepository()
);
