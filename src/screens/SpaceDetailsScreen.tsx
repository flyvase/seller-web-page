import { Box, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

import { Summary } from '../components/space_details_screen/Summary';
import { ExhibitionLocation } from '../components/space_details_screen/ExhibitionLocation';
import { Facilities } from '../components/space_details_screen/Facilities';

const useStyles = makeStyles(() => {
  return {
    root: {
      padding: 200,
    },
  };
});

export const SpaceDetailsScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Grid container spacing={3} className={classes.root}>
      <Grid item xs={12}>
        <Summary />
      </Grid>
      <Grid item xs={12}>
        <ExhibitionLocation />
      </Grid>
      <Grid item xs={12}>
        <Facilities />
      </Grid>
    </Grid>
  );
};
