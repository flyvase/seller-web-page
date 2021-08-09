import { ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';
import React from 'react';

import { SignUpScreen } from './screens/SignUpScreen';
import { theme } from './theme';
import {
  AuthRepository,
  AuthRepositoryContext,
} from './repositories/authRepository';

export const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <AuthRepositoryContext.Provider value={new AuthRepository()}>
        <ThemeProvider theme={theme}>
          <SignUpScreen />
        </ThemeProvider>
      </AuthRepositoryContext.Provider>
    </RecoilRoot>
  );
};
