import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';

import { range } from '../../../core/array';
import { spaceRepositoryContext } from '../../../domain/repository/spaceRepository';
import { LogoAppBar } from '../../component/LogoAppBar';
import { SpaceCard } from './SpaceCard';
import { SpaceCardSkeleton } from './SpaceCardSkeleton';
import { useListSpaces } from './spaceHooks';

const ErrorRootBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: 'calc(100vh - 56px)',
  [theme.breakpoints.up('sm')]: {
    height: 'calc(100vh - 80px)',
  },
}));

const Container = styled(Box)(({ theme }) => ({
  width: '328px',
  marginLeft: 'auto',
  marginRight: 'auto',
  [theme.breakpoints.up('sm')]: {
    width: '912px',
  },
}));

const TitleSpacerTop = styled(Box)(({ theme }) => ({
  height: theme.spacing(2.5),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(6),
  },
}));

const TitleSpacerBottom = styled(Box)(({ theme }) => ({
  height: theme.spacing(2.5),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(6),
  },
}));

export const SpaceListScreen: React.VFC = () => {
  const spaceRepository = useContext(spaceRepositoryContext);
  const { data, isLoading, isError, error } = useListSpaces(spaceRepository);

  if (isError) {
    return (
      <ErrorRootBox>
        <Typography variant="h4">{error!.display()}</Typography>
      </ErrorRootBox>
    );
  }

  return (
    <Box>
      <LogoAppBar />
      <Container>
        <TitleSpacerTop />
        <Typography align="center" variant="h4" fontWeight="bold">
          スペース一覧
        </Typography>
        <TitleSpacerBottom />
        <Grid container columnSpacing={{ sm: 6 }} rowSpacing={{ xs: 3, sm: 6 }}>
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
      </Container>
    </Box>
  );
};
