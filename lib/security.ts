import { z } from 'zod'

const DEFAULT_SITE_ORIGIN = 'https://applicare.co.ke'

function normalizeOrigin(value: string): string | null {
  try {
    const url = new URL(value)
    if (url.protocol !== 'http:' && url.protocol !== 'https:') {
      return null
    }
    return url.origin
  } catch {
    return null
  }
}

export function getSiteOrigin(): string {
  const fromEnv =
    process.env.NEXT_PUBLIC_SITE_URL ||
    process.env.SITE_URL ||
    process.env.PAYSTACK_CALLBACK_URL

  const normalized = fromEnv ? normalizeOrigin(fromEnv) : null
  return normalized || DEFAULT_SITE_ORIGIN
}

export function getAllowedOrigins(requestOrigin: string): Set<string> {
  const allowed = new Set<string>([
    getSiteOrigin(),
    normalizeOrigin(requestOrigin) || requestOrigin,
    'http://localhost:3000',
    'http://127.0.0.1:3000',
  ])

  const extra = process.env.ALLOWED_ORIGINS
  if (extra) {
    for (const candidate of extra.split(',')) {
      const normalized = normalizeOrigin(candidate.trim())
      if (normalized) {
        allowed.add(normalized)
      }
    }
  }

  return allowed
}

export function isAllowedRequestOrigin(origin: string | null, requestOrigin: string): boolean {
  if (!origin) {
    return false
  }

  const normalized = normalizeOrigin(origin)
  if (!normalized) {
    return false
  }

  return getAllowedOrigins(requestOrigin).has(normalized)
}

export function noStoreHeaders(): Record<string, string> {
  return {
    'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
    Pragma: 'no-cache',
    Expires: '0',
  }
}

export const paystackReferenceSchema = z
  .string()
  .trim()
  .min(6)
  .max(120)
  .regex(/^[a-zA-Z0-9._=-]+$/, 'Invalid payment reference format')

export const initializePaymentSchema = z.object({
  serviceId: z.string().trim().min(1).max(80),
  customerName: z.string().trim().min(2).max(120),
  customerEmail: z.string().trim().email().max(254),
  phone: z.string().trim().min(7).max(30),
  serviceType: z.string().trim().min(2).max(100),
  appliance: z.string().trim().min(2).max(100),
  brand: z.string().trim().max(80).optional(),
  issue: z.string().trim().max(2000).optional(),
  address: z.string().trim().min(4).max(300),
  preferredDate: z.string().trim().min(4).max(40),
  preferredTime: z.string().trim().max(40).optional(),
})

export type InitializePaymentInput = z.infer<typeof initializePaymentSchema>
