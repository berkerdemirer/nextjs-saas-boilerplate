import { appConfig } from '@/src/app-config';
import { ForgetPasswordForm } from '@/src/components/form/forget-password-form';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="bg-primary text-primary-foreground flex h-6 w-6 items-center justify-center rounded-md">
            Logo
          </div>
          {appConfig.appName}
        </Link>
        <ForgetPasswordForm />
      </div>
    </div>
  );
}
