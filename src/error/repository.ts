export class NotFoundError implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor() {
    this.name = 'NotFoundError';
    this.message = 'Resource not found';
  }
}

export class BadRequestError implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor() {
    this.name = 'BadRequestError';
    this.message = 'Bad request';
  }
}
