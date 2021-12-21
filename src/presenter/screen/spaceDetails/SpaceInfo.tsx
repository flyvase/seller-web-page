import {
  AccountBox,
  CurrencyYen,
  LocationOn,
  People,
} from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import React from 'react';

import { Space } from '../../../domain/model/space';
import { SpaceInfoTile } from './SpaceInfoTile';

type SpaceInfoProps = {
  space: Space;
};

const Spacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(2),
}));

export const SpaceInfo: React.VFC<SpaceInfoProps> = (props: SpaceInfoProps) => {
  return (
    <Box>
      <SpaceInfoTile
        icon={<LocationOn />}
        label="立地"
        value={props.space.access ?? '不明'}
      />
      <Spacer />
      <SpaceInfoTile
        icon={<People />}
        label="来客数"
        value={props.space.numberOfVisitors?.format() ?? '不明'}
      />
      <Spacer />
      <SpaceInfoTile
        icon={<AccountBox />}
        label="メイン客層"
        value={props.space.customerSegment?.format() ?? '不明'}
      />
      <Spacer />
      <SpaceInfoTile
        icon={<CurrencyYen />}
        label="料金"
        value={props.space.price.format()}
      />
    </Box>
  );
};
