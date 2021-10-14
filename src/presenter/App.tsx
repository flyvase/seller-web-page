import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GuardedRoute } from './component/common/GuardedRoute';
import { useAuthObserver } from '../controller/common/authController';
import { AuthenticationScreen } from './screen/AuthenticationScreen';
import { LoadingScreen } from './screen/LoadingScreen';
import { SignOutScreen } from './screen/SignOutScreen';
import { SignUpScreen } from './screen/SignUpScreen';
import { authRepositoryContext } from '../domain/repository/authRepository';
import { PostSignUpScreen } from './screen/PostSignUpScreen';
import { PasswordAuthenticationScreen } from './screen/PasswordAuthenticationScreen';

export const App: React.VFC = () => {
  const authRepository = useContext(authRepositoryContext);
  const initialized = useAuthObserver(authRepository);

  return initialized ? (
    <BrowserRouter>
      <Switch>
        <Route path="/authentication">
          <AuthenticationScreen />
        </Route>
        <Route path="/password_authentication">
          <PasswordAuthenticationScreen />
        </Route>
        <GuardedRoute path="/sign_out" requireAuth>
          <SignOutScreen />
        </GuardedRoute>
        <GuardedRoute path="/sign_up" requireAuth>
          <SignUpScreen />
        </GuardedRoute>
        <GuardedRoute path="/" requireAuth>
          <PostSignUpScreen />
        </GuardedRoute>
      </Switch>
    </BrowserRouter>
  ) : (
    <LoadingScreen />
  );
};
