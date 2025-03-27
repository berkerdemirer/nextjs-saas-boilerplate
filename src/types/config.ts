import { NavItem } from '@/types/dashboard-nav-item';

export interface Config {
  dashboard: {
    mainNavItems: NavItem[];
    secondaryNavItems: NavItem[];
  };
}
