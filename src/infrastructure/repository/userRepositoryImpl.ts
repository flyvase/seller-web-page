import { UserRepository } from '../../domain/repository/userRepository';
import { HttpClient } from '../http/core/httpClient';
import { UserPostRequest } from '../http/request/userRequest';

export class UserRepositoryImpl implements UserRepository {
  constructor(client: HttpClient) {
    this.client = client;
  }

  client: HttpClient;

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
