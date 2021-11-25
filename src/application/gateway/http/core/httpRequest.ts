type HttpMethods = 'GET' | 'POST';

type HttpRequestOptions = {
  readonly mode?: RequestMode;
  readonly headers?: Map<string, string>;
  readonly body?: Map<string, unknown>;
};

export abstract class HttpRequest {
  constructor(
    public readonly path: string,
    public readonly method: HttpMethods,
    public readonly options: HttpRequestOptions = {
      mode: 'cors',
      headers: new Map(),
      body: new Map(),
    }
  ) {}
}
