import { useToggle } from 'react-use';
import { useRecoilValue } from 'recoil';

import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { authState } from './authController';

export function useFetchSpaces(
  spaceRepository: SpaceRepository
): [boolean, () => Promise<void>] {
  const [loading, toggle] = useToggle(false);
  const auth = useRecoilValue(authState);
  const token = auth!.token;
  return [
    loading,
    async () => {
      toggle(true);
      console.log('start!');
      await spaceRepository.fetch(token);
      toggle(false);
    },
  ];
}
