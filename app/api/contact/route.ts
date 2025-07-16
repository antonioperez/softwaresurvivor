import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, company, service, message } = body

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Email template
    const emailContent = `
      New Contact Form Submission
      
      Name: ${firstName} ${lastName}
      Email: ${email}
      Company: ${company || 'Not provided'}
      Service Interest: ${service || 'Not specified'}
      
      Message:
      ${message}
      
      ---
      This message was sent from the Software Survivor contact form.
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
            subject: 'New Contact Form Submission - Software Survivor',
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
