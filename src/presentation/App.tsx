import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { GuardedRoute } from './components/GuardedRoute';
import { useAuthObserver } from './controllers/authController';
import { LoadingScreen } from './screens/loading/LoadingScreen';
import { SignOutScreen } from './screens/signOut/SignOutScreen';
import { authRepositoryContext } from '../domain/repository/authRepository';
import { PostSignUpScreen } from './screens/postSignUp/PostSignUpScreen';
import { PasswordAuthenticationScreen } from './screens/passwordAuthentication/PasswordAuthenticationScreen';

export const App: React.VFC = () => {
  const authRepository = useContext(authRepositoryContext);
  const initialized = useAuthObserver(authRepository);

  return initialized ? (
    <BrowserRouter>
      <Switch>
        <Route path="/password_authentication">
          <PasswordAuthenticationScreen />
        </Route>
        <GuardedRoute path="/sign_out" requireAuth>
          <SignOutScreen />
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
