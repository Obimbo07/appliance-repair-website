import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Privacy Policy | Applicare',
  description:
    'Read the Applicare Privacy Policy to understand how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image11.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-blue-200 text-lg">
            This policy explains how Applicare handles personal information.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-md p-8 space-y-8 text-gray-700 leading-relaxed">
            <p className="text-sm text-gray-500">Last updated: March 14, 2026</p>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Information We Collect</h2>
              <p>
                We may collect your name, phone number, email address, service location, booking details, and payment-related
                metadata needed to process appointments and support requests.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">2. How We Use Information</h2>
              <p>
                We use collected information to schedule services, communicate with you, process payments, improve support,
                and comply with legal obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Payment Processing</h2>
              <p>
                Payments may be processed by third-party providers. Applicare does not store full card information on this
                website. Payment providers handle sensitive payment data under their own compliance standards.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Data Sharing</h2>
              <p>
                We do not sell personal data. Information may be shared with trusted service providers only when necessary for
                operations such as scheduling, messaging, and payment verification.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Data Security</h2>
              <p>
                We use reasonable technical and organizational safeguards to protect personal information. No method of online
                transmission or storage is completely risk-free.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Your Rights and Contact</h2>
              <p>
                To request access, correction, or deletion of your personal information, email{' '}
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
