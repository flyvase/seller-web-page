import { Box, Skeleton, styled, Typography } from '@mui/material';
import React from 'react';

const Spacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(2),
  },
}));

const BoxSkeleton = styled(Skeleton)(() => ({
  width: '100%',
  height: 'initial',
  aspectRatio: '2',
}));

export const MapSkeleton: React.VFC = () => {
  return (
    <Box>
      <Typography variant="h4">
        <Skeleton />
      </Typography>
      <Spacer />
      <BoxSkeleton variant="rectangular" />
    </Box>
  );
};
