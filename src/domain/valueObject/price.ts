import { Duration } from './duration';

export class Price {
  readonly price: number;
  readonly duration: Duration;

  constructor(params: { price: number; duration: Duration }) {
    this.price = params.price;
    this.duration = params.duration;
  }
}
