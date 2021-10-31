import { HttpRequest } from '../core/httpClient';
import { buildPostDefaultHeader } from './helper';

export class UserPostRequest extends HttpRequest {
  constructor(
    uid: string,
    firstName: string,
    lastName: string,
    authToken: string
  ) {
    super('users/', {
      mode: 'cors',
      httpMethod: 'POST',
      httpHeaders: buildPostDefaultHeader(authToken),
      body: new Map<string, unknown>([
        ['uid', uid],
        ['first_name', firstName],
        ['last_name', lastName],
      ]),
    });
  }
}
