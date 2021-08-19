import React, { useContext } from 'react';

import { GoogleSignInButton } from '../components/common/GoogleSignInButton';
import { LogoForm } from '../components/common/LogoForm';
import {
  useHandleReAuthenticationResult,
  useReAuthenticateWithGoogle,
} from '../controllers/hooks/common/authController';
import { AuthRepositoryContext } from '../repositories/authRepository';

export const PhoneNumberEnrollmentScreen: React.VFC = () => {
  const authRepository = useContext(AuthRepositoryContext);
  const reAuthenticateWithGoogle = useReAuthenticateWithGoogle(authRepository);
  useHandleReAuthenticationResult(authRepository);

  return (
    <LogoForm title="電話番号を登録するには再度ログインが必要です">
      <GoogleSignInButton fullWidth onClick={reAuthenticateWithGoogle} />
    </LogoForm>
  );
};
