import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  LocationOn,
  CurrencyYen,
  PeopleAlt,
  AccountBox,
} from '@mui/icons-material';

import { Space } from '../../../domain/model/space';

type SpaceCardProps = {
  space: Space;
};

const RootBox = styled(Box)(({ theme }) => ({
  width: '328px',
  [theme.breakpoints.up('sm')]: {
    width: '432px',
  },
}));

const Photo = styled('img')(({ theme }) => ({
  borderRadius: '8px',
  width: '328px',
  height: '164px',
  objectFit: 'cover',
  [theme.breakpoints.up('sm')]: {
    width: '432px',
    height: '228px',
  },
}));

const HeadlineSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(2),
  },
}));

const PropertiesBox = styled(Box)(() => ({
  display: 'flex',
  flexWrap: 'wrap',
}));

const PropertyWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  paddingBottom: theme.spacing(1),
  paddingRight: theme.spacing(2),
}));

const responsiveIconSize = {
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  fontSize: '1.125rem',
};

export const SpaceCard: React.VFC<SpaceCardProps> = (props: SpaceCardProps) => {
  return (
    <RootBox>
      <Photo src={props.space.images[0].imageUrl} />
      <HeadlineSpacer />
      <Typography variant="h5" fontWeight="bold">
        {props.space.headline}
      </Typography>
      <HeadlineSpacer />
      <PropertiesBox>
        <PropertyWrapper>
          <LocationOn sx={responsiveIconSize} />
          <Typography variant="subtitle1">
            {props.space.access ?? '不明'}
          </Typography>
        </PropertyWrapper>
        <PropertyWrapper>
          <CurrencyYen sx={responsiveIconSize} />
          <Typography variant="subtitle1">
            {props.space.price.format()}
          </Typography>
        </PropertyWrapper>
        <PropertyWrapper>
          <PeopleAlt sx={responsiveIconSize} />
          <Typography variant="subtitle1">
            {props.space.numberOfVisitors?.format() ?? '不明'}
          </Typography>
        </PropertyWrapper>
        <PropertyWrapper>
          <AccountBox sx={responsiveIconSize} />
          <Typography variant="subtitle1">
            {props.space.customerSegment?.format() ?? '不明'}
          </Typography>
        </PropertyWrapper>
      </PropertiesBox>
    </RootBox>
  );
};
