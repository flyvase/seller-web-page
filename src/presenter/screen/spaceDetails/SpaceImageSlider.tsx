import { styled } from '@mui/material';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { SpaceImage } from '../../../domain/model/spaceImage';

type ImageSliderProps = {
  spaceImages: SpaceImage[];
};

const ImageSlider = styled(Swiper)(({ theme }) => ({
  width: '100%',
  aspectRatio: '1.3',
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: '2',
  },
}));

const Image = styled('img')(() => ({
  objectFit: 'cover',
  width: '100%',
  height: '100%',
}));

export const SpaceImageSlider: React.VFC<ImageSliderProps> = (
  props: ImageSliderProps
) => {
  return (
    <ImageSlider
      modules={[Pagination, Navigation]}
      navigation
      pagination={{ clickable: true }}
    >
      {props.spaceImages.map((i) => (
        <SwiperSlide key={i.id.value}>
          <Image src={i.imageUrl} />
        </SwiperSlide>
      ))}
    </ImageSlider>
  );
};
