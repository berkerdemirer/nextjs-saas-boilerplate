export interface SubscriptionMeta {
  name: string;
  price: string;
  yearlyPrice: string;
  period: string;
  features: string[];
  description: string;
  buttonText: string;
  href: string;
  isPopular: boolean;
}

export interface PriceIds {
  default: string;
  annual: string;
}
