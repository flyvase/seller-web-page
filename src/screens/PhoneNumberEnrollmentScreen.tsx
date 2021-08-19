import React from 'react';

import { GoogleSignInButton } from '../components/common/GoogleSignInButton';
import { LogoForm } from '../components/common/LogoForm';

export const PhoneNumberEnrollmentScreen: React.VFC = () => {
  return (
    <LogoForm title="電話番号を登録するには再度ログインが必要です">
      <GoogleSignInButton fullWidth />
    </LogoForm>
  );
};
