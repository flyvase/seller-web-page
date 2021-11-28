import { useFormik } from 'formik';
import { object, string } from 'yup';

import { AuthRepository } from '../../../domain/repository/authRepository';
import { DisplayableError } from '../../../error/common';
import { usePasswordSignIn } from './passwordAuthHooks';

const validationSchema = object({
  emailInput: string()
    .required('必ず入力してください')
    .email('正しい形式のメールアドレスを入力してください')
    .max(100, '100文字以下にしてください'),
  passwordInput: string()
    .required('必ず入力してください')
    .max(100, '100文字以下にしてください'),
});

function getErrorMessage(error: DisplayableError | null) {
  if (error == null) {
    return '';
  }

  return error.format();
}

export function usePasswordAuthForm(authRepository: AuthRepository) {
  const { isLoading, error, mutate } = usePasswordSignIn(authRepository);

  const formController = useFormik({
    initialValues: {
      emailInput: '',
      passwordInput: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, helpers) => {
      mutate(
        { email: values.emailInput, password: values.passwordInput },
        {
          onError: () => {
            helpers.resetForm();
          },
        }
      );
    },
  });

  const emailHasError =
    formController.touched.emailInput &&
    Boolean(formController.errors.emailInput);
  const passwordHasError =
    formController.touched.passwordInput &&
    Boolean(formController.errors.passwordInput);

  const emailErrorMessage =
    formController.touched.emailInput && formController.errors.emailInput;
  const passwordErrorMessage =
    formController.touched.passwordInput && formController.errors.passwordInput;

  const signInErrorMessage = getErrorMessage(error);

  return {
    formController,
    isLoading,
    emailHasError,
    passwordHasError,
    emailErrorMessage,
    passwordErrorMessage,
    signInErrorMessage,
  };
}
