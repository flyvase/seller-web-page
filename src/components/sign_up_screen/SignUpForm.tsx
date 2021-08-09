import { Box, Button, makeStyles, TextField } from '@material-ui/core';
import { useRecoilState } from 'recoil';
import { useFormik } from 'formik';
import React from 'react';
import { object, string } from 'yup';

import { japan } from '../../config/country';
import { formModeState } from '../../controllers/state/sign_up_screen/formModeState';
import { CountryPicker } from '../common/CountryPicker';

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

const validationSchema = object({
  firstNameInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
  lastNameInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
  phoneNumberInput: string()
    .required('必ず入力してください')
    .max(16, '正しい電話番号を入力してください'),
});

export const SignUpForm: React.VFC = () => {
  const classes = useStyles();
  const [, setFormMode] = useRecoilState(formModeState);

  const formController = useFormik({
    initialValues: {
      firstNameInput: '',
      lastNameInput: '',
      countryPicker: japan,
      phoneNumberInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setFormMode('pinCode');
      console.log(values);
    },
  });

  return (
    <form onSubmit={formController.handleSubmit}>
      <TextField
        className={classes.firstNameInput}
        fullWidth
        label="姓 *"
        id="firstNameInput"
        value={formController.values.firstNameInput}
        onChange={formController.handleChange}
        error={
          formController.touched.firstNameInput &&
          Boolean(formController.errors.firstNameInput)
        }
        helperText={
          formController.touched.firstNameInput &&
          formController.errors.firstNameInput
        }
      />

      <TextField
        className={classes.lastNameInput}
        fullWidth
        label="名 *"
        id="lastNameInput"
        value={formController.values.lastNameInput}
        onChange={formController.handleChange}
        error={
          formController.touched.lastNameInput &&
          Boolean(formController.errors.lastNameInput)
        }
        helperText={
          formController.touched.lastNameInput &&
          formController.errors.lastNameInput
        }
      />

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
