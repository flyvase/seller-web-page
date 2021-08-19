import { Auth } from '../entities/auth';

export type ReAuthenticationResult =
  | 'unAuthenticated'
  | 'requireMfa'
  | 'reAuthenticated';

export interface AuthInterface {
  googleSignIn(): Promise<void>;
  authResult(): Promise<boolean>;
  reAuthenticateWithGoogle(): Promise<void>;
  reAuthenticationResult(): Promise<ReAuthenticationResult>;
  authObserver(callback: (auth: Auth | null) => void): () => void;
  signOut(): Promise<void>;
}
