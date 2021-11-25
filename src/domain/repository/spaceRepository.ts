import { Space } from '../model/space';
import { SpaceId } from '../valueObject/spaceId';

export interface SpaceRepository {
  List(): Promise<Space[]>;
  Fetch(id: SpaceId): Promise<Space>;
}
