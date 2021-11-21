import { Divider, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import flyvaseLogo from '../../assets/logos/flyvase_logo.svg';

const Logo = styled('img')(() => ({
  height: '44px',
  paddingLeft: '52px',
}));

const BarBox = styled(Box)(() => ({
  height: '80px',
  display: 'flex',
  alignItems: 'center',
}));

export const LogoAppBar: React.VFC = () => {
  return (
    <div>
      <BarBox>
        <Logo src={flyvaseLogo} />
      </BarBox>
      <Divider />
    </div>
  );
};
