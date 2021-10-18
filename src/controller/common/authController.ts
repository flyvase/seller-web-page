import { useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { atom } from 'recoil';

import { AuthRepository } from '../../domain/repository/authRepository';
import { AuthEntity } from '../../domain/entity/authEntity';
import { AuthError } from '../../core/error/authErrors';

export const authState = atom<AuthEntity | null>({
  key: 'authState',
  default: null,
});

export function useGoogleSignIn(
  authRepository: AuthRepository
): () => Promise<void> {
  return authRepository.googleSignIn;
}

export function usePasswordSignIn(
  authRepository: AuthRepository
): (email: string, password: string) => Promise<AuthError | null> {
  return authRepository.passwordSignIn;
}

export function useAuthResult(
  authRepository: AuthRepository
): () => Promise<boolean> {
  return authRepository.authResult;
}

export function useAuthObserver(authRepository: AuthRepository): boolean {
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

export function useSignOut(
  authRepository: AuthRepository
): () => Promise<void> {
  return authRepository.signOut;
}
