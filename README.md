# Appliance Repair Website

Applicare website built with Next.js.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Paystack API (deposits)
- Nodemailer (email notifications)

## 1. Clone the Project

Use HTTPS:

```bash
git clone https://github.com/Obimbo07/appliance-repair-website.git
cd appliance-repair-website
```

Or use SSH:

```bash
git clone git@github.com:Obimbo07/appliance-repair-website.git
cd appliance-repair-website
```

## 2. Install Dependencies

This repo includes `pnpm-lock.yaml`, so `pnpm` is recommended.

```bash
pnpm install
```

If you do not use pnpm:

```bash
npm install
```

## 3. Create Environment Variables

Create a `.env.local` file in the project root and add:

```env
# Paystack
PAYSTACK_SECRET_KEY=your_paystack_secret_key
PAYSTACK_CALLBACK_URL=http://localhost:3000/api/paystack/callback

# SMTP (Email)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
SMTP_FROM="Applicare <no-reply@yourdomain.com>"
ADMIN_NOTIFICATION_EMAIL=your_admin_email@example.com
```

Notes:
- `PAYSTACK_SECRET_KEY` is required for payment initialization and verification.
- If `PAYSTACK_CALLBACK_URL` is not set, the app falls back to your current origin.
- SMTP values are required for booking notification emails.

## 4. Run the Project Locally

```bash
pnpm dev
```

Open:

`http://localhost:3000`

## 5. Build for Production

```bash
pnpm build
pnpm start
```

## 6. Lint

```bash
pnpm lint
```

## Available Scripts

- `pnpm dev` - start development server
- `pnpm build` - create production build
- `pnpm start` - run production server
- `pnpm lint` - run ESLint

## Paystack Endpoints

- `POST /api/paystack/initialize`
- `GET /api/paystack/verify?reference=...`
- `GET /api/paystack/callback?reference=...`

After callback verification, users are redirected to:

- `GET /payment-status`

## Project Structure (High Level)

- `app/` - routes and API handlers
- `components/` - reusable UI sections
- `lib/` - shared data and backend utilities
- `public/` - static assets

## Deploy

You can deploy on Vercel or any platform that supports Next.js.

For Vercel:
1. Import the GitHub repository.
2. Add the same environment variables from `.env.local` to Vercel project settings.
3. Deploy.
