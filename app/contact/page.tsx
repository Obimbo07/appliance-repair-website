'use client'

import React, { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission - in production, you'd send this to an API
    const message = `New Contact Form Submission:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Subject: ${formData.subject}
Message: ${formData.message}`
    
    // Open WhatsApp with the message
    window.open(`https://wa.me/254716029811?text=${encodeURIComponent(message)}`, '_blank')
    
    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/image11.jpeg')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 animate-fadeInDown">Contact Us</h1>
          <p className="text-xl text-blue-200 max-w-2xl mx-auto animate-fadeInUp animation-delay-200">
            Get in touch with us for all your appliance repair needs. We&apos;re here to help!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="animate-fadeInLeft">
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8">
                Have a question or need appliance repair services? Reach out to us through any of the following channels or fill out the contact form.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4 group hover:bg-orange-50 p-3 rounded-lg transition-all duration-300 -ml-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                    <Phone className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Phone</h3>
                    <p className="text-gray-600">0716 029 811 / 0723 585 580</p>
                    <p className="text-sm text-gray-500">Call or WhatsApp us anytime</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-orange-50 p-3 rounded-lg transition-all duration-300 -ml-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                    <Mail className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Email</h3>
                    <p className="text-gray-600">information@applicare.co.ke</p>
                    <p className="text-sm text-gray-500">We&apos;ll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-orange-50 p-3 rounded-lg transition-all duration-300 -ml-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Service Areas</h3>
                    <p className="text-gray-600">Nairobi, Nakuru & Surrounding Regions</p>
                    <p className="text-sm text-gray-500">We come to you!</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 group hover:bg-orange-50 p-3 rounded-lg transition-all duration-300 -ml-3">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300">
                    <Clock className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Business Hours</h3>
                    <p className="text-gray-600">Monday - Saturday: 8:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sunday: 9:00 AM - 5:00 PM</p>
                    <p className="text-sm text-gray-500">Emergency services available 24/7</p>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/254716029811?text=Hello%20Applicare" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-green-500 text-white px-6 py-3 font-bold rounded hover:bg-green-600 transition-all duration-300 text-center hover:scale-105 hover:shadow-lg"
                >
                  WhatsApp Us
                </a>
                <a 
                  href="tel:0716029811"
                  className="bg-orange-500 text-white px-6 py-3 font-bold rounded hover:bg-orange-600 transition-all duration-300 text-center hover:scale-105 hover:shadow-lg"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 animate-fadeInRight hover:shadow-xl transition-shadow duration-500">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              {submitted && (
                <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg animate-fadeInUp">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                      placeholder="0716 029 811"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Subject *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Service Request">Service Request</option>
                    <option value="Quote Request">Quote Request</option>
                    <option value="Feedback">Feedback</option>
                    <option value="Complaint">Complaint</option>
                    <option value="Partnership">Partnership Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                    placeholder="How can we help you?"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-orange-500 text-white py-3 px-6 font-bold rounded-md hover:bg-orange-600 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  <Send size={20} />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Service Areas</h2>
          <div className="bg-gray-300 rounded-lg h-64 flex items-center justify-center">
            <p className="text-gray-600">Service areas: Nairobi, Nakuru, and surrounding regions</p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
