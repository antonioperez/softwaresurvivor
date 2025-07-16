# SendGrid Setup Guide

This guide will help you set up SendGrid to handle contact form submissions.

## 1. Create a SendGrid Account

1. Go to [SendGrid.com](https://sendgrid.com)
2. Sign up for a free account (allows 100 emails/day)
3. Verify your account

## 2. Get Your API Key

1. In your SendGrid dashboard, go to **Settings** → **API Keys**
2. Click **Create API Key**
3. Name it something like "Contact Form API Key"
4. Select **Restricted Access** and choose **Mail Send** permissions
5. Copy the API key (you won't be able to see it again)

## 3. Verify Your Sender Email

1. Go to **Settings** → **Sender Authentication**
2. Click **Verify a Single Sender**
3. Add your sender email (e.g., `noreply@softwaresurvivor.com`)
4. Follow the verification steps

## 4. Set Up Environment Variables

Create a `.env.local` file in your project root with:

```env
# SendGrid Configuration
SENDGRID_API_KEY=your_sendgrid_api_key_here

# Contact Email (where to send the contact form submissions)
CONTACT_EMAIL=contact@softwaresurvivor.com

# Optional: SendGrid Sender Email (must be verified in SendGrid)
SENDER_EMAIL=noreply@softwaresurvivor.com
```

## 5. Install SendGrid Package (Optional)

If you want to use the SendGrid Node.js library instead of the REST API:

```bash
npm install @sendgrid/mail
```

Then update the API route in `app/api/contact/route.ts` to use the library:

```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

// Replace the fetch call with:
await sgMail.send({
  to: process.env.CONTACT_EMAIL,
  from: process.env.SENDER_EMAIL || 'noreply@softwaresurvivor.com',
  subject: 'New Contact Form Submission - Software Survivor',
  text: emailContent,
})
```

## 6. Test the Integration

1. Start your development server: `npm run dev`
2. Go to `/contact`
3. Fill out and submit the form
4. Check your email for the submission

## Troubleshooting

- **API Key Issues**: Make sure your API key has "Mail Send" permissions
- **Sender Verification**: The sender email must be verified in SendGrid
- **Rate Limits**: Free accounts are limited to 100 emails/day
- **CORS Issues**: The API route is server-side, so CORS shouldn't be an issue

## Security Notes

- Never commit your `.env.local` file to version control
- Use environment variables for all sensitive data
- Consider adding rate limiting to prevent spam
- Validate email addresses on both client and server side 