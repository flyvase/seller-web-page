import { Box, Skeleton, styled, Typography } from '@mui/material';
import React from 'react';

const ImageSkeleton = styled(Skeleton)(() => ({
  width: '100%',
  height: 'initial',
  aspectRatio: '1',
  borderRadius: '8px',
}));

const Spacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
}));

export const DisplayCardSkeleton: React.VFC = () => {
  return (
    <Box>
      <ImageSkeleton variant="rectangular" />
      <Spacer />
      <Typography variant="h5">
        <Skeleton />
      </Typography>
    </Box>
  );
};
