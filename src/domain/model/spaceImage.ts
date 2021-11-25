import { SpaceImageId } from '../valueObject/spaceImageId';

export class SpaceImage {
  constructor(
    public readonly id: SpaceImageId,
    public readonly imageUrl: string
  ) {}
}
