import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

import verticalLogo from '../assets/logos/vertical.svg';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  logo: {
    width: '400px',
  },
}));

export const LoadingScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={verticalLogo} className={classes.logo} />
    </Box>
  );
};
