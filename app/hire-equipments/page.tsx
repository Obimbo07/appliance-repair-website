import React from 'react'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Hire Equipments | Applicare',
  description: 'Hire appliance repair equipment and diagnostic tools from Applicare. Request your rental by email for quick processing.',
}

const equipments = [
  {
    name: 'Digital Multimeter Kit',
    useCase: 'Voltage, continuity, resistance, and current checks for appliances.',
  },
  {
    name: 'Refrigerant Manifold Gauge Set',
    useCase: 'Pressure diagnostics for refrigerators and air conditioning systems.',
  },
  {
    name: 'Vacuum Pump',
    useCase: 'System evacuation before refrigerant charging and sealed system service.',
  },
  {
    name: 'Leak Detector',
    useCase: 'Detects refrigerant leaks in cooling lines and joints.',
  },
  {
    name: 'Appliance Dolly & Moving Straps',
    useCase: 'Safe movement of heavy units like fridges, washers, and dryers.',
  },
  {
    name: 'Insulation Resistance Tester',
    useCase: 'Electrical safety and insulation health checks on appliance circuits.',
  },
]

export default function HireEquipmentsPage() {
  const email = 'information@applicare.co.ke'
  const subject = 'Equipment Hire Request'
  const body = `Hello Applicare,%0D%0A%0D%0AI would like to hire equipment.%0D%0A%0D%0AEquipment Needed:%0D%0AHire Period:%0D%0AName:%0D%0APhone:%0D%0ALocation:%0D%0A%0D%0AThank you.`

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />

      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image10.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Hire Equipments</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto">
            Access professional appliance repair tools and diagnostic equipment when you need them.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Available Equipment</h2>
            <p className="text-gray-600 mb-8">
              Browse our commonly hired tools below. If you need a specific item, include it in your request email and our team will confirm availability.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {equipments.map((item) => (
                <div key={item.name} className="border border-gray-200 rounded-lg p-5 hover:border-orange-400 transition-colors duration-300">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{item.name}</h3>
                  <p className="text-gray-600">{item.useCase}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-orange-500 text-white rounded-lg shadow-lg p-8 text-center">
            <h2 className="text-3xl font-bold mb-3">Ready to Hire Equipment?</h2>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Send your request to our team and we will confirm pricing, availability, and hire terms by email.
            </p>
            <a
              href={`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${body}`}
              className="inline-block bg-white text-orange-500 px-8 py-3 font-bold rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Request Equipment Hire by Email
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
