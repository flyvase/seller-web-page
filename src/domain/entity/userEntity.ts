import { InvalidArgumentError } from '../../core/error/commonErrors';

export class UserEntity {
  readonly id?: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date;

  constructor(
    firstName: string,
    lastName: string,
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date
  ) {
    if (firstName.length >= 100) {
      throw new InvalidArgumentError(
        '"firstName" must be shorter than 100 characters',
        'firstName',
        'UserEntity'
      );
    }
    if (lastName.length >= 100) {
      throw new InvalidArgumentError(
        '"lastName" must be shorter than 100 characters',
        'lastName',
        'UserEntity'
      );
    }

    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
