export class UserEntity {
  readonly id?: string;
  readonly createdAt?: Date;
  readonly updatedAt?: Date;
  readonly deletedAt?: Date;

  constructor(
    id?: string,
    createdAt?: Date,
    updatedAt?: Date,
    deletedAt?: Date
  ) {
    this.id = id;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.deletedAt = deletedAt;
  }
}
