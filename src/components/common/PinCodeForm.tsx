import { makeStyles, TextField } from '@material-ui/core';
import { useFormik } from 'formik';
import React from 'react';
import { object, string } from 'yup';

import { LoadingButton } from './LoadingButton';

type PinCodeFormProps = {
  onSubmit: (pinCode: string) => void;
  loading: boolean;
};

const useStyles = makeStyles(() => ({
  pinCodeInput: {
    paddingBottom: '24px',
  },
}));

const validationSchema = object({
  pinCodeInput: string()
    .length(6, 'PINコードは6文字です')
    .required('必ず入力してください'),
});

export const PinCodeForm: React.VFC<PinCodeFormProps> = (
  props: PinCodeFormProps
) => {
  const classes = useStyles();

  const formController = useFormik({
    initialValues: {
      pinCodeInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      props.onSubmit(values.pinCodeInput);
    },
  });

  return (
    <form onSubmit={formController.handleSubmit}>
      <TextField
        fullWidth
        label="PINコード *"
        inputProps={{
          style: { textAlign: 'center' },
          autoComplete: 'off',
        }}
        id="pinCodeInput"
        className={classes.pinCodeInput}
        onChange={formController.handleChange}
        value={formController.values.pinCodeInput}
        error={
          formController.touched.pinCodeInput &&
          Boolean(formController.errors.pinCodeInput)
        }
        helperText={
          formController.touched.pinCodeInput &&
          formController.errors.pinCodeInput
        }
      />
      <LoadingButton
        loading={props.loading}
        type="submit"
        variant="contained"
        disableElevation
        fullWidth
        color="primary"
      >
        次へ
      </LoadingButton>
    </form>
  );
};
