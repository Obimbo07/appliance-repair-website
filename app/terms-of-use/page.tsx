import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Terms of Use | Applicare',
  description:
    'Read Applicare Terms of Use for appliance repair services, bookings, payments, cancellations, and customer responsibilities.',
}

export default function TermsOfUsePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image10.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Terms of Use</h1>
          <p className="text-blue-200 text-lg">
            These terms explain how Applicare services are offered and used.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500">Last updated: March 14, 2026</p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Service Scope</h2>
              <p>
                Applicare provides diagnostics, maintenance, and repair services for domestic and commercial appliances.
                Service availability depends on your location, appliance type, and technician availability.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Bookings and Deposits</h2>
              <p>
                Some bookings may require a deposit to confirm scheduling. Any quoted amount is based on initial information
                and may change after diagnosis. Final costs are confirmed before major repair work proceeds.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Cancellations and Rescheduling</h2>
              <p>
                You may cancel or reschedule by contacting us in advance. Repeated late cancellations or no-shows may affect
                future booking priority and may result in non-refundable charges where allowed by law.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Warranty and Limitations</h2>
              <p>
                We aim for high-quality service and may provide limited workmanship warranties on eligible repairs. Warranty
                coverage does not include misuse, external damage, power issues, or unrelated component failures.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Customer Responsibilities</h2>
              <p>
                You are responsible for providing accurate appliance information, safe access to the repair area, and
                confirmation that the appliance is disconnected from hazardous power sources where required.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contact</h2>
              <p>
                For service concerns or questions about these terms, contact Applicare at{' '}
                <a className="text-orange-600 hover:text-orange-700 font-medium" href="mailto:information@applicare.co.ke">
                  information@applicare.co.ke
                </a>{' '}
                or call 0716 029 811.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
