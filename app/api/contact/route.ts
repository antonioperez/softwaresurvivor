import { NextRequest, NextResponse } from 'next/server'
import formData from 'form-data'
import Mailgun from 'mailgun.js'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const {
      fullName,
      firstName,
      lastName,
      email,
      company,
      service,
      timeline,
      budgetRange,
      message,
    } = body
    const submitterName =
      typeof fullName === 'string' && fullName.trim()
        ? fullName.trim()
        : [firstName, lastName].filter(Boolean).join(' ').trim()

    // Validate required fields
    if (!submitterName || !email || !company || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Validate Mailgun configuration
    if (!process.env.MAILGUN_API_KEY || !process.env.MAILGUN_API_SERVER) {
      console.error('Mailgun configuration missing')
      return NextResponse.json({ error: 'Email service not configured' }, { status: 500 })
    }

    // Get current timestamp
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'America/Los_Angeles',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    })

    // Enhanced email template with better formatting and readability
    const emailContent = `
📅 SUBMISSION DETAILS
───────────────────────────────────────────────────────────────
• Date & Time: ${timestamp}
• Source: Software Survivor Website Contact Form

👤 CONTACT INFORMATION
───────────────────────────────────────────────────────────────
• Full Name: ${submitterName}
• Email Address: ${email}
• Company: ${company}
• Service Interest: ${service || 'Not specified'}
• Timeline: ${timeline || 'Not specified'}
• Budget Range: ${budgetRange || 'Not specified'}

💬 MESSAGE CONTENT
───────────────────────────────────────────────────────────────

${message}

───────────────────────────────────────────────────────────────
    `

    // Initialize Mailgun client
    const mailgun = new Mailgun(formData)
    const mg = mailgun.client({
      username: 'api',
      key: process.env.MAILGUN_API_KEY,
    })

    // Send email via Mailgun
    await mg.messages.create(process.env.MAILGUN_API_SERVER, {
      from: 'noreply@softwaresurvivor.com',
      to: [process.env.CONTACT_EMAIL || 'contact@softwaresurvivor.com'],
      subject: `📧 Project Conversation: ${company} - ${service || 'General Inquiry'}`,
      text: emailContent,
      'h:Reply-To': email, // Allow replying directly to the submitter
    })

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
