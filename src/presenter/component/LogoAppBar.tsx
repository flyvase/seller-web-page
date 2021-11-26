import { AppBar, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import horizontalLogo from '../../assets/horizontal_logo.svg';

const Logo = styled('img')(({ theme }) => ({
  height: '24px',
  [theme.breakpoints.up('sm')]: {
    height: '44px',
  },
}));

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  height: '56px',
  [theme.breakpoints.up('sm')]: {
    height: '80px',
  },
  justifyContent: 'center',
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(5),
  },
}));

export const LogoAppBar: React.VFC = () => {
  return (
    <StyledAppBar position="static" elevation={1} color="inherit">
      <StyledToolbar>
        <Logo src={horizontalLogo} />
      </StyledToolbar>
    </StyledAppBar>
  );
};
