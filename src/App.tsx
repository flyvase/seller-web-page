import { Box } from '@material-ui/core';
import React from 'react';

import { Header } from './components/common/Header';
import { SpaceDetailsScreen } from './screens/SpaceDetailsScreen';

export const App: React.VFC = () => {
  return (
    <Box>
      <Header />
      <SpaceDetailsScreen />
    </Box>
  );
};
