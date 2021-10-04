import { createContext } from 'react';

import { AuthEntity } from '../entity/authEntity';

export interface AuthRepository {
  googleSignIn(): Promise<void>;
  authResult(): Promise<boolean>;
  authObserver(callback: (auth: AuthEntity | null) => void): () => void;
  signOut(): Promise<void>;
}

export const authRepositoryContext = createContext({} as AuthRepository);
