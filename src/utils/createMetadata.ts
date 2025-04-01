import { appConfig } from '@/app-config';
import { Metadata } from 'next/types';

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    openGraph: {
      title: override.title ?? undefined,
      description: override.openGraph?.description ?? appConfig.appDescription,
      url: appConfig.appUrl,
      images: `${appConfig.appUrl}/og.png`,
      siteName: appConfig.appName,
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      creator: appConfig.social?.twitter,
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: `${appConfig.appUrl}/og.png`,
      ...override.twitter,
    },
  };
}
