import { createContext } from 'react';

import { AuthError } from '../../core/error/authErrors';
import { AuthEntity } from '../entity/authEntity';

export interface AuthRepository {
  googleSignIn(): Promise<void>;
  passwordSignIn(email: string, password: string): Promise<AuthError | null>;
  authResult(): Promise<boolean>;
  authObserver(callback: (auth: AuthEntity | null) => void): () => void;
  signOut(): Promise<void>;
}

export const authRepositoryContext = createContext({} as AuthRepository);
