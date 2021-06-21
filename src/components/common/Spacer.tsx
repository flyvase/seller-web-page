import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => {
  return {
    root: {
      flexGrow: 1,
    },
  };
});

export const Spacer: React.VFC = () => {
  const classes = useStyles();

  return <Box className={classes.root} />;
};
