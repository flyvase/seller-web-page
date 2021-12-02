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

export function formatDuration(duration: Duration) {
  switch (duration) {
    case 'day':
      return '日';
    case 'week':
      return '週';
  }
}
