import { IconType } from '@/components/ui/icons';

export interface NavItem {
  title: string;
  url: string;
  icon?: IconType;
}

export interface SocialLinks {
  twitter?: string;
  github?: string;
  facebook?: string;
  instagram?: string;
  linkedin?: string;
  youtube?: string;
}

export interface CompanyInfo {
  name: string;
  address: string;
  email: string;
  phone: string;
  jurisdiction?: string;
}

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

export interface SubscriptionPlan {
  meta: SubscriptionMeta;
  priceIds: PriceIds;
}

export interface SubscriptionPlans {
  pro: SubscriptionPlan;
  starter: SubscriptionPlan;
}

export interface Config {
  appName: string;
  appUrl: string;
  appDescription: string;
  email: {
    from: string;
  };
  social?: SocialLinks;
  company?: CompanyInfo;
  dashboard: {
    mainNavItems: NavItem[];
    secondaryNavItems: NavItem[];
  };
  stripe?: {
    subscription?: SubscriptionPlans;
  };
}
