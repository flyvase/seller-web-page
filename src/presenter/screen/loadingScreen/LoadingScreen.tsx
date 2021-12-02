import { Box, styled } from '@mui/system';
import React from 'react';

import horizontalLogo from '../../../assets/horizontal_logo.svg';

const RootBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}));

const Logo = styled('img')(({ theme }) => ({
  width: '200px',
  [theme.breakpoints.up('sm')]: {
    width: '400px',
  },
}));

export const LoadingScreen: React.VFC = () => {
  return (
    <RootBox>
      <Logo src={horizontalLogo} />
    </RootBox>
  );
};
