import { Box, Typography, makeStyles, Grid } from '@material-ui/core';
import PersonIcon from '@material-ui/icons/Person';
import React from 'react';

const useStyles = makeStyles(() => {
  return {
    gender: {
      display: 'flex',
    },
  };
});

export const CustomerInformation: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4">顧客情報</Typography>
      <Grid container spacing={4}>
        <Grid item className={classes.gender}>
          <PersonIcon color="primary" fontSize="large" />
          <Typography variant="h5" display="block">
            20~30代
          </Typography>
        </Grid>
        <Grid item className={classes.gender}>
          <PersonIcon color="secondary" fontSize="large" />
          <Typography variant="h5" display="block">
            20~30代
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem mauris
        purus dolor sed adipiscing platea quis facilisis facilisis.
      </Typography>
    </Box>
  );
};
