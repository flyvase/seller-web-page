import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
} from '@material-ui/core';
import React from 'react';

import horizontalLogo from '../assets/logos/horizontal.svg';
import { CountryPicker } from '../components/common/CountryPicker';

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
    firstNameInput: {
      paddingBottom: 16,
    },
    lastNameInput: {
      paddingBottom: 32,
    },
    phoneInputs: {
      paddingBottom: 32,
      display: 'flex',
    },
    countryPicker: {
      minWidth: 80,
      width: '30%',
    },
    phoneInput: {
      paddingLeft: '16px',
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

        <TextField className={classes.firstNameInput} fullWidth label="姓" />
        <TextField className={classes.lastNameInput} fullWidth label="名" />
        <Box className={classes.phoneInputs}>
          <Box className={classes.countryPicker}>
            <CountryPicker error onChange={console.log} />
          </Box>
          <Box className={classes.phoneInput}>
            <TextField fullWidth label="電話番号" variant="outlined" />
          </Box>
        </Box>

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
