import { appConfig } from '@/app-config';
import { MetadataRoute } from 'next';

/**
 * Generate robots.txt configuration
 * This will be available at /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/dashboard/*'],
    },
    sitemap: `${appConfig.appUrl}/sitemap.xml`,
  };
}
