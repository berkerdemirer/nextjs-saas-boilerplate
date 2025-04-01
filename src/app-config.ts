import { Config } from '@/types/config';

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
  stripe: {
    subscription: {
      pro: {
        meta: {
          name: 'PROFESSIONAL',
          price: '99',
          yearlyPrice: '79',
          period: 'per month',
          features: [
            'Unlimited projects',
            'Advanced analytics',
            '24-hour support response time',
            'Full API access',
            'Priority support',
          ],
          description: 'Ideal for growing teams and businesses',
          buttonText: 'Get Started',
          href: '/sign-up',
          isPopular: true,
        },
        priceIds: {
          default: 'price_1QxWZ5LUjnrYIrml5Dnwnl0X',
          annual: 'price_1QxWZTLUjnrYIrmlyJYpwyhz',
        },
      },
      starter: {
        meta: {
          name: 'STARTER',
          price: '50',
          yearlyPrice: '40',
          period: 'per month',
          features: [
            'Up to 10 projects',
            'Basic analytics',
            '48-hour support response time',
            'Limited API access',
          ],
          description: 'Perfect for individuals and small projects',
          buttonText: 'Start Free Trial',
          href: '/sign-up',
          isPopular: false,
        },
        priceIds: {
          default: 'price_1QxWWtLUjnrYIrmleljPKszG',
          annual: 'price_1QxWYqLUjnrYIrmlonqPThVF',
        },
      },
    },
  },
};
