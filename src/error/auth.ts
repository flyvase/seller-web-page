import { DisplayableError } from './common';

export class WrongPasswordError implements DisplayableError {
  name: string;
  message: string;
  stack?: string | undefined;

  constructor() {
    this.name = 'WrongPasswordError';
    this.message = 'Wrong password';
  }

  format() {
    return 'パスワードが間違っています';
  }
}

export class UserNotFoundError implements DisplayableError {
  name: string;
  message: string;
  email: string;
  stack?: string | undefined;

  constructor(params: { email: string }) {
    this.name = 'UserNotFoundError';
    this.message = `user with email:${params.email} not found`;
    this.email = params.email;
  }

  format() {
    return `${this.email}で登録されたユーザーが存在しません`;
  }
}
