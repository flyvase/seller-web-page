import { serverDomain } from '../../../config/http';
import { HttpClient, HttpRequest, HttpResponse } from './httpClient';

export class HttpClientImpl implements HttpClient {
  async execute<T extends HttpRequest>(request: T): Promise<HttpResponse> {
    const url = new URL(request.path, serverDomain);
    const res = await fetch(url.toString(), {
      method: request.options.httpMethod,
      mode: request.options.mode,
      headers:
        request.options.httpHeaders != undefined
          ? Array.from(request.options.httpHeaders)
          : undefined,
      body:
        request.options.body != undefined
          ? JSON.stringify(Object.fromEntries(request.options.body))
          : undefined,
    });

    const body = await res.json();
    return new HttpResponse(
      res.status,
      res.statusText,
      new Map(Object.entries(body))
    );
  }
}
