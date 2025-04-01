import { NavItem } from '@/types/dashboard-nav-item';
import { PriceIds, SubscriptionMeta } from '@/types/subscription';

export interface Config {
  appName: string;
  appUrl: string;
  appDescription: string;
  email: {
    from: string;
  };
  social?: {
    twitter?: string;
    github?: string;
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  company?: {
    name: string;
    address: string;
    email: string;
    phone: string;
    jurisdiction?: string;
  };
  dashboard: {
    mainNavItems: NavItem[];
    secondaryNavItems: NavItem[];
  };
  stripe?: {
    subscription?: {
      pro: {
        meta: SubscriptionMeta;
        priceIds: PriceIds;
      };
      starter: {
        meta: SubscriptionMeta;
        priceIds: PriceIds;
      };
    };
  };
}
