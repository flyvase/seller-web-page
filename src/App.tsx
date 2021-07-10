import { Box } from '@material-ui/core';
import React from 'react';

import { Header } from './components/common/Header';
import { BookingListScreen } from './screens/BookingListScreen';

export const App: React.VFC = () => {
  return (
    <Box>
      <Header />
      <BookingListScreen />
    </Box>
  );
};
