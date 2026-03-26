import { NextRequest, NextResponse } from 'next/server'
import { getSiteOrigin, paystackReferenceSchema } from '@/lib/security'

export const runtime = 'edge'

function getPaystackSecretKey(): string {
  const secretKey = process.env.PAYSTACK_SECRET_KEY

  if (!secretKey) {
    throw new Error('Missing PAYSTACK_SECRET_KEY')
  }

  return secretKey
}

async function verifyPaystackReference(reference: string) {
  const secretKey = getPaystackSecretKey()

  const response = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
    headers: {
      Authorization: `Bearer ${secretKey}`,
    },
    cache: 'no-store',
  })

  const payload = await response.json() as {
    status?: boolean
    message?: string
    data?: {
      status?: string
      reference?: string
    }
  }

  return {
    ok: response.ok && payload.status === true,
    status: payload.data?.status,
    reference: payload.data?.reference,
    message: payload.message,
  }
}

export async function GET(request: NextRequest) {
  const origin = getSiteOrigin()
  const searchParams = request.nextUrl.searchParams
  const rawReference = searchParams.get('reference') || searchParams.get('trxref')

  const redirectUrl = new URL('/payment-status', origin)

  const parsedReference = paystackReferenceSchema.safeParse(rawReference)
  if (!parsedReference.success) {
    redirectUrl.searchParams.set('status', 'missing_reference')
    return NextResponse.redirect(redirectUrl)
  }
  const reference = parsedReference.data

  try {
    const verification = await verifyPaystackReference(reference)

    redirectUrl.searchParams.set('reference', verification.reference || reference)

    if (!verification.ok) {
      redirectUrl.searchParams.set('status', 'verification_failed')
      return NextResponse.redirect(redirectUrl)
    }

    const paid = verification.status === 'success'
    redirectUrl.searchParams.set('status', paid ? 'success' : verification.status || 'failed')
    return NextResponse.redirect(redirectUrl)
  } catch {
    redirectUrl.searchParams.set('reference', reference)
    redirectUrl.searchParams.set('status', 'error')
    return NextResponse.redirect(redirectUrl)
  }
}
