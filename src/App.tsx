import { Box } from '@material-ui/core';
import React from 'react';

import { SearchResultScreen } from './screens/SearchResultScreen';
import { Header } from './components/common/Header';

export const App: React.VFC = () => {
  return (
    <Box>
      <Header />
      <SearchResultScreen />
    </Box>
  );
};
