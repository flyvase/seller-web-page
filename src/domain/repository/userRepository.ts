export interface UserRepository {
  create(
    uid: string,
    firstName: string,
    lastName: string,
    authToken: string
  ): Promise<void>;
}
