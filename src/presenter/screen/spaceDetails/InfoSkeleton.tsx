import { Box, styled } from '@mui/material';
import React from 'react';

import { InfoSkeletonTile } from './InfoSkeletonTile';

const Spacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(2),
}));

export const InfoSkeleton: React.VFC = () => {
  return (
    <Box>
      <InfoSkeletonTile />
      <Spacer />
      <InfoSkeletonTile />
      <Spacer />
      <InfoSkeletonTile />
      <Spacer />
      <InfoSkeletonTile />
    </Box>
  );
};
