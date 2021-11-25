import { millisecondsToDuration } from '../../../../core/time';
import { Space } from '../../../../domain/model/space';
import { SpaceImage } from '../../../../domain/model/spaceImage';
import { CustomerSegment } from '../../../../domain/valueObject/customerSegment';
import { GeoPoint } from '../../../../domain/valueObject/geoPoint';
import { NumberOfVisitors } from '../../../../domain/valueObject/numberOfVisitors';
import { Price } from '../../../../domain/valueObject/price';
import { sexFromCode } from '../../../../domain/valueObject/sex';
import { SpaceId } from '../../../../domain/valueObject/spaceId';
import { SpaceImageId } from '../../../../domain/valueObject/spaceImageId';

export type ListSpacesResponse = {
  list: {
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
    images: {
      id: number;
      image_url: string;
    }[];
  }[];
};

export function listSpaceResponseToSpaceModels(
  response: ListSpacesResponse
): Space[] {
  return response.list.map((e) => {
    return new Space({
      id: new SpaceId({ value: e.id }),
      headline: e.headline,
      price: new Price({
        price: e.price.price,
        duration: millisecondsToDuration(e.price.duration),
      }),
      coordinate: new GeoPoint({
        latitude: e.coordinate.latitude,
        longitude: e.coordinate.longitude,
      }),
      images: e.images.map(
        (i) =>
          new SpaceImage({
            id: new SpaceImageId({ value: i.id }),
            imageUrl: i.image_url,
          })
      ),
      displays: [],
      access: e.access,
      numberOfVisitors:
        e.number_of_visitors != undefined
          ? new NumberOfVisitors({
              visitors: e.number_of_visitors.visitors,
              duration: millisecondsToDuration(e.number_of_visitors.duration),
            })
          : undefined,
      customerSegment:
        e.customer_segment != undefined
          ? new CustomerSegment({
              sex: sexFromCode(e.customer_segment.sex),
              minAge: e.customer_segment.min_age,
              maxAge: e.customer_segment.max_age,
            })
          : undefined,
    });
  });
}
