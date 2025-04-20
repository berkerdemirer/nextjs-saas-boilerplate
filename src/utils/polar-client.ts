import { ENV } from '@/src/utils/env';
import { Polar } from '@polar-sh/sdk';

export const polar = new Polar({
  accessToken: ENV.POLAR_ACCESS_TOKEN,
  server: 'sandbox',
});
