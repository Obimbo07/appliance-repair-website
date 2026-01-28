import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Users, Award, Clock, Shield, Target, Heart } from 'lucide-react'

const values = [
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We operate with complete transparency. No hidden fees, no unnecessary repairs - just honest service.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every repair. Our technicians are trained to deliver the highest quality work.',
  },
  {
    icon: Clock,
    title: 'Reliability',
    description: 'We show up on time, every time. You can count on us to be there when you need us most.',
  },
  {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We go above and beyond to ensure every customer is happy.',
  },
]

const stats = [
  { number: '500+', label: 'Repairs Completed' },
  { number: '98%', label: 'Customer Satisfaction' },
  { number: '24/7', label: 'Support Available' },
  { number: '3+', label: 'Years Experience' },
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image10.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeInDown">About Applicare</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Your trusted partner for professional appliance repair services in Nairobi, Nakuru, and surrounding regions.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Founded in 2023, Applicare began with a simple mission: to provide honest, reliable, and affordable appliance repair services to homeowners and businesses across Kenya.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                We understand how frustrating it can be when an essential appliance breaks down. That&apos;s why we&apos;ve built a team of skilled technicians who are dedicated to getting your appliances back to working order as quickly as possible.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we&apos;re proud to serve Nairobi, Nakuru, and surrounding areas with the same commitment to quality and customer satisfaction that has defined us from the start.
              </p>
            </div>
            <div className="relative animate-fadeInRight">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-8 text-white hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <Target className="w-12 h-12 animate-pulse-slow" />
                  <h3 className="text-2xl font-bold">Our Mission</h3>
                </div>
                <p className="text-lg leading-relaxed">
                  To deliver exceptional appliance repair services with integrity, expertise, and a commitment to customer satisfaction. We aim to be the most trusted appliance repair company in Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-blue-900 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="text-center animate-fadeInUp hover:scale-110 transition-transform duration-300" style={{ animationDelay: `${idx * 100}ms` }}>
                <div className="text-4xl lg:text-5xl font-bold text-orange-400 mb-2">{stat.number}</div>
                <div className="text-blue-200">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, idx) => (
              <div key={idx} className="text-center group hover-lift animate-fadeInUp" style={{ animationDelay: `${idx * 150}ms` }}>
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 group-hover:scale-110 transition-all duration-300">
                  <value.icon className="w-8 h-8 text-orange-500 group-hover:rotate-12 transition-transform duration-300" />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-purple-600 transition-colors duration-300">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our team of certified technicians brings years of experience and a passion for excellence to every repair job.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="flex items-center gap-4 justify-center mb-6">
              <Users className="w-12 h-12 text-purple-600" />
              <h3 className="text-2xl font-bold text-gray-800">Certified Technicians</h3>
            </div>
            <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
              All our technicians are trained and certified to repair appliances from all major brands including LG, Samsung, Hotpoint, Bosch, Hisense, and more. We invest in continuous training to ensure our team stays up-to-date with the latest repair techniques and technologies.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-orange-500 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-400 opacity-50" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Experience the Applicare Difference?</h2>
          <p className="text-lg mb-8 text-orange-100">
            Book a service appointment today and see why hundreds of customers trust us with their appliance repairs.
          </p>
          <a 
            href="https://wa.me/254716029811?text=Hello%20Applicare%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20services" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-orange-500 px-8 py-3 font-bold rounded hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          >
            Contact Us Today
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}
