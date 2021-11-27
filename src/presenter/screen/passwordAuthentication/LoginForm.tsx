import { Box, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/system';
import React from 'react';
import { object, string } from 'yup';
import { useFormik } from 'formik';

const RootBox = styled(Box)(() => ({
  width: '90%',
}));

const FormSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(6),
  },
}));

const InputSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(2),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(3),
  },
}));

const ButtonSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(3),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(6),
  },
}));

const ButtonText = styled(Typography)(() => ({
  color: 'white',
}));

const validationSchema = object({
  emailInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
  passwordInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
});

export const LoginForm: React.VFC = () => {
  const formController = useFormik({
    initialValues: {
      emailInput: '',
      passwordInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <RootBox>
      <Typography variant="h4" fontWeight="bold" align="center">
        ログイン
      </Typography>
      <FormSpacer />
      <form onSubmit={formController.handleSubmit}>
        <TextField
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
        <InputSpacer />
        <TextField
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
        <ButtonSpacer />
        <LoadingButton
          variant="contained"
          disableElevation
          fullWidth
          type="submit"
        >
          <ButtonText variant="h4" fontWeight="bold">
            ログイン
          </ButtonText>
        </LoadingButton>
      </form>
    </RootBox>
  );
};
