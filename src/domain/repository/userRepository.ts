import { createContext } from 'react';

export interface UserRepository {
  create(
    uid: string,
    firstName: string,
    lastName: string,
    authToken: string
  ): Promise<void>;
}

export const userRepositoryContext = createContext({} as UserRepository);
