import { useEffect, useState } from 'react';
import { atom, selector, useRecoilValue, useSetRecoilState } from 'recoil';

import { AuthRepository } from '../../domain/repository/authRepository';
import { RecoilKeys } from './recoilKeys';

class AuthState {
  readonly uid: string;

  constructor(uid: string) {
    this.uid = uid;
  }
}

const authState = atom<AuthState | null>({
  key: RecoilKeys.AUTH,
  default: null,
});

const isSignedInSelector = selector({
  key: RecoilKeys.IS_SIGNED_IN,
  get: ({ get }) => get(authState) != null,
});

export function useIsSignedInState() {
  return useRecoilValue(isSignedInSelector);
}

export function useInitializeAuth(authRepository: AuthRepository) {
  const [initialized, setInitialized] = useState(false);
  const setAuthState = useSetRecoilState(authState);
  useEffect(() => {
    const cancel = authRepository.onAuthStateChanged((uid) => {
      if (uid == null) {
        setAuthState(null);
      } else {
        setAuthState(new AuthState(uid));
      }

      if (!initialized) {
        setInitialized(true);
      }
    });

    return cancel;
  });

  return initialized;
}
