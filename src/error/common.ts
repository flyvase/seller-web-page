export interface DisplayableError extends Error {
  format(): string;
}

export class UnexpectedError implements DisplayableError {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor(params: { message: string }) {
    this.name = 'UnexpectedError';
    this.message = params.message;
  }

  format() {
    return '何らかのエラーが発生しました。しばらくしてからお試しください';
  }
}
