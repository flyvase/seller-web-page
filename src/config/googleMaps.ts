import { environment } from './process';

export function getGoogleMapsApiKey() {
  switch (environment) {
    case 'prod':
      return 'AIzaSyB3BUiwlmQIJU_O5ZMHmiatUEkEX15f7-g';
    case 'stg':
      return 'AIzaSyDEjdrQuM0dzo8TQ1p3Xtmgm-s8O3YZX1k';
    default:
      return 'AIzaSyB80FmCCcA4FjAZkx_a8Z--tCg_LcgaCiw';
  }
}
