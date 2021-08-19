import firebase from 'firebase';
import { createContext } from 'react';

import { Auth } from '../entities/auth';
import {
  AuthInterface,
  reCaptchaContainerId,
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

  async enrollPhoneNumber(phoneNumber: string): Promise<string> {
    const verifier = new firebase.auth.RecaptchaVerifier(reCaptchaContainerId, {
      size: 'invisible',
    });
    const user = firebase.auth().currentUser;
    const session = await user!.multiFactor.getSession();
    const options = {
      phoneNumber,
      session,
    };
    const provider = new firebase.auth.PhoneAuthProvider();
    return provider.verifyPhoneNumber(options, verifier);
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
