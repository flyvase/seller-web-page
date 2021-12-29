import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';

import { Body } from './component/Body';
import { LogoAppBar } from './component/LogoAppBar';
import { StyleOverrides } from './StyleOverrides';

export const App: React.VFC = () => {
  return (
    <Box>
      <StyleOverrides />
      <LogoAppBar />
      <Body>
        <Outlet />
      </Body>
    </Box>
  );
};
