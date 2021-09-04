import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';

import {
  AuthRepositoryContext,
  AuthRepositoryImpl,
} from './infrastructure/repository/authRepositoryImpl';
import { App } from './presenter/App';
import { theme } from './theme';

export const Provider: React.VFC = () => {
  const authRepositoryImpl = new AuthRepositoryImpl();
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <AuthRepositoryContext.Provider value={authRepositoryImpl}>
          <App />
        </AuthRepositoryContext.Provider>
      </ThemeProvider>
    </RecoilRoot>
  );
};
