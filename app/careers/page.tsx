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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200')] bg-cover bg-center opacity-10" />
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

          {/* No Jobs Message */}
          <div className="bg-gray-50 rounded-xl p-12 text-center max-w-2xl mx-auto">
            <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Briefcase className="w-10 h-10 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">No Open Positions Yet</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We don&apos;t have any open positions at the moment, but we&apos;re always looking for talented individuals. 
              Check back soon or send us your resume for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:info@applicare.co.ke?subject=Career%20Inquiry%20-%20Resume%20Submission"
                className="bg-orange-500 text-white px-6 py-3 font-bold rounded hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Send Your Resume
              </a>
              <Link 
                href="/contact"
                className="bg-purple-600 text-white px-6 py-3 font-bold rounded hover:bg-purple-700 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2"
              >
                Contact Us
              </Link>
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
