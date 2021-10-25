import { HttpRequest } from '../core/httpClient';
import { buildPostDefaultHeader } from './helper';

export class SpaceGetRequest extends HttpRequest {
  constructor(authToken: string) {
    super('space/', {
      mode: 'cors',
      httpMethod: 'GET',
      httpHeaders: buildPostDefaultHeader(authToken),
    });
  }
}
