import { Button } from '@/src/components/ui/button';
import { Card } from '@/src/components/ui/card';
import { polar } from '@/src/utils/polar-client';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Promise<{ checkout_id: string }>;
}) {
  const checkoutId = (await searchParams).checkout_id;

  if (!checkoutId) {
    redirect('/dashboard');
  }

  const checkout = await polar.checkouts.get({
    id: checkoutId,
  });

  return (
    <div className="bg-background flex min-h-screen items-center justify-center">
      <Card className="w-full max-w-2xl space-y-8 p-8">
        <div className="flex flex-col items-center space-y-4 text-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
          <h1 className="text-4xl font-bold">Thank you for your purchase!</h1>
          <p className="text-muted-foreground text-xl">
            Your subscription is now active.
          </p>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between border-b py-3">
            <span className="font-medium">Status</span>
            <span className="rounded-full bg-green-100 px-3 py-1 text-green-700">
              Active
            </span>
          </div>
          <div className="flex justify-between border-b py-3">
            <span className="font-medium">Date</span>
            <span>{new Date(checkout.createdAt).toLocaleString()}</span>
          </div>
          <div className="flex justify-between border-b py-3">
            <span className="font-medium">Total Payment</span>
            <span>
              {new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: checkout.currency.toUpperCase(),
              }).format(checkout.amount / 100)}
            </span>
          </div>
          <div className="flex justify-between border-b py-3">
            <span className="font-medium">Order ID</span>
            <span className="font-mono">{checkout.id}</span>
          </div>
          <div className="flex justify-between border-b py-3">
            <span className="font-medium">Email</span>
            <span>{checkout.customerEmail}</span>
          </div>
        </div>

        <div className="flex justify-center">
          <Link href="/dashboard">
            <Button size="lg" className="bg-primary px-8 text-white">
              Continue to Dashboard
            </Button>
          </Link>
        </div>
      </Card>
    </div>
  );
}
