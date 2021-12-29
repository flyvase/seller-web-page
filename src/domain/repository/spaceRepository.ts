import { createContext } from 'react';

import { Space } from '../model/space';
import { OgpProperties } from '../valueObject/ogpProperties';
import { SpaceId } from '../valueObject/spaceId';

export interface SpaceRepository {
  list(): Promise<Space[]>;
  fetch(id: SpaceId): Promise<Space>;
  getOgpProperties(id: SpaceId): Promise<OgpProperties>;
}

export const spaceRepositoryContext = createContext({} as SpaceRepository);
