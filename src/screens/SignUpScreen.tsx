import { Box, makeStyles, Typography } from '@material-ui/core';
import React from 'react';

import horizontalLogo from '../assets/logos/horizontal.svg';
import { SignUpForm } from '../components/sign_up_screen/SignUpForm';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      padding: '0px 32px 24px 32px',
      maxWidth: 400,
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
  };
});

export const SignUpScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <img src={horizontalLogo} />

        <Typography className={classes.title} variant="h5" align="center">
          アカウントを作成
        </Typography>

        <SignUpForm />
      </Box>
    </Box>
  );
};
