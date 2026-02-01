import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Briefcase, Users, TrendingUp, Heart, Clock, Award } from 'lucide-react'
import Link from 'next/link'

const benefits = [
  {
    icon: TrendingUp,
    title: 'Career Growth',
    description: 'We invest in your professional development with continuous training and clear advancement paths.',
  },
  {
    icon: Users,
    title: 'Great Team',
    description: 'Join a supportive team of skilled professionals who are passionate about what they do.',
  },
  {
    icon: Heart,
    title: 'Work-Life Balance',
    description: 'We value your time and ensure a healthy balance between work and personal life.',
  },
  {
    icon: Award,
    title: 'Competitive Pay',
    description: 'Enjoy competitive compensation packages and performance-based incentives.',
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image0.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeInDown">Careers at Applicare</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Join our team of skilled professionals and build a rewarding career in appliance repair services.
          </p>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Work With Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              At Applicare, we believe our team is our greatest asset. We&apos;re committed to creating an environment where you can thrive and grow.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-500 border-t-4 border-orange-500 hover-lift group animate-fadeInUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                  <benefit.icon className="w-7 h-7 text-orange-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors duration-300">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Open Positions</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect opportunity to start or advance your career with Applicare.
            </p>
          </div>

          {/* Job Listings */}
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Job Card */}
            <div className="bg-white rounded-xl shadow-lg border-l-4 border-orange-500 overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">On-Call Appliance Repair Technicians</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        On-Call / Per Job
                      </span>
                      <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-semibold">
                        Kenya
                      </span>
                    </div>
                  </div>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-8 h-8 text-orange-500" />
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Applicare is a growing appliance repair services company in Kenya. We are building a trusted network of professional appliance repair technicians to work with us on an on-call, per-job basis.
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">Who We&apos;re Looking For</h4>
                  <p className="text-gray-600 mb-3">Skilled technicians experienced in:</p>
                  <ul className="space-y-2">
                    {[
                      'Washing machines',
                      'Refrigerators & freezers',
                      'Cookers & ovens',
                      'Microwaves & other appliances'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-gray-800 mb-3 text-lg">What We Offer</h4>
                  <ul className="space-y-2">
                    {[
                      'Consistent job referrals',
                      'Flexible on-call work',
                      'Fair pay per job',
                      'No marketing costs',
                      'Opportunity to grow with a national brand'
                    ].map((item, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-700">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-bold text-gray-800 mb-4">How to Apply</h4>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href="https://wa.me/254716029811?text=Hi%2C%20I%27m%20interested%20in%20the%20On-Call%20Appliance%20Repair%20Technician%20position"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-green-500 text-white px-6 py-3 font-bold rounded hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      Apply via WhatsApp
                    </a>
                    <a 
                      href="tel:0716029811"
                      className="bg-blue-500 text-white px-6 py-3 font-bold rounded hover:bg-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      Call: 0716 029 811
                    </a>
                    <a 
                      href="mailto:info@applicare.co.ke?subject=Application%20for%20On-Call%20Appliance%20Repair%20Technician"
                      className="bg-purple-600 text-white px-6 py-3 font-bold rounded hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Email Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-50" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Interested in Training?</h2>
          <p className="text-lg mb-8 text-orange-100">
            We also offer professional appliance repair training programs. Learn from industry experts and gain hands-on experience.
          </p>
          <Link 
            href="/training"
            className="bg-white text-orange-500 px-8 py-3 font-bold rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-block"
          >
            Explore Training Programs
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
