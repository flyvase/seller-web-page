export class InvalidArgumentError implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor(
    errors: { [key: string]: string },
    className: string,
    stack?: string
  ) {
    this.name = new.target.name;
    this.message =
      `Invalid arguments on instantiation of class "${className}".` +
      '\n' +
      Object.entries(errors)
        .map(([key, val]) => `Key: "${key}", message: "${val}"`)
        .join('\n');
    this.stack = stack;
  }
}

export class RequiresRecentLoginError implements Error {
  name: string;
  message: string;
  stack?: string;

  constructor(operation: string) {
    this.name = new.target.name;
    this.message = `Re authentication is required for ${operation}`;
  }
}
