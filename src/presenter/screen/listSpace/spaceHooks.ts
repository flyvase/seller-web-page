import { useQuery } from 'react-query';

import { Space } from '../../../domain/model/space';
import { SpaceRepository } from '../../../domain/repository/spaceRepository';

export function useListSpaces(spaceRepository: SpaceRepository) {
  return useQuery<Space[], Error>('listSpaces', () => {
    return spaceRepository.List();
  });
}
