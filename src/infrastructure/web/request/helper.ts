export function buildDefaultHeader(authToken: string): Map<string, string> {
  return new Map<string, string>([
    ['Content-Type', 'application/json'],
    ['Authorization', `Bearer ${authToken}`],
  ]);
}
