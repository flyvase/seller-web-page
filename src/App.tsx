import { Box } from '@material-ui/core';
import React from 'react';

import { Header } from './components/common/Header';
import { BookingListScreen } from './screens/BookingListScreen';
import { Spacer } from './components/common/Spacer';

export const App: React.VFC = () => {
  return (
    <Box>
      <Header />
      {/* <SearchResultScreen /> */}
      <Spacer />
      <BookingListScreen />
    </Box>
  );
};
