import {
  Box,
  Paper,
  TextField,
  Button,
  makeStyles,
  createStyles,
  Grid,
} from '@material-ui/core';
import React from 'react';

import horizontalLogo from '../assets/logos/horizontal.svg';

const useStyles = makeStyles(() =>
  createStyles({
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
    },
    signin: {
      padding: '44px 16px',
    },
    button: {
      height: '44px',
      fontSize: '14px',
    },
  })
);

export const CreateAccountScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <img src={horizontalLogo} alt="horizontal logo" />
        <form noValidate autoComplete="off" className={classes.form}>
          <Grid container spacing={3}>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="名" required />
            </Grid>
            <Grid item xs={6}>
              <TextField id="standard-basic" label="姓" required />
            </Grid>
            <Grid item xs={12}>
              <TextField id="standard-basic" label="電話番号" required />
            </Grid>
          </Grid>
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
