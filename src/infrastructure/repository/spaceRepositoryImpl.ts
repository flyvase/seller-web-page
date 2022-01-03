import { Space } from '../../domain/model/space';
import { AuthRepository } from '../../domain/repository/authRepository';
import { SpaceRepository } from '../../domain/repository/spaceRepository';
import { OgpProperties } from '../../domain/valueObject/ogpProperties';
import { SpaceId } from '../../domain/valueObject/spaceId';
import { UnexpectedError } from '../../error/common';
import { BadRequestError, NotFoundError } from '../../error/repository';
import { HttpClient } from '../http/core/httpClient';
import { FetchSpaceRequest } from '../http/request/fetchSpaceRequest';
import { GetSpaceOgpRequest } from '../http/request/getSpaceOgpRequest';
import { ListSpacesRequest } from '../http/request/listSpacesRequest';
import {
  FetchSpaceResponse,
  fetchSpaceResponseToSpaceModel,
} from '../http/response/fetchSpaceResponse';
import {
  GetSpaceOgpResponse,
  getSpaceOgpResponseToOgpProperties,
} from '../http/response/getSpaceOgpResponse';
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
    const { response, isHttpError, error } = await this.httpClient.execute<
      ListSpacesRequest,
      ListSpacesResponse
    >(request);
    if (isHttpError) {
      throw new UnexpectedError({ message: error!.message });
    }

    return listSpaceResponseToSpaceModels(response!.body!);
  }

  async fetch(id: SpaceId): Promise<Space> {
    const token = await this.authRepository.getAuthToken();
    const request = new FetchSpaceRequest({ id: id, authToken: token });
    const { response, isHttpError, error } = await this.httpClient.execute<
      FetchSpaceRequest,
      FetchSpaceResponse
    >(request);

    if (isHttpError) {
      switch (error!.statusCode) {
        case 400:
          throw new BadRequestError();
        case 404:
          throw new NotFoundError();
        default:
          throw new UnexpectedError({ message: error!.message });
      }
    }

    return fetchSpaceResponseToSpaceModel(response!.body!);
  }

  async getOgpProperties(id: SpaceId): Promise<OgpProperties> {
    const token = await this.authRepository.getAuthToken();
    const request = new GetSpaceOgpRequest({ id: id, authToken: token });
    const { response, isHttpError, error } = await this.httpClient.execute<
      GetSpaceOgpRequest,
      GetSpaceOgpResponse
    >(request);

    if (isHttpError) {
      switch (error!.statusCode) {
        case 400:
          throw new BadRequestError();
        case 404:
          throw new NotFoundError();
        default:
          throw new UnexpectedError({ message: error!.message });
      }
    }

    return getSpaceOgpResponseToOgpProperties(response!.body!);
  }
}
