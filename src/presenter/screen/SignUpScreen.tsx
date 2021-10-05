import React, { useContext } from 'react';
import { styled } from '@mui/material/styles';
import { TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { object, string } from 'yup';
import { useFormik } from 'formik';
import { useHistory } from 'react-router-dom';

import { LogoForm } from '../component/common/LogoForm';
import { userRepositoryContext } from '../../domain/repository/userRepository';
import { useCreateUser } from '../../controller/common/userController';

const FirstNameInput = styled(TextField)(() => ({
  paddingBottom: 16,
}));

const LastNameInput = styled(TextField)(() => ({
  paddingBottom: 32,
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
  const userRepository = useContext(userRepositoryContext);
  const [loading, createUser] = useCreateUser(userRepository);

  const history = useHistory();

  const formController = useFormik({
    initialValues: {
      firstNameInput: '',
      lastNameInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      await createUser(values.firstNameInput, values.lastNameInput);
      history.push('/');
    },
  });

  return (
    <LogoForm title="アカウント作成">
      <form onSubmit={formController.handleSubmit}>
        <FirstNameInput
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

        <LastNameInput
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
