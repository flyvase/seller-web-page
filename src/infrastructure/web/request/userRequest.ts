import { WebRequest } from '../core/webClient';
import { buildDefaultHeader } from './helper';

export class UserPostRequest extends WebRequest {
  constructor(
    uid: string,
    firstName: string,
    lastName: string,
    authToken: string
  ) {
    super('user/', {
      mode: 'cors',
      httpMethod: 'POST',
      httpHeaders: buildDefaultHeader(authToken),
      body: new Map<string, unknown>([
        ['uid', uid],
        ['first_name', firstName],
        ['last_name', lastName],
      ]),
    });
  }
}
