import { useQuery } from 'react-query';

import { Space } from '../../../domain/model/space';
import { SpaceRepository } from '../../../domain/repository/spaceRepository';
import { SpaceId } from '../../../domain/valueObject/spaceId';

export function useFetchSpace(
  spaceId: SpaceId,
  spaceRepository: SpaceRepository
) {
  return useQuery<Space, Error>(['fetchSpace', spaceId.value], () => {
    return spaceRepository.Fetch(spaceId);
  });
}
