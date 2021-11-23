import { SpaceImageId } from '../valueObject/spaceImageId';

export class SpaceImage {
  constructor(public id: SpaceImageId, public imageUrl: string) {}
}
