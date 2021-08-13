import { useRecoilState } from 'recoil';
import React, { useRef } from 'react';

import { PinCodeForm } from '../components/sign_up_screen/PinCodeForm';
import { SignUpForm } from '../components/sign_up_screen/SignUpForm';
import { formModeState } from '../controllers/state/sign_up_screen/formModeState';
import { User } from '../entities/user';
import { OnBoardingForm } from '../components/common/OnBoardingForm';

export type SignUpFormMode = 'signUp' | 'pinCode';

export const SignUpScreen: React.VFC = () => {
  const [formMode] = useRecoilState(formModeState);

  const userRef = useRef<User>(null!);
  const phoneNumberRef = useRef<string>(null!);

  return (
    <OnBoardingForm
      title={
        formMode === 'signUp'
          ? 'アカウントを作成'
          : 'SMSに送信された6桁の番号を入力してください'
      }
    >
      {formMode === 'signUp' ? (
        <SignUpForm
          onSubmit={(firstName, lastName, phoneNumber) => {
            userRef.current = new User(firstName, lastName);
            phoneNumberRef.current = phoneNumber;
          }}
        />
      ) : (
        <PinCodeForm />
      )}
    </OnBoardingForm>
  );
};
