import { HttpRequest } from '../core/httpClient';
import { buildGetDefaultHeader } from './helper';

export class ListSpaceRequest extends HttpRequest {
  constructor(authToken: string) {
    super('spaces/', {
      mode: 'cors',
      httpMethod: 'GET',
      httpHeaders: buildGetDefaultHeader(authToken),
    });
  }
}

export class FetchSpaceRequest extends HttpRequest {
  constructor(authToken: string, id: number) {
    const uri = `spaces/${id}/`;
    super(uri, {
      mode: 'cors',
      httpMethod: 'GET',
      httpHeaders: buildGetDefaultHeader(authToken),
    });
  }
}
