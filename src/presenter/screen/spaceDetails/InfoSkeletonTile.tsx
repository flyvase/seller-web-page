import { Skeleton, Typography } from '@mui/material';
import React from 'react';

export const InfoSkeletonTile: React.VFC = () => {
  return (
    <Typography variant="h4">
      <Skeleton />
    </Typography>
  );
};
