import { Box, TextField, Typography } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/system';
import React, { useContext } from 'react';

import { authRepositoryContext } from '../../../domain/repository/authRepository';
import { usePasswordAuthForm } from './passwordAuthFormHooks';

const RootBox = styled(Box)(() => ({
  width: '90%',
}));

const ErrorMessageSpacer = styled(Box)(({ theme }) => ({
  height: theme.spacing(1),
  [theme.breakpoints.up('sm')]: {
    height: theme.spacing(2),
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

const ErrorMessageText = styled(Typography)(() => ({
  color: 'red',
}));

export const LoginForm: React.VFC = () => {
  const authRepository = useContext(authRepositoryContext);
  const {
    formController,
    isLoading,
    emailHasError,
    passwordHasError,
    emailErrorMessage,
    passwordErrorMessage,
    signInErrorMessage,
  } = usePasswordAuthForm(authRepository);

  return (
    <RootBox>
      <Typography variant="h4" fontWeight="bold" align="center">
        ログイン
      </Typography>
      <ErrorMessageSpacer />
      <ErrorMessageText variant="subtitle1" align="center">
        {signInErrorMessage}
      </ErrorMessageText>
      <ErrorMessageSpacer />
      <form onSubmit={formController.handleSubmit}>
        <TextField
          fullWidth
          label="メールアドレス"
          id="emailInput"
          value={formController.values.emailInput}
          onChange={formController.handleChange}
          error={emailHasError}
          helperText={emailErrorMessage}
        />
        <InputSpacer />
        <TextField
          fullWidth
          type="password"
          label="パスワード"
          id="passwordInput"
          value={formController.values.passwordInput}
          onChange={formController.handleChange}
          error={passwordHasError}
          helperText={passwordErrorMessage}
        />
        <ButtonSpacer />
        <LoadingButton
          variant="contained"
          disableElevation
          fullWidth
          type="submit"
          loading={isLoading}
        >
          <ButtonText variant="h4" fontWeight="bold">
            ログイン
          </ButtonText>
        </LoadingButton>
      </form>
    </RootBox>
  );
};
