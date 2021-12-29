import { GlobalStyles } from '@mui/material';
import React, { Fragment } from 'react';

const swiperStyleOverrides = (
  <GlobalStyles
    styles={{
      '.swiper-button-next': { color: 'white' },
      '.swiper-button-prev': { color: 'white' },
      '.swiper-pagination-bullet': { backgroundColor: 'white', opacity: '0.3' },
      '.swiper-pagination-bullet-active': { opacity: '1' },
    }}
  />
);

export const StyleOverrides: React.VFC = () => {
  return <Fragment>{swiperStyleOverrides}</Fragment>;
};
