import { Auth } from '../entities/auth';

export interface AuthInterface {
  googleSignIn(): Promise<void>;
  authResult(): Promise<boolean>;
  authObserver(callback: (auth: Auth | null) => void): () => void;
  signOut(): Promise<void>;
}
