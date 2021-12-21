import { Box, styled, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { spaceRepositoryContext } from '../../../domain/repository/spaceRepository';
import { SpaceId } from '../../../domain/valueObject/spaceId';
import { BookingButton } from './BookingButton';
import { SpaceDisplays } from './SpaceDisplays';
import { useFetchSpace } from './spaceHooks';
import { SpaceInfo } from './SpaceInfo';

const RootBox = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    width: '960px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const HeadlineSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(4),
  },
}));

const ButtonWrapper = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: 0,
  left: 0,
  right: 0,
  background: 'white',
  padding: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    position: 'initial',
    bottom: 'initial',
    left: 'initial',
    right: 'initial',
    paddingTop: 'initial',
    paddingBottom: 'initial',
    paddingLeft: theme.spacing(22),
    paddingRight: theme.spacing(22),
  },
}));

const ButtonSpacer = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(8),
  },
}));

const InfoAndDisplayWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    display: 'flex',
  },
}));

const InfoWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    flexGrow: 1,
  },
}));

const InfoAndDisplaySpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(10),
  },
}));

const DisplaysWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.up('sm')]: {
    width: '436px',
  },
}));

export const SpaceDetailsScreen: React.VFC = () => {
  const { spaceId } = useParams();
  const spaceRepository = useContext(spaceRepositoryContext);
  const { data, isLoading } = useFetchSpace(
    new SpaceId({ value: parseInt(spaceId!) }),
    spaceRepository
  );

  if (isLoading) {
    return <Box></Box>;
  }

  return (
    <RootBox>
      <HeadlineSpacer />
      <Typography variant="h2" fontWeight="bold">
        {data!.headline}
      </Typography>
      <HeadlineSpacer />
      <ButtonWrapper>
        <BookingButton />
      </ButtonWrapper>
      <ButtonSpacer />
      <InfoAndDisplayWrapper>
        <InfoWrapper>
          <SpaceInfo space={data!} />
        </InfoWrapper>
        <InfoAndDisplaySpacer />
        <DisplaysWrapper>
          <SpaceDisplays space={data!} />
        </DisplaysWrapper>
      </InfoAndDisplayWrapper>
    </RootBox>
  );
};
