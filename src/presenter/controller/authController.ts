import { useEffect, useState } from 'react';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

import { User } from '../../domain/model/user';
import { AuthRepository } from '../../domain/repository/authRepository';
import { RecoilKeys } from './recoilKeys';

const userState = atom<User | undefined>({
  key: RecoilKeys.USER,
  default: undefined,
});

const isSignedInSelector = selector({
  key: RecoilKeys.IS_SIGNED_IN,
  get: ({ get }) => get(userState) != undefined,
});

export function useIsSignedInState() {
  return useRecoilValue(isSignedInSelector);
}

export function useInitializeAuth(authRepository: AuthRepository) {
  const [initialized, setInitialized] = useState(false);
  const setUserState = useSetRecoilState(userState);
  useEffect(() => {
    const cancel = authRepository.onAuthStateChanged((user) => {
      if (user) {
        setUserState(user);
      } else {
        setUserState(undefined);
      }

      if (!initialized) {
        setInitialized(true);
      }
    });

    return cancel;
  });

  return initialized;
}
