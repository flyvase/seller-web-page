import { styled } from '@mui/material';
import React from 'react';

import { SpaceImage } from '../../../domain/model/spaceImage';

type SpaceImageSliderProps = {
  spaceImages: SpaceImage[];
};

const Image = styled('img')(({ theme }) => ({
  objectFit: 'cover',
  width: '100%',
  aspectRatio: '1.3',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: '2',
  },
}));

export const SpaceImageSlider: React.VFC<SpaceImageSliderProps> = (
  props: SpaceImageSliderProps
) => {
  return <Image src={props.spaceImages[0].imageUrl} />;
};
