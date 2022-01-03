import { DisplayableError } from './common';

export class WrongPasswordError implements DisplayableError {
  name: string;
  message: string;
  stack?: string;

  constructor() {
    this.name = 'WrongPasswordError';
    this.message = 'Wrong password';
  }

  display() {
    return 'パスワードが間違っています';
  }
}

export class UserNotFoundError implements DisplayableError {
  name: string;
  message: string;
  email: string;
  stack?: string;

  constructor(params: { email: string }) {
    this.name = 'UserNotFoundError';
    this.message = `user with email:${params.email} not found`;
    this.email = params.email;
  }

  display() {
    return `${this.email}で登録されたユーザーが存在しません`;
  }
}
