export class AuthError implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor(message: string, stack?: string) {
    this.name = new.target.name;
    this.message = message;
    this.stack = stack;
  }
}

export class UserNotFoundError implements AuthError {
  name: string;
  stack?: string;
  message = 'user not found';

  constructor(stack?: string) {
    this.name = new.target.name;
    this.stack = stack;
  }
}

export class InvalidEmailError implements AuthError {
  name: string;
  stack?: string;
  message = 'invalid email';

  constructor(stack?: string) {
    this.name = new.target.name;
    this.stack = stack;
  }
}

export class WrongPasswordError implements AuthError {
  name: string;
  stack?: string;
  message = 'wrong password';

  constructor(stack?: string) {
    this.name = new.target.name;
    this.stack = stack;
  }
}

export class UnexpectedAuthError implements AuthError {
  name: string;
  message: string;
  stack?: string;

  constructor(message: string, stack?: string) {
    this.name = new.target.name;
    this.message = message;
    this.stack = stack;
  }
}
