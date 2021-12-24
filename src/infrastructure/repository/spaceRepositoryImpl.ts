import { Space } from '../../domain/model/space';
import { AuthRepository } from '../../domain/repository/authRepository';
import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { SpaceId } from '../../domain/valueObject/spaceId';
import { UnexpectedError } from '../../error/common';
import { NotFoundError } from '../../error/repository';
import { HttpClient } from '../http/core/httpClient';
import { FetchSpaceRequest } from '../http/request/fetchSpaceRequest';
import { ListSpacesRequest } from '../http/request/listSpacesRequest';
import {
  FetchSpaceResponse,
  fetchSpaceResponseToSpaceModel,
} from '../http/response/fetchSpaceResponse';
import {
  listSpaceResponseToSpaceModels,
  ListSpacesResponse,
} from '../http/response/listSpacesResponse';

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

  async list(): Promise<Space[]> {
    const token = await this.authRepository.getAuthToken();
    const request = new ListSpacesRequest({ authToken: token });
    const response = await this.httpClient.execute<
      ListSpacesRequest,
      ListSpacesResponse
    >(request);
    if (!response.ok) {
      throw new UnexpectedError({ message: response.statusText });
    }

    return listSpaceResponseToSpaceModels(response.body!);
  }

  async fetch(id: SpaceId): Promise<Space> {
    const token = await this.authRepository.getAuthToken();
    const request = new FetchSpaceRequest({ id: id, authToken: token });
    const response = await this.httpClient.execute<
      FetchSpaceRequest,
      FetchSpaceResponse
    >(request);

    if (!response.ok) {
      switch (response.statusCode) {
        case 404:
          throw new NotFoundError();
        default:
          throw new UnexpectedError({ message: response.statusText });
      }
    }

    return fetchSpaceResponseToSpaceModel(response.body!);
  }
}
