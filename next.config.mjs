import path from "node:path"
import { fileURLToPath } from "node:url"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const siteOrigin = process.env.NEXT_PUBLIC_SITE_URL || 'https://applicare.co.ke'

const securityHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "base-uri 'self'",
      "object-src 'none'",
      "frame-ancestors 'self'",
      `connect-src 'self' ${siteOrigin} https://api.paystack.co https://vitals.vercel-insights.com`,
      "img-src 'self' data: blob: https:",
      "font-src 'self' data: https:",
      "style-src 'self' 'unsafe-inline' https:",
      "script-src 'self' 'unsafe-inline' https:",
      "form-action 'self'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
]

const faviconHeaders = [
  {
    key: 'Cache-Control',
    value: 'no-store, no-cache, must-revalidate, proxy-revalidate',
  },
  {
    key: 'Pragma',
    value: 'no-cache',
  },
  {
    key: 'Expires',
    value: '0',
  },
]

const legacyFaviconRoutes = [
  '/icon-light-32x32.png',
  '/icon-dark-32x32.png',
  '/icon.svg',
  '/apple-icon.png',
]

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: __dirname,
  },
  poweredByHeader: false,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  async redirects() {
    return legacyFaviconRoutes.map((source) => ({
      source,
      destination: '/favicon.ico?v=20260327c',
      permanent: true,
    }))
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/favicon.ico',
        headers: faviconHeaders,
      },
      {
        source: '/applicare-logo-square.png',
        headers: faviconHeaders,
      },
      {
        source: '/icon-light-32x32.png',
        headers: faviconHeaders,
      },
      {
        source: '/icon-dark-32x32.png',
        headers: faviconHeaders,
      },
      {
        source: '/icon.svg',
        headers: faviconHeaders,
      },
      {
        source: '/apple-icon.png',
        headers: faviconHeaders,
      },
    ]
  },
}

export default nextConfig
