import { Duration } from 'date-fns';

export class NumberOfVisitors {
  readonly visitors: number;
  readonly duration: Duration;

  constructor(params: { visitors: number; duration: Duration }) {
    this.visitors = params.visitors;
    this.duration = params.duration;
  }
}
