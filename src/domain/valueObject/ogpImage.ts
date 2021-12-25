export class OgpImage {
  readonly url: string;
  readonly width?: number;
  readonly height?: number;

  constructor(params: { url: string; width?: number; height?: number }) {
    this.url = params.url;
    this.width = params.width;
    this.height = params.height;
  }
}
