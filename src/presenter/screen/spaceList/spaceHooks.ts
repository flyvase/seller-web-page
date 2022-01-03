import { useQuery } from 'react-query';

import { Space } from '../../../domain/model/space';
import { SpaceRepository } from '../../../domain/repository/spaceRepository';
import { DisplayableError } from '../../../error/common';

export function useListSpaces(spaceRepository: SpaceRepository) {
  return useQuery<Space[], DisplayableError>('listSpaces', () => {
    return spaceRepository.list();
  });
}
