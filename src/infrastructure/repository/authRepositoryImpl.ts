import {
  getAuth,
  signInWithEmailAndPassword,
  AuthErrorCodes,
  onAuthStateChanged,
} from '@firebase/auth';
import { FirebaseError } from '@firebase/util';

import { User } from '../../domain/model/user';
import { AuthRepository } from '../../domain/repository/authRepository';
import { ProviderUid } from '../../domain/valueObject/providerUid';
import { UserNotFoundError, WrongPasswordError } from '../../error/auth';
import { UnexpectedError } from '../../error/common';
import { NetworkError } from '../../error/repository';

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
          case AuthErrorCodes.NETWORK_REQUEST_FAILED:
            throw new NetworkError();
          default:
            throw new UnexpectedError({ message: e.message });
        }
      }
    }
  }

  onAuthStateChanged(callback: (user?: User) => void): () => void {
    const client = getAuth();
    const cancel = onAuthStateChanged(client, (u) => {
      if (u == null) {
        callback(undefined);
      } else {
        callback(
          new User({
            providerUid: new ProviderUid({ value: u.uid }),
            email: u.email ?? undefined,
          })
        );
      }
    });

    return () => cancel();
  }
}
