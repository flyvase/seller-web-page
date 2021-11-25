import { millisecondsToDuration } from '../../../../core/time';
import { Space } from '../../../../domain/model/space';
import { SpaceDisplay } from '../../../../domain/model/spaceDisplay';
import { SpaceImage } from '../../../../domain/model/spaceImage';
import { CustomerSegment } from '../../../../domain/valueObject/customerSegment';
import { GeoPoint } from '../../../../domain/valueObject/geoPoint';
import { NumberOfVisitors } from '../../../../domain/valueObject/numberOfVisitors';
import { Price } from '../../../../domain/valueObject/price';
import { sexFromCode } from '../../../../domain/valueObject/sex';
import { SpaceDisplayId } from '../../../../domain/valueObject/spaceDisplayId';
import { SpaceId } from '../../../../domain/valueObject/spaceId';
import { SpaceImageId } from '../../../../domain/valueObject/spaceImageId';

export type FetchSpaceResponse = {
  id: number;
  headline: string;
  access?: string;
  number_of_visitors?: {
    visitors: number;
    duration: number;
  };
  customer_segment?: {
    sex: string;
    min_age: number;
    max_age: number;
  };
  price: {
    price: number;
    duration: number;
  };
  coordinate: {
    latitude: number;
    longitude: number;
  };
  website_url?: string;
  images: {
    id: number;
    image_url: string;
  }[];
  displays: {
    id: number;
    image_url: string;
    description: string;
  }[];
};

export function fetchSpaceResponseToSpaceModel(
  response: FetchSpaceResponse
): Space {
  return new Space({
    id: new SpaceId({ value: response.id }),
    headline: response.headline,
    price: new Price({
      price: response.price.price,
      duration: millisecondsToDuration(response.price.duration),
    }),
    coordinate: new GeoPoint({
      latitude: response.coordinate.latitude,
      longitude: response.coordinate.longitude,
    }),
    images: response.images.map(
      (i) =>
        new SpaceImage({
          id: new SpaceImageId({ value: i.id }),
          imageUrl: i.image_url,
        })
    ),
    displays: response.displays.map(
      (d) =>
        new SpaceDisplay({
          id: new SpaceDisplayId({ value: d.id }),
          imageUrl: d.image_url,
          description: d.description,
        })
    ),
    access: response.access,
    numberOfVisitors:
      response.number_of_visitors != undefined
        ? new NumberOfVisitors({
            visitors: response.number_of_visitors.visitors,
            duration: millisecondsToDuration(
              response.number_of_visitors.duration
            ),
          })
        : undefined,
    customerSegment:
      response.customer_segment != undefined
        ? new CustomerSegment({
            sex: sexFromCode(response.customer_segment.sex),
            minAge: response.customer_segment.min_age,
            maxAge: response.customer_segment.max_age,
          })
        : undefined,
    websiteUrl: response.website_url,
  });
}
