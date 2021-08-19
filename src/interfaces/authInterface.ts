import { Auth } from '../entities/auth';

export const reCaptchaContainerId = 're-captcha-container';

export interface AuthInterface {
  googleSignIn(): Promise<void>;
  authResult(): Promise<boolean>;
  reAuthenticateWithGoogle(): Promise<void>;
  requestSmsWithNewPhoneNumber(phoneNumber: string): Promise<string>;
  enrollPhoneNumber(verificationId: string, pinCode: string): Promise<void>;
  authObserver(callback: (auth: Auth | null) => void): () => void;
  signOut(): Promise<void>;
}
