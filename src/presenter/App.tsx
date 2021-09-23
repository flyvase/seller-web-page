import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { PrivateRoute } from './component/common/PrivateRoute';
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
        <PrivateRoute path="/sign_out">
          <SignOutScreen />
        </PrivateRoute>
        <PrivateRoute path="/sign_up">
          <SignUpScreen />
        </PrivateRoute>
        <PrivateRoute path="/">
          <PostSignUpScreen />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  ) : (
    <LoadingScreen />
  );
};
