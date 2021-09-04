import { Button } from '@material-ui/core';
import React from 'react';
import { useContext } from 'react';

import { LogoForm } from '../component/common/LogoForm';
import { useSignOut } from '../../controller/common/authController';
import { AuthRepositoryContext } from '../../infrastructure/repository/authRepositoryImpl';

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
