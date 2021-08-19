import { Auth } from '../entities/auth';

export const reCaptchaContainerId = 're-captcha-container';

export interface AuthInterface {
  googleSignIn(): Promise<void>;
  authResult(): Promise<boolean>;
  reAuthenticateWithGoogle(): Promise<void>;
  enrollPhoneNumber(phoneNumber: string): Promise<string>;
  authObserver(callback: (auth: Auth | null) => void): () => void;
  signOut(): Promise<void>;
}
