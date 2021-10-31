import { useToggle } from 'react-use';
import { useRecoilValue } from 'recoil';

import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { authState } from './authController';

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
      const response = await spaceRepository.list(token);
      console.log(response);
      toggle(false);
    },
  ];
}
