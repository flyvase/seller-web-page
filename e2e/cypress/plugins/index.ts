import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';
import { userAccount } from '../global/user';

export default function (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): void | Cypress.ConfigOptions | Promise<Cypress.ConfigOptions> {
  initializeApp({
    credential: cert('seller-web-page-e2e-testing-auth-admin-sa-key.json'),
  });

  on('task', {
    async 'user:create'() {
      await getAuth().createUser({
        uid: userAccount.uid,
        email: userAccount.email,
        password: userAccount.password,
      });

      return null;
    },

    async 'user:delete'() {
      await getAuth().deleteUser(userAccount.uid);

      return null;
    },
  });
}
