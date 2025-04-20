import { ThemeToggle } from '@/src/components/theme-toggle';
import { Button } from '@/src/components/ui/button';
import { SIGN_IN_URL, SIGN_UP_URL } from '@/src/utils/consts';
import Link from 'next/link';

export default function Home() {
  const features = [
    'Authentication',
    'Shadcn UI',
    'Next.js',
    'Tailwind CSS',
    'Sentry',
    'Drizzle ORM',
    'Umami',
    'PostgreSQL',
    'Dark Mode',
  ];
  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex w-full items-center justify-between border-b px-6 py-4">
        <div className="text-xl font-bold">Saas Boilerplate</div>
        <div className="flex gap-2">
          <ThemeToggle />
          <Button variant="outline" asChild>
            <Link href={SIGN_IN_URL}>Sign In</Link>
          </Button>
          <Button asChild>
            <Link href={SIGN_UP_URL}>Sign Up</Link>
          </Button>
        </div>
      </header>
      <div className="no-visible-scrollbar flex flex-1 items-center justify-center overflow-hidden px-6 md:px-0">
        <main className="row-start-2 flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col gap-1">
            <h3 className="text-center text-4xl font-bold text-black dark:text-white">
              Saas Boilerplate
            </h3>
          </div>
          <div className="flex w-full flex-col gap-4 md:w-10/12">
            <div className="flex flex-col flex-wrap gap-3 pt-2">
              <div className="flex flex-wrap justify-center gap-2">
                {features.map((feature) => (
                  <span
                    className="text-muted-foreground hover:text-foreground hover:border-foreground flex cursor-pointer items-center gap-1 border-b pb-1 text-xs transition-all duration-150 ease-in-out"
                    key={feature}
                  >
                    {feature}.
                  </span>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
