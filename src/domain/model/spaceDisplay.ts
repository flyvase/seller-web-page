import { SpaceDisplayId } from '../valueObject/spaceDisplayId';

export class SpaceDisplay {
  constructor(
    public id: SpaceDisplayId,
    public image_url: string,
    public description: string
  ) {}
}
