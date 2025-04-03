import { appConfig } from '@/app-config';
import Link from 'next/link';
import { ResetPasswordForm } from '@/components/reset-password-form';

export default function Page({
  searchParams,
}: {
  searchParams: { token?: string };
}) {
  if (!searchParams.token) {
    return <div>Invalid or missing reset token</div>;
  }

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
        <ResetPasswordForm token={searchParams.token} />
      </div>
    </div>
  );
}
