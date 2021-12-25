import { OgpImage } from './ogpImage';

export class OgpProperties {
  readonly url: string;
  readonly images: OgpImage[];
  readonly title?: string;
  readonly description?: string;

  constructor(params: {
    url: string;
    images: OgpImage[];
    title?: string;
    description?: string;
  }) {
    this.url = params.url;
    this.images = params.images;
    this.title = params.title;
    this.description = params.description;
  }
}
