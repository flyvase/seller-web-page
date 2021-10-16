import { useHistory } from 'react-router-dom';
import React, { useContext } from 'react';
import { object, string } from 'yup';
import { TextField, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useFormik } from 'formik';

import { usePasswordSignIn } from '../../controller/common/authController';
import { LogoForm } from '../component/common/LogoForm';
import { authRepositoryContext } from '../../domain/repository/authRepository';

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
      const errMsg = await passwordSignIn(
        values.emailInput,
        values.passwordInput
      );
      if (errMsg == null) {
        history.push('/');
      } else {
        // errMsgをポップアップで表示
        console.error(errMsg);
      }
    },
  });

  return (
    <LogoForm title="ログイン">
      <form onSubmit={formController.handleSubmit}>
        <EmailInput
          fullWidth
          label="メール *"
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
          label="パスワード *"
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

        <Button variant="contained" color="primary" type="submit" fullWidth>
          ログイン
        </Button>
      </form>
    </LogoForm>
  );
};
