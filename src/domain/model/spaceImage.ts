import { SpaceImageId } from '../valueObject/spaceImageId';

export class SpaceImage {
  readonly id: SpaceImageId;
  readonly imageUrl: string;

  constructor(params: { id: SpaceImageId; imageUrl: string }) {
    this.id = params.id;
    this.imageUrl = params.imageUrl;
  }
}
