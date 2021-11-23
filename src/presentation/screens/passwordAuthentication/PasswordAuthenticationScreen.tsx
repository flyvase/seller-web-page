import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { object, string } from 'yup';
import { TextField, Button, Typography, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';

import { usePasswordSignIn } from '../../controllers/authController';
import { authRepositoryContext } from '../../../domain/repository/authRepository';
import { LogoAppBar } from '../../components/LogoAppBar';
import { PasswordForm } from './PasswordForm';

const EmailInput = styled(TextField)(() => ({
  paddingBottom: 16,
}));

const PasswordInput = styled(TextField)(() => ({
  paddingBottom: 32,
}));

const validationSchema = object({
  emailInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
  passwordInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
});

const Title = styled(Typography)(() => ({
  marginTop: '80px',
  paddingBottom: '48px',
  fontWeight: 'bold',
}));

const SubTitle = styled(Typography)(() => ({
  marginBottom: '80px',
  paddingLeft: '80px',
  paddingRight: '80px',
}));

const LoginButtonText = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

const LoginButton = styled(Button)(() => ({
  height: '56px',
}));

export const PasswordAuthenticationScreen: React.VFC = () => {
  const authRepository = useContext(authRepositoryContext);
  const passwordSignIn = usePasswordSignIn(authRepository);

  const history = useHistory();

  const formController = useFormik({
    initialValues: {
      emailInput: '',
      passwordInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        const signedIn = await passwordSignIn(
          values.emailInput,
          values.passwordInput
        );
        if (signedIn) {
          history.push('/');
        }
      } catch (e) {
        console.error((e as Error).message);
      }
    },
  });

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

        <PasswordForm title="ログイン">
          <form onSubmit={formController.handleSubmit}>
            <EmailInput
              fullWidth
              label="メールアドレス"
              id="emailInput"
              value={formController.values.emailInput}
              onChange={formController.handleChange}
              error={
                formController.touched.emailInput &&
                Boolean(formController.errors.emailInput)
              }
              helperText={
                formController.touched.emailInput &&
                formController.errors.emailInput
              }
            />
            <PasswordInput
              fullWidth
              type="password"
              label="パスワード"
              id="passwordInput"
              value={formController.values.passwordInput}
              onChange={formController.handleChange}
              error={
                formController.touched.passwordInput &&
                Boolean(formController.errors.passwordInput)
              }
              helperText={
                formController.touched.passwordInput &&
                formController.errors.passwordInput
              }
            />

            <LoginButton
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
            >
              <LoginButtonText variant="h4" align="center" color="#FFFFFF">
                ログインする
              </LoginButtonText>
            </LoginButton>
          </form>
        </PasswordForm>
      </Container>
    </div>
  );
};
