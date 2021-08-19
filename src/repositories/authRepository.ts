import firebase from 'firebase';
import { createContext } from 'react';

import { Auth } from '../entities/auth';
import {
  AuthInterface,
  ReAuthenticationResult,
} from '../interfaces/authInterface';

export class AuthRepository implements AuthInterface {
  async googleSignIn(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithRedirect(provider);
  }

  async authResult(): Promise<boolean> {
    const credential = await firebase.auth().getRedirectResult();
    return credential.user != null;
  }

  async reAuthenticateWithGoogle(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();
    const user = firebase.auth().currentUser;
    await user!.reauthenticateWithRedirect(provider);
  }

  async reAuthenticationResult(): Promise<ReAuthenticationResult> {
    let credential: firebase.auth.UserCredential;
    try {
      credential = await firebase.auth().getRedirectResult();
    } catch (e) {
      if (e.code === 'auth/multi-factor-auth-required') {
        return 'requireMfa';
      } else {
        throw new Error(
          `Caught unexpected error on re authentication. Error: ${e}`
        );
      }
    }

    return credential!.user == null ? 'unAuthenticated' : 'reAuthenticated';
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

  signOut(): Promise<void> {
    return firebase.auth().signOut();
  }
}

export const AuthRepositoryContext = createContext<AuthRepository>(
  new AuthRepository()
);
