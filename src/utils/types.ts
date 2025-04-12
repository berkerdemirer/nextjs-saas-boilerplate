import { IconType } from '@/src/components/ui/icons';

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
}
