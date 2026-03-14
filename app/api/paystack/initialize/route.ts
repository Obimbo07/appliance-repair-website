import { NextRequest, NextResponse } from 'next/server'
import { calculateDepositAmount, pricedServices } from '@/lib/service-pricing'
import { sendBookingEmails } from '@/lib/email'

export const runtime = 'edge'

interface InitializePaymentBody {
  serviceId: string
  customerName: string
  customerEmail: string
  phone: string
  serviceType: string
  appliance: string
  brand?: string
  issue?: string
  address: string
  preferredDate: string
  preferredTime?: string
}

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
    const body = await request.json() as Partial<InitializePaymentBody>

    if (
      !body.serviceId ||
      !body.customerName ||
      !body.customerEmail ||
      !body.phone ||
      !body.serviceType ||
      !body.appliance ||
      !body.address ||
      !body.preferredDate
    ) {
      return NextResponse.json({ message: 'Missing required booking fields' }, { status: 400 })
    }

    const service = pricedServices.find((item) => item.id === body.serviceId)
    if (!service) {
      return NextResponse.json({ message: 'Invalid service selected' }, { status: 400 })
    }

    const { secretKey } = getPaystackConfig()
    const callbackUrl = process.env.PAYSTACK_CALLBACK_URL || `${request.nextUrl.origin}/api/paystack/callback`
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
        { status: 502 },
      )
    }

    let emailNotificationWarning = ''

    try {
      await sendBookingEmails({
        customerName: body.customerName,
        customerEmail: body.customerEmail,
        customerPhone: body.phone,
        serviceName: service.name,
        serviceType: body.serviceType,
        appliance: body.appliance,
        brand: body.brand,
        issue: body.issue,
        address: body.address,
        preferredDate: body.preferredDate,
        preferredTime: body.preferredTime,
        amountKes,
        paymentProvider: 'paystack',
      })
    } catch (error) {
      emailNotificationWarning = error instanceof Error ? error.message : 'Failed to send booking emails'
    }

    return NextResponse.json({
      authorizationUrl: initData.data.authorization_url,
      reference: initData.data.reference,
      amountKes,
      service: service.name,
      emailNotificationWarning: emailNotificationWarning || undefined,
    })
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unexpected server error'
    return NextResponse.json({ message }, { status: 500 })
  }
}
