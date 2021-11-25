import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';

export class HttpClient {
  async execute<T extends HttpRequest, U>(
    request: T
  ): Promise<HttpResponse<U>> {
    const response = await fetch(request.path, {
      method: request.method,
      mode: request.mode,
      body: JSON.stringify(Object.fromEntries(request.body)),
      headers: Array.from(request.headers),
    });

    const body: U = await response.json();
    return new HttpResponse({
      statusCode: response.status,
      statusText: response.statusText,
      body: body,
    });
  }
}
