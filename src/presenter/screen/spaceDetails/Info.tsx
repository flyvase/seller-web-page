import {
  AccountBox,
  CurrencyYen,
  LocationOn,
  People,
} from '@mui/icons-material';
import { Box, styled } from '@mui/material';
import React from 'react';

import { Space } from '../../../domain/model/space';
import { InfoTile } from './InfoTile';

type InfoProps = {
  space: Space;
};

const Spacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(2),
}));

export const Info: React.VFC<InfoProps> = (props: InfoProps) => {
  return (
    <Box>
      <InfoTile
        icon={<LocationOn />}
        label="立地"
        value={props.space.access ?? '不明'}
      />
      <Spacer />
      <InfoTile
        icon={<People />}
        label="来客数"
        value={props.space.numberOfVisitors?.format() ?? '不明'}
      />
      <Spacer />
      <InfoTile
        icon={<AccountBox />}
        label="メイン客層"
        value={props.space.customerSegment?.format() ?? '不明'}
      />
      <Spacer />
      <InfoTile
        icon={<CurrencyYen />}
        label="料金"
        value={props.space.price.format()}
      />
    </Box>
  );
};
