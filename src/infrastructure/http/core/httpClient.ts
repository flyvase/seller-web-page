import { serverDomain } from '../../../config/http';
import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';

export class HttpClient {
  async execute<T extends HttpRequest, U>(
    request: T
  ): Promise<HttpResponse<U>> {
    const url = new URL(request.path, serverDomain);
    const response = await fetch(url.toString(), {
      method: request.method,
      mode: request.mode,
      body:
        request.body != undefined
          ? JSON.stringify(Object.fromEntries(request.body))
          : undefined,
      headers:
        request.headers != undefined ? Array.from(request.headers) : undefined,
    });

    const body: U = await response.json();
    return new HttpResponse({
      statusCode: response.status,
      statusText: response.statusText,
      body: body,
    });
  }
}
