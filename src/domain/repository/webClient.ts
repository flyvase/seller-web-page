import { HttpMethods } from '../../core/types';

export interface WebClient {
  execute<T extends WebRequest>(request: T): Promise<Response>;
}

type WebRequestOptions = {
  readonly mode: RequestMode;
  readonly httpMethod: HttpMethods;
  readonly httpHeaders?: Map<string, string>;
  readonly body?: Map<string, unknown>;
  readonly queryParameters?: Map<string, unknown>;
};

export abstract class WebRequest {
  constructor(path: string, options: WebRequestOptions) {
    this.path = path;
    this.options = options;
  }

  readonly path: string;

  readonly options: WebRequestOptions;
}
