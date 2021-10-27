import { InvalidArgumentError } from '../../core/error/commonErrors';

export class SpaceEntity {
  readonly id: number;
  readonly name: string;

  constructor(id: number, name: string) {
    if (id >= 4294967295) {
      throw new InvalidArgumentError(
        '"id" must be shorter than 4294967295 characters',
        'id',
        'SpaceEntity'
      );
    }

    if (name.length >= 150) {
      throw new InvalidArgumentError(
        '"name" must be shorter than 150 characters',
        'name',
        'SpaceEntity'
      );
    }

    this.id = id;
    this.name = name;
  }
}
