import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

import { LoginForm } from './LoginForm';

const RootBox = styled(Box)(({ theme }) => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingTop: theme.spacing(6),
  maxWidth: '336px',
  width: '90%',
  [theme.breakpoints.up('sm')]: {
    paddingTop: theme.spacing(10),
    maxWidth: '672px',
  },
}));

const TextAligner = styled(Box)(() => ({
  textAlign: 'center',
}));

const InlineBlockText = styled(Typography)(() => ({
  display: 'inline-block',
}));

const TitleSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(6),
  },
}));

const FormSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(6),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(10),
  },
}));

const Center = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
}));

export const PasswordAuthenticationScreen: React.VFC = () => {
  return (
    <RootBox>
      <TextAligner>
        <InlineBlockText variant="h2" fontWeight="bold">
          低価格で
        </InlineBlockText>
        <InlineBlockText variant="h2" fontWeight="bold">
          ポップアップストアを
        </InlineBlockText>
        <InlineBlockText variant="h2" fontWeight="bold">
          出店するなら
        </InlineBlockText>
        <InlineBlockText variant="h2" fontWeight="bold">
          &quot;フライベース&quot;
        </InlineBlockText>
      </TextAligner>
      <TitleSpacer />
      <TextAligner>
        <Typography variant="h4">あなたの商品を販売できる</Typography>
        <Typography variant="h4">街のカフェや飲食店がすぐに見つかる</Typography>
      </TextAligner>
      <FormSpacer />
      <Center>
        <LoginForm />
      </Center>
    </RootBox>
  );
};
