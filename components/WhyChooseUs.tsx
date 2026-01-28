'use client'

import React, { useEffect, useRef, useState } from 'react'
import { Shield, Users, Zap, Clock } from 'lucide-react'

const reasons = [
  {
    icon: Shield,
    title: 'Skilled & Certified Technicians',
    description: 'Our team brings real experience and ongoing training to diagnose and repair all major household and commercial appliances.',
    bgColor: 'bg-purple-100'
  },
  {
    icon: Users,
    title: 'Community-Focused Service',
    description: 'We are your trusted neighbors in Nairobi, Nakuru and surrounding regions, dedicated to supporting local families and businesses.',
    bgColor: 'bg-yellow-50'
  },
  {
    icon: Zap,
    title: 'Honest & Transparent Pricing',
    description: 'No hidden fees or unnecessary repairs. Just clear, fair quotes and solutions that work within budget.',
    bgColor: 'bg-gray-200'
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'We strive for same-day or next-day service wherever possible because we know your time matters.',
    bgColor: 'bg-pink-100'
  }
]

export default function WhyChooseUs() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-16 bg-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main content area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="inline-block bg-yellow-400 text-gray-800 px-4 py-2 font-bold mb-4 rounded hover:scale-105 transition-transform duration-300">
              Why choose us?
            </div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">
              We Bring Your Appliances Back to Life
            </h2>
            <p className="text-gray-700 mb-8">
              At Applicare, our mission is simple yet powerful: to deliver fast, reliable, and affordable appliance repair services that extend the life of your machines and reduce stress. We are committed to transparent pricing, honest recommendations, genuine parts, and solutions that save you time and money.
            </p>
            
            <div className="space-y-4 mb-8">
              {reasons.slice(0, 2).map((reason, idx) => (
                <div 
                  key={idx} 
                  className={`flex items-start gap-4 p-4 rounded-lg hover:bg-white/50 transition-all duration-300 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                  }`}
                  style={{ transitionDelay: `${(idx + 1) * 200}ms` }}
                >
                  <reason.icon className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0 animate-pulse-slow" />
                  <div>
                    <h3 className="font-bold text-gray-800">{reason.title}</h3>
                    <p className="text-gray-600 text-sm">{reason.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <div className={`transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="relative group">
              <img 
                src="/image1.jpeg?w=600&h=400&fit=crop" 
                alt="Technician"
                className="rounded-lg w-full shadow-xl group-hover:shadow-2xl transition-all duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-4 gap-6">
          {reasons.map((reason, idx) => (
            <div 
              key={idx} 
              className={`${reason.bgColor} p-8 rounded-lg text-center group hover-lift cursor-pointer transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <reason.icon className="w-12 h-12 mx-auto mb-4 text-purple-600 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300" />
              <h3 className="font-bold text-lg mb-3 text-gray-800 group-hover:text-purple-700 transition-colors duration-300">{reason.title}</h3>
              <p className="text-gray-700 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
