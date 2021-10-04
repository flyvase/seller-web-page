import { InvalidArgumentError } from '../../core/error/commonErrors';

export class AuthEntity {
  readonly uid: string;
  readonly token: string;

  constructor(uid: string, token: string) {
    if (uid.length >= 255) {
      throw new InvalidArgumentError(
        '"uid" must be shorter than 255 characters',
        'uid',
        'AuthEntity'
      );
    }

    this.uid = uid;
    this.token = token;
  }
}
