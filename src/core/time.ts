import { millisecondsToSeconds } from 'date-fns';

export function millisecondsToDuration(milliseconds: number): Duration {
  return {
    seconds: millisecondsToSeconds(milliseconds),
  };
}
