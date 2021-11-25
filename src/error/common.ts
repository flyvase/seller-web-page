export class UnexpectedError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor(params: { message: string }) {
    this.name = 'UnexpectedError';
    this.message = params.message;
  }
}
