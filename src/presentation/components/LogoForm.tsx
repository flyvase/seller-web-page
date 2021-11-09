import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';

import horizontalLogo from '../../assets/logos/horizontal.svg';

const RootBox = styled(Box)(() => ({
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FormContainer = styled(Box)(({ theme }) => ({
  padding: '0px 32px 24px 32px',
  width: 400,
  [theme.breakpoints.up('sm')]: {
    borderWidth: 2,
    borderColor: theme.palette.divider,
    borderStyle: 'solid',
    borderRadius: 24,
  },
}));

const Title = styled(Typography)(() => ({
  paddingBottom: 16,
}));

type LogoFormProps = {
  children: ReactNode;
  title: string;
};

export const LogoForm: React.VFC<LogoFormProps> = (props: LogoFormProps) => {
  return (
    <RootBox>
      <FormContainer>
        <img src={horizontalLogo} />

        <Title variant="h5" align="center">
          {props.title}
        </Title>

        {props.children}
      </FormContainer>
    </RootBox>
  );
};
