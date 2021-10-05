import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import verticalLogo from '../../assets/logos/vertical.svg';

const RootBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
}));

const Logo = styled('img')(() => ({
  width: '400px',
}));

export const LoadingScreen: React.VFC = () => {
  return (
    <RootBox>
      <Logo src={verticalLogo} />
    </RootBox>
  );
};
