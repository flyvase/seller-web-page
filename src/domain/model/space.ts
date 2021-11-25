import { CustomerSegment } from '../valueObject/customerSegment';
import { GeoPoint } from '../valueObject/geoPoint';
import { NumberOfVisitors } from '../valueObject/numberOfVisitors';
import { Price } from '../valueObject/price';
import { SpaceId } from '../valueObject/spaceId';
import { SpaceDisplay } from './spaceDisplay';
import { SpaceImage } from './spaceImage';

export class Space {
  readonly id: SpaceId;
  readonly headline: string;
  readonly price: Price;
  readonly coordinate: GeoPoint;
  readonly images: SpaceImage[];
  readonly displays: SpaceDisplay[];
  readonly access?: string;
  readonly numberOfVisitors?: NumberOfVisitors;
  readonly customerSegment?: CustomerSegment;
  readonly websiteUrl?: string;

  constructor(params: {
    id: SpaceId;
    headline: string;
    price: Price;
    coordinate: GeoPoint;
    images: SpaceImage[];
    displays: SpaceDisplay[];
    access?: string;
    numberOfVisitors?: NumberOfVisitors;
    customerSegment?: CustomerSegment;
    websiteUrl?: string;
  }) {
    this.id = params.id;
    this.headline = params.headline;
    this.price = params.price;
    this.coordinate = params.coordinate;
    this.images = params.images;
    this.displays = params.displays;
    this.access = params.access;
    this.numberOfVisitors = params.numberOfVisitors;
    this.customerSegment = params.customerSegment;
    this.websiteUrl = params.websiteUrl;
  }
}
