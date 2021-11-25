import { Sex } from './sex';

export class CustomerSegment {
  readonly sex: Sex;
  readonly minAge: number;
  readonly maxAge: number;

  constructor(params: { sex?: Sex; minAge: number; maxAge: number }) {
    this.sex = params.sex ?? 'notKnown';
    this.minAge = params.minAge;
    this.maxAge = params.maxAge;
  }
}
