import { UserRepository } from '../../domain/repository/userRepository';
import { WebClient } from '../web/core/webClient';
import { UserPostRequest } from '../web/request/userRequest';

export class UserRepositoryImpl implements UserRepository {
  constructor(client: WebClient) {
    this.client = client;
  }

  client: WebClient;

  async create(
    uid: string,
    firstName: string,
    lastName: string,
    authToken: string
  ): Promise<void> {
    const request = new UserPostRequest(uid, firstName, lastName, authToken);
    await this.client.execute(request);
  }
}
