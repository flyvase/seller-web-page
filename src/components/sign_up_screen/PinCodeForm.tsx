import { Button, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles(() => ({
  pinCodeInput: {
    paddingBottom: '24px',
  },
}));

export const PinCodeForm: React.VFC = () => {
  const classes = useStyles();

  return (
    <form>
      <TextField
        fullWidth
        label="PINコード *"
        inputProps={{
          style: { textAlign: 'center' },
        }}
        className={classes.pinCodeInput}
      />
      <Button variant="contained" disableElevation fullWidth color="primary">
        次へ
      </Button>
    </form>
  );
};
