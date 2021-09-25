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

export const App: React.VFC = () => {
  const authRepository = useContext(authRepositoryContext);
  const initialized = useAuthObserver(authRepository);

  return initialized ? (
    <BrowserRouter>
      <Switch>
        <Route path="/authentication">
          <AuthenticationScreen />
        </Route>
        <GuardedRoute path="/sign_out" requireAuth={true}>
          <SignOutScreen />
        </GuardedRoute>
        <GuardedRoute path="/sign_up" requireAuth={true}>
          <SignUpScreen />
        </GuardedRoute>
        <GuardedRoute path="/" requireAuth={true} requireSignUp={true}>
          <PostSignUpScreen />
        </GuardedRoute>
      </Switch>
    </BrowserRouter>
  ) : (
    <LoadingScreen />
  );
};
