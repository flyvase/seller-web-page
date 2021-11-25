import { ThemeProvider } from '@mui/material';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { authRepositoryContext } from './domain/repository/authRepository';
import { spaceRepositoryContext } from './domain/repository/spaceRepository';
import { HttpClient } from './infrastructure/http/core/httpClient';
import { AuthRepositoryImpl } from './infrastructure/repository/authRepositoryImpl';
import { SpaceRepositoryImpl } from './infrastructure/repository/spaceRepositoryImpl';
import { App } from './presenter/App';
import { theme } from './theme';

export const Provider: React.VFC = () => {
  const httpClient = new HttpClient();
  const authRepositoryImpl = new AuthRepositoryImpl();
  const spaceRepositoryImpl = new SpaceRepositoryImpl({
    httpClient: httpClient,
    authRepository: authRepositoryImpl,
  });

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <authRepositoryContext.Provider value={authRepositoryImpl}>
          <spaceRepositoryContext.Provider value={spaceRepositoryImpl}>
            <App />
          </spaceRepositoryContext.Provider>
        </authRepositoryContext.Provider>
      </ThemeProvider>
    </RecoilRoot>
  );
};
