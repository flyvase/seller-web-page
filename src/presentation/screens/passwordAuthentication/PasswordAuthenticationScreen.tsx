import React from 'react';
import { Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';

import { LogoAppBar } from '../../components/LogoAppBar';
import { LoginForm } from './LoginForm';

const Title = styled(Typography)(() => ({
  paddingTop: '80px',
  paddingBottom: '48px',
  fontWeight: 'bold',
}));

const SubTitle = styled(Typography)(() => ({
  paddingBottom: '80px',
  paddingLeft: '80px',
  paddingRight: '80px',
}));

export const PasswordAuthenticationScreen: React.VFC = () => {
  return (
    <div>
      <LogoAppBar />
      <Container maxWidth="md">
        <Title variant="h2" align="center">
          低価格でポップアップストアを出店するなら ”フライベース”
        </Title>
        <SubTitle variant="h4" align="center">
          あなたの商品を販売できる街のカフェや飲食店がすぐに見つかる
        </SubTitle>
        <LoginForm />
      </Container>
    </div>
  );
};
