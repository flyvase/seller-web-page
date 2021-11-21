import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import horizontalLogo from '../../assets/logos/horizontal.svg';

const Logo = styled('img')(() => ({
  height: '80px',
}));

export const LogoAppBar: React.VFC = () => {
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Toolbar>
        <Logo src={horizontalLogo} />
      </Toolbar>
    </AppBar>
  );
};
