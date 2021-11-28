import { useMutation } from 'react-query';

import { AuthRepository } from '../../../domain/repository/authRepository';
import { DisplayableError } from '../../../error/common';

type PasswordSignInInput = {
  email: string;
  password: string;
};

export function usePasswordSignIn(authRepository: AuthRepository) {
  return useMutation<void, DisplayableError, PasswordSignInInput>(
    (input: PasswordSignInInput) => {
      return authRepository.signInWithPassword(input.email, input.password);
    },
    { retry: false }
  );
}
