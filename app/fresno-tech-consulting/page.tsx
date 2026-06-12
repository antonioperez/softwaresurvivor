import { Metadata } from 'next'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata: Metadata = genPageMetadata({
  title: 'Fresno Tech Consulting',
  description:
    'Tech consulting in Fresno, CA. Fractional CTO services, architecture reviews, AI and automation strategy, and buy-vs-build guidance for Central California businesses.',
  canonical: '/fresno-tech-consulting',
  keywords: [
    'Fresno tech consulting',
    'technology consulting Fresno',
    'IT consulting Fresno CA',
    'fractional CTO Fresno',
    'software consultant Fresno',
    'tech consultant Central Valley',
    'Central California technology consulting',
  ],
})

const consultingServices = [
  {
    title: 'Fractional CTO & Technical Leadership',
    description:
      'Senior technical direction without a full-time executive hire: technology roadmaps, delivery oversight, and support for key engineering hires',
  },
  {
    title: 'Architecture & Code Reviews',
    description:
      'An independent assessment of your systems, codebase, or a vendor proposal before you commit budget to building on top of it',
  },
  {
    title: 'AI & Automation Strategy',
    description:
      'Practical guidance on where AI and workflow automation create measurable leverage in your operations, and where they are just a demo',
  },
  {
    title: 'Buy vs. Build & Vendor Selection',
    description:
      'Help deciding between off-the-shelf software, a custom build, or a hybrid, plus evaluation of vendors and agency proposals',
  },
]

const consultingStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteMetadata.siteUrl}/fresno-tech-consulting#webpage`,
  url: `${siteMetadata.siteUrl}/fresno-tech-consulting`,
  name: 'Fresno Tech Consulting',
  description:
    'Tech consulting in Fresno, CA: fractional CTO services, architecture reviews, AI strategy, and buy-vs-build guidance for Central California businesses.',
  isPartOf: {
    '@id': `${siteMetadata.siteUrl}/#website`,
  },
  about: consultingServices.map((service) => ({
    '@type': 'Service',
    name: service.title,
    description: service.description,
    areaServed: siteMetadata.localBusiness.areaServed,
    provider: {
      '@id': `${siteMetadata.siteUrl}/#organization`,
    },
  })),
}

export default function FresnoTechConsultingPage() {
  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(consultingStructuredData) }}
      />
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
          Tech Consulting in Fresno
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Principal Engineer-level technology consulting for Central California businesses that need
          senior judgment before they build, buy, or hire
        </p>
      </div>

      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Consulting vs build */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              What Does a Fresno Tech Consultant Actually Do?
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <p>
                Not every technology problem needs a development team on day one. Tech consulting is
                the advisory side of our work: helping Fresno and Central Valley businesses make the
                expensive decisions correctly before any code gets written. That looks like:
              </p>
              <ul className="list-disc space-y-2 pl-6">
                <li>Deciding whether to buy software, build it, or fix what you have</li>
                <li>Reviewing a vendor or agency proposal before you sign it</li>
                <li>Planning a realistic technology roadmap tied to business goals</li>
                <li>Auditing a fragile system before it becomes an emergency</li>
                <li>Setting an AI and automation strategy grounded in real ROI</li>
              </ul>
              <p>
                When the answer is &ldquo;build it,&rdquo; the same team carries the plan into
                delivery through our{' '}
                <Link
                  href="/fresno-software-development"
                  className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium"
                >
                  Fresno software development
                </Link>{' '}
                services, so the consulting advice stays accountable to the result.
              </p>
            </div>
          </div>

          {/* Consulting services */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Tech Consulting Services in Fresno
            </h2>
            <div className="space-y-4">
              {consultingServices.map((service) => (
                <div key={service.title} className="border-brand-600 border-l-4 pl-4">
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Who it's for */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Who Hires Us for Tech Consulting
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                title: 'Owners and operators',
                description:
                  'Central Valley businesses outgrowing spreadsheets and disconnected tools, with no in-house technical leadership to plan what comes next',
              },
              {
                title: 'Funded founders',
                description:
                  'Teams that need architectural clarity, a delivery plan, or help evaluating technical hires before scaling an engineering team',
              },
              {
                title: 'Teams with a struggling project',
                description:
                  'Companies mid-way through a software project that has stalled, gone over budget, or lost the confidence of stakeholders',
              },
            ].map((fit) => (
              <div
                key={fit.title}
                className="rounded-lg border border-gray-200 p-4 dark:border-gray-700"
              >
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{fit.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{fit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Local Areas Served */}
        <div className="mt-12">
          <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Technology Consulting Across Central California
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              {
                city: 'Fresno',
                description: 'On-site consulting and face-to-face working sessions',
              },
              { city: 'Clovis', description: 'Technology strategy for growing local businesses' },
              { city: 'Visalia', description: 'Healthcare, retail, and logistics consulting' },
              { city: 'Madera', description: 'Agricultural technology and operations guidance' },
              { city: 'Hanford', description: 'Manufacturing and systems modernization advice' },
              { city: 'Merced', description: 'Education and government technology consulting' },
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
          <p className="mt-6 text-gray-600 dark:text-gray-400">
            We also work remotely with teams across California and the US. Engagements usually start
            small: a paid architecture review or a scoped advisory session, so you get useful
            answers before committing to a larger project.
          </p>
        </div>

        {/* Call to Action */}
        <div className="mt-12 rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
            Talk Through Your Technology Decision
          </h2>
          <p className="mb-6 text-gray-600 dark:text-gray-400">
            Bring the decision you are weighing — buy vs. build, a stalled project, a vendor
            proposal, an AI initiative — and get a Principal Engineer&apos;s read on it, usually
            within one business day.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href="/contact"
              className="bg-brand-600 hover:bg-brand-700 inline-flex items-center rounded-md border border-transparent px-6 py-3 text-base font-medium text-white"
            >
              Get a Consultation
            </a>
            <Link
              href="/services"
              className="inline-flex items-center rounded-md border border-gray-300 px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              See All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
