import { atom } from 'recoil';

import { SignUpFormMode } from '../../../screens/SignUpScreen';

export const formModeState = atom<SignUpFormMode>({
  key: 'signUpFormModeState',
  default: 'signUp',
});
