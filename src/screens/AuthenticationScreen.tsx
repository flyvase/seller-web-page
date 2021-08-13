import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

import { GoogleSignInButton } from '../components/common/GoogleSignInButton';
import {
  useAuthResult,
  useGoogleSignIn,
} from '../controllers/hooks/common/authController';
import { AuthRepositoryContext } from '../repositories/authRepository';
import { OnBoardingForm } from '../components/common/OnBoardingForm';

export const AuthenticationScreen: React.VFC = () => {
  const authRepository = useContext(AuthRepositoryContext);
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
    <OnBoardingForm title="サインイン、サインアップ">
      <GoogleSignInButton
        fullWidth
        onClick={async () => {
          await googleSignIn();
        }}
      />
    </OnBoardingForm>
  );
};
