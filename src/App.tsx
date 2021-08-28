import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './components/common/PrivateRoute';
import { useAuthObserver } from './controllers/hooks/common/authController';
import { AuthRepositoryContext } from './repositories/authRepository';
import { AuthenticationScreen } from './screens/AuthenticationScreen';
import { LoadingScreen } from './screens/LoadingScreen';
import { SignOutScreen } from './screens/SignOutScreen';
import { SignUpScreen } from './screens/SignUpScreen';

export const App: React.VFC = () => {
  const authRepository = useContext(AuthRepositoryContext);
  const initialized = useAuthObserver(authRepository);

  return initialized ? (
    <BrowserRouter>
      <Switch>
        <Route path="/authentication">
          <AuthenticationScreen />
        </Route>
        <PrivateRoute path="/sign_out">
          <SignOutScreen />
        </PrivateRoute>
        <PrivateRoute path="/">
          <SignUpScreen />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  ) : (
    <LoadingScreen />
  );
};
