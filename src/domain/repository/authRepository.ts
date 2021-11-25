import { createContext } from 'react';

export interface AuthRepository {
  getAuthToken(): Promise<string>;
}

export const authRepositoryContext = createContext({} as AuthRepository);
