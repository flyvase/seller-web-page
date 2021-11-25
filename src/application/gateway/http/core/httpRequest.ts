type HttpMethods = 'GET' | 'POST';

export abstract class HttpRequest {
  readonly path: string;
  readonly method: HttpMethods;
  readonly mode: RequestMode;
  readonly body: Map<string, unknown>;
  readonly headers: Map<string, string>;

  constructor(params: {
    path: string;
    method: HttpMethods;
    mode?: RequestMode;
    body?: Map<string, unknown>;
    headers?: Map<string, string>;
  }) {
    this.path = params.path;
    this.method = params.method;
    this.mode = params.mode ?? 'cors';
    this.body = params.body ?? new Map();
    this.headers = params.headers ?? new Map();
  }
}
