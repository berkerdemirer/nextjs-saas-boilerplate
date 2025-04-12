import { Config } from '@/src/types';

export const appConfig: Config = {
  appName: 'My App',
  appUrl: 'http://localhost:3001',
  appDescription: 'This is my app description',
  email: {
    from: 'demirerberker@thesaasgrid.com',
  },
  company: {
    name: 'My Company',
    address: '123 Main St, City, Country',
    phone: '+1234567890',
    email: 'mycompany@domain.com',
    jurisdiction: 'Estonian jurisdiction', // Used for terms of service text.
  },
  social: {
    twitter: '@demirerberker',
  },
  dashboard: {
    mainNavItems: [
      {
        title: 'Dashboard',
        url: '/dashboard',
        icon: 'home',
      },
    ],
    secondaryNavItems: [
      {
        title: 'Settings',
        url: '/dashboard/settings',
        icon: 'settings',
      },
    ],
  },
};
