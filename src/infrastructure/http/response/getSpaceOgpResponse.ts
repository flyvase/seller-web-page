import { OgpImage } from '../../../domain/valueObject/ogpImage';
import { OgpProperties } from '../../../domain/valueObject/ogpProperties';

export type GetSpaceOgpResponse = {
  url: string;
  title: string;
  description: string;
  images: {
    url: string;
    secure_url: string;
    type: string;
    width: number;
    height: number;
  }[];
};

export function getSpaceOgpResponseToOgpProperties(
  response: GetSpaceOgpResponse
) {
  return new OgpProperties({
    url: response.url,
    images: response.images.map(
      (i) =>
        new OgpImage({
          url: i.url,
          width: i.width === 0 ? undefined : i.width,
          height: i.height === 0 ? undefined : i.height,
        })
    ),
    title: response.title === '' ? undefined : response.title,
    description: response.description === '' ? undefined : response.description,
  });
}
