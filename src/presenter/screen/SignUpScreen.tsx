import React, { useContext } from 'react';
import { makeStyles, TextField } from '@material-ui/core';
import { object, string } from 'yup';
import { useFormik } from 'formik';

import { LogoForm } from '../component/common/LogoForm';
import { userRepositoryContext } from '../../domain/repository/userRepository';
import { useCreateUser } from '../../controller/common/userController';
import { LoadingButton } from '../component/common/LoadingButton';

const useStyles = makeStyles(() => ({
  firstNameInput: {
    paddingBottom: 16,
  },
  lastNameInput: {
    paddingBottom: 32,
  },
}));

const validationSchema = object({
  firstNameInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
  lastNameInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
});

export const SignUpScreen: React.VFC = () => {
  const classes = useStyles();

  const userRepository = useContext(userRepositoryContext);
  const [loading, createUser] = useCreateUser(userRepository);

  const formController = useFormik({
    initialValues: {
      firstNameInput: '',
      lastNameInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      createUser(values.firstNameInput, values.lastNameInput);
    },
  });

  return (
    <LogoForm title="アカウント作成">
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

        <LoadingButton
          loading={loading}
          variant="contained"
          color="primary"
          fullWidth
          disableElevation
          type="submit"
        >
          次へ
        </LoadingButton>
      </form>
    </LogoForm>
  );
};
