import { Box, styled, Typography } from '@mui/material';
import React, { ReactElement } from 'react';

type InfoTileProps = {
  icon: ReactElement;
  label: string;
  value: string;
};

const RootBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));

const Labels = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
}));

const Spacer = styled(Box)(({ theme }) => ({
  width: theme.spacing(0.5),
}));

export const InfoTile: React.VFC<InfoTileProps> = (props: InfoTileProps) => {
  return (
    <RootBox>
      <Labels>
        {props.icon}
        <Spacer />
        <Typography variant="h4">{props.label}</Typography>
      </Labels>
      <Typography variant="h4" fontWeight="bold">
        {props.value}
      </Typography>
    </RootBox>
  );
};
