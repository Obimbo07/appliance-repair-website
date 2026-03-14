# Appliance Repair Website

*Automatically synced with your [v0.app](https://v0.app) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/austins-projects-7258f1a6/v0-appliance-repair-website)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/hB6W2Hy5Cx8)

## Overview

This repository will stay in sync with your deployed chats on [v0.app](https://v0.app).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.app](https://v0.app).

## Deployment

Your project is live at:

**[https://vercel.com/austins-projects-7258f1a6/v0-appliance-repair-website](https://vercel.com/austins-projects-7258f1a6/v0-appliance-repair-website)**

## Build your app

Continue building your app on:

**[https://v0.app/chat/hB6W2Hy5Cx8](https://v0.app/chat/hB6W2Hy5Cx8)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository

## Paystack Deposit Setup

This project uses Paystack for collecting a 20% service deposit during booking.

1. Set `PAYSTACK_SECRET_KEY` in your environment.
2. Set `PAYSTACK_CALLBACK_URL` to your callback URL (recommended: `https://<your-domain>/api/paystack/callback`).
3. Configure SMTP vars in `.env.example` so admin and customer email notifications are sent.

### Payment Endpoints

- Initialize Paystack transaction: `POST /api/paystack/initialize`
- Verify transaction by reference: `GET /api/paystack/verify?reference=...`
- Paystack callback redirect handler: `GET /api/paystack/callback?reference=...`

After callback verification, users are redirected to `GET /payment-status` with payment status query params.
