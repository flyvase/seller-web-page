import { createContext } from 'react';

import { SpaceEntity } from '../entity/spaceEntity';

export interface SpaceRepository {
  fetchSpace(authToken: string, id: number): Promise<SpaceEntity>;
  listSpaces(authToken: string): Promise<SpaceEntity[]>;
}

export const spaceRepositoryContext = createContext({} as SpaceRepository);
