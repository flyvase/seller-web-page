import { HttpRequest } from '../core/httpRequest';
import { buildGetHeaders } from './helpers';

export class ListSpacesRequest extends HttpRequest {
  constructor(params: { authToken: string }) {
    super({
      path: 'spaces/',
      method: 'GET',
      headers: buildGetHeaders(params.authToken),
    });
  }
}
