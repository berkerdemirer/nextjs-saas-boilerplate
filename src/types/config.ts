import { NavItem } from '@/types/dashboard-nav-item';

export interface Config {
  appName: string;
  appUrl: string;
  appDescription: string;
  email?: {
    from: string;
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
}
