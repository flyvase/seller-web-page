import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { AuthInterface } from '../../../interfaces/authInterface';
import { authState } from '../../state/common/authState';

export function useGoogleSignIn(
  authRepository: AuthInterface
): () => Promise<void> {
  return authRepository.googleSignIn;
}

export function useAuthObserver(authRepository: AuthInterface): boolean {
  const [initialized, setInitialized] = useState(false);

  const setAuthState = useSetRecoilState(authState);
  useEffect(() => {
    const cancel = authRepository.authObserver((auth) => {
      setAuthState(auth);
      if (!initialized) {
        setInitialized(true);
      }
    });
    return cancel;
  }, []);

  return initialized;
}
