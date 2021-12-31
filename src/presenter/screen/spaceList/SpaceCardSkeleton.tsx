import { Box, Skeleton, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const ImgSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '328px',
  height: '164px',
  borderRadius: '8px',
  [theme.breakpoints.up('sm')]: {
    width: '432px',
    height: '228px',
  },
}));

const HeadlineSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(2),
  },
}));

export const SpaceCardSkeleton: React.VFC = () => {
  return (
    <Box>
      <ImgSkeleton variant="rectangular" />
      <HeadlineSpacer />
      <Typography variant="h5">
        <Skeleton />
      </Typography>
      <HeadlineSpacer />
      <Typography variant="subtitle1">
        <Skeleton />
      </Typography>
      <Typography variant="subtitle1">
        <Skeleton />
      </Typography>
    </Box>
  );
};
