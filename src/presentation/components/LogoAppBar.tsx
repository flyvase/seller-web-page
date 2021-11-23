import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import flyvaseLogo from '../../assets/logos/flyvase_logo.svg';

const Logo = styled('img')(() => ({
  height: '44px',
  paddingLeft: '28px',
}));

const LogoBar = styled(Toolbar)(() => ({
  paddingTop: '8px',
  paddingBottom: '8px',
}));

const RootAppBar = styled(AppBar)(() => ({
  position: 'static',
  backgroundColor: '#FFFFFF',
}));

export const LogoAppBar: React.VFC = () => {
  return (
    <RootAppBar elevation={1}>
      <LogoBar>
        <Logo src={flyvaseLogo} />
      </LogoBar>
    </RootAppBar>
  );
};
