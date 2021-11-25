import { getAuth } from '@firebase/auth';

import { AuthRepository } from '../../domain/repository/authRepository';

export class AuthRepositoryImpl implements AuthRepository {
  async getAuthToken(): Promise<string> {
    const client = getAuth();
    const user = client.currentUser;
    return user!.getIdToken();
  }
}
