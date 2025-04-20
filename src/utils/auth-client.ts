import { appConfig } from '@/src/utils/app-config';
import { createAuthClient } from 'better-auth/react';
import { useEffect, useState } from 'react';

export const {
  signIn,
  signUp,
  signOut,
  useSession,
  getSession,
  deleteUser,
  forgetPassword,
  resetPassword,
  sendVerificationEmail,
} = createAuthClient({
  baseURL: appConfig.appUrl,
});
