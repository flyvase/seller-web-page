import { InvalidArgumentError } from '../core/errors';

export class Auth {
  uid: string;

  constructor(uid: string) {
    const errors: { uid?: string } = {};
    if (uid.length >= 255) {
      errors.uid = 'uid must be shorter than 255 characters';
    }

    if (Object.keys(errors).length !== 0) {
      throw new InvalidArgumentError(errors, new.target.name);
    }

    this.uid = uid;
  }
}
