import React, { useRef, useState } from 'react';

import { OnBoardingForm } from '../components/common/OnBoardingForm';
import { PhoneNumberForm } from '../components/phone_verification_screen/PhoneNumberForm';
import { PinCodeForm } from '../components/common/PinCodeForm';

type FormMode = 'phoneNumber' | 'pinCode';

export const PhoneVerificationScreen: React.VFC = () => {
  const phoneNumberRef = useRef<string>(null!);

  const [formMode] = useState<FormMode>('phoneNumber');

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
        <PinCodeForm
          onSubmit={(pinCode) => {
            console.log(pinCode);
          }}
        />
      )}
    </OnBoardingForm>
  );
};
