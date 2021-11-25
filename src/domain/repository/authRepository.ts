export interface AuthRepository {
  getAuthToken(): Promise<string>;
}
