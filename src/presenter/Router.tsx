import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { authRepositoryContext } from '../domain/repository/authRepository';
import { App } from './App';
import { RequireAuth } from './component/RequireAuth';
import { useInitializeAuth } from './controller/authController';
import { SpaceListScreen } from './screen/listSpace/SpaceListScreen';
import { LoadingScreen } from './screen/loading/LoadingScreen';
import { PasswordAuthenticationScreen } from './screen/passwordAuthentication/PasswordAuthenticationScreen';

export const Router: React.VFC = () => {
  const authRepository = useContext(authRepositoryContext);
  const initialized = useInitializeAuth(authRepository);

  return initialized ? (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route
            index
            element={
              <RequireAuth>
                <SpaceListScreen />
              </RequireAuth>
            }
          />
          <Route
            path="spaces"
            element={
              <RequireAuth>
                <SpaceListScreen />
              </RequireAuth>
            }
          />
          <Route path="auth">
            <Route index element={<PasswordAuthenticationScreen />} />
            <Route path="password" element={<PasswordAuthenticationScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  ) : (
    <LoadingScreen />
  );
};
