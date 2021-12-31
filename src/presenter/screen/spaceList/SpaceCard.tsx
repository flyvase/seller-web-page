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
import { StyleRemovedLink } from '../../component/StyleRemovedLink';

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

const LocationOnIcon = styled(LocationOn)(({ theme }) => ({
  fontSize: '1.125rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
}));

const CurrencyYenIcon = styled(CurrencyYen)(({ theme }) => ({
  fontSize: '1.125rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
}));

const PeopleAltIcon = styled(PeopleAlt)(({ theme }) => ({
  fontSize: '1.125rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
}));

const AccountBoxIcon = styled(AccountBox)(({ theme }) => ({
  fontSize: '1.125rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.5rem',
  },
}));

export const SpaceCard: React.VFC<SpaceCardProps> = (props: SpaceCardProps) => {
  return (
    <RootBox>
      <StyleRemovedLink to={`/spaces/${props.space.id.value}`}>
        <Photo src={props.space.images[0].imageUrl} />
      </StyleRemovedLink>
      <HeadlineSpacer />
      <StyleRemovedLink to={`/spaces/${props.space.id.value}`}>
        <Typography variant="h5" fontWeight="bold">
          {props.space.headline}
        </Typography>
      </StyleRemovedLink>
      <HeadlineSpacer />
      <PropertiesBox>
        <PropertyWrapper>
          <LocationOnIcon />
          <Typography variant="subtitle1">
            {props.space.access ?? '不明'}
          </Typography>
        </PropertyWrapper>
        <PropertyWrapper>
          <CurrencyYenIcon />
          <Typography variant="subtitle1">
            {props.space.price.format()}
          </Typography>
        </PropertyWrapper>
        <PropertyWrapper>
          <PeopleAltIcon />
          <Typography variant="subtitle1">
            {props.space.numberOfVisitors?.format() ?? '不明'}
          </Typography>
        </PropertyWrapper>
        <PropertyWrapper>
          <AccountBoxIcon />
          <Typography variant="subtitle1">
            {props.space.customerSegment?.format() ?? '不明'}
          </Typography>
        </PropertyWrapper>
      </PropertiesBox>
    </RootBox>
  );
};
