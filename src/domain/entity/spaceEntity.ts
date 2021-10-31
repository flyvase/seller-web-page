import { uint32MaxValue } from '../../core/constants';
import { InvalidArgumentError } from '../../core/error/commonErrors';

export class SpaceEntity {
  readonly id: number;
  readonly name: string;

  constructor(id: number, name: string) {
    if (id >= uint32MaxValue) {
      throw new InvalidArgumentError(
        `"id" must be smaller than ${uint32MaxValue} value`,
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
