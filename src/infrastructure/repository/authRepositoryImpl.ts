import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  onAuthStateChanged,
} from '@firebase/auth';
import { FirebaseError } from '@firebase/util';

import { AuthRepository } from '../../domain/repository/authRepository';
import { UserNotFoundError, WrongPasswordError } from '../../error/auth';
import { UnexpectedError } from '../../error/common';

export class AuthRepositoryImpl implements AuthRepository {
  async getAuthToken(): Promise<string> {
    const client = getAuth();
    const user = client.currentUser;
    return user!.getIdToken();
  }

  async signInWithPassword(email: string, password: string): Promise<void> {
    const client = getAuth();
    try {
      await signInWithEmailAndPassword(client, email, password);
    } catch (e) {
      if (e instanceof FirebaseError) {
        switch (e.code) {
          case AuthErrorCodes.USER_DELETED:
            throw new UserNotFoundError({ email });
          case AuthErrorCodes.INVALID_PASSWORD:
            throw new WrongPasswordError();
          default:
            throw new UnexpectedError({ message: e.message });
        }
      }
    }
  }

  onAuthStateChanged(callback: (uid: string | null) => void): () => void {
    const client = getAuth();
    const cancel = onAuthStateChanged(client, (user) => {
      if (user == null) {
        callback(null);
      } else {
        callback(user.uid);
      }
    });

    return cancel;
  }
}
