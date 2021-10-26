import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { HttpClient, HttpResponse } from '../http/core/httpClient';
import { SpaceGetRequest } from '../http/request/spaceRequest';

export class SpaceRepositoryImpl implements SpaceRepository {
  constructor(client: HttpClient) {
    this.client = client;
  }

  client: HttpClient;

  async list(authToken: string): Promise<HttpResponse> {
    const request = new SpaceGetRequest(authToken);
    const response = await this.client.execute(request);
    return response;
  }
}
