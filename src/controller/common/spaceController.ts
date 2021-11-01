import { useToggle } from 'react-use';
import { useRecoilValue } from 'recoil';

import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { authState } from './authController';

export function useFetchSpace(
  spaceRepository: SpaceRepository
): [boolean, (id: number) => Promise<void>] {
  const [loading, toggle] = useToggle(false);
  const auth = useRecoilValue(authState);
  const token = auth!.token;
  return [
    loading,
    async (id: number) => {
      toggle(true);
      const response = await spaceRepository.fetchSpace(token, id);
      console.log(response);
      toggle(false);
    },
  ];
}

export function useListSpaces(
  spaceRepository: SpaceRepository
): [boolean, () => Promise<void>] {
  const [loading, toggle] = useToggle(false);
  const auth = useRecoilValue(authState);
  const token = auth!.token;
  return [
    loading,
    async () => {
      toggle(true);
      const response = await spaceRepository.listSpaces(token);
      console.log(response);
      toggle(false);
    },
  ];
}
