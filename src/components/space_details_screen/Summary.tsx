import { Box, makeStyles, Typography, Grid } from '@material-ui/core';
import React from 'react';

import { BookingRequest } from './BookingRequest';

const useStyles = makeStyles(() => {
  return {
    root: {
      paddingTop: 64,
      marginTop: 64,
      marginRight: 200,
      marginBottom: 32,
      marginLeft: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flexGrow: 1,
    },
    img: {
      maxWidth: '1040px',
      maxHeight: '324px',
      borderRadius: '24px',
    },
  };
});

export const Summary: React.VFC = () => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Box className={classes.root}>
        <img
          className={classes.img}
          src="https://cdn.vuetifyjs.com/images/cards/road.jpg"
          alt=""
        />
        <Typography variant="subtitle1">受入可能なカテゴリ</Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Box>
              <Typography variant="body1">服</Typography>
              <Typography variant="body1">小物</Typography>
              <Typography variant="body1">雑貨</Typography>
            </Box>
          </Grid>
          <Grid item xs={6}>
            <BookingRequest />
          </Grid>
        </Grid>
        <Typography variant="body2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit aliquet
          tristique nulla tellus dictumst. Sed vulputate cursus leo, cursus
          nullam ptulvinar. Luctus facilisis felis, massa cursus ipsum ipsum
          sit.
        </Typography>
      </Box>
    </React.Fragment>
  );
};
