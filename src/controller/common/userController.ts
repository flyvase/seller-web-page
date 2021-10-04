import { useToggle } from 'react-use';
import { useRecoilValue } from 'recoil';

import { UserRepository } from '../../domain/repository/userRepository';
import { authState } from './authController';

export function useCreateUser(
  userRepository: UserRepository
): [boolean, (firstName: string, lastName: string) => Promise<void>] {
  const [loading, toggle] = useToggle(false);
  const auth = useRecoilValue(authState);
  const token = auth!.token;
  const uid = auth!.uid;
  return [
    loading,
    async (firstName: string, lastName: string) => {
      toggle(true);
      await userRepository.create(uid, firstName, lastName, token);
      toggle(false);
    },
  ];
}
