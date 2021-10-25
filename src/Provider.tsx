import { ThemeProvider } from '@mui/material';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { authRepositoryContext } from './domain/repository/authRepository';
import { userRepositoryContext } from './domain/repository/userRepository';
import { AuthRepositoryImpl } from './infrastructure/repository/authRepositoryImpl';
import { UserRepositoryImpl } from './infrastructure/repository/userRepositoryImpl';
import { HttpClientImpl } from './infrastructure/http/core/httpClientImpl';
import { App } from './presenter/App';
import { theme } from './theme';

export const Provider: React.VFC = () => {
  const authRepositoryImpl = new AuthRepositoryImpl();
  const httpClientImpl = new HttpClientImpl();
  const userRepositoryImpl = new UserRepositoryImpl(httpClientImpl);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <authRepositoryContext.Provider value={authRepositoryImpl}>
          <userRepositoryContext.Provider value={userRepositoryImpl}>
            <App />
          </userRepositoryContext.Provider>
        </authRepositoryContext.Provider>
      </ThemeProvider>
    </RecoilRoot>
  );
};
