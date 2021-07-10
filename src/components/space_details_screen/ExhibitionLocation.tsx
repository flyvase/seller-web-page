import { Box, Typography, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => {
  return {
    paper: {
      height: 200,
      width: 200,
      borderRadius: 50,
    },
    img: {
      maxHeight: 200,
      maxWidth: 200,
    },
  };
});

export const ExhibitionLocation: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4">配置場所</Typography>
      <Grid container spacing={4}>
        <Grid item xs>
          <img
            className={classes.img}
            src="https://source.unsplash.com/random"
          />
        </Grid>
        <Grid item xs>
          <img
            className={classes.img}
            src="https://source.unsplash.com/random"
          />
        </Grid>
        <Grid item xs>
          <img
            className={classes.img}
            src="https://source.unsplash.com/random"
          />
        </Grid>
      </Grid>
    </Box>
  );
};
