import { CustomerSegment } from '../valueObject/customerSegment';
import { GeoPoint } from '../valueObject/geoPoint';
import { NumberOfVisitors } from '../valueObject/numberOfVisitors';
import { Price } from '../valueObject/price';
import { SpaceId } from '../valueObject/spaceId';
import { SpaceDisplay } from './spaceDisplay';
import { SpaceImage } from './spaceImage';

export class Space {
  constructor(
    public readonly id: SpaceId,
    public readonly headline: string,
    public readonly access: string,
    public readonly numberOfVisitors: NumberOfVisitors,
    public readonly customerSegment: CustomerSegment,
    public readonly price: Price,
    public readonly websiteUrl: string,
    public readonly coordinate: GeoPoint,
    public readonly images: SpaceImage[],
    public readonly displays: SpaceDisplay[]
  ) {}
}
