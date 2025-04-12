import { db } from '@/drizzle';
import {
  account,
  product,
  session,
  user,
  verification,
} from '@/drizzle/schema';
import { resetPasswordEmail } from '@/src/email-templates/reset-password';
import { verifyEmail } from '@/src/email-templates/verify-email';
import { welcomeEmail } from '@/src/email-templates/welcome';
import { sendEmail } from '@/src/lib/resend';
import { ENV } from '@/src/utils/env';
import { polar } from '@polar-sh/better-auth';
import { Polar } from '@polar-sh/sdk';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';

const client = new Polar({
  accessToken: ENV.POLAR_ACCESS_TOKEN,
  server: 'production',
});

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: { user, session, account, verification },
  }),
  user: {
    deleteUser: {
      enabled: true,
    },
  },
  rateLimit: {
    enabled: true,
    window: 10,
    max: 100,
    storage: 'memory',
    modelName: 'rateLimit',
  },
  emailVerification: {
    callbackUrl: '/dashboard',
    autoSignInAfterVerification: true,
    sendOnSignUp: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: 'Verify your email',
        template: verifyEmail({
          username: user.email,
          url: url,
        }),
      });
    },
  },
  emailAndPassword: {
    enabled: true,
    requireEmailVerification: true,
    async sendResetPassword({ user, url }) {
      await sendEmail({
        to: user.email,
        subject: 'Reset your password',
        template: resetPasswordEmail({
          username: user.email,
          resetLink: url,
        }),
      });
    },
  },
  socialProviders: {
    google: {
      clientId: ENV.GOOGLE_CLIENT_ID,
      clientSecret: ENV.GOOGLE_CLIENT_SECRET,
    },
  },
  databaseHooks: {
    user: {
      create: {
        after: async (user) => {
          await sendEmail({
            to: user.email,
            subject: 'Welcome to MyApp',
            template: welcomeEmail({
              username: user.name || user.email,
            }),
          });
        },
      },
    },
  },
  plugins: [
    polar({
      checkout: {
        enabled: true,
        products: async () => {
          const allProducts = await db.select().from(product);
          return allProducts.map(({ productId, slug }) => ({
            productId,
            slug,
          }));
        },
        successUrl: '/success?checkout_id={CHECKOUT_ID}',
      },
      client,
      createCustomerOnSignUp: true,
    }),
  ],
});
