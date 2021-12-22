import { Box, styled } from '@mui/material';
import React from 'react';

import { SpaceImage } from '../../../domain/model/spaceImage';

type ImageSliderProps = {
  spaceImages: SpaceImage[];
};

const RootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  overflow: 'scroll',
  width: '100%',
  aspectRatio: '1.3',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: '2',
  },
}));

const Image = styled('img')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  aspectRatio: 'inherit',
}));

export const ImageSlider: React.VFC<ImageSliderProps> = (
  props: ImageSliderProps
) => {
  return (
    <RootBox>
      {props.spaceImages.map((i) => (
        <Image src={i.imageUrl} key={i.id.value} />
      ))}
    </RootBox>
  );
};
