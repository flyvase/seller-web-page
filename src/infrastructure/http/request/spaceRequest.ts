import { HttpRequest } from '../core/httpClient';
import { buildGetDefaultHeader } from './helper';

export class SpaceGetRequest extends HttpRequest {
  constructor(authToken: string) {
    super('spaces/', {
      mode: 'cors',
      httpMethod: 'GET',
      httpHeaders: buildGetDefaultHeader(authToken),
    });
  }
}
