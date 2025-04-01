import { appConfig } from '@/app-config';
import { createMetadata } from '@/utils/createMetadata';
import localFont from 'next/font/local';
import { Toaster } from '@/components/ui/sonner';
import './globals.css';

const GeistSans = localFont({
  src: '/fonts/GeistVF.woff',
  variable: '--font-geist-sans',
});

const GeistMono = localFont({
  src: '/fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
});

export const metadata = createMetadata({
  title: {
    template: `%s | ${appConfig.appName}`,
    default: appConfig.appName,
  },
  description: appConfig.appDescription,
  metadataBase: new URL(appConfig.appUrl),
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e78c4c72-012e-4b07-919c-41066ca42e37"
        ></script>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
