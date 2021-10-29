import { createContext } from 'react';

import { SpaceEntity } from '../entity/spaceEntity';

export interface SpaceRepository {
  fetch(authToken: string, id: number): Promise<SpaceEntity>;
  list(authToken: string): Promise<SpaceEntity[]>;
}

export const spaceRepositoryContext = createContext({} as SpaceRepository);
