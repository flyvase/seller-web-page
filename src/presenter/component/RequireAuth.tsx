import React, { ReactElement } from 'react';
import { Navigate, useLocation } from 'react-router';

import { useIsSignedInState } from '../controller/authController';

type RequireAuthProps = {
  children: ReactElement;
};

export const RequireAuth: React.VFC<RequireAuthProps> = (
  props: RequireAuthProps
) => {
  const isSignedIn = useIsSignedInState();
  const location = useLocation();

  return isSignedIn ? (
    props.children
  ) : (
    <Navigate to="/auth/password" state={{ from: location }} />
  );
};
