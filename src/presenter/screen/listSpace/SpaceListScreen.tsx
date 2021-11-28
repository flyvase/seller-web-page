import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';

import { range } from '../../../core/array';
import { spaceRepositoryContext } from '../../../domain/repository/spaceRepository';
import { LogoAppBar } from '../../component/LogoAppBar';
import { SpaceCard } from './SpaceCard';
import { SpaceCardSkeleton } from './SpaceCardSkeleton';
import { useListSpaces } from './spaceHooks';

const RootBox = styled(Box)(() => ({
  height: '100vh',
  overflow: 'scroll',
}));

const GridRoot = styled(Box)(({ theme }) => ({
  width: '328px',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: '960px',
  },
}));

const TitleSpacer = styled(Box)(({ theme }) => ({
  height: '20px',
  [theme.breakpoints.up('sm')]: {
    height: '48px',
  },
}));

export const SpaceListScreen: React.VFC = () => {
  const spaceRepository = useContext(spaceRepositoryContext);
  const { data, isLoading, isError, error } = useListSpaces(spaceRepository);

  if (isError) {
    // TODO: error handling
    return <Typography>{error!.message}</Typography>;
  }

  return (
    <RootBox>
      <LogoAppBar />
      <GridRoot>
        <TitleSpacer />
        <Typography align="center" variant="h4" fontWeight="bold">
          スペース一覧
        </Typography>
        <TitleSpacer />
        <Grid container columnSpacing={6} rowSpacing={{ xs: 2, sm: 5 }}>
          {isLoading
            ? [...range(0, 4)].map((i) => (
                <Grid item xs={12} sm={6} key={i}>
                  <SpaceCardSkeleton />
                </Grid>
              ))
            : data!.map((space) => (
                <Grid item xs={12} sm={6} key={space.id.value}>
                  <SpaceCard space={space} />
                </Grid>
              ))}
        </Grid>
      </GridRoot>
    </RootBox>
  );
};
