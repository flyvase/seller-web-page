import { SpaceId } from '../../../../domain/valueObject/spaceId';
import { HttpRequest } from '../core/httpRequest';
import { buildGetHeaders } from './helpers';

export class FetchSpaceRequest extends HttpRequest {
  constructor(params: { id: SpaceId; authToken: string }) {
    super({
      path: `spaces/${params.id.value}/`,
      method: 'GET',
      headers: buildGetHeaders(params.authToken),
    });
  }
}
