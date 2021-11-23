import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { object, string } from 'yup';
import { useFormik } from 'formik';

import { usePasswordSignIn } from '../../controllers/authController';
import { authRepositoryContext } from '../../../domain/repository/authRepository';

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

const LoginButtonText = styled(Typography)(() => ({
  fontWeight: 'bold',
}));

const LoginButton = styled(Button)(() => ({
  height: '56px',
}));

export const LoginForm: React.VFC = () => {
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
    <RootBox>
      <FormContainer>
        <Title variant="h4" align="center">
          ログイン
        </Title>

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
      </FormContainer>
    </RootBox>
  );
};
