import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

import { AuthInterface } from '../../../interfaces/authInterface';
import { authState } from '../../state/common/authState';

export function useGoogleSignIn(
  authRepository: AuthInterface
): () => Promise<void> {
  return authRepository.googleSignIn;
}

export function useAuthResult(
  authRepository: AuthInterface
): () => Promise<boolean> {
  return authRepository.authResult;
}

export function useReAuthenticateWithGoogle(
  authRepository: AuthInterface
): () => Promise<void> {
  return authRepository.reAuthenticateWithGoogle;
}

export function useHandleReAuthenticationResult(
  authRepository: AuthInterface
): boolean {
  const reAuthenticationResult = authRepository.authResult;
  const [authenticated, setAuthenticated] = useState(false);
  useEffect(() => {
    const handleReAuthenticationResult = async () => {
      const result = await reAuthenticationResult();
      setAuthenticated(result);
    };
    handleReAuthenticationResult();
  }, []);

  return authenticated;
}

export function useEnrollPhoneNumber(
  authRepository: AuthInterface
): (phoneNumber: string) => Promise<string> {
  return authRepository.enrollPhoneNumber;
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

export function useSignOut(authRepository: AuthInterface): () => Promise<void> {
  return authRepository.signOut;
}
