import { Box, Skeleton, styled, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';

import { spaceRepositoryContext } from '../../../domain/repository/spaceRepository';
import { SpaceId } from '../../../domain/valueObject/spaceId';
import { BookingButton } from './BookingButton';
import { Displays } from './Displays';
import { useFetchSpace } from './spaceHooks';
import { Info } from './Info';
import { ImageSlider } from './ImageSlider';
import { WebsiteDisplay } from './WebsiteDisplay';
import { Map } from './Map';
import { InfoSkeleton } from './InfoSkeleton';
import { DisplaysSkeleton } from './DisplaysSkeleton';
import { WebsiteDisplaySkeleton } from './WebsiteDisplaySkeleton';
import { MapSkeleton } from './MapSkeleton';
import { BadRequestError, NotFoundError } from '../../../error/repository';

const ErrorRootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 56px)',
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 80px)',
  },
}));

const RootBox = styled(Box)(({ theme }) => ({
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
  paddingBottom: theme.spacing(11),
  [theme.breakpoints.up('sm')]: {
    width: '912px',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

const ImageSliderWrapper = styled(Box)(({ theme }) => ({
  width: '100vw',
  marginLeft: theme.spacing(-3),
  marginRight: theme.spacing(-3),
  [theme.breakpoints.up('sm')]: {
    width: 'initial',
    marginLeft: 'initial',
    marginRight: 'initial',
  },
}));

const ImageSliderSkeletonWrapper = styled(Box)(({ theme }) => ({
  aspectRatio: '1.3',
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    aspectRatio: '2',
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
  bottom: '0px',
  left: '0px',
  right: '0px',
  backgroundColor: 'rgba(255, 255, 255, 0.85)',
  padding: theme.spacing(3),
  // render button area over the google maps
  zIndex: 1,
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

const WebsiteDisplaySpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(8),
  },
}));

const MapSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(8),
  },
}));

export const SpaceDetailsScreen: React.VFC = () => {
  const { spaceId } = useParams();
  const spaceRepository = useContext(spaceRepositoryContext);
  const _spaceId = new SpaceId({ value: parseInt(spaceId!) });
  const { data, isLoading, error, isError } = useFetchSpace(
    _spaceId,
    spaceRepository
  );

  if (isError) {
    return (
      <ErrorRootBox>
        <Typography variant="h4">
          {error instanceof BadRequestError
            ? '不正なURLです'
            : error instanceof NotFoundError
            ? '指定されたURLにスペースが見つかりません'
            : '予期せぬエラーが発生しました。しばらくしてからお試しください'}
        </Typography>
      </ErrorRootBox>
    );
  }

  return (
    <RootBox>
      <ImageSliderWrapper>
        {isLoading ? (
          <ImageSliderSkeletonWrapper>
            <Skeleton height="100%" variant="rectangular" />
          </ImageSliderSkeletonWrapper>
        ) : (
          <ImageSlider spaceImages={data!.images} />
        )}
      </ImageSliderWrapper>
      <HeadlineSpacer />
      <Typography variant="h2" fontWeight="bold">
        {isLoading ? <Skeleton /> : data!.headline}
      </Typography>
      <HeadlineSpacer />
      <ButtonWrapper>
        {isLoading ? (
          <Typography variant="h4">
            <Skeleton />
          </Typography>
        ) : (
          <BookingButton />
        )}
      </ButtonWrapper>
      <ButtonSpacer />
      <InfoAndDisplayWrapper>
        <InfoWrapper>
          {isLoading ? <InfoSkeleton /> : <Info space={data!} />}
        </InfoWrapper>
        <InfoAndDisplaySpacer />
        <DisplaysWrapper>
          {isLoading ? <DisplaysSkeleton /> : <Displays space={data!} />}
        </DisplaysWrapper>
      </InfoAndDisplayWrapper>
      <WebsiteDisplaySpacer />
      {isLoading ? (
        <WebsiteDisplaySkeleton />
      ) : (
        <WebsiteDisplay spaceId={_spaceId} />
      )}
      <MapSpacer />
      {isLoading ? <MapSkeleton /> : <Map geoPoint={data!.coordinate} />}
    </RootBox>
  );
};
