import { Space } from '../../domain/model/space';
import { AuthRepository } from '../../domain/repository/authRepository';
import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { SpaceId } from '../../domain/valueObject/spaceId';
import { UnexpectedError } from '../../error/common';
import { NotFoundError } from '../../error/repository';
import { HttpClient } from '../gateway/http/core/httpClient';
import { FetchSpaceRequest } from '../gateway/http/request/fetchSpaceRequest';
import { ListSpacesRequest } from '../gateway/http/request/listSpacesRequest';
import {
  FetchSpaceResponse,
  fetchSpaceResponseToSpaceModel,
} from '../gateway/http/response/fetchSpaceResponse';
import {
  listSpaceResponseToSpaceModels,
  ListSpacesResponse,
} from '../gateway/http/response/listSpacesResponse';

export class SpaceRepositoryImpl implements SpaceRepository {
  private readonly httpClient: HttpClient;
  private readonly authRepository: AuthRepository;

  constructor(params: {
    httpClient: HttpClient;
    authRepository: AuthRepository;
  }) {
    this.httpClient = params.httpClient;
    this.authRepository = params.authRepository;
  }

  async List(): Promise<Space[]> {
    const token = await this.authRepository.authToken;
    const request = new ListSpacesRequest({ authToken: token });
    const response = await this.httpClient.execute<
      ListSpacesRequest,
      ListSpacesResponse
    >(request);
    if (response.ok) {
      return listSpaceResponseToSpaceModels(response.body!);
    }

    throw new UnexpectedError({ message: response.statusText });
  }

  async Fetch(id: SpaceId): Promise<Space> {
    const token = await this.authRepository.authToken;
    const request = new FetchSpaceRequest({ id: id, authToken: token });
    const response = await this.httpClient.execute<
      FetchSpaceRequest,
      FetchSpaceResponse
    >(request);

    if (response.ok) {
      return fetchSpaceResponseToSpaceModel(response.body!);
    }

    switch (response.statusCode) {
      case 404:
        throw new NotFoundError();
      default:
        throw new UnexpectedError({ message: response.statusText });
    }
  }
}