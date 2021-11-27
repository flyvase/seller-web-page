import { Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';

type BodyProps = {
  children: ReactNode;
};

const RootBox = styled(Box)(({ theme }) => ({
  paddingTop: theme.spacing(7),
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(10),
  },
}));

export const Body: React.VFC<BodyProps> = (props: BodyProps) => {
  return <RootBox>{props.children}</RootBox>;
};
