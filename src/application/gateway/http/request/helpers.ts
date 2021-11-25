export function buildGetHeaders(authToken: string) {
  return new Map([['Authorization', `Bearer ${authToken}`]]);
}
