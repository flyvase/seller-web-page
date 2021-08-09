import { atom } from 'recoil';

import { Auth } from '../../../entities/auth';

export const authState = atom<Auth | null>({
  key: 'authState',
  default: null,
});
