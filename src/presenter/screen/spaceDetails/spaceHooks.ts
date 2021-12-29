import { useQuery } from 'react-query';

import { Space } from '../../../domain/model/space';
import { SpaceRepository } from '../../../domain/repository/spaceRepository';
import { OgpProperties } from '../../../domain/valueObject/ogpProperties';
import { SpaceId } from '../../../domain/valueObject/spaceId';

export function useFetchSpace(
  spaceId: SpaceId,
  spaceRepository: SpaceRepository
) {
  return useQuery<Space, Error>(['fetchSpace', spaceId.value], () => {
    return spaceRepository.fetch(spaceId);
  });
}

export function useGetSpaceOgpProperties(
  spaceId: SpaceId,
  spaceRepository: SpaceRepository
) {
  return useQuery<OgpProperties, Error>(
    'getSpaceOgpProperties',
    () => {
      return spaceRepository.getOgpProperties(spaceId);
    },
    {
      retry: false,
    }
  );
}
