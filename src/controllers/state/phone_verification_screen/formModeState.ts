import { atom } from 'recoil';

type PhoneVerificationFormMode = 'phoneNumber' | 'pinCode';

export const formModeState = atom<PhoneVerificationFormMode>({
  key: 'signUpFormModeState',
  default: 'phoneNumber',
});
