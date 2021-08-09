import React, { useContext } from 'react';

import { useAuthObserver } from './controllers/hooks/common/authController';
import { AuthRepositoryContext } from './repositories/authRepository';
import { SignUpScreen } from './screens/SignUpScreen';

export const App: React.VFC = () => {
  const authRepository = useContext(AuthRepositoryContext);
  useAuthObserver(authRepository);

  return <SignUpScreen />;
};
