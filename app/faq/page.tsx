import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import FAQSchema from '@/components/FAQSchema'

export const metadata: Metadata = genPageMetadata({
  title: 'Frequently Asked Questions - Fresno Software Development',
  description:
    'Common questions about software development services in Fresno, CA. Learn about our process, pricing, and how we serve Central California businesses.',
})

const faqs = [
  {
    question: 'What software development services do you offer in Fresno?',
    answer:
      'We provide comprehensive software development services including custom web applications, mobile app development, system architecture design, technical leadership, and consulting. We serve businesses throughout Central California with scalable solutions that grow with your business.',
  },
  {
    question: 'Do you work with local Fresno businesses?',
    answer:
      'Yes! We specialize in serving Central California businesses. Our local presence means we understand the unique challenges and opportunities facing Fresno, Clovis, Madera, Visalia, and surrounding areas. We provide face-to-face collaboration and ongoing local support.',
  },
  {
    question: 'What industries do you serve in the Central Valley?',
    answer:
      'We work with diverse industries including agriculture technology, healthcare, manufacturing, logistics, education, retail, and government. Our experience spans from startups to established enterprises throughout the Central Valley.',
  },
  {
    question: 'How much does software development cost in Fresno?',
    answer:
      'Our pricing is competitive and transparent. We offer flexible engagement models including project-based pricing, retainer agreements, and technical leadership services. Contact us for a free consultation to discuss your specific needs and budget.',
  },
  {
    question: 'Do you provide ongoing support and maintenance?',
    answer:
      'Absolutely. We believe in long-term partnerships and provide ongoing support, maintenance, and system optimization. Our local presence ensures quick response times and reliable service for all your software needs.',
  },
  {
    question: 'What technologies do you use for software development?',
    answer:
      'We use enterprise-grade technologies including React, Next.js, Node.js, Python, Java, React Native, Flutter, and cloud platforms like AWS, Azure, and Google Cloud. Our Principal Engineer experience ensures we choose the optimal technology stack for your specific project requirements and scale.',
  },
  {
    question: 'How long does a typical software project take?',
    answer:
      'Project timelines vary based on complexity and scope. A simple web application might take 4-8 weeks, while complex enterprise systems can take 3-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the process.',
  },
  {
    question: 'Do you handle all aspects of software development?',
    answer:
      'Yes, we provide end-to-end services from initial concept and requirements gathering to design, development, testing, deployment, and ongoing maintenance. Our Principal Engineer-level expertise also includes technical leadership, architecture design, and team mentoring services.',
  },
  {
    question: 'Can you help with existing software systems?',
    answer:
      'Yes, we can help modernize, maintain, or enhance existing software systems. We provide code reviews, system audits, performance optimization, and migration services to improve your current technology infrastructure.',
  },
  {
    question: 'How do I get started with a software project?',
    answer:
      "Start by contacting us for a free consultation. We'll discuss your business needs, technical requirements, timeline, and budget. From there, we'll create a detailed proposal and project plan tailored to your specific goals.",
  },
]

export default function FAQPage() {
  return (
    <>
      <FAQSchema faqs={faqs} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Frequently Asked Questions
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Common questions about our software development services in Fresno and Central
            California
          </p>
        </div>

        <div className="container py-12">
          <div className="mx-auto max-w-4xl">
            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="mb-3 text-lg font-semibold text-gray-900 dark:text-white">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Call to Action */}
            <div className="mt-16 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                Still Have Questions?
              </h3>
              <p className="mb-6 text-gray-600 dark:text-gray-400">
                We're here to help! Contact us for a free consultation about your software
                development needs.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <a
                  href="/contact"
                  className="bg-brand-600 hover:bg-brand-700 inline-flex items-center rounded-md px-6 py-3 text-base font-medium text-white"
                >
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
