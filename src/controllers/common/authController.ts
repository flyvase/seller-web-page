import { AuthInterface } from "../../interfaces/authInterface";

export function useGoogleSignIn(
  authRepository: AuthInterface
): () => Promise<void> {
  return authRepository.googleSignIn;
}