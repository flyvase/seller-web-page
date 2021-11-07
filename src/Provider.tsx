import { ThemeProvider } from '@mui/material';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { authRepositoryContext } from './domain/repository/authRepository';
import { spaceRepositoryContext } from './domain/repository/spaceRepository';
import { AuthRepositoryImpl } from './infrastructure/repository/authRepositoryImpl';
import { SpaceRepositoryImpl } from './infrastructure/repository/spaceRepositoryImpl';
import { HttpClientImpl } from './infrastructure/http/core/httpClientImpl';
import { App } from './presenter/App';
import { theme } from './theme';

export const Provider: React.VFC = () => {
  const authRepositoryImpl = new AuthRepositoryImpl();
  const httpClientImpl = new HttpClientImpl();
  const spaceRepositoryImpl = new SpaceRepositoryImpl(httpClientImpl);

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
