import portfolioData from '@/data/portfolioData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Portfolio | Custom Software Consulting Projects',
  description:
    "View our portfolio of custom software consulting projects. Enterprise web applications, mobile apps, and technical leadership solutions we've built for clients in Fresno and Central California.",
  canonical: '/portfolio',
  keywords: [
    'custom software consulting portfolio',
    'software consulting projects',
    'enterprise software portfolio',
    'fresno software development portfolio',
  ],
})

export default function Portfolio() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Our Portfolio
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Discover how we help clients succeed with innovative software solutions and impactful
            projects.
          </p>
        </div>
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {portfolioData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Have Questions About Our Services?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Check out our FAQ page to learn more about our software development process, pricing,
              and how we serve Central California businesses.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/faq"
                className="bg-brand-600 hover:bg-brand-700 inline-flex items-center rounded-md px-6 py-3 text-base font-medium text-white"
              >
                View FAQ
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
