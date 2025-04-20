import { IconType } from '@/src/components/ui/icons';

export interface NavItem {
  title: string;
  url: string;
  icon?: IconType;
}
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
}
