import { createContext } from 'react';

import { Space } from '../model/space';
import { SpaceId } from '../valueObject/spaceId';

export interface SpaceRepository {
  list(): Promise<Space[]>;
  fetch(id: SpaceId): Promise<Space>;
}

export const spaceRepositoryContext = createContext({} as SpaceRepository);
