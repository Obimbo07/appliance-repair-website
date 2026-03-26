import { NextRequest, NextResponse } from 'next/server'
import { calculateDepositAmount, pricedServices } from '@/lib/service-pricing'
import {
  getSiteOrigin,
  initializePaymentSchema,
  isAllowedRequestOrigin,
  noStoreHeaders,
} from '@/lib/security'

export const runtime = 'edge'

function getPaystackConfig() {
  const secretKey = process.env.PAYSTACK_SECRET_KEY

  if (!secretKey) {
    throw new Error('Missing PAYSTACK_SECRET_KEY')
  }

  return {
    secretKey,
  }
}

export async function POST(request: NextRequest) {
  try {
    const requestOrigin = request.headers.get('origin')
    if (!isAllowedRequestOrigin(requestOrigin, request.nextUrl.origin)) {
      return NextResponse.json(
        { message: 'Forbidden origin' },
        { status: 403, headers: noStoreHeaders() },
      )
    }

    const contentType = request.headers.get('content-type') || ''
    if (!contentType.toLowerCase().includes('application/json')) {
      return NextResponse.json(
        { message: 'Invalid content type' },
        { status: 415, headers: noStoreHeaders() },
      )
    }

    const rawBody = await request.json()
    const parsed = initializePaymentSchema.safeParse(rawBody)
    if (!parsed.success) {
      return NextResponse.json(
        { message: 'Invalid booking payload' },
        { status: 400, headers: noStoreHeaders() },
      )
    }
    const body = parsed.data

    const service = pricedServices.find((item) => item.id === body.serviceId)
    if (!service) {
      return NextResponse.json(
        { message: 'Invalid service selected' },
        { status: 400, headers: noStoreHeaders() },
      )
    }

    const { secretKey } = getPaystackConfig()
    const callbackUrl = process.env.PAYSTACK_CALLBACK_URL || `${getSiteOrigin()}/api/paystack/callback`
    const amountKes = calculateDepositAmount(service.priceKes)
    const amountKobo = amountKes * 100

    const initResponse = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${secretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: body.customerEmail,
        amount: amountKobo,
        currency: 'KES',
        callback_url: callbackUrl,
        metadata: {
          customerName: body.customerName,
          customerPhone: body.phone,
          serviceId: body.serviceId,
          serviceName: service.name,
          serviceType: body.serviceType,
          appliance: body.appliance,
          brand: body.brand,
          issue: body.issue,
          address: body.address,
          preferredDate: body.preferredDate,
          preferredTime: body.preferredTime,
          depositAmountKes: amountKes,
        },
      }),
      cache: 'no-store',
    })

    const initData = await initResponse.json() as {
      status?: boolean
      message?: string
      data?: {
        authorization_url?: string
        reference?: string
      }
    }

    if (!initResponse.ok || !initData.status || !initData.data?.authorization_url) {
      return NextResponse.json(
        { message: initData.message || 'Unable to initialize Paystack transaction' },
        { status: 502, headers: noStoreHeaders() },
      )
    }

    return NextResponse.json(
      {
        authorizationUrl: initData.data.authorization_url,
        reference: initData.data.reference,
        amountKes,
        service: service.name,
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
