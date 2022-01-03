import { serverDomain } from '../../../config/http';
import { HttpError } from './httpError';
import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';

type ExecuteResult<U> = {
  response?: HttpResponse<U>;
  isHttpError: boolean;
  error?: HttpError;
  isNetworkError: boolean;
};

export class HttpClient {
  async execute<T extends HttpRequest, U>(
    request: T
  ): Promise<ExecuteResult<U>> {
    const url = new URL(request.path, serverDomain);
    try {
      const response = await fetch(url.toString(), {
        method: request.method,
        mode: request.mode,
        body:
          request.body != undefined
            ? JSON.stringify(Object.fromEntries(request.body))
            : undefined,
        headers:
          request.headers != undefined
            ? Array.from(request.headers)
            : undefined,
      });

      if (response.ok) {
        return {
          response: new HttpResponse({
            statusCode: response.status,
            body: request.method === 'GET' ? await response.json() : undefined,
          }),
          isHttpError: false,
          isNetworkError: false,
        };
      }

      return {
        isHttpError: true,
        isNetworkError: false,
        error: new HttpError({
          statusCode: response.status,
          message: await response.text(),
        }),
      };
    } catch (e) {
      return {
        isHttpError: false,
        isNetworkError: true,
      };
    }
  }
}
