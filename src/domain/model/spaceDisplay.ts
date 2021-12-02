import { SpaceDisplayId } from '../valueObject/spaceDisplayId';

export class SpaceDisplay {
  readonly id: SpaceDisplayId;
  readonly imageUrl: string;
  readonly description: string;

  constructor(params: {
    id: SpaceDisplayId;
    imageUrl: string;
    description: string;
  }) {
    this.id = params.id;
    this.imageUrl = params.imageUrl;
    this.description = params.description;
  }
}
