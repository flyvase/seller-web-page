export class InvalidArgumentError implements Error {
  name: string;
  message: string;
  stack?: string;
  argumentName: string;
  className: string;

  constructor(
    message: string,
    argumentName: string,
    className: string,
    stack?: string
  ) {
    this.name = new.target.name;
    this.message = message;
    this.stack = stack;
    this.argumentName = argumentName;
    this.className = className;
  }
}
