import { InvalidArgumentError } from '../../core/error/commonErrors';

export class AuthEntity {
  readonly uid: string;

  constructor(uid: string) {
    if (uid.length >= 255) {
      throw new InvalidArgumentError(
        '"uid" must be shorter than 255 characters',
        'uid',
        'AuthEntity'
      );
    }

    this.uid = uid;
  }
}
