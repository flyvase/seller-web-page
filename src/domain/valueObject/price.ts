import { Duration } from 'date-fns';

export class Price {
  constructor(
    public readonly price: number,
    public readonly duration: Duration
  ) {}
}
