import Link from '@/components/Link'
import ContactForm from '@/components/ContactForm'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({
  title: 'Start a Project Conversation',
  description:
    'Start a project conversation with Software Survivor. Share your custom software, AI workflow automation, integration, modernization, or architecture challenge.',
  canonical: '/contact',
  keywords: [
    'custom software development contact',
    'software project consultation',
    'AI workflow automation consultation',
    'Fresno software developer contact',
  ],
})

const nextSteps = [
  {
    title: 'Send the context',
    description:
      'Share the business problem, current system, timeline, constraints, and what a useful outcome would look like.',
  },
  {
    title: 'We review fit',
    description:
      'We look for clear ownership, realistic scope, enough budget to do the work responsibly, and a problem where senior engineering help can matter.',
  },
  {
    title: 'You get a practical next step',
    description:
      'If there is a fit, the next step is usually a short discovery conversation or a scoped architecture and delivery recommendation.',
  },
]

export default function ContactPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Start a Project Conversation
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Tell us about the software problem, workflow, integration, or modernization effort your
            team needs to solve. The goal is to quickly determine whether Software Survivor is the
            right senior partner for the work.
          </p>
        </div>

        <div className="container py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  What Happens Next
                </h2>

                <div className="space-y-6">
                  {nextSteps.map((step, index) => (
                    <div key={step.title} className="flex items-start space-x-4">
                      <div className="bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg font-semibold">
                        {index + 1}
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 dark:text-white">
                          {step.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  At a Glance
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-brand-100 dark:bg-brand-900 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                      <svg
                        className="text-brand-600 dark:text-brand-400 h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Location</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        <Link
                          href="/fresno-software-development"
                          className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium"
                        >
                          Fresno, CA
                        </Link>
                        , serving Central California and remote US teams
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-accent-100 dark:bg-accent-900 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                      <svg
                        className="text-accent-600 dark:text-accent-400 h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Response Time</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        We typically respond within 24 hours with a fit check or a better next step
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="bg-success-100 dark:bg-success-900 flex h-12 w-12 shrink-0 items-center justify-center rounded-xl">
                      <svg
                        className="text-success-600 dark:text-success-400 h-6 w-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">Expertise</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Custom software, AI workflow automation, integrations, architecture, and
                        technical leadership
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Engagement Fit
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Most serious custom software engagements start in the five-figure range. Smaller
                  advisory or architecture reviews can be scoped separately when you need a clear
                  technical plan before implementation.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">Best fit</h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>Business-critical workflows</li>
                      <li>AI and integration work</li>
                      <li>Modernization or architecture rescue</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold text-gray-900 dark:text-white">
                      Not the best fit
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li>Lowest-bid brochure sites</li>
                      <li>No clear business owner</li>
                      <li>No implementation budget</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Connect With Software Survivor
                </h2>

                <div className="space-y-4">
                  {siteMetadata.linkedin && (
                    <Link
                      href={siteMetadata.linkedin}
                      className="group hover:text-brand-600 dark:hover:text-brand-400 flex items-center space-x-3 text-gray-600 transition-colors duration-300 dark:text-gray-400"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                      <span>LinkedIn</span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
