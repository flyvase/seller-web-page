import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

export default function (
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): void | Cypress.ConfigOptions | Promise<Cypress.ConfigOptions> {
  const email = 'test123456789@gmail.com';
  const password = 'password';
  const uid = 'aucRUB2JiV7MzFkaa8M4';

  initializeApp({
    credential: cert('seller-web-page-e2e-testing-auth-admin-sa-key.json'),
  });

  on('task', {
    async 'user:create'() {
      await getAuth().createUser({ uid, email, password });

      return null;
    },

    async 'user:delete'() {
      await getAuth().deleteUser(uid);

      return null;
    },
  });
}
