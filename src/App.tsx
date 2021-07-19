import { Box } from '@material-ui/core';
import React from 'react';

import { CreateBrandScreen } from './screens/CreateBrandScreen';

export const App: React.VFC = () => {
  return (
    <Box>
      <CreateBrandScreen />
    </Box>
  );
};
