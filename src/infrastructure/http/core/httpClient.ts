import { HttpMethods } from '../../../core/types';

export interface HttpClient {
  execute<T extends HttpRequest>(request: T): Promise<HttpResponse>;
}

type HttpRequestOptions = {
  readonly mode: RequestMode;
  readonly httpMethod: HttpMethods;
  readonly httpHeaders?: Map<string, string>;
  readonly body?: Map<string, unknown>;
  readonly queryParameters?: Map<string, unknown>;
};

export abstract class HttpRequest {
  constructor(path: string, options: HttpRequestOptions) {
    this.path = path;
    this.options = options;
  }

  readonly path: string;

  readonly options: HttpRequestOptions;
}

export class HttpResponse {
  constructor(
    statusCode: number,
    statusText: string,
    body?: Map<string, unknown>
  ) {
    this.statusCode = statusCode;
    this.statusText = statusText;
    this.body = body;
  }

  readonly statusCode: number;

  readonly statusText: string;

  readonly body?: Map<string, unknown>;

  get ok(): boolean {
    return this.statusCode >= 200 && this.statusCode <= 299;
  }
}
