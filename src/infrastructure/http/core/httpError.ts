export class HttpError {
  readonly statusCode: number;
  readonly message: string;

  constructor(params: { statusCode: number; message: string }) {
    this.statusCode = params.statusCode;
    this.message = params.message;
  }
}
