import { Button, ButtonProps, makeStyles } from '@material-ui/core';
import React from 'react';

import googleLogo from '../../../assets/logos/google_logo.svg';

const useStyles = makeStyles(() => ({
  button: {
    textTransform: 'none',
    backgroundColor: 'white',
    paddingLeft: '6px',
  },
  logo: {
    // disable default margin
    marginRight: '0px',
  },
}));

type GoogleSignInButtonProps = Omit<ButtonProps, 'variant' | 'startIcon'>;

export const GoogleSignInButton: React.VFC<GoogleSignInButtonProps> = (
  props: GoogleSignInButtonProps
) => {
  const classes = useStyles();

  return (
    <Button
      {...props}
      variant="outlined"
      startIcon={<img src={googleLogo} />}
      className={classes.button}
      classes={{
        startIcon: classes.logo,
      }}
    >
      Sign in with Google
    </Button>
  );
};
