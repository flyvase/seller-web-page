import React from 'react';
import { Box, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      flexGrow: 1,
    },
  };
});

export const Spacer: React.VFC = (props) => {
  const classes = useStyles();

  return <Box className={classes.root} />;
};
