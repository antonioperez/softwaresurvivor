import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
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
• Full Name: ${firstName} ${lastName}
• Email Address: ${email}
• Company: ${company || 'Not provided'}
• Service Interest: ${service || 'Not specified'}

💬 MESSAGE CONTENT
───────────────────────────────────────────────────────────────

${message}

───────────────────────────────────────────────────────────────
    `

    // SendGrid API call
    const sendGridResponse = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.SENDGRID_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [
              {
                email: process.env.CONTACT_EMAIL || 'contact@softwaresurvivor.com',
                name: 'Software Survivor Team',
              },
            ],
            subject: `📧 Contact Form: ${firstName} ${lastName} - ${service || 'General Inquiry'}`,
          },
        ],
        from: {
          email: 'noreply@softwaresurvivor.com',
          name: 'Software Survivor Contact Form',
        },
        content: [
          {
            type: 'text/plain',
            value: emailContent,
          },
        ],
      }),
    })

    if (!sendGridResponse.ok) {
      console.error('SendGrid API error:', await sendGridResponse.text())
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
