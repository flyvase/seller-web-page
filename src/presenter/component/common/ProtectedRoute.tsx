import { Redirect, Route, RouteProps } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

import { authState } from '../../../controller/common/authController';

type ProtectedRouteProps = {
  children: ReactNode;
};

export const ProtectedRoute: React.VFC<RouteProps & ProtectedRouteProps> = ({
  children,
  ...rest
}: RouteProps & ProtectedRouteProps) => {
  const auth = useRecoilValue(authState);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        auth == null ? (
          <Redirect
            to={{ pathname: 'authentication', state: { from: location } }}
          />
        ) : (
          children
        )
      }
    />
  );
};
