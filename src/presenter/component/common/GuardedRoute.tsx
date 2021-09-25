import { Redirect, Route, RouteProps } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

import { authState } from '../../../controller/common/authController';

type GuardedRouteProps = {
  children: ReactNode;
  requireAuth?: boolean;
  requireSignUp?: boolean;
};

export const GuardedRoute: React.VFC<RouteProps & GuardedRouteProps> = ({
  children,
  requireAuth = false,
  requireSignUp = false,
  ...rest
}: RouteProps & GuardedRouteProps) => {
  const auth = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      render={({ location }) => {
          if (requireAuth) {
            if (auth == null) return (
              <Redirect
                to={{ pathname: 'authentication', state: { from: location } }}
              />
            )
          }
          if (requireSignUp) {
            if (auth != null && !auth.id) return (
              <Redirect
                to={{ pathname: 'sign_up', state: { from: location } }}
              />
            )
          }
          return (
            children
          )
        }
      }
    />
  );
};
