import { SpaceEntity } from '../../domain/entity/spaceEntity';
import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { HttpClient } from '../http/core/httpClient';
import { SpaceGetRequest } from '../http/request/spaceRequest';

interface Space {
  id: number;
  name: string;
}

export class SpaceRepositoryImpl implements SpaceRepository {
  constructor(client: HttpClient) {
    this.client = client;
  }

  client: HttpClient;

  async list(authToken: string): Promise<SpaceEntity[]> {
    const request = new SpaceGetRequest(authToken);
    const response = await this.client.execute(request);
    const body = response.body!;
    const spaces = [] as SpaceEntity[];
    body.forEach((space) => {
      spaces.push(new SpaceEntity((space as Space).id, (space as Space).name));
    });
    return spaces;
  }
}
