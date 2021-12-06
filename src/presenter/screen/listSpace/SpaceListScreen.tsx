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

const Container = styled(Box)(({ theme }) => ({
  width: '328px',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: '960px',
  },
}));

const TitleSpacerTop = styled(Box)(({ theme }) => ({
  height: theme.spacing(2.5),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(6),
  },
}));

const TitleSpacerBottom = styled(Box)(({ theme }) => ({
  height: theme.spacing(0.5),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(1),
  },
}));

const GridItem = styled(Grid)(({ theme }) => ({
  paddingTop: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(5),
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
      <Container>
        <TitleSpacerTop />
        <Typography align="center" variant="h4" fontWeight="bold">
          スペース一覧
        </Typography>
        <TitleSpacerBottom />
        <Grid container>
          {isLoading
            ? [...range(0, 4)].map((i) => (
                <GridItem item xs={12} sm={6} key={i}>
                  <SpaceCardSkeleton />
                </GridItem>
              ))
            : data!.map((space) => (
                <GridItem item xs={12} sm={6} key={space.id.value}>
                  <SpaceCard space={space} />
                </GridItem>
              ))}
        </Grid>
      </Container>
    </RootBox>
  );
};
