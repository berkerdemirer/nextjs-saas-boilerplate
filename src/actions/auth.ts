'use server';

import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';

export async function handleSignUp(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;
  const confirmPassword = formData.get('confirmPassword') as string;

  if (!email || !password || !confirmPassword) {
    throw new Error('Email and password are required');
  }

  if (password !== confirmPassword) {
    throw new Error('Passwords do not match');
  }

  if (!email.match(/^\S+@\S+$/)) {
    throw new Error('Invalid email');
  }

  if (password.length < 8 || password.length > 32) {
    throw new Error('Password must be between 8 and 32 characters');
  }

  await auth.api.signUpEmail({
    body: {
      email,
      password,
      name: '',
    },
  });

  redirect('/signin');
}

export async function handleSignIn(formData: FormData) {
  const email = formData.get('email') as string;
  const password = formData.get('password') as string;

  if (!email || !password) {
    throw new Error('Email and password are required');
  }

  await auth.api.signInEmail({
    body: {
      email,
      password,
    },
  });

  redirect('/dashboard');
}
