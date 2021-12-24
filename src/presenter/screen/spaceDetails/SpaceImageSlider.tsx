import { styled } from '@mui/material';
import React from 'react';

import { SpaceImage } from '../../../domain/model/spaceImage';
import { CarouselSlider } from '../../component/CarouselSlider';

type ImageSliderProps = {
  spaceImages: SpaceImage[];
};

const Image = styled('img')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}));

export const SpaceImageSlider: React.VFC<ImageSliderProps> = (
  props: ImageSliderProps
) => {
  return (
    <CarouselSlider
      width="100%"
      aspectRatio={{ xs: '1.3', sm: '2' }}
      items={props.spaceImages.map((i) => (
        <Image src={i.imageUrl} key={i.id.value} />
      ))}
    />
  );
};
