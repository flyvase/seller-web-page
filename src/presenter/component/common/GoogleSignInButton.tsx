import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import googleLogo from '../../../assets/logos/google_logo.svg';

const PREFIX = 'GoogleSignInButton';

const classes = {
  button: `${PREFIX}-button`,
  logo: `${PREFIX}-logo`,
};

const StyledButton = styled(Button)(() => ({
  [`&.${classes.button}`]: {
    textTransform: 'none',
    backgroundColor: 'white',
    paddingLeft: '6px',
  },

  [`&.${classes.logo}`]: {
    // disable default margin
    marginRight: '0px',
  },
}));

type GoogleSignInButtonProps = Omit<ButtonProps, 'variant' | 'startIcon'>;

export const GoogleSignInButton: React.VFC<GoogleSignInButtonProps> = (
  props: GoogleSignInButtonProps
) => {
  return (
    <StyledButton
      {...props}
      variant="outlined"
      color="inherit"
      startIcon={<img src={googleLogo} />}
      className={classes.button}
      classes={{
        startIcon: classes.logo,
      }}
    >
      Sign in with Google
    </StyledButton>
  );
};
