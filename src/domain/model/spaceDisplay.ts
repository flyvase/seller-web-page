import { SpaceDisplayId } from '../valueObject/spaceDisplayId';

export class SpaceDisplay {
  constructor(
    public readonly id: SpaceDisplayId,
    public readonly image_url: string,
    public readonly description: string
  ) {}
}
