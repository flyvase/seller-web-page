import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { authRepositoryContext } from './domain/repository/authRepository';
import { AuthRepositoryImpl } from './infrastructure/repository/authRepositoryImpl';
import { App } from './presenter/App';
import { theme } from './theme';

export const Provider: React.VFC = () => {
  const authRepositoryImpl = new AuthRepositoryImpl();
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <authRepositoryContext.Provider value={authRepositoryImpl}>
          <App />
        </authRepositoryContext.Provider>
      </ThemeProvider>
    </RecoilRoot>
  );
};
