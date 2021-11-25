import { Duration } from 'date-fns';

export class NumberOfVisitors {
  constructor(
    public readonly visitors: number,
    public readonly duration: Duration
  ) {}
}
