'use client';

import { InputField } from '@/src/components/form/fields/input-field';
import { Form } from '@/src/components/form/form';
import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { forgetPassword } from '@/src/lib/auth-client';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

const schema = z.object({
  email: z.string().email('Please enter a valid email address'),
});

type FormData = z.infer<typeof schema>;

export function ForgetPasswordForm() {
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = useCallback(async (data: FormData) => {
    await forgetPassword({
      email: data.email,
      redirectTo: '/reset-password',
      fetchOptions: {
        onSuccess: () => {
          toast.success('Password reset link sent to your email');
          setIsEmailSent(true);
        },
        onResponse: () => {
          setLoading(false);
        },
        onRequest: () => {
          setLoading(true);
        },
        onError: (ctx) => {
          toast.error(ctx.error.message);
        },
      },
    });
  }, []);

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {isEmailSent ? 'Check Your Email' : 'Forgot Password?'}
        </CardTitle>
        <CardDescription>
          {isEmailSent
            ? `We've sent a password reset link to ${form.getValues('email')}`
            : 'Enter your email to reset your password'}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isEmailSent ? (
          <div className="text-muted-foreground space-y-6 text-sm">
            <p>
              Please check your inbox and follow the instructions to reset your
              password.
            </p>
            <p>
              Didn&apos;t receive an email?{' '}
              <Button
                variant="link"
                className="h-auto p-0 font-normal"
                onClick={() => setIsEmailSent(false)}
              >
                Try again
              </Button>
            </p>
          </div>
        ) : (
          <Form form={form} onSubmit={onSubmit}>
            <div className="flex flex-col gap-4">
              <InputField
                name="email"
                label="Email"
                type="email"
                placeholder="Enter your email"
                data-testid="email-field"
              />
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  'Send reset link'
                )}
              </Button>
            </div>
          </Form>
        )}
      </CardContent>
    </Card>
  );
}
