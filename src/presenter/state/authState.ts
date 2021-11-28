import { atom, selector } from 'recoil';

export class AuthState {
  readonly uid: string;

  constructor(params: { uid: string }) {
    this.uid = params.uid;
  }
}

export const authState = atom<AuthState | null>({
  key: 'authState',
  default: null,
});

export const isSignedInSelector = selector<boolean>({
  key: 'isSignedIn',
  get: ({ get }) => get(authState) != null,
});
