export type Duration = 'day' | 'week';

export function durationFromMilliseconds(milliseconds: number): Duration {
  switch (milliseconds) {
    case 86400000:
      return 'day';
    case 604800000:
      return 'week';
    default:
      return 'day';
  }
}
