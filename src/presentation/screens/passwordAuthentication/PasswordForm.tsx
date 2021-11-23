import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';

const RootBox = styled(Box)(() => ({
  height: '324px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FormContainer = styled(Box)(() => ({
  width: '560px',
}));

const Title = styled(Typography)(() => ({
  paddingBottom: '48px',
  fontWeight: 'bold',
}));

type PasswordFormProps = {
  children: ReactNode;
  title: string;
};

export const PasswordForm: React.VFC<PasswordFormProps> = (
  props: PasswordFormProps
) => {
  return (
    <RootBox>
      <FormContainer>
        <Title variant="h4" align="center">
          {props.title}
        </Title>

        {props.children}
      </FormContainer>
    </RootBox>
  );
};
