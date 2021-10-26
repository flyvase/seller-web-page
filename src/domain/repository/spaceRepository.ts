import { createContext } from 'react';

import { HttpResponse } from '../../infrastructure/http/core/httpClient';

export interface SpaceRepository {
  list(authToken: string): Promise<HttpResponse>;
}

export const spaceRepositoryContext = createContext({} as SpaceRepository);
