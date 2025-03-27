import { Config } from '@/types/config';

export const config: Config = {
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
