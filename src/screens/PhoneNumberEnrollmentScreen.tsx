import React, { useContext } from 'react';

import { GoogleSignInButton } from '../components/common/GoogleSignInButton';
import { LogoForm } from '../components/common/LogoForm';
import { PhoneNumberEnrollmentForm } from '../components/phone_number_enrollment_screen/PhoneNumberEnrollmentForm';
import {
  useHandleReAuthenticationResult,
  useReAuthenticateWithGoogle,
} from '../controllers/hooks/common/authController';
import { AuthRepositoryContext } from '../repositories/authRepository';

export const PhoneNumberEnrollmentScreen: React.VFC = () => {
  const authRepository = useContext(AuthRepositoryContext);
  const reAuthenticateWithGoogle = useReAuthenticateWithGoogle(authRepository);
  const authenticated = useHandleReAuthenticationResult(authRepository);

  return authenticated ? (
    <PhoneNumberEnrollmentForm />
  ) : (
    <LogoForm title="電話番号を登録するには再度ログインが必要です">
      <GoogleSignInButton fullWidth onClick={reAuthenticateWithGoogle} />
    </LogoForm>
  );
};
