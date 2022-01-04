import { ProviderUid } from '../valueObject/providerUid';

export class User {
  readonly providerUid: ProviderUid;
  readonly email?: string;

  constructor(params: { providerUid: ProviderUid; email?: string }) {
    this.providerUid = params.providerUid;
    this.email = params.email;
  }
}
