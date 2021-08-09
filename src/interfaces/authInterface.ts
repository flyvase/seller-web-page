export interface AuthInterface {
  googleSignIn: () => Promise<void>;
  uid: string | undefined;
}
