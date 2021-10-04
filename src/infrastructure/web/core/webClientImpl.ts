import { serverDomain } from '../../../config/http';
import { WebClient, WebRequest } from './webClient';

export class WebClientImpl implements WebClient {
  async execute<T extends WebRequest>(request: T): Promise<Response> {
    const url = new URL(request.path, serverDomain);
    return fetch(url.toString(), {
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
  }
}
