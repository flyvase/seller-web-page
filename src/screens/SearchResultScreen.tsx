import { Grid, makeStyles, Box } from '@material-ui/core';
import React from 'react';

import { SpaceList } from '../components/search_result_screen/SpaceList';
import { SpaceMap } from '../components/search_result_screen/SpaceMap';

const useStyles = makeStyles((theme) => {
  return {
    list: {
      height: '100vh',
      paddingTop: 64,
      overflowY: 'scroll',
    },
    map: {
      height: '100vh',
      paddingTop: 64,
    },
  };
});

export const SearchResultScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item md={5} className={classes.list}>
        <Box px={2} pt={2}>
          <SpaceList />
        </Box>
      </Grid>
      <Grid item md={7} className={classes.map}>
        <SpaceMap />
      </Grid>
    </Grid>
  );
};
