export class HttpResponse<T> {
  constructor(
    public readonly statusCode: number,
    public readonly statusText: string,
    public readonly body?: T
  ) {}

  get ok(): boolean {
    return this.statusCode >= 200 && this.statusCode <= 299;
  }
}
