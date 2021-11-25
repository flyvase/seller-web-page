import { HttpRequest } from './httpRequest';
import { HttpResponse } from './httpResponse';

export interface HttpClient {
  execute<T extends HttpRequest, U>(request: T): Promise<HttpResponse<U>>;
}
