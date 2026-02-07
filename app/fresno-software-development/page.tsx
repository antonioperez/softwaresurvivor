import { Metadata } from 'next'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata: Metadata = genPageMetadata({
  title: 'Fresno Custom Software Consulting | Software Development Company',
  description:
    'Leading custom software consulting company in Fresno, CA. Custom web applications, mobile apps, and technical leadership services. Expert software consulting serving Central California businesses with scalable solutions.',
  canonical: '/fresno-software-development',
  keywords: [
    'custom software consulting fresno',
    'Fresno software development company',
    'Fresno custom software consulting',
    'Fresno web development',
    'Fresno mobile app development',
    'Central California software company',
    'Fresno IT consulting',
    'Clovis software development',
    'Madera web development',
    'San Luis Obispo software development',
    'Pismo Beach software development',
    'SLO software development',
  ],
})

export default function FresnoSoftwareDevelopmentPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Fresno Software Development
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Building scalable software solutions in the heart of Central California
        </p>
      </div>

      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Why Choose Fresno */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Why Choose a Fresno Software Development Company?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                As a Fresno-based software development company, we understand the unique challenges
                and opportunities facing Central California businesses. Our local presence means:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Deep understanding of Central Valley business needs</li>
                <li>Local support and face-to-face collaboration</li>
                <li>Knowledge of regional regulations and compliance</li>
                <li>Strong relationships with local technology partners</li>
                <li>Faster response times and personalized service</li>
              </ul>
            </div>
          </div>

          {/* Services in Fresno */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Software Development Services in Fresno
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Enterprise Web Applications
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Enterprise-grade web solutions built with modern technologies like React, Next.js,
                  and Node.js with focus on scalability and maintainability
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Mobile App Development
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Native and cross-platform mobile applications for iOS and Android
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  Technical Leadership & Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Principal Engineer-level team management and enterprise architecture for growing
                  companies
                </p>
              </div>
              <div className="border-l-4 border-red-600 pl-4">
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                  System Architecture
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Scalable system design and cloud infrastructure solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Local Areas Served */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Serving Central California
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { city: 'Fresno', description: 'Central Valley hub for technology and innovation' },
              {
                city: 'Clovis',
                description: 'Growing tech community with strong business presence',
              },
              { city: 'Madera', description: 'Agricultural technology and business solutions' },
              { city: 'Visalia', description: 'Healthcare and retail software development' },
              { city: 'Hanford', description: 'Manufacturing and logistics software solutions' },
              { city: 'Merced', description: 'Education and government technology services' },
            ].map((area) => (
              <div
                key={area.city}
                className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{area.city}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Serving Coastal California
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                city: 'San Luis Obispo',
                description: 'Coastal tech hub with thriving startup ecosystem and innovation',
              },
              { city: 'Pismo Beach', description: 'Tourism and hospitality technology solutions' },
              {
                city: 'Santa Barbara',
                description: 'Tech hub with thriving startup ecosystem and innovation',
              },
            ].map((area) => (
              <div
                key={area.city}
                className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{area.city}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Ready to Build Something Amazing in Fresno?
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Let's discuss how we can help your Central California business grow with custom software
            solutions.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex items-center rounded-md border border-transparent bg-red-600 px-6 py-3 text-base font-medium text-white hover:bg-red-700"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
