import { Box, Button, styled } from '@mui/material';
import React, { ReactElement } from 'react';

import leftArrow from '../../assets/left_arrow.svg';
import rightArrow from '../../assets/right_arrow.svg';
import { range } from '../../core/array';

type CarouselSliderProps = {
  width?: string;
  aspectRatio: {
    xs: string;
    sm: string;
  };
  items: ReactElement[];
};

type RootBoxProps = {
  width?: string;
  aspectRatio: {
    xs: string;
    sm: string;
  };
};

const RootBox = styled(Box, {
  shouldForwardProp: (prop) => prop != 'width' && prop != 'aspectRatio',
})<RootBoxProps>(({ theme, width = '100%', aspectRatio }) => ({
  width: width,
  aspectRatio: aspectRatio.xs,
  position: 'relative',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: aspectRatio.sm,
  },
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

type EllipseProps = {
  selected?: boolean;
};

const Ellipse = styled(Box, {
  shouldForwardProp: (prop) => prop != 'selected',
})<EllipseProps>(({ selected = false }) => ({
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

const ItemWrapper = styled(Box)(() => ({
  aspectRatio: 'inherit',
  scrollSnapAlign: 'start',
}));

export const CarouselSlider: React.VFC<CarouselSliderProps> = (
  props: CarouselSliderProps
) => {
  return (
    <RootBox width={props.width} aspectRatio={props.aspectRatio}>
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
        {[...range(0, props.items.length)].map((i) => (
          <EllipseWrapper key={i}>
            <Ellipse />
          </EllipseWrapper>
        ))}
      </IndicatorWrapper>
      <Carousel>
        {props.items.map((i, index) => (
          <ItemWrapper key={index}>{i}</ItemWrapper>
        ))}
      </Carousel>
    </RootBox>
  );
};
