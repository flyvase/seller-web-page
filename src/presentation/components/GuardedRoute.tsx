import { Redirect, Route, RouteProps } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

import { authState } from '../controllers/authController';

type GuardedRouteProps = {
  children: ReactNode;
  requireAuth?: boolean;
};

export const GuardedRoute: React.VFC<RouteProps & GuardedRouteProps> = ({
  children,
  requireAuth = false,
  ...rest
}: RouteProps & GuardedRouteProps) => {
  const auth = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      render={({ location }) => {
        if (requireAuth) {
          if (auth == null)
            return (
              <Redirect
                to={{
                  pathname: 'password_authentication',
                  state: { from: location },
                }}
              />
            );
        }
        return children;
      }}
    />
  );
};
