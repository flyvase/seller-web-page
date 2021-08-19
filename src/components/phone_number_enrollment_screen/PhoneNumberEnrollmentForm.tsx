import React, { useState, useContext, useRef } from 'react';

import { useRequestSmsWithNewPhoneNumber } from '../../controllers/hooks/common/authController';
import { AuthRepositoryContext } from '../../repositories/authRepository';
import { LogoForm } from '../common/LogoForm';
import { PinCodeForm } from '../common/PinCodeForm';
import { PhoneNumberForm } from './PhoneNumberForm';

type InputMode = 'phoneNumber' | 'pinCode';

export const PhoneNumberEnrollmentForm: React.VFC = () => {
  const [phoneNumber, setPhoneNumber] = useState<string>('');
  const [inputMode, setInputMode] = useState<InputMode>('phoneNumber');
  const verificationIdRef = useRef<string>(null!);

  const authRepository = useContext(AuthRepositoryContext);
  const requestSms = useRequestSmsWithNewPhoneNumber(authRepository);

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
          onSubmit={async (phoneNumber) => {
            setPhoneNumber(phoneNumber);
            const verificationId = await requestSms(phoneNumber);
            verificationIdRef.current = verificationId;
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
