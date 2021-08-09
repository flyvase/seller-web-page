import { Auth } from '../entities/auth';

export interface AuthInterface {
  googleSignIn(): Promise<void>;
  authObserver(callback: (auth: Auth | null) => void): () => void;
}
