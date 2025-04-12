import { appConfig } from '@/src/app-config';
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: appConfig.appUrl || '/',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
      alternates: {
        languages: {
          pl: `${appConfig.appUrl}/en`,
        },
      },
    },
  ];
}
