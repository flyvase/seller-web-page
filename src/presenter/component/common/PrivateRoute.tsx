import { Redirect, Route, RouteProps } from 'react-router-dom';
import React, { ReactNode } from 'react';
import { useRecoilValue } from 'recoil';

import { authState } from '../../../controller/common/authController';

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
      render={({ location }) => {
          if (auth == null) return (
            <Redirect
              to={{ pathname: 'authentication', state: { from: location } }}
            />
          )
          else if (auth.id == null) return (
            <Redirect
              to={{ pathname: 'sign_up', state: { from: location } }}
            />
          )
          else return (
            children
          )
        }
      }
    />
  );
};
