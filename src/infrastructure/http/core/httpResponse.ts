export class HttpResponse<T> {
  readonly statusCode: number;
  readonly body?: T;

  constructor(params: { statusCode: number; body?: T }) {
    this.statusCode = params.statusCode;
    this.body = params.body;
  }
}
