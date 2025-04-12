import { appConfig } from '@/src/app-config';
import { createAuthClient } from 'better-auth/react';

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
  deleteUser,
  forgetPassword,
  resetPassword,
} = createAuthClient({
  baseURL: appConfig.appUrl,
});
