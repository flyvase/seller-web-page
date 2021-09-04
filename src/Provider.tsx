import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { App } from './presenter/App';
import { theme } from './theme';

export const Provider: React.VFC = () => {
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </RecoilRoot>
  );
};
