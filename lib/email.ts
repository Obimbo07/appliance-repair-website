import nodemailer from 'nodemailer'

interface BookingEmailDetails {
  customerName: string
  customerEmail: string
  customerPhone: string
  serviceName: string
  serviceType: string
  appliance: string
  brand?: string
  issue?: string
  address: string
  preferredDate: string
  preferredTime?: string
  amountKes: number
  paymentProvider: 'paystack'
}

function getEmailConfig() {
  const config = {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === 'true',
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.SMTP_FROM,
    adminEmail: process.env.ADMIN_NOTIFICATION_EMAIL,
  }

  for (const [key, value] of Object.entries(config)) {
    if (!value && key !== 'secure') {
      throw new Error(`Missing email env var: ${key}`)
    }
  }

  return config
}

function formatKes(amount: number): string {
  return new Intl.NumberFormat('en-KE', {
    style: 'currency',
    currency: 'KES',
    maximumFractionDigits: 0,
  }).format(amount)
}

export async function sendBookingEmails(details: BookingEmailDetails): Promise<void> {
  const config = getEmailConfig()

  const transporter = nodemailer.createTransport({
    host: config.host,
    port: config.port,
    secure: config.secure,
    auth: {
      user: config.user,
      pass: config.pass,
    },
  })

  const adminSubject = `New Booking: ${details.serviceName} (${details.customerName})`
  const adminText = [
    'New booking submitted via website',
    '',
    `Customer: ${details.customerName}`,
    `Email: ${details.customerEmail}`,
    `Phone: ${details.customerPhone}`,
    `Service: ${details.serviceName}`,
    `Service Type: ${details.serviceType}`,
    `Appliance: ${details.appliance}`,
    `Brand: ${details.brand || 'Not specified'}`,
    `Issue: ${details.issue || 'Not specified'}`,
    `Address: ${details.address}`,
    `Preferred Date: ${details.preferredDate}`,
    `Preferred Time: ${details.preferredTime || 'Flexible'}`,
    `Deposit Amount: ${formatKes(details.amountKes)}`,
    `Payment Provider: ${details.paymentProvider}`,
  ].join('\n')

  const customerSubject = `Booking received: ${details.serviceName}`
  const customerText = [
    `Hello ${details.customerName},`,
    '',
    'Your booking has been received and you will be redirected to Paystack for payment.',
    `Service: ${details.serviceName}`,
    `Deposit requested: ${formatKes(details.amountKes)}`,
    '',
    'Applicare Team',
  ].join('\n')

  await Promise.all([
    transporter.sendMail({
      from: config.from,
      to: config.adminEmail,
      subject: adminSubject,
      text: adminText,
    }),
    transporter.sendMail({
      from: config.from,
      to: details.customerEmail,
      subject: customerSubject,
      text: customerText,
    }),
  ])
}
