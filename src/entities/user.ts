import { InvalidArgumentError } from '../core/errors';

export class User {
  id?: string;
  uid: string;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(
    uid: string,
    firstName: string,
    lastName: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date
  ) {
    const errors: { uid?: string; firstName?: string; lastName?: string } = {};
    if (uid.length >= 255) {
      errors.uid = 'uid must be shorter than 255 characters';
    }
    if (firstName.length >= 100) {
      errors.firstName = 'firstName must be shorter than 100 characters';
    }
    if (lastName.length >= 100) {
      errors.lastName = 'lastName must be shorter than 100 characters';
    }

    if (Object.keys(errors).length !== 0) {
      throw new InvalidArgumentError(errors, new.target.name);
    }

    this.uid = uid;
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
