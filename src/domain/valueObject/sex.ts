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

export function formatSex(sex: Sex): string {
  switch (sex) {
    case 'notKnown':
      return '不明';
    case 'male':
      return '男性';
    case 'female':
      return '女性';
    case 'notApplicable':
      return '適用不能';
  }
}
