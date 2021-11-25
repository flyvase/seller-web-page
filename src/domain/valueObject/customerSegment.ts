import { Sex } from './sex';

export class CustomerSegment {
  constructor(
    public readonly sex: Sex = 'notKnown',
    public readonly minAge: number,
    public readonly maxAge: number
  ) {}
}
