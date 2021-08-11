import { Box, makeStyles, Typography } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect } from 'react';

import { GoogleSignInButton } from '../components/common/GoogleSignInButton';
import horizontalLogo from '../assets/logos/horizontal.svg';
import {
  useAuthResult,
  useGoogleSignIn,
} from '../controllers/hooks/common/authController';
import { AuthRepositoryContext } from '../repositories/authRepository';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    padding: '0px 32px 24px 32px',
    width: 400,
    [theme.breakpoints.up('sm')]: {
      borderWidth: 2,
      borderColor: theme.palette.divider,
      borderStyle: 'solid',
      borderRadius: 24,
    },
  },
  title: {
    paddingBottom: 16,
  },
}));

export const AuthenticationScreen: React.VFC = () => {
  const classes = useStyles();

  const authRepository = useContext(AuthRepositoryContext);
  const googleSignIn = useGoogleSignIn(authRepository);
  const authResult = useAuthResult(authRepository);

  const history = useHistory();

  useEffect(() => {
    const navigate = async () => {
      const signedIn = await authResult();
      if (signedIn) {
        history.push('/');
      }
    };
    navigate();
  }, []);

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <img src={horizontalLogo} />

        <Typography className={classes.title} variant="h5" align="center">
          サインイン、サインアップ
        </Typography>

        <GoogleSignInButton
          fullWidth
          onClick={async () => {
            await googleSignIn();
          }}
        />
      </Box>
    </Box>
  );
};
