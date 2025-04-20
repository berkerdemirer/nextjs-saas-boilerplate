'use client';

import { InputField } from '@/src/components/form-fields/input-field';
import { Form } from '@/src/components/forms/form';
import { Button } from '@/src/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/src/components/ui/card';
import { resetPassword } from '@/src/utils/auth-client';
import { SIGN_IN_URL } from '@/src/utils/consts';
import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { z } from 'zod';
import { useRouter } from 'next/navigation';
import { useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';

const schema = z
  .object({
    password: z.string().min(8, 'Password must be at least 8 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

type FormData = z.infer<typeof schema>;

interface ResetPasswordFormProps {
  token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  const [loading, setLoading] = useState(false);

  const onSubmit = useCallback(
    async (data: FormData) => {
      await resetPassword({
        newPassword: data.password,
        token,
        fetchOptions: {
          onSuccess: () => {
            toast.success('Password reset successfully');
            router.push(SIGN_IN_URL);
          },
          onRequest: () => {
            setLoading(true);
          },
          onError: (ctx) => {
            toast.error(ctx.error.message);
          },
        },
      });
    },
    [token, router],
  );

  return (
    <Card>
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your new password</CardDescription>
      </CardHeader>
      <CardContent>
        <Form form={form} onSubmit={onSubmit}>
          <div className="flex flex-col gap-4">
            <InputField
              name="password"
              label="New Password"
              type="password"
              placeholder="Enter your new password"
              datatest-id="password-field"
            />
            <InputField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              placeholder="Confirm your new password"
              data-testid="confirm-password-field"
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                'Reset password'
              )}
            </Button>
          </div>
        </Form>
      </CardContent>
    </Card>
  );
}
