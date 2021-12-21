import { Box, styled, Typography } from '@mui/material';
import React from 'react';

type SpaceDisplayCardProps = {
  imageSrc: string;
  description: string;
};

const DisplayImage = styled('img')(() => ({
  width: '100%',
  aspectRatio: '1',
  objectFit: 'cover',
  borderRadius: '8px',
}));

const Spacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
}));

export const SpaceDisplayCard: React.VFC<SpaceDisplayCardProps> = (
  props: SpaceDisplayCardProps
) => {
  return (
    <Box>
      <DisplayImage src={props.imageSrc} />
      <Spacer />
      <Typography variant="h5">{props.description}</Typography>
    </Box>
  );
};
