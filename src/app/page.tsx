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
    'Playwright',
    'Dark Mode',
  ];
  return (
    <div className="min-h-[80vh] flex items-center justify-center overflow-hidden no-visible-scrollbar px-6 md:px-0">
      <main className="flex flex-col gap-4 row-start-2 items-center justify-center">
        <div className="flex flex-col gap-1">
          <h3 className="font-bold text-4xl text-black dark:text-white text-center">
            Saas Boilerplate
          </h3>
        </div>
        <div className="md:w-10/12 w-full flex flex-col gap-4">
          <div className="flex flex-col gap-3 pt-2 flex-wrap">
            <div className="flex gap-2 justify-center flex-wrap">
              {features.map((feature) => (
                <span
                  className="border-b pb-1 text-muted-foreground text-xs cursor-pointer hover:text-foreground duration-150 ease-in-out transition-all hover:border-foreground flex items-center gap-1"
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
  );
}
