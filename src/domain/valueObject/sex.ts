export type Sex = 'notKnown' | 'male' | 'female' | 'notApplicable';

export function sexFromCode(code: string): Sex {
  switch (code) {
    case '1':
      return 'male';
    case '2':
      return 'female';
    case '9':
      return 'notApplicable';
    default:
      return 'notKnown';
  }
}
