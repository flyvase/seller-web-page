import { Box, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { useGetFontSize } from '../../controller/themeController';

const ImgSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '328px',
  height: '164px',
  [theme.breakpoints.up('sm')]: {
    width: '432px',
    height: '228px',
  },
}));

const TextSkeleton = styled(Skeleton)(({ theme }) => ({
  width: '328px',
  [theme.breakpoints.up('sm')]: {
    width: '432px',
  },
}));

const HeadlineSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(2),
  },
}));

export const SpaceCardSkeleton: React.VFC = () => {
  const h5FontSize = useGetFontSize('h5');
  const subtitle1FontSize = useGetFontSize('subtitle1');

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
