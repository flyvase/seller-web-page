import { Box, Button, styled } from '@mui/material';
import React from 'react';

import { SpaceImage } from '../../../domain/model/spaceImage';
import leftArrow from '../../../assets/left_arrow.svg';
import rightArrow from '../../../assets/right_arrow.svg';

type ImageSliderProps = {
  spaceImages: SpaceImage[];
};

const RootBox = styled(Box)(({ theme }) => ({
  width: '100%',
  aspectRatio: '1.3',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: '2',
  },
  position: 'relative',
}));

const LeftArrowButtonWrapper = styled(Box)(() => ({
  position: 'absolute',
  height: '100%',
  left: 0,
  display: 'flex',
  alignItems: 'center',
}));

const RightArrowButtonWrapper = styled(Box)(() => ({
  position: 'absolute',
  height: '100%',
  right: 0,
  display: 'flex',
  alignItems: 'center',
}));

const ArrowButton = styled(Button)(() => ({
  // disable hover effect
  '&:hover': {
    background: 'none',
  },
}));

const ArrowImg = styled('img')(({ theme }) => ({
  height: '20px',
  [theme.breakpoints.up('sm')]: {
    height: '32px',
  },
}));

const IndicatorWrapper = styled(Box)(({ theme }) => ({
  position: 'absolute',
  bottom: 0,
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  paddingBottom: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingBottom: theme.spacing(3),
  },
}));

const EllipseWrapper = styled(Box)(() => ({
  paddingLeft: '4px',
  paddingRight: '4px',
}));

const Ellipse = styled(Box, {
  shouldForwardProp: (prop) => prop != 'selected',
})<{ selected?: boolean }>(({ selected = false }) => ({
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: selected ? 'white' : 'rgba(255, 255, 255, 0.3)',
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
      <LeftArrowButtonWrapper>
        <ArrowButton disableFocusRipple disableRipple disableTouchRipple>
          <ArrowImg src={leftArrow} />
        </ArrowButton>
      </LeftArrowButtonWrapper>
      <RightArrowButtonWrapper>
        <ArrowButton disableFocusRipple disableRipple disableTouchRipple>
          <ArrowImg src={rightArrow} />
        </ArrowButton>
      </RightArrowButtonWrapper>
      <IndicatorWrapper>
        {props.spaceImages.map((i) => (
          <EllipseWrapper key={i.id.value}>
            <Ellipse />
          </EllipseWrapper>
        ))}
      </IndicatorWrapper>
      <Carousel>
        {props.spaceImages.map((i) => (
          <Image src={i.imageUrl} key={i.id.value} />
        ))}
      </Carousel>
    </RootBox>
  );
};
