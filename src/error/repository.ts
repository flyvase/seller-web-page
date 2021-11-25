export class NotFoundError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor() {
    this.name = 'NotFoundError';
    this.message = 'Resource not found';
  }
}
