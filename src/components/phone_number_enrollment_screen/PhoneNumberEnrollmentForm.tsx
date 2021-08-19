import React, { useState } from 'react';

import { LogoForm } from '../common/LogoForm';
import { PinCodeForm } from '../common/PinCodeForm';
import { PhoneNumberForm } from './PhoneNumberForm';

type InputMode = 'phoneNumber' | 'pinCode';

export const PhoneNumberEnrollmentForm: React.VFC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [inputMode, setInputMode] = useState<InputMode>('phoneNumber');

  return (
    <LogoForm
      title={
        inputMode === 'phoneNumber'
          ? '電話番号を登録します'
          : `${phoneNumber}に送信した6桁の数字を入力してください`
      }
    >
      {inputMode === 'phoneNumber' ? (
        <PhoneNumberForm
          onSubmit={(phoneNumber) => {
            setPhoneNumber(phoneNumber);
            setInputMode('pinCode');
          }}
        />
      ) : (
        <PinCodeForm
          onSubmit={(pinCode) => {
            console.log(pinCode);
          }}
        />
      )}
    </LogoForm>
  );
};
