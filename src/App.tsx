import { ThemeProvider } from '@material-ui/core';
import { RecoilRoot } from 'recoil';
import React from 'react';

import { SignUpScreen } from './screens/SignUpScreen';
import { theme } from './theme';

export const App: React.VFC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <SignUpScreen />
      </ThemeProvider>
    </RecoilRoot>
  );
};
