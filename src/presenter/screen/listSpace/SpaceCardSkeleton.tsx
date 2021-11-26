import { Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { useFontSize } from '../../hook/sizeQuery';

const ImgSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '328px',
  height: '164px',
  [theme.breakpoints.up('sm')]: {
    width: '456px',
    height: '228px',
  },
}));

const TextSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '328px',
  [theme.breakpoints.up('sm')]: {
    width: '456px',
  },
}));

const HeadlineSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(2),
  },
}));

export const SpaceCardSkeleton: React.VFC = () => {
  const h5FontSize = useFontSize('h5');
  const subtitle1FontSize = useFontSize('subtitle1');

  return (
    <Box>
      <ImgSkeleton variant="rectangular" />
      <HeadlineSpacer />
      <TextSkeleton variant="text" height={h5FontSize} />
      <HeadlineSpacer />
      <TextSkeleton height={subtitle1FontSize} />
      <TextSkeleton height={subtitle1FontSize} />
    </Box>
  );
};
