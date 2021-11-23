import { CustomerSegment } from '../valueObject/customerSegment';
import { GeoPoint } from '../valueObject/geoPoint';
import { NumberOfVisitors } from '../valueObject/numberOfVisitors';
import { Price } from '../valueObject/price';
import { SpaceId } from '../valueObject/spaceId';
import { SpaceDisplay } from './spaceDisplay';
import { SpaceImage } from './spaceImage';

export class Space {
  constructor(
    public id: SpaceId,
    public headline: string,
    public access: string,
    public numberOfVisitors: NumberOfVisitors,
    public customerSegment: CustomerSegment,
    public price: Price,
    public websiteUrl: string,
    public coordinate: GeoPoint,
    public images: SpaceImage[],
    public displays: SpaceDisplay[]
  ) {}
}
