import { appConfig } from '@/app-config';
import { stripeClient } from '@better-auth/stripe/client';
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
  plugins: [
    stripeClient({
      subscription: true,
    }),
  ],
});
