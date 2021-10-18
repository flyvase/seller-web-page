export class AuthError implements Error {
  name: string;
  message: string;
  code?: string;

  constructor(message: string, code?: string) {
    this.name = new.target.name;
    this.message = message;
    this.code = code;
  }
}
