import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { AuthInterface } from '../../../interfaces/authInterface';
import { authState } from '../../state/common/authState';

export function useGoogleSignIn(
  authRepository: AuthInterface
): () => Promise<void> {
  return authRepository.googleSignIn;
}

export function useAuthObserver(authRepository: AuthInterface): void {
  const setAuthState = useSetRecoilState(authState);
  useEffect(() => {
    const cancel = authRepository.authObserver((auth) => {
      setAuthState(auth);
    });
    return cancel;
  }, []);
}
