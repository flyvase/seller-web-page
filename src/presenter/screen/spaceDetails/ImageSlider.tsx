import { Box, styled } from '@mui/material';
import React from 'react';

import { SpaceImage } from '../../../domain/model/spaceImage';

type ImageSliderProps = {
  spaceImages: SpaceImage[];
};

const RootBox = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '1.3',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: '2',
  },
}));

const Carousel = styled(Box)(() => ({
  display: 'flex',
  overflow: 'scroll',
  scrollSnapType: 'x mandatory',
  aspectRatio: 'inherit',
  // disable scroll bars on multiple browsers
  msOverflowStyle: 'none',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
  scrollbarWidth: 'none',
}));

const Image = styled('img')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
  aspectRatio: 'inherit',
  scrollSnapAlign: 'start',
}));

export const ImageSlider: React.VFC<ImageSliderProps> = (
  props: ImageSliderProps
) => {
  return (
    <RootBox>
      <Carousel>
        {props.spaceImages.map((i) => (
          <Image src={i.imageUrl} key={i.id.value} />
        ))}
      </Carousel>
    </RootBox>
  );
};
