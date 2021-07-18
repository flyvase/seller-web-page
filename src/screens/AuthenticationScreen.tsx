import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import React, { useContext } from 'react';
import { useGoogleSignIn } from '../controllers/common/authController';
import { AuthRepositoryContext } from '../repositories/authRepository';
import horizontalLogo from '../assets/logos/horizontal.svg';
import gglLogo from '../assets/logos/GGL_logo_18.svg';
const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center', // なぜか上下中央にならない。。
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
      fontWeight: 'medium',
    },
  };
});
export const AuthenticationScreen: React.VFC = () => {
  const classes = useStyles();
  const authRepository = useContext(AuthRepositoryContext);
  const googleSignIn = useGoogleSignIn(authRepository);
  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <img src={horizontalLogo} alt="horizontal logo" />
        <Typography variant="body1">
          あなたの商品を待ってる人がいます。
        </Typography>
        <Box className={classes.signin}>
          <Button
            variant="outlined"
            size="small"
            onClick={googleSignIn}
            startIcon={<img src={gglLogo} />}
            className={classes.button}
            fullWidth={true}
          >
            Googleで続行
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
