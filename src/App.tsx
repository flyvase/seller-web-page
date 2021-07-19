import { Box } from '@material-ui/core';
import React from 'react';

import { TwoFactorAuthenticationScreen } from './screens/TwoFactorAuthenticationScreen';

export const App: React.VFC = () => {
  return (
    <Box>
      <TwoFactorAuthenticationScreen />
    </Box>
  );
};
