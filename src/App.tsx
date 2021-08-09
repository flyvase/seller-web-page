import React, { useContext } from 'react';

import { useAuthObserver } from './controllers/hooks/common/authController';
import { AuthRepositoryContext } from './repositories/authRepository';
import { LoadingScreen } from './screens/LoadingScreen';
import { SignUpScreen } from './screens/SignUpScreen';

export const App: React.VFC = () => {
  const authRepository = useContext(AuthRepositoryContext);
  const initialized = useAuthObserver(authRepository);

  return initialized ? <SignUpScreen /> : <LoadingScreen />;
};
