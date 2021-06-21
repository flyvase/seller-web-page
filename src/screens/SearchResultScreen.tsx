import { Grid, makeStyles, Box } from '@material-ui/core';
import React from 'react';

import { SpaceList } from '../components/search_result_screen/SpaceList';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '100vh',
      paddingTop: 64,
    },
  };
});

export const SearchResultScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <Grid item md={5}>
        <Box p={2}>
          <SpaceList />
        </Box>
      </Grid>
      <Grid item md={7}>
        map
      </Grid>
    </Grid>
  );
};
