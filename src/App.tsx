import { ThemeProvider } from '@material-ui/core';
import React from 'react';

import { SignUpScreen } from './screens/SignUpScreen';
import { theme } from './theme';

export const App: React.VFC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SignUpScreen />
    </ThemeProvider>
  );
};
