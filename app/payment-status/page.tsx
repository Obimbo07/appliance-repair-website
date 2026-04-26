import Link from 'next/link'
import type { Metadata } from 'next'

export const runtime = 'edge'

export const metadata: Metadata = {
  title: 'Payment Status | Applicare Appliance Repair Kenya',
  description:
    'Check your Applicare payment confirmation status and next steps. Contact support quickly if your payment needs manual verification.',
  alternates: {
    canonical: '/payment-status',
  },
}

type SearchParams = {
  status?: string
  reference?: string
}

function getStatusCopy(status?: string) {
  if (status === 'success') {
    return {
      title: 'Payment Confirmed',
      message: 'Your deposit payment was successful. Our team will contact you shortly to finalize service scheduling.',
      badgeClass: 'bg-green-100 text-green-700',
    }
  }

  if (status === 'missing_reference') {
    return {
      title: 'Payment Reference Missing',
      message: 'We could not find a payment reference in the callback. Please contact support with your payment details.',
      badgeClass: 'bg-yellow-100 text-yellow-700',
    }
  }

  if (status === 'verification_failed') {
    return {
      title: 'Verification Failed',
      message: 'We could not verify this payment automatically. If you completed payment, contact support and share your reference.',
      badgeClass: 'bg-yellow-100 text-yellow-700',
    }
  }

  return {
    title: 'Payment Not Confirmed',
    message: 'Your payment is pending or failed. You can retry booking or contact support for assistance.',
    badgeClass: 'bg-red-100 text-red-700',
  }
}

export default async function PaymentStatusPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>
}) {
  const params = await searchParams
  const status = params.status
  const reference = params.reference
  const copy = getStatusCopy(status)

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-16">
      <section className="max-w-xl w-full bg-white border border-gray-200 rounded-xl shadow-md p-8 text-center">
        <p className={`inline-flex px-3 py-1 rounded-full text-sm font-medium mb-4 ${copy.badgeClass}`}>
          {status || 'unknown'}
        </p>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">{copy.title}</h1>
        <p className="text-gray-600 mb-6">{copy.message}</p>

        {reference && (
          <p className="text-sm text-gray-500 mb-6">
            Reference: <span className="font-semibold text-gray-700">{reference}</span>
          </p>
        )}

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="px-5 py-3 bg-blue-700 text-white rounded-md font-semibold hover:bg-blue-800 transition-colors">
            Back to Home
          </Link>
          <Link href="/contact" className="px-5 py-3 bg-orange-500 text-white rounded-md font-semibold hover:bg-orange-600 transition-colors">
            Contact Support
          </Link>
        </div>
      </section>
    </main>
  )
}
