import { createContext } from 'react';

export interface UserRepository {
  createUser(
    uid: string,
    firstName: string,
    lastName: string,
    authToken: string
  ): Promise<void>;
}

export const userRepositoryContext = createContext({} as UserRepository);
