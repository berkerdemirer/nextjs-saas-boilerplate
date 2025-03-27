import { MetadataRoute } from 'next';

/**
 * Generate robots.txt configuration
 * This will be available at /robots.txt
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL;

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/*', '/dashboard/*'],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
