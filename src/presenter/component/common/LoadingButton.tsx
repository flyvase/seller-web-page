import { Button, ButtonProps, CircularProgress } from '@material-ui/core';
import React from 'react';

type LoadingButtonProps = {
  loading?: boolean;
};

export const LoadingButton: React.VFC<LoadingButtonProps & ButtonProps> = ({
  loading = false,
  children,
  disabled = loading,
  ...rest
}: LoadingButtonProps & ButtonProps) => {
  return (
    <Button {...rest} disabled={disabled}>
      {loading ? <CircularProgress color="inherit" size={16} /> : children}
    </Button>
  );
};
