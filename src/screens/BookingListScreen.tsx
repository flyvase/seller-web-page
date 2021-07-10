import { Box, makeStyles } from '@material-ui/core';
import React from 'react';

import { BookingCardList } from '../components/booking_list_screen/BookingCardList';

const useStyles = makeStyles(() => {
  return {
    root: {
      paddingTop: 64,
      paddingRight: 80,
      paddingBottom: 32,
      paddingLeft: 80,
    },
  };
});

export const BookingListScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <BookingCardList />
    </Box>
  );
};
