import React from 'react';
import { useRef } from 'react';
import { useRecoilValue } from 'recoil';

import { OnBoardingForm } from '../components/common/OnBoardingForm';
import { PhoneNumberForm } from '../components/phone_verification_screen/PhoneNumberForm';
import { PinCodeForm } from '../components/phone_verification_screen/PinCodeForm';
import { formModeState } from '../controllers/state/phone_verification_screen/formModeState';

export const PhoneVerificationScreen: React.VFC = () => {
  const phoneNumberRef = useRef<string>(null!);

  const formMode = useRecoilValue(formModeState);

  return (
    <OnBoardingForm
      title={
        formMode === 'phoneNumber'
          ? '電話番号を入力してください'
          : 'SMSに送信された6桁の番号を入力してください'
      }
    >
      {formMode === 'phoneNumber' ? (
        <PhoneNumberForm
          onSubmit={(phoneNumber) => {
            phoneNumberRef.current = phoneNumber;
          }}
        />
      ) : (
        <PinCodeForm />
      )}
    </OnBoardingForm>
  );
};
