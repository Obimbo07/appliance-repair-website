import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Wrench, Refrigerator, WashingMachine, Wind, Microwave, Tv, ThermometerSun, Plug, Settings, Sun } from 'lucide-react'

const services = [
  {
    icon: Refrigerator,
    title: 'Refrigerator Repair',
    description: 'Expert repair for all refrigerator types including French door, side-by-side, top/bottom freezer, and commercial units. We fix cooling issues, compressor problems, ice maker repairs, and more.',
  },
  {
    icon: WashingMachine,
    title: 'Washing Machine Repair',
    description: 'Complete washing machine repair services for top-load, front-load, and commercial washers. We handle drainage issues, spin cycle problems, leaks, and electrical faults.',
  },
  {
    icon: Wind,
    title: 'Dryer Repair',
    description: 'Professional dryer repair for gas and electric dryers. We fix heating issues, drum problems, ventilation, and ensure your dryer operates safely and efficiently.',
  },
  {
    icon: Microwave,
    title: 'Microwave Repair',
    description: 'Fast microwave repair services for countertop and built-in units. We repair heating elements, turntables, control panels, and door mechanisms.',
  },
  {
    icon: ThermometerSun,
    title: 'Oven & Stove Repair',
    description: 'Comprehensive oven and stove repair for gas and electric models. We fix burners, igniters, thermostats, heating elements, and control boards.',
  },
  {
    icon: Tv,
    title: 'Dishwasher Repair',
    description: 'Expert dishwasher repair services. We resolve drainage issues, cleaning problems, leaks, and ensure your dishwasher runs at peak performance.',
  },
  {
    icon: Wind,
    title: 'Air Conditioner Repair',
    description: 'Professional AC repair and maintenance. We fix cooling issues, compressor problems, refrigerant leaks, and electrical faults for all AC types.',
  },
  {
    icon: Plug,
    title: 'Freezer Repair',
    description: 'Reliable freezer repair for chest freezers, upright freezers, and commercial units. We handle temperature issues, defrost problems, and compressor repairs.',
  },
  {
    icon: Settings,
    title: 'General Appliance Maintenance',
    description: 'Preventive maintenance services to keep all your appliances running smoothly. Regular maintenance extends appliance life and prevents costly repairs.',
  },
  {
    icon: Sun,
    title: 'Solar System Installation',
    description: 'Professional installation of solar panels, inverters, and battery storage systems. Reduce your electricity bills and embrace clean, renewable energy with our expert solar solutions.',
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image9.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeInDown">Our Services</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Professional appliance repair services for all major brands. Fast, reliable, and affordable repairs by certified technicians.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-500 border-t-4 border-orange-500 hover-lift group animate-fadeInUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-50" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Need Appliance Repair?</h2>
          <p className="text-lg mb-8 text-orange-100">
            Our certified technicians are ready to help. Book a service appointment today and get your appliance back to working order.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://wa.me/254716029811?text=Hello%20Applicare%2C%20I%20need%20appliance%20repair%20service" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-3 font-bold rounded hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              WhatsApp Us
            </a>
            <a 
              href="tel:0716029811"
              className="bg-white text-orange-500 px-8 py-3 font-bold rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
              Call 0716 029 811
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
