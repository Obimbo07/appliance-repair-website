import { NextRequest, NextResponse } from 'next/server'
import { noStoreHeaders, paystackReferenceSchema } from '@/lib/security'

export const runtime = 'edge'

function getPaystackSecretKey(): string {
  const secretKey = process.env.PAYSTACK_SECRET_KEY

  if (!secretKey) {
    throw new Error('Missing PAYSTACK_SECRET_KEY')
  }

  return secretKey
}

export async function GET(request: NextRequest) {
  try {
    const rawReference = request.nextUrl.searchParams.get('reference')
    const parsedReference = paystackReferenceSchema.safeParse(rawReference)

    if (!parsedReference.success) {
      return NextResponse.json(
        { message: 'reference query param is invalid' },
        { status: 400, headers: noStoreHeaders() },
      )
    }
    const reference = parsedReference.data

    const secretKey = getPaystackSecretKey()

    const verifyResponse = await fetch(`https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`, {
      headers: {
        Authorization: `Bearer ${secretKey}`,
      },
      cache: 'no-store',
    })

    const verifyData = await verifyResponse.json() as {
      status?: boolean
      message?: string
      data?: {
        status?: string
        amount?: number
        currency?: string
        reference?: string
        metadata?: Record<string, unknown>
      }
    }

    if (!verifyResponse.ok || !verifyData.status) {
      return NextResponse.json(
        { message: verifyData.message || 'Unable to verify payment' },
        { status: 502, headers: noStoreHeaders() },
      )
    }

    return NextResponse.json(
      {
        paid: verifyData.data?.status === 'success',
        status: verifyData.data?.status,
        reference: verifyData.data?.reference,
        amount: verifyData.data?.amount,
        currency: verifyData.data?.currency,
        metadata: verifyData.data?.metadata,
      },
      { headers: noStoreHeaders() },
    )
  } catch (error) {
    const message =
      error instanceof Error && error.message === 'Missing PAYSTACK_SECRET_KEY'
        ? 'Server payment configuration error'
        : 'Unexpected server error'
    return NextResponse.json({ message }, { status: 500, headers: noStoreHeaders() })
  }
}
