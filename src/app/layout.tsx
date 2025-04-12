import { ThemeProvider } from '@/src/components/theme-provider';
import { Toaster } from '@/src/components/ui/sonner';
import { appConfig } from '@/src/utils/app-config';
import { createMetadata } from '@/src/utils/createMetadata';
import localFont from 'next/font/local';
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="e78c4c72-012e-4b07-919c-41066ca42e37"
        ></script>
      </head>
      <body className={`${GeistSans.variable} ${GeistMono.variable} font-sans`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
}
