export interface DisplayableError extends Error {
  display(): string;
}

export class UnexpectedError implements DisplayableError {
  name: string;
  message: string;
  stack?: string;

  constructor(params: { message: string }) {
    this.name = 'UnexpectedError';
    this.message = params.message;
  }

  display() {
    return '何らかのエラーが発生しました。しばらくしてからお試しください';
  }
}
