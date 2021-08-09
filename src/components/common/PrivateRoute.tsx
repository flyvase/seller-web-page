import { Redirect, Route, RouteProps } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

import { authState } from '../../controllers/state/common/authState';

type PrivateRouteProps = {
  children: ReactNode;
};

export const PrivateRoute: React.VFC<RouteProps & PrivateRouteProps> = ({
  children,
  ...rest
}: RouteProps & PrivateRouteProps) => {
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
