import { createContext } from 'react';

import { User } from '../model/user';

export interface AuthRepository {
  getAuthToken(): Promise<string>;
  signInWithPassword(email: string, password: string): Promise<void>;
  onAuthStateChanged(callback: (user?: User) => void): () => void;
}

export const authRepositoryContext = createContext({} as AuthRepository);
