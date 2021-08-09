import { Box, makeStyles, Typography } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import React, { useContext, useRef } from 'react';

import horizontalLogo from '../assets/logos/horizontal.svg';
import { PinCodeForm } from '../components/sign_up_screen/PinCodeForm';
import { SignUpForm } from '../components/sign_up_screen/SignUpForm';
import { formModeState } from '../controllers/state/sign_up_screen/formModeState';
import { User } from '../entities/user';
import { useUid } from '../controllers/hooks/common/authController';
import { AuthRepositoryContext } from '../repositories/authRepository';

export type SignUpFormMode = 'signUp' | 'pinCode';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    container: {
      padding: '0px 32px 24px 32px',
      width: 400,
      [theme.breakpoints.up('sm')]: {
        borderWidth: 2,
        borderColor: theme.palette.divider,
        borderStyle: 'solid',
        borderRadius: 24,
      },
    },
    title: {
      paddingBottom: 16,
    },
  };
});

export const SignUpScreen: React.VFC = () => {
  const classes = useStyles();

  const [formMode] = useRecoilState(formModeState);

  const userRef = useRef<User>(null!);
  const phoneNumberRef = useRef<string>(null!);

  const authRepository = useContext(AuthRepositoryContext);
  const uid = useUid(authRepository);

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <img src={horizontalLogo} />

        <Typography className={classes.title} variant="h5" align="center">
          {formMode === 'signUp'
            ? 'アカウントを作成'
            : 'SMSに送信された6桁の番号を入力してください'}
        </Typography>

        {formMode === 'signUp' ? (
          <SignUpForm
            onSubmit={(firstName, lastName, phoneNumber) => {
              userRef.current = new User(uid!, firstName, lastName);
              phoneNumberRef.current = phoneNumber;
            }}
          />
        ) : (
          <PinCodeForm />
        )}
      </Box>
    </Box>
  );
};
