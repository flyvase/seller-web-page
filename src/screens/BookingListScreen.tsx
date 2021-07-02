import { Box } from '@material-ui/core';
import React from 'react';

import { BookingCardList } from '../components/booking_list_screen/BookingCardList';

export const BookingListScreen: React.VFC = () => {
  return (
    <Box>
      <BookingCardList />
    </Box>
  );
};
