# SaaS Boilerplate

This is a [Next.js](https://nextjs.org/) project boilerplate designed to kickstart your SaaS application development. It includes essential features like authentication, database integration with Drizzle ORM, UI components with Shadcn/ui, and more.

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (Version 20 or higher recommended)
- A Node.js package manager: [npm](https://www.npmjs.com/), [yarn](https://yarnpkg.com/), [pnpm](https://pnpm.io/), or [bun](https://bun.sh/)
- [PostgreSQL](https://www.postgresql.org/) database

## Getting Started

Follow these steps to get your development environment up and running:

1.  **Clone the repository:**

    ```bash
    git clone <your-repository-url>
    cd saas-boilerplate
    ```

2.  **Install dependencies:**
    Choose your preferred package manager:

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Set up environment variables:**
    Copy the example environment file and fill in your specific configuration details:

    ```bash
    cp .env.example .env
    ```

    You'll need to provide values for:

    - `DATABASE_URL`: Your PostgreSQL connection string.
    - `BETTER_AUTH_SECRET`: A secret key for authentication.
    - `NEXT_PUBLIC_APP_URL`: The base URL of your application (e.g., `http://localhost:3000`).
    - `RESEND_API_KEY`: Your API key from [Resend](https://resend.com/) for sending emails.
    - `SENTRY_AUTH_TOKEN`: Your auth token if using [Sentry](https://sentry.io/) for error tracking.
    - `GOOGLE_CLIENT_ID`: Your Google OAuth client ID for social login.
    - `GOOGLE_CLIENT_SECRET`: Your Google OAuth client secret for social login.

4.  **Run database migrations:**
    Apply the database schema:

    ```bash
    npm run db:migrate
    ```

    _(Optional)_ You can seed the database with initial data using:

    ```bash
    npm run db:seed
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```
    Open [http://localhost:3000](http://localhost:3000) (or your configured `NEXT_PUBLIC_APP_URL`) in your browser to see the result.

## Application Configuration

The `src/app-config.ts` file centralizes various configuration settings for the application. You should modify this file to match your specific needs.

## Authentication (Better Auth)

This boilerplate uses [Better Auth](https://better-auth.dev/) for handling authentication and user management. The core configuration can be found in `src/lib/auth.ts`.

Key features implemented:

- **Database Integration:** Uses the `drizzleAdapter` with your PostgreSQL database (schema defined in `src/db/schema.ts`).
- **Email & Password:** Standard email and password sign-up and sign-in are enabled.
- **Social Login:** Google authentication is implemented for easy sign-in.
- **Email Verification:**
  - Required for users signing up via email/password.
  - Verification emails are sent automatically on sign-up using the `src/components/email-templates/verify-email.tsx` template.
  - Users are auto-signed in and redirected post-verification.
- **Password Reset:** Users can reset their passwords via email using the `src/components/email-templates/reset-password.tsx` template.
- **Welcome Email:** A welcome email (`src/components/email-templates/welcome.tsx`) is sent when a new user record is created in the database.
- **Stripe Integration:**
  - Automatically creates Stripe customers on user sign-up.
  - Manages subscription plans ('Starter', 'Professional') defined in `src/app-config.ts`. Requires `STRIPE_KEY` and `STRIPE_WEBHOOK_SECRET` environment variables.
- **Next.js Integration:** Uses the `nextCookies()` plugin for proper cookie handling within the Next.js framework.

You can customize email templates, authentication flows, and plugin configurations by modifying `src/lib/auth.ts` and the referenced email template components.

## Learn More

To learn more about the technologies used in this boilerplate, refer to their respective documentation:

- [Next.js Documentation](https://nextjs.org/docs)
- [Drizzle ORM Documentation](https://orm.drizzle.team/docs)
- [Better Auth Documentation](https://better-auth.dev/docs)
- [Shadcn/ui Documentation](https://ui.shadcn.com/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
