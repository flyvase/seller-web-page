import { Duration, formatDuration } from './duration';

export class Price {
  readonly price: number;
  readonly duration: Duration;

  constructor(params: { price: number; duration: Duration }) {
    this.price = params.price;
    this.duration = params.duration;
  }

  format(): string {
    return `${this.price}円 / ${formatDuration(this.duration)}`;
  }
}
