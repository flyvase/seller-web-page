import { Box, Grid, makeStyles, Typography } from '@material-ui/core';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import React from 'react';

const useStyles = makeStyles(() => {
  return {
    item: {
      display: 'flex',
    },
  };
});

const items = [1, 2, 3, 4];

export const Facilities: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box>
      <Typography variant="h4">設備</Typography>
      <Typography variant="h6">服</Typography>
      <Grid container spacing={6}>
        {items.map((item) => (
          <Grid item key={item} xs={6} className={classes.item}>
            <CheckBoxIcon />
            <Typography display="block">ハンガー</Typography>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
