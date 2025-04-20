import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  DATABASE_URL: z.string(),
  RESEND_API_KEY: z.string(),
  BETTER_AUTH_SECRET: z.string(),
  POLAR_ACCESS_TOKEN: z.string(),
  POLAR_WEBHOOK_SECRET: z.string(),
  GOOGLE_CLIENT_ID: z.string(),
  GOOGLE_CLIENT_SECRET: z.string(),
});

export const ENV = envSchema.parse(process.env);
