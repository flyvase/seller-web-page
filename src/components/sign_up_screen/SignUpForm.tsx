import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { object, string } from 'yup';

import { japan } from '../../config/country';
import { CountryPicker } from '../common/CountryPicker';

const validationSchema = object({
  phoneNumberInput: string().required('必ず入力してください'),
});

const useStyles = makeStyles(() => ({
  firstNameInput: {
    paddingBottom: 16,
  },
  lastNameInput: {
    paddingBottom: 32,
  },
  phoneNumberField: {
    paddingBottom: 32,
    display: 'flex',
  },
  countryPicker: {
    minWidth: 80,
    width: '30%',
  },
  phoneNumberInput: {
    paddingLeft: '16px',
    width: '70%',
  },
}));

export const SignUpForm: React.VFC = () => {
  const classes = useStyles();

  const formController = useFormik({
    initialValues: {
      countryPicker: japan,
      phoneNumberInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <form onSubmit={formController.handleSubmit}>
      <TextField className={classes.firstNameInput} fullWidth label="姓 *" />

      <TextField className={classes.lastNameInput} fullWidth label="名 *" />

      <Box className={classes.phoneNumberField}>
        <Box className={classes.countryPicker}>
          <CountryPicker
            onChange={(country) => {
              formController.setFieldValue(
                'countryPicker',
                country ?? formController.initialValues.countryPicker
              );
            }}
            value={formController.values.countryPicker}
            id="countryPicker"
          />
        </Box>
        <Box className={classes.phoneNumberInput}>
          <TextField
            fullWidth
            label="電話番号 *"
            variant="outlined"
            id="phoneNumberInput"
            value={formController.values.phoneNumberInput}
            onChange={formController.handleChange}
            error={
              formController.touched.phoneNumberInput &&
              Boolean(formController.errors.phoneNumberInput)
            }
            helperText={
              formController.touched.phoneNumberInput &&
              formController.errors.phoneNumberInput
            }
          />
        </Box>
      </Box>

      <Button
        variant="contained"
        color="primary"
        fullWidth
        disableElevation
        type="submit"
      >
        次へ
      </Button>
    </form>
  );
};
