import Link from '@/components/Link'
import ContactForm from '@/components/ContactForm'
import siteMetadata from '@/data/siteMetadata'

export default function ContactPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Contact Us
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Ready to start your next project? Let's discuss how we can help you build something
            amazing.
          </p>
        </div>

        <div className="container py-12">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">About Us</h2>

                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
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
                        Remote-first company serving clients worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
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
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
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
                        Custom software development, technical leadership, and system architecture
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="rounded-xl bg-white p-8 shadow-lg dark:bg-gray-800">
                <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-white">
                  Connect With Us
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
