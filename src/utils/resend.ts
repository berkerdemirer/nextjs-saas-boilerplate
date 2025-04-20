import { appConfig } from '@/src/utils/app-config';
import { ENV } from '@/src/utils/env';
import { Resend } from 'resend';
import { ReactNode } from 'react';

export async function sendEmail({
  to,
  subject,
  template,
}: {
  to: string;
  subject: string;
  template: ReactNode;
}) {
  const resend = new Resend(ENV.RESEND_API_KEY);

  try {
    const { data, error } = await resend.emails.send({
      to: to,
      from: appConfig.email.from,
      subject: subject,
      react: template,
    });

    if (error) {
      console.error('error', error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json({ data });
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
