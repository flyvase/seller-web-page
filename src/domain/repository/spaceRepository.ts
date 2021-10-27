import { createContext } from 'react';

import { SpaceEntity } from '../entity/spaceEntity';

export interface SpaceRepository {
  list(authToken: string): Promise<SpaceEntity[]>;
}

export const spaceRepositoryContext = createContext({} as SpaceRepository);
