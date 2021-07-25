import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';

import horizontalLogo from '../assets/logos/horizontal.svg';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      padding: '0px 32px 24px 32px',
      maxWidth: 400,
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
    nameInput: {
      paddingBottom: 16,
    },
    phoneInput: {
      paddingBottom: 32,
    },
    submitButton: {
      padding: '8px 0px',
    },
  };
});

export const SignUpScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.form}>
        <img src={horizontalLogo} />

        <Typography className={classes.title} variant="h5" align="center">
          アカウントを作成
        </Typography>

        <TextField className={classes.nameInput} fullWidth label="姓" />
        <TextField className={classes.nameInput} fullWidth label="名" />
        <TextField
          className={classes.phoneInput}
          fullWidth
          label="電話番号"
          type="tel"
        />

        <Button
          className={classes.submitButton}
          variant="contained"
          color="primary"
          fullWidth
        >
          作成
        </Button>
      </Box>
    </Box>
  );
};
