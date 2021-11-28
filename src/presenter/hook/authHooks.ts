import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { AuthRepository } from '../../domain/repository/authRepository';
import { AuthState, authState } from '../state/authState';

export function useInitializeAuth(authRepository: AuthRepository) {
  const [initialized, setInitialized] = useState(false);
  const setAuthState = useSetRecoilState(authState);
  useEffect(() => {
    const cancel = authRepository.onAuthStateChanged((uid) => {
      if (!initialized) {
        setInitialized(true);
      }

      if (uid == null) {
        setAuthState(null);
      } else {
        setAuthState(new AuthState({ uid }));
      }
    });

    return cancel;
  }, []);

  return initialized;
}
