import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { App } from './App';
import { SpaceListScreen } from './screen/listSpace/SpaceListScreen';
import { PasswordAuthenticationScreen } from './screen/passwordAuthentication/PasswordAuthenticationScreen';

export const Router: React.VFC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<SpaceListScreen />} />
          <Route path="spaces" element={<SpaceListScreen />} />
          <Route path="auth">
            <Route index element={<PasswordAuthenticationScreen />} />
            <Route path="password" element={<PasswordAuthenticationScreen />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
