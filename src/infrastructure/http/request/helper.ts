export function buildPostDefaultHeader(authToken: string): Map<string, string> {
  return new Map<string, string>([
    ['Content-Type', 'application/json'],
    ['Authorization', `Bearer ${authToken}`],
  ]);
}

export function buildGetDefaultHeader(authToken: string): Map<string, string> {
  return new Map<string, string>([['Authorization', `Bearer ${authToken}`]]);
}
