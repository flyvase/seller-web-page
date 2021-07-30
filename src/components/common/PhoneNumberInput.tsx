import { Box, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

import { CountryPicker } from './CountryPicker';

const useStyles = makeStyles((theme) => {
  return {
    root: {
      display: 'flex',
    },
    countryPicker: {
      width: '30%',
      [theme.breakpoints.up('sm')]: {
        width: '80px',
      },
    },
    numberInput: {
      paddingLeft: '16px',
      flexGrow: 1,
    },
  };
});

export const PhoneNumberInput: React.VFC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.countryPicker}>
        <CountryPicker onChange={console.log} />
      </Box>
      <Box className={classes.numberInput}>
        <TextField
          fullWidth
          variant="outlined"
          label="電話番号（ーなし）"
          type="tel"
        />
      </Box>
    </Box>
  );
};
