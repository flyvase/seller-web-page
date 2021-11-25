export class UnexpectedStatusCodeError implements Error {
  name: string;
  message: string;
  statusCode: number;
  stack?: string | undefined;

  constructor(params: { statusCode: number; message: string }) {
    this.name = 'UnexpectedStatusCodeError';
    this.statusCode = params.statusCode;
    this.message = params.message;
  }
}

export class NotFoundError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor() {
    this.name = 'NotFoundError';
    this.message = 'Not found';
  }
}

export class InternalServerError implements Error {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor(params: { message: string }) {
    this.name = 'InternalServerError';
    this.message = params.message;
  }
}
