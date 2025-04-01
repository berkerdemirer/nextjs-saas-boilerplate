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
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  plugins: [
    stripeClient({
      subscription: true,
    }),
  ],
});
