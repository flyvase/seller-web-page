import { InvalidArgumentError } from '../../core/error/commonErrors';

export class SpaceEntity {
  readonly id: string;
  readonly name: string;

  constructor(id: string, name: string) {
    if (id.length >= 255) {
      throw new InvalidArgumentError(
        '"id" must be shorter than 255 characters',
        'id',
        'SpaceEntity'
      );
    }

    if (name.length >= 255) {
      throw new InvalidArgumentError(
        '"name" must be shorter than 255 characters',
        'name',
        'SpaceEntity'
      );
    }

    this.id = id;
    this.name = name;
  }
}
