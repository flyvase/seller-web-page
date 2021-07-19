import {
  Box,
  Paper,
  Typography,
  TextField,
  Button,
  makeStyles,
} from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    typography: {
      paddingBottom: '32px',
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
      textTransform: 'none',
      fontSize: '14px',
    },
    textfield: {
      paddingBottom: '32px',
    },
  };
});

export const CreateBrandScreen: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h4" className={classes.typography}>
          ショップ作成
        </Typography>
        <form noValidate autoComplete="off" className={classes.form}>
          <TextField
            className={classes.textfield}
            id="standard-full-width"
            label="ブランド名"
            style={{ margin: 8 }}
            placeholder="flyvase"
            helperText="ブランド名を入力してください"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            required
          />
          <TextField
            className={classes.textfield}
            id="standard-full-width"
            label="説明文"
            style={{ margin: 8 }}
            placeholder="ハンドメイドの雑貨を夫婦で作っているブランドです。"
            helperText="ブランド名を説明する文章を入力してください"
            fullWidth
            multiline
            rows={4}
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={classes.textfield}
            id="standard-full-width"
            label="郵便番号"
            style={{ margin: 8 }}
            placeholder="1200035"
            helperText="ハイフンなし半角数字7桁で入力してください"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={classes.textfield}
            id="standard-full-width"
            label="住所"
            style={{ margin: 8 }}
            placeholder="東京都台東区蔵前1-1-1"
            helperText="番地以降はハイフンを含めて半角数字で入力してください"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            className={classes.textfield}
            id="standard-full-width"
            label="HPリンク"
            style={{ margin: 8 }}
            placeholder="https://www.flayvase.net"
            helperText="自社サイトのリンクを入力してください"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
          />
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
