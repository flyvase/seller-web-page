import { ThemeProvider } from '@mui/material';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { authRepositoryContext } from './domain/repository/authRepository';
import { userRepositoryContext } from './domain/repository/userRepository';
import { spaceRepositoryContext } from './domain/repository/spaceRepository';
import { AuthRepositoryImpl } from './infrastructure/repository/authRepositoryImpl';
import { UserRepositoryImpl } from './infrastructure/repository/userRepositoryImpl';
import { SpaceRepositoryImpl } from './infrastructure/repository/spaceRepositoryImpl';
import { HttpClientImpl } from './infrastructure/http/core/httpClientImpl';
import { App } from './presenter/App';
import { theme } from './theme';

export const Provider: React.VFC = () => {
  const authRepositoryImpl = new AuthRepositoryImpl();
  const httpClientImpl = new HttpClientImpl();
  const userRepositoryImpl = new UserRepositoryImpl(httpClientImpl);
  const spaceRepositoryImpl = new SpaceRepositoryImpl(httpClientImpl);

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <authRepositoryContext.Provider value={authRepositoryImpl}>
          <userRepositoryContext.Provider value={userRepositoryImpl}>
            <spaceRepositoryContext.Provider value={spaceRepositoryImpl}>
              <App />
            </spaceRepositoryContext.Provider>
          </userRepositoryContext.Provider>
        </authRepositoryContext.Provider>
      </ThemeProvider>
    </RecoilRoot>
  );
};
