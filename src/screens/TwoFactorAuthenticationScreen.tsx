import {
  Box,
  Button,
  makeStyles,
  TextField,
  Typography,
  Paper,
} from '@material-ui/core';
import React from 'react';

import horizontalLogo from '../assets/logos/horizontal.svg';

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    form: {
      flexGrow: 1,
      paddingBottom: '32px',
    },
    paper: {
      marginTop: '96px',
      padding: '62.12px 99px 48px',
      width: '314px',
      textAlign: 'center',
    },
    signin: {
      padding: '44px 16px',
    },
    button: {
      height: '44px',
      textTransform: 'none',
      fontSize: '14px',
    },
  };
});

export const TwoFactorAuthenticationScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <img src={horizontalLogo} alt="horizontal logo" />
        <Typography variant="h6">認証コードを入力してください</Typography>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField id="standard-basic" label="認証コード" required />
        </form>
        <Box>
          <Button
            fullWidth={true}
            variant="outlined"
            className={classes.button}
          >
            送信
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
