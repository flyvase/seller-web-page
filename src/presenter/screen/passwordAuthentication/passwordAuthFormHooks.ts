import { useFormik } from 'formik';
import { useLocation, useNavigate } from 'react-router';
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
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

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
          onSuccess: () => {
            navigate(from, { replace: true });
          },
          onError: () => {
            helpers.resetForm();
          },
        }
      );
    },
  });

  const signInErrorMessage = getErrorMessage(error);

  return {
    formController,
    isLoading,
    signInErrorMessage,
  };
}
