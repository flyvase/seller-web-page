import { AuthEntity } from '../entity/authEntity';

export interface AuthRepository {
  googleSignIn(): Promise<void>;
  authResult(): Promise<boolean>;
  authObserver(callback: (auth: AuthEntity | null) => void): () => void;
  getIdToken(): Promise<string>;
  signOut(): Promise<void>;
}
