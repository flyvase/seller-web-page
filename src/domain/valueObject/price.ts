import { Duration } from 'date-fns';

export class Price {
  constructor(public price: number, public duration: Duration) {}
}
