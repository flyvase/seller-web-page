import { useQuery } from 'react-query';

import { Space } from '../../../domain/model/space';
import { SpaceRepository } from '../../../domain/repository/spaceRepository';
import { OgpProperties } from '../../../domain/valueObject/ogpProperties';
import { SpaceId } from '../../../domain/valueObject/spaceId';
import { BadRequestError, NotFoundError } from '../../../error/repository';

export function useFetchSpace(
  spaceId: SpaceId,
  spaceRepository: SpaceRepository
) {
  return useQuery<Space, Error>(
    ['fetchSpace', spaceId.value],
    () => {
      return spaceRepository.fetch(spaceId);
    },
    {
      retry: (count, error) => {
        if (
          error instanceof BadRequestError ||
          error instanceof NotFoundError
        ) {
          return false;
        }

        return true;
      },
      refetchOnWindowFocus: false,
    }
  );
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
      refetchOnWindowFocus: false,
    }
  );
}
