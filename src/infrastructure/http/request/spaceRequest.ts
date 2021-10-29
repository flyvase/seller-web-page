import { HttpRequest } from '../core/httpClient';
import { buildGetDefaultHeader } from './helper';

export class SpaceGetRequest extends HttpRequest {
  constructor(authToken: string, id?: number) {
    const uri = id ? `spaces/${id}` : 'spaces/';
    super(uri, {
      mode: 'cors',
      httpMethod: 'GET',
      httpHeaders: buildGetDefaultHeader(authToken),
    });
  }
}
