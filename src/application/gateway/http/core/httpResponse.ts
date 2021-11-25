export class HttpResponse<T> {
  readonly statusCode: number;
  readonly statusText: string;
  readonly body?: T;

  constructor(params: { statusCode: number; statusText: string; body?: T }) {
    this.statusCode = params.statusCode;
    this.statusText = params.statusText;
    this.body = params.body;
  }

  get ok(): boolean {
    return this.statusCode >= 200 && this.statusCode <= 299;
  }
}
