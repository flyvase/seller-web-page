import { Box } from '@material-ui/core';
import React from 'react';

import { CreateAccountScreen } from './screens/CreateAccountScreen';

export const App: React.VFC = () => {
  return (
    <Box>
      <CreateAccountScreen />
    </Box>
  );
};
