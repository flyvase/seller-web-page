import { SpaceId } from '../../../domain/valueObject/spaceId';
import { HttpRequest } from '../core/httpRequest';
import { buildGetHeaders } from './helpers';

export class GetSpaceOgpRequest extends HttpRequest {
  constructor(params: { id: SpaceId; authToken: string }) {
    super({
      path: `spaces/${params.id.value}/ogp/`,
      method: 'GET',
      headers: buildGetHeaders(params.authToken),
    });
  }
}
