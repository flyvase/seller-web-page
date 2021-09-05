import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

import { GoogleSignInButton } from '../component/common/GoogleSignInButton';
import {
  useAuthResult,
  useGoogleSignIn,
} from '../../controller/common/authController';
import { LogoForm } from '../component/common/LogoForm';
import { authRepositoryContext } from '../../domain/repository/authRepository';

export const AuthenticationScreen: React.VFC = () => {
  const authRepository = useContext(authRepositoryContext);
  const googleSignIn = useGoogleSignIn(authRepository);
  const authResult = useAuthResult(authRepository);

  const history = useHistory();

  useEffect(() => {
    const navigate = async () => {
      const signedIn = await authResult();
      if (signedIn) {
        history.push('/');
      }
    };
    navigate();
  }, []);

  return (
    <LogoForm title="サインイン、サインアップ">
      <GoogleSignInButton
        fullWidth
        onClick={async () => {
          await googleSignIn();
        }}
      />
    </LogoForm>
  );
};
