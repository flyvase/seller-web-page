export class GeoPoint {
  readonly latitude: number;
  readonly longitude: number;

  constructor(params: { latitude: number; longitude: number }) {
    this.latitude = params.latitude;
    this.longitude = params.longitude;
  }
}
