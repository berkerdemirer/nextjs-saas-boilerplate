import { appConfig } from '@/app-config';
import Link from 'next/link';
import { LoginForm } from '@/components/signin-form';

export default function Page() {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center gap-6 bg-muted p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <Link
          href="#"
          className="flex items-center gap-2 self-center font-medium"
        >
          <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
            Logo
          </div>
          {appConfig.appName}
        </Link>
        <LoginForm />
      </div>
    </div>
  );
}
