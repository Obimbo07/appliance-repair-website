import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { GraduationCap, Wrench, Users, Clock, Award, CheckCircle, BookOpen, Settings } from 'lucide-react'
import Link from 'next/link'

const trainingPrograms = [
  {
    icon: Wrench,
    title: 'Refrigerator Repair Training',
    description: 'Learn to diagnose and repair all types of refrigerators including French door, side-by-side, and commercial units.',
    duration: '4 weeks',
    topics: ['Compressor diagnostics', 'Refrigerant handling', 'Electrical systems', 'Ice maker repairs'],
  },
  {
    icon: Settings,
    title: 'Washing Machine & Dryer Repair',
    description: 'Master the repair of top-load, front-load washers and both gas and electric dryers.',
    duration: '3 weeks',
    topics: ['Motor diagnostics', 'Drum & belt repairs', 'Electronic controls', 'Water system troubleshooting'],
  },
  {
    icon: BookOpen,
    title: 'HVAC & Air Conditioning',
    description: 'Comprehensive training on air conditioning systems, including installation, maintenance, and repair.',
    duration: '6 weeks',
    topics: ['AC installation', 'Refrigerant management', 'Compressor repairs', 'Thermostat systems'],
  },
  {
    icon: GraduationCap,
    title: 'Complete Appliance Technician Course',
    description: 'Our flagship program covering all major home appliances. Become a certified appliance repair technician.',
    duration: '12 weeks',
    topics: ['All appliance types', 'Business skills', 'Customer service', 'Safety certifications'],
  },
]

const benefits = [
  'Hands-on practical training',
  'Industry-experienced instructors',
  'Real-world repair scenarios',
  'Certificate upon completion',
  'Job placement assistance',
  'Ongoing support & mentorship',
]

export default function TrainingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeInDown">Training Programs</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Learn appliance repair from industry experts. Gain practical skills and start your career in appliance repair.
          </p>
        </div>
      </section>

      {/* Why Choose Our Training */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Why Choose Applicare Training?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Applicare, we offer comprehensive appliance repair training programs designed to equip you with the skills and knowledge needed to succeed in the industry. Our training combines theoretical knowledge with hands-on practical experience.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Whether you&apos;re starting a new career or looking to expand your existing skills, our expert instructors will guide you every step of the way.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 group">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <span className="text-gray-700 group-hover:text-purple-600 transition-colors duration-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative animate-fadeInRight">
              <div className="bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg p-8 text-white hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                <div className="flex items-center gap-4 mb-6">
                  <GraduationCap className="w-12 h-12 animate-pulse-slow" />
                  <h3 className="text-2xl font-bold">Get Certified</h3>
                </div>
                <p className="text-lg leading-relaxed mb-6">
                  Upon completing our training programs, you&apos;ll receive a professional certification recognized by employers across Kenya. Start your journey to becoming a certified appliance repair technician today.
                </p>
                <div className="flex items-center gap-4 text-orange-100">
                  <Clock className="w-5 h-5" />
                  <span>Flexible training schedules available</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Training Programs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Training Programs</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from our range of specialized training programs tailored to different skill levels and career goals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {trainingPrograms.map((program, idx) => (
              <div 
                key={idx} 
                className="bg-gray-50 rounded-lg p-6 hover:shadow-xl transition-all duration-500 border border-gray-200 hover:border-orange-300 group animate-fadeInUp"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                    <program.icon className="w-7 h-7 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">{program.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                      <Clock className="w-4 h-4" />
                      <span>Duration: {program.duration}</span>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">{program.description}</p>
                <div className="border-t border-gray-200 pt-4">
                  <h4 className="font-semibold text-gray-700 mb-2">Topics Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {program.topics.map((topic, topicIdx) => (
                      <span key={topicIdx} className="bg-purple-100 text-purple-700 text-sm px-3 py-1 rounded-full">
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Training CTA */}
      <section className="py-16 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90" />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Training?</h2>
          <p className="text-lg mb-8 text-blue-200">
            Send us a training request and our team will get in touch with you to discuss program details, schedules, and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:info@applicare.co.ke?subject=Training%20Program%20Request&body=Hello%20Applicare%20Team%2C%0A%0AI%20am%20interested%20in%20your%20appliance%20repair%20training%20programs.%20Please%20provide%20more%20information%20about%3A%0A%0A-%20Available%20programs%0A-%20Training%20schedules%0A-%20Pricing%20and%20payment%20options%0A%0AThank%20you!"
              className="bg-orange-500 text-white px-8 py-4 font-bold rounded hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2 text-lg"
            >
              <Award className="w-5 h-5" />
              Request Training Info
            </a>
            <a 
              href="https://wa.me/254716029811?text=Hello%20Applicare%2C%20I%20am%20interested%20in%20your%20appliance%20repair%20training%20programs.%20Please%20provide%20more%20information."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 font-bold rounded hover:bg-green-600 transition-all duration-300 hover:scale-105 hover:shadow-lg inline-flex items-center justify-center gap-2 text-lg"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-gray-800 mb-2">Do I need prior experience to enroll?</h3>
              <p className="text-gray-600">No prior experience is required for most of our programs. We accept beginners and provide comprehensive training from the ground up.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-gray-800 mb-2">Where is the training conducted?</h3>
              <p className="text-gray-600">Training is conducted at our facilities in Nairobi and Nakuru. We also offer on-site training for groups upon request.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-gray-800 mb-2">Is the certification recognized?</h3>
              <p className="text-gray-600">Yes, our certification is recognized by employers across Kenya and demonstrates your competency in appliance repair.</p>
            </div>
            
            <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="font-bold text-gray-800 mb-2">Do you offer payment plans?</h3>
              <p className="text-gray-600">Yes, we offer flexible payment plans to make our training accessible. Contact us for more details about payment options.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
