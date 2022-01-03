import { DisplayableError } from './common';

export class NotFoundError implements DisplayableError {
  name: string;
  message: string;
  messageToDisplay: string;
  stack?: string;

  constructor(params: { messageToDisplay: string }) {
    this.name = 'NotFoundError';
    this.message = 'Resource not found';
    this.messageToDisplay = params.messageToDisplay;
  }

  display(): string {
    return this.messageToDisplay;
  }
}

export class BadRequestError implements DisplayableError {
  name: string;
  message: string;
  messageToDisplay: string;
  stack?: string;

  constructor(params: { messageToDisplay: string }) {
    this.name = 'BadRequestError';
    this.message = 'Bad request';
    this.messageToDisplay = params.messageToDisplay;
  }

  display(): string {
    return this.messageToDisplay;
  }
}

export class NetworkError implements DisplayableError {
  name: string;
  message: string;
  stack?: string;

  constructor() {
    this.name = 'NetworkError';
    this.message = "Couldn't connect to network";
  }

  display(): string {
    return 'ネットワークに接続できませんでした。接続状況を確認してください';
  }
}
