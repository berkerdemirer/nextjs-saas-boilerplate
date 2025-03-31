import { Config } from '@/types/config';

export const config: Config = {
  appName: 'My App',
  appUrl: 'http://localhost:3001',
  appDescription: 'This is my app description',
  email: {
    from: 'demirerberker@domain.com',
  },
  company: {
    name: 'My Company',
    address: '123 Main St, City, Country',
    phone: '+1234567890',
    email: 'mycompany@domain.com',
    jurisdiction: 'Estonian jurisdiction', // Used for terms of service text.
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
