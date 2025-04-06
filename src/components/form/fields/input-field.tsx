import { cn } from '@/utils/cn';
import { FieldError, useFormContext } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  className?: string;
}

export function InputField({
  name,
  label,
  className,
  ...props
}: InputFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  const error = errors[name] as FieldError | undefined;

  return (
    <div>
      {label && (
        <Label className="mb-2" htmlFor={name}>
          {label}
        </Label>
      )}
      <Input
        {...register(name)}
        id={name}
        aria-invalid={!!error}
        className={cn(
          error && 'border-destructive ring-destructive/50',
          className,
        )}
        {...props}
      />
      {error?.message && (
        <span className="text-destructive text-xs">{error.message}</span>
      )}
    </div>
  );
}
