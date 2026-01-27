'use client'

import React, { useState } from 'react'
import { X } from 'lucide-react'

interface BookServiceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookServiceModal({ isOpen, onClose }: BookServiceModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    appliance: '',
    brand: '',
    issue: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission (e.g., send to API or WhatsApp)
    const message = `New Service Booking Request:
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Appliance: ${formData.appliance}
Brand: ${formData.brand}
Issue: ${formData.issue}
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime}
Address: ${formData.address}`
    
    window.open(`https://wa.me/254700000000?text=${encodeURIComponent(message)}`, '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl w-full max-w-lg mx-4 max-h-[90vh] overflow-y-auto animate-scaleIn">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-orange-500 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Book a Service</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-orange-600 rounded transition-colors duration-300 hover:rotate-90 transform"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder="+254 700 000 000"
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
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="john@example.com"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Appliance Type *</label>
              <select
                name="appliance"
                value={formData.appliance}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Appliance</option>
                <option value="Refrigerator">Refrigerator</option>
                <option value="Washing Machine">Washing Machine</option>
                <option value="Dryer">Dryer</option>
                <option value="Dishwasher">Dishwasher</option>
                <option value="Oven/Stove">Oven/Stove</option>
                <option value="Microwave">Microwave</option>
                <option value="Air Conditioner">Air Conditioner</option>
                <option value="Freezer">Freezer</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand</label>
              <select
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Brand</option>
                <option value="LG">LG</option>
                <option value="Samsung">Samsung</option>
                <option value="Hotpoint">Hotpoint</option>
                <option value="Bosch">Bosch</option>
                <option value="Hisense">Hisense</option>
                <option value="Black & Decker">Black & Decker</option>
                <option value="Rampton">Rampton</option>
                <option value="Other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Describe the Issue *</label>
            <textarea
              name="issue"
              value={formData.issue}
              onChange={handleChange}
              required
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Please describe the problem you're experiencing..."
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date *</label>
              <input
                type="date"
                name="preferredDate"
                value={formData.preferredDate}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Time</label>
              <select
                name="preferredTime"
                value={formData.preferredTime}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              >
                <option value="">Select Time</option>
                <option value="Morning (8AM - 12PM)">Morning (8AM - 12PM)</option>
                <option value="Afternoon (12PM - 4PM)">Afternoon (12PM - 4PM)</option>
                <option value="Evening (4PM - 7PM)">Evening (4PM - 7PM)</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Service Address *</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Enter your full address"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-3 px-6 font-bold rounded-md hover:bg-orange-600 transition-colors"
            >
              Submit Booking Request
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
