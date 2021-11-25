import { Space } from '../model/space';
import { SpaceId } from '../valueObject/spaceId';

export interface SpaceRepository {
  List(): Space[];
  Fetch(id: SpaceId): Space;
}
