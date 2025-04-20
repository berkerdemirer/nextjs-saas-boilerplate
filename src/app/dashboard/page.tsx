import { db } from '@/drizzle';
import { product } from '@/drizzle/schema';
import { Button } from '@/src/components/ui/button';
import Link from 'next/link';

export default async function Page() {
  const allProducts = await db.select().from(product);

  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => (
          <div key={product.id} className="flex flex-col gap-2">
            <h2 className="text-xl font-medium">{product.slug}</h2>
            <Button asChild className="w-fit">
              <Link href={`/api/auth/checkout/${product.slug}`}>
                Buy {product.slug}
              </Link>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
