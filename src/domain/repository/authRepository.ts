import { createContext } from 'react';

export interface AuthRepository {
  getAuthToken(): Promise<string>;
  signInWithPassword(email: string, password: string): Promise<void>;
  onAuthStateChanged(callback: (uid: string | null) => void): () => void;
}

export const authRepositoryContext = createContext({} as AuthRepository);
