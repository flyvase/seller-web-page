import { Box } from '@material-ui/core';
import React from 'react';

import { AuthenticationScreen } from './screens/AuthenticationScreen';

export const App: React.VFC = () => {
  return (
    <Box>
      <AuthenticationScreen />
    </Box>
  );
};
