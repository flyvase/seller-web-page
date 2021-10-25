import { createContext } from 'react';

import { HttpResponse } from '../../infrastructure/http/core/httpClient';

export interface SpaceRepository {
  fetch(authToken: string): Promise<void>;
}

export const spaceRepositoryContext = createContext({} as SpaceRepository);
