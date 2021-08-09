import { InvalidArgumentError } from '../core/errors';

export class User {
  id?: string;
  firstName: string;
  lastName: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;

  constructor(
    firstName: string,
    lastName: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date
  ) {
    const errors: { firstName?: string; lastName?: string } = {};
    if (firstName.length >= 100) {
      errors.firstName = 'firstName must be shorter than 100 characters';
    }
    if (lastName.length >= 100) {
      errors.lastName = 'lastName must be shorter than 100 characters';
    }

    if (Object.keys(errors).length !== 0) {
      throw new InvalidArgumentError(errors, new.target.name);
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
