import { Box } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router';

import { Body } from './component/Body';
import { LogoAppBar } from './component/LogoAppBar';

export const App: React.VFC = () => {
  return (
    <Box>
      <LogoAppBar />
      <Body>
        <Outlet />
      </Body>
    </Box>
  );
};
