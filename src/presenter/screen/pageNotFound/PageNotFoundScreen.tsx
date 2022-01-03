import { Box, styled, Typography } from '@mui/material';
import React from 'react';

const RootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 56px)',
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 80px)',
  },
}));

export const PageNotFoundScreen: React.VFC = () => {
  return (
    <RootBox>
      <Typography variant="h4">指定されたURLにページがありません</Typography>
    </RootBox>
  );
};
