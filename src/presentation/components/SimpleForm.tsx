import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { ReactNode } from 'react';

const RootBox = styled(Box)(() => ({
  height: 324,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const FormContainer = styled(Box)(() => ({
  width: 560,
}));

const Title = styled(Typography)(() => ({
  paddingBottom: 48,
  fontWeight: 'bold',
}));

type SimpleFormProps = {
  children: ReactNode;
  title: string;
};

export const SimpleForm: React.VFC<SimpleFormProps> = (
  props: SimpleFormProps
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
