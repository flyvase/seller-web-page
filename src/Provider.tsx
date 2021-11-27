import { ThemeProvider } from '@mui/material';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { authRepositoryContext } from './domain/repository/authRepository';
import { spaceRepositoryContext } from './domain/repository/spaceRepository';
import { HttpClient } from './infrastructure/http/core/httpClient';
import { AuthRepositoryImpl } from './infrastructure/repository/authRepositoryImpl';
import { SpaceRepositoryImpl } from './infrastructure/repository/spaceRepositoryImpl';
import { Router } from './presenter/Router';
import { theme } from './theme';

export const Provider: React.VFC = () => {
  const httpClient = new HttpClient();
  const authRepositoryImpl = new AuthRepositoryImpl();
  const spaceRepositoryImpl = new SpaceRepositoryImpl({
    httpClient: httpClient,
    authRepository: authRepositoryImpl,
  });
  const queryClient = new QueryClient();

  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <authRepositoryContext.Provider value={authRepositoryImpl}>
          <spaceRepositoryContext.Provider value={spaceRepositoryImpl}>
            <QueryClientProvider client={queryClient}>
              <Router />
            </QueryClientProvider>
          </spaceRepositoryContext.Provider>
        </authRepositoryContext.Provider>
      </ThemeProvider>
    </RecoilRoot>
  );
};
