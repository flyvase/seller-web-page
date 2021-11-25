import { formatSex, Sex } from './sex';

export class CustomerSegment {
  readonly sex: Sex;
  readonly minAge: number;
  readonly maxAge: number;

  constructor(params: { sex?: Sex; minAge: number; maxAge: number }) {
    this.sex = params.sex ?? 'notKnown';
    this.minAge = params.minAge;
    this.maxAge = params.maxAge;
  }

  format(): string {
    const result = `${this.minAge}代~${this.maxAge}代`;
    if (this.sex === 'male' || this.sex === 'female') {
      return result + formatSex(this.sex);
    }

    return result;
  }
}
