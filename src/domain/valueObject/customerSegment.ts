import { Sex } from './sex';

export class CustomerSegment {
  constructor(
    public sex: Sex = 'notKnown',
    public minAge: number,
    public maxAge: number
  ) {}
}
