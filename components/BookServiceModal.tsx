'use client'

import React, { useState } from 'react'
import { X, Wrench, Settings, Loader2 } from 'lucide-react'

interface BookServiceModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BookServiceModal({ isOpen, onClose }: BookServiceModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    serviceType: '' as 'repair' | 'maintenance' | '',
    maintenanceFrequency: '' as 'one-time' | 'recurring' | '',
    recurringSchedule: '',
    appliance: '',
    brand: '',
    issue: '',
    preferredDate: '',
    preferredTime: '',
    address: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ 
      ...prev, 
      [name]: value,
      // Reset maintenance frequency if service type changes
      ...(name === 'serviceType' && value !== 'maintenance' ? { maintenanceFrequency: '', recurringSchedule: '' } : {}),
      // Reset recurring schedule if frequency changes
      ...(name === 'maintenanceFrequency' && value !== 'recurring' ? { recurringSchedule: '' } : {}),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Build email content
    const serviceTypeLabel = formData.serviceType === 'repair' ? 'Repair' : 'Maintenance'
    const maintenanceDetails = formData.serviceType === 'maintenance' 
      ? `\nMaintenance Type: ${formData.maintenanceFrequency === 'one-time' ? 'One-Time' : 'Recurring'}${formData.maintenanceFrequency === 'recurring' ? `\nSchedule: ${formData.recurringSchedule}` : ''}`
      : ''

    const emailBody = `New Service Booking Request

SERVICE DETAILS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Service Type: ${serviceTypeLabel}${maintenanceDetails}
Appliance: ${formData.appliance}
Brand: ${formData.brand || 'Not specified'}

CUSTOMER INFORMATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Name: ${formData.name}
Email: ${formData.email || 'Not provided'}
Phone: ${formData.phone}
Address: ${formData.address}

SCHEDULING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Preferred Date: ${formData.preferredDate}
Preferred Time: ${formData.preferredTime || 'Flexible'}

${formData.serviceType === 'repair' ? 'ISSUE DESCRIPTION' : 'SERVICE NOTES'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${formData.issue || 'No additional details provided'}`

    const subject = `[${serviceTypeLabel.toUpperCase()}] ${formData.appliance} - ${formData.name}`

    // Option 1: Send via mailto (opens email client)
    const mailtoLink = `mailto:info@applicare.co.ke?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`
    
    // Option 2: Also offer WhatsApp as backup
    const whatsappMessage = `*New ${serviceTypeLabel} Booking*\n\n` +
      `*Name:* ${formData.name}\n` +
      `*Phone:* ${formData.phone}\n` +
      `*Email:* ${formData.email || 'Not provided'}\n` +
      `*Appliance:* ${formData.appliance}\n` +
      `*Brand:* ${formData.brand || 'Not specified'}\n` +
      `*Service:* ${serviceTypeLabel}${maintenanceDetails.replace(/\n/g, '\n*')}\n` +
      `*Date:* ${formData.preferredDate}\n` +
      `*Time:* ${formData.preferredTime || 'Flexible'}\n` +
      `*Address:* ${formData.address}\n` +
      `*Details:* ${formData.issue || 'None'}`

    // Simulate submission delay for better UX
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Open email client
    window.location.href = mailtoLink
    
    setIsSubmitting(false)
    setSubmitSuccess(true)
    
    // Reset after showing success
    setTimeout(() => {
      setSubmitSuccess(false)
      setFormData({
        name: '',
        email: '',
        phone: '',
        serviceType: '',
        maintenanceFrequency: '',
        recurringSchedule: '',
        appliance: '',
        brand: '',
        issue: '',
        preferredDate: '',
        preferredTime: '',
        address: '',
      })
      onClose()
    }, 2000)
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
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-t-lg">
          <h2 className="text-xl font-bold">Book a Service</h2>
          <button 
            onClick={onClose}
            className="p-1 hover:bg-orange-600 rounded transition-colors duration-300 hover:rotate-90 transform"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>
        </div>

        {/* Success Message */}
        {submitSuccess ? (
          <div className="p-8 text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Booking Request Sent!</h3>
            <p className="text-gray-600">We&apos;ll contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          /* Form */
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            {/* Service Type Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Service Type *</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: 'repair', maintenanceFrequency: '', recurringSchedule: '' }))}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-300 ${
                    formData.serviceType === 'repair'
                      ? 'border-orange-500 bg-orange-50 text-orange-700'
                      : 'border-gray-200 hover:border-orange-300 hover:bg-orange-50/50'
                  }`}
                >
                  <Wrench className={`w-6 h-6 ${formData.serviceType === 'repair' ? 'text-orange-500' : 'text-gray-400'}`} />
                  <span className="font-semibold">Repair</span>
                  <span className="text-xs text-gray-500">Fix a broken appliance</span>
                </button>
                <button
                  type="button"
                  onClick={() => setFormData(prev => ({ ...prev, serviceType: 'maintenance' }))}
                  className={`flex flex-col items-center gap-2 p-4 rounded-lg border-2 transition-all duration-300 ${
                    formData.serviceType === 'maintenance'
                      ? 'border-purple-500 bg-purple-50 text-purple-700'
                      : 'border-gray-200 hover:border-purple-300 hover:bg-purple-50/50'
                  }`}
                >
                  <Settings className={`w-6 h-6 ${formData.serviceType === 'maintenance' ? 'text-purple-500' : 'text-gray-400'}`} />
                  <span className="font-semibold">Maintenance</span>
                  <span className="text-xs text-gray-500">Preventive servicing</span>
                </button>
              </div>
            </div>

            {/* Maintenance Frequency - Only show if maintenance is selected */}
            {formData.serviceType === 'maintenance' && (
              <div className="animate-fadeIn">
                <label className="block text-sm font-medium text-gray-700 mb-2">Maintenance Frequency *</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, maintenanceFrequency: 'one-time', recurringSchedule: '' }))}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.maintenanceFrequency === 'one-time'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <span className="font-semibold">One-Time</span>
                    <p className="text-xs text-gray-500 mt-1">Single service visit</p>
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, maintenanceFrequency: 'recurring' }))}
                    className={`p-3 rounded-lg border-2 transition-all duration-300 ${
                      formData.maintenanceFrequency === 'recurring'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <span className="font-semibold">Recurring</span>
                    <p className="text-xs text-gray-500 mt-1">Regular scheduled visits</p>
                  </button>
                </div>

                {/* Recurring Schedule Options */}
                {formData.maintenanceFrequency === 'recurring' && (
                  <div className="mt-3 animate-fadeIn">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Schedule Frequency *</label>
                    <select
                      name="recurringSchedule"
                      value={formData.recurringSchedule}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    >
                      <option value="">Select frequency</option>
                      <option value="Weekly">Weekly</option>
                      <option value="Bi-Weekly">Bi-Weekly (Every 2 weeks)</option>
                      <option value="Monthly">Monthly</option>
                      <option value="Quarterly">Quarterly (Every 3 months)</option>
                      <option value="Bi-Annual">Bi-Annual (Every 6 months)</option>
                      <option value="Annual">Annual (Yearly)</option>
                    </select>
                  </div>
                )}
              </div>
            )}

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
                  <option value="Water Heater">Water Heater</option>
                  <option value="Coffee Machine">Coffee Machine</option>
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
                  <option value="Bosch">Bosch</option>
                  <option value="Samsung">Samsung</option>
                  <option value="LG">LG</option>
                  <option value="Electrolux">Electrolux</option>
                  <option value="Haier">Haier</option>
                  <option value="Siemens">Siemens</option>
                  <option value="Whirlpool">Whirlpool</option>
                  <option value="Hotpoint">Hotpoint</option>
                  <option value="Philips">Philips</option>
                  <option value="Miele">Miele</option>
                  <option value="GE">GE</option>
                  <option value="Hisense">Hisense</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {formData.serviceType === 'repair' ? 'Describe the Issue *' : 'Additional Notes'}
              </label>
              <textarea
                name="issue"
                value={formData.issue}
                onChange={handleChange}
                required={formData.serviceType === 'repair'}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                placeholder={formData.serviceType === 'repair' 
                  ? "Please describe the problem you're experiencing..." 
                  : "Any specific areas you'd like us to focus on?"}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  {formData.maintenanceFrequency === 'recurring' ? 'Start Date *' : 'Preferred Date *'}
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  required
                  min={new Date().toISOString().split('T')[0]}
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

            <div className="pt-4 space-y-3">
              <button
                type="submit"
                disabled={isSubmitting || !formData.serviceType || (formData.serviceType === 'maintenance' && !formData.maintenanceFrequency)}
                className="w-full bg-orange-500 text-white py-3 px-6 font-bold rounded-md hover:bg-orange-600 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Submit Booking Request'
                )}
              </button>
              <p className="text-xs text-gray-500 text-center">
                Your request will be sent to info@applicare.co.ke
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}
