import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { HttpClient, HttpResponse } from '../http/core/httpClient';
import { SpaceGetRequest } from '../http/request/spaceRequest';

export class SpaceRepositoryImpl implements SpaceRepository {
  constructor(client: HttpClient) {
    this.client = client;
  }

  client: HttpClient;

  async fetch(authToken: string): Promise<void> {
    console.log('pre request');
    // const request = new SpaceGetRequest(authToken);
    // await this.client.execute(request);
    // console.log(response);
    // return response;
  }
}
