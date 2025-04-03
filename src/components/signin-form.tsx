'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import Link from 'next/link';
import { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/form';
import { InputField } from '@/components/input-field';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { signIn } from '@/lib/auth-client';
import { useAuthFetchOptions } from '@/hooks/use-auth-fetch-options';

const signInSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(50, 'Password must not exceed 50 characters'),
});

type SignInFormValues = z.infer<typeof signInSchema>;

export function LoginForm() {
  const form = useForm<SignInFormValues>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });
  const { fetchOptions, socialFetchOptions, loading, socialLoading } =
    useAuthFetchOptions({
      redirectTo: '/dashboard',
    });

  const onSubmit = useCallback(
    async (data: SignInFormValues) => {
      await signIn.email({
        ...data,
        fetchOptions,
      });
    },
    [fetchOptions],
  );

  const onGoogleSignIn = useCallback(async () => {
    await signIn.social({
      provider: 'google',
      callbackURL: '/dashboard',
      fetchOptions: socialFetchOptions,
    });
  }, [socialFetchOptions]);

  return (
    <>
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl">Welcome back</CardTitle>
          <CardDescription>
            Login with your Apple or Google account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4">
            <Button
              variant="outline"
              className="w-full"
              data-testid="google-signin-btn"
              onClick={onGoogleSignIn}
              disabled={socialLoading}
            >
              {socialLoading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path
                      d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"
                      fill="currentColor"
                    />
                  </svg>
                  Login with Google
                </>
              )}
            </Button>
          </div>
          <div className="after:border-border relative text-center text-sm after:absolute after:inset-0 after:top-1/2 after:z-0 after:flex after:items-center after:border-t my-4">
            <span className="bg-card text-muted-foreground relative z-10 px-2">
              Or continue with
            </span>
          </div>
          <Form form={form} onSubmit={onSubmit}>
            <InputField
              name="email"
              label="Email"
              type="email"
              placeholder="Enter your email"
              data-testid="email-field"
            />
            <InputField
              name="password"
              label="Password"
              type="password"
              placeholder="Enter your password"
              data-testid="password-field"
            />
            <Button
              type="submit"
              className="w-full"
              disabled={loading}
              data-testid="email-signin-btn"
            >
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                'Sign in'
              )}
            </Button>
            <div className="text-center text-sm">
              Don&apos;t have an account?{' '}
              <Link href="/signup" className="underline underline-offset-4">
                Sign up
              </Link>
            </div>
            <div className="text-center text-sm">
              <Link
                href="/forget-password"
                className="ml-auto text-sm underline-offset-4 underline"
              >
                Forgot your password?
              </Link>
            </div>
          </Form>
        </CardContent>
      </Card>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our{' '}
        <Link href="/tos">Terms of Service</Link> and{' '}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </div>
    </>
  );
}
