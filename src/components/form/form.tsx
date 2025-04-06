'use client';

import { cn } from '@/utils/cn';
import { z } from 'zod';
import { FormProvider, UseFormReturn } from 'react-hook-form';

interface FormProps<T extends z.ZodType>
  extends React.FormHTMLAttributes<HTMLFormElement> {
  form: UseFormReturn<z.infer<T>>;
  onSubmit: (data: z.infer<T>) => void | Promise<void>;
}

export function Form<T extends z.ZodType>({
  form,
  onSubmit,
  children,
  className,
  ...props
}: FormProps<T>) {
  return (
    <FormProvider {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={cn('space-y-4', className)}
        {...props}
      >
        {children}
      </form>
    </FormProvider>
  );
}
