import { Box, makeStyles, Typography } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import React from 'react';

import horizontalLogo from '../assets/logos/horizontal.svg';
import { PinCodeForm } from '../components/sign_up_screen/PinCodeForm';
import { SignUpForm } from '../components/sign_up_screen/SignUpForm';
import { formModeState } from '../controllers/state/sign_up_screen/formModeState';

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
  const [formMode, setFormMode] = useRecoilState(formModeState);

  return (
    <Box className={classes.root}>
      <Box className={classes.container}>
        <img src={horizontalLogo} />

        <Typography className={classes.title} variant="h5" align="center">
          {formMode === 'signUp'
            ? 'アカウントを作成'
            : 'SMSに送信された6桁の番号を入力してください'}
        </Typography>

        {formMode === 'signUp' ? <SignUpForm /> : <PinCodeForm />}
      </Box>
    </Box>
  );
};
