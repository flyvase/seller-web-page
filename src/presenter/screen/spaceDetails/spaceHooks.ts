import { useQuery } from 'react-query';

import { Space } from '../../../domain/model/space';
import { SpaceRepository } from '../../../domain/repository/spaceRepository';
import { OgpProperties } from '../../../domain/valueObject/ogpProperties';
import { SpaceId } from '../../../domain/valueObject/spaceId';
import { DisplayableError } from '../../../error/common';
import { BadRequestError, NotFoundError } from '../../../error/repository';

export function useFetchSpace(
  spaceId: SpaceId,
  spaceRepository: SpaceRepository
) {
  return useQuery<Space, DisplayableError>(
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

        if (count > 3) {
          return false;
        }

        return true;
      },
    }
  );
}

export function useGetSpaceOgpProperties(
  spaceId: SpaceId,
  spaceRepository: SpaceRepository
) {
  return useQuery<OgpProperties, DisplayableError>(
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
