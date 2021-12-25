import { TableRestaurant } from '@mui/icons-material';
import { Box, Grid, styled, Typography } from '@mui/material';
import React from 'react';

import { Space } from '../../../domain/model/space';
import { SpaceDisplayCard } from './SpaceDisplayCard';

type SpaceDisplaysProps = {
  space: Space;
};

const SectionTitle = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const TitleSpacer = styled(Box)(({ theme }) => ({
  width: theme.spacing(0.5),
}));

const ItemSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(2),
}));

export const SpaceDisplays: React.VFC<SpaceDisplaysProps> = (
  props: SpaceDisplaysProps
) => {
  return (
    <Box>
      <SectionTitle>
        <TableRestaurant />
        <TitleSpacer />
        <Typography variant="h4">展示スペース</Typography>
      </SectionTitle>
      <ItemSpacer />
      <Grid
        container
        rowSpacing={{ xs: 2, sm: 3 }}
        columnSpacing={{ xs: 3, sm: 4.5 }}
      >
        {props.space.displays.map((d) => (
          <Grid item xs={6} key={d.id.value}>
            <SpaceDisplayCard
              imageSrc={d.imageUrl}
              description={d.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
