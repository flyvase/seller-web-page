import { Box, Grid, Skeleton, styled, Typography } from '@mui/material';
import React from 'react';

import { range } from '../../../core/array';
import { DisplayCardSkeleton } from './DisplayCardSkeleton';

const Spacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(2),
}));

export const DisplaysSkeleton: React.VFC = () => {
  return (
    <Box>
      <Typography variant="h4">
        <Skeleton />
      </Typography>
      <Spacer />
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3 }}
        columnSpacing={{ xs: 3, sm: 4.5 }}
      >
        {[...range(0, 4)].map((i) => (
          <Grid item xs={6} key={i}>
            <DisplayCardSkeleton />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
