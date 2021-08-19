import { Button } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';

import { LogoForm } from '../components/common/LogoForm';
import { useSignOut } from '../controllers/hooks/common/authController';
import { AuthRepositoryContext } from '../repositories/authRepository';

export const SignOutScreen: React.VFC = () => {
  const authRepository = useContext(AuthRepositoryContext);
  const signOut = useSignOut(authRepository);

  return (
    <LogoForm title="サインアウト">
      <Button fullWidth variant="contained" color="primary" onClick={signOut}>
        サインアウト
      </Button>
    </LogoForm>
  );
};
