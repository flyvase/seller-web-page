import { Box } from '@material-ui/core';
import React from 'react';

import { BookingCard } from '../components/booking_list_screen/BookingCard';

export const BookingListScreen: React.VFC = () => {
  return (
    <Box>
      <BookingCard />
    </Box>
  );
};
