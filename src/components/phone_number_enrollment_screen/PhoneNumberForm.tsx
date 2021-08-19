import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { object, string } from 'yup';

import { japan } from '../../config/country';
import { reCaptchaContainerId } from '../../interfaces/authInterface';
import { CountryPicker } from '../common/CountryPicker';

const useStyles = makeStyles(() => ({
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

const validationSchema = object({
  phoneNumberInput: string()
    .required('必ず入力してください')
    .max(16, '正しい電話番号を入力してください'),
});

type PhoneNumberFormProps = {
  onSubmit: (phoneNumber: string) => void;
};

export const PhoneNumberForm: React.VFC<PhoneNumberFormProps> = (
  props: PhoneNumberFormProps
) => {
  const classes = useStyles();

  const formController = useFormik({
    initialValues: {
      countryPicker: japan,
      phoneNumberInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const phoneNumber =
        '+' + values.countryPicker.phone + values.phoneNumberInput;
      props.onSubmit(phoneNumber);
    },
  });

  return (
    <form onSubmit={formController.handleSubmit}>
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
        id={reCaptchaContainerId}
      >
        次へ
      </Button>
    </form>
  );
};
