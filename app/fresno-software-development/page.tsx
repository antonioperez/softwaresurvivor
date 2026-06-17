import { Metadata } from 'next'
import Link from '@/components/Link'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata: Metadata = genPageMetadata({
  title: 'Fresno Software Development Consultant',
  description:
    'Fresno software development consultant for custom software, AI automation, systems integration, and modernization across Fresno, Clovis, Madera, Visalia, Hanford, Merced, and Central California.',
  canonical: '/fresno-software-development',
  keywords: [
    'Fresno software developer',
    'Fresno software development consultant',
    'custom software development in Fresno',
    'AI automation for Central Valley businesses',
    'systems integration for Fresno businesses',
    'Clovis software development',
    'Madera software consultant',
    'Visalia software development',
    'Hanford software developer',
    'Merced software development consultant',
  ],
})

const areas = [
  {
    city: 'Fresno',
    description:
      'Principal engineer-led software consulting for operators, founders, service businesses, and regional teams that need dependable systems.',
  },
  {
    city: 'Clovis',
    description:
      'Custom portals, workflow automation, and integration support for growing local businesses and professional service teams.',
  },
  {
    city: 'Madera',
    description:
      'Software help for agriculture, food operations, logistics, local commerce, and back-office workflow modernization.',
  },
  {
    city: 'Visalia',
    description:
      'Custom software, AI automation, and systems integration for healthcare, retail, agriculture, and service operators.',
  },
  {
    city: 'Hanford',
    description:
      'Operational software and integration support for logistics, manufacturing-adjacent workflows, and local service businesses.',
  },
  {
    city: 'Merced',
    description:
      'Modern web apps, internal tools, and automation for education-adjacent, agricultural, retail, and regional business workflows.',
  },
]

const industries = [
  {
    title: 'Food and beverage',
    examples:
      'Order intake, inventory visibility, wholesale customer portals, fulfillment reporting, and Shopify-to-ERP workflows.',
  },
  {
    title: 'Agriculture',
    examples:
      'Field data tools, GIS workflows, compliance reporting, grower portals, and operational dashboards for Central Valley teams.',
  },
  {
    title: 'Logistics',
    examples:
      'Shipment status tools, routing support, warehouse handoffs, package tracking, and exception reporting across disconnected systems.',
  },
  {
    title: 'Retail',
    examples:
      'E-commerce integrations, product catalog workflows, inventory sync, customer service tooling, and reporting across sales channels.',
  },
  {
    title: 'Healthcare',
    examples:
      'Trust-sensitive service websites, intake workflows, scheduling support, internal dashboards, and careful automation around protected processes.',
  },
  {
    title: 'Local service businesses',
    examples:
      'Lead intake, quoting workflows, customer portals, field-service coordination, and software modernization for owner-led teams.',
  },
  {
    title: 'E-commerce operators',
    examples:
      'Shopify, WooCommerce, NetSuite, fulfillment, payments, refunds, tracking, and custom middleware when connectors are not enough.',
  },
]

const serviceLinks = [
  {
    title: 'custom software development in Fresno',
    href: '/custom-software-development',
    description: 'Internal platforms, portals, SaaS products, and workflow systems.',
  },
  {
    title: 'AI automation for Central Valley businesses',
    href: '/ai-workflow-automation-consulting',
    description: 'Document, email, intake, review, and routing workflows with human control.',
  },
  {
    title: 'systems integration for Fresno businesses',
    href: '/systems-integration-consulting',
    description: 'APIs, webhooks, retries, reporting, and recovery across disconnected tools.',
  },
  {
    title: 'Shopify-NetSuite integration consulting',
    href: '/shopify-netsuite-integration-consulting',
    description: 'Connector cleanup, SuiteQL reporting, middleware, and operational visibility.',
  },
  {
    title: 'technical architecture review',
    href: '/technical-architecture-review',
    description: 'Independent review before a rebuild, vendor decision, migration, or scale-up.',
  },
]

export default function FresnoSoftwareDevelopmentPage() {
  const pageUrl = `${siteMetadata.siteUrl}/fresno-software-development`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: 'Fresno Software Development Consultant',
        description:
          'Custom software development, AI automation, systems integration, and modernization for Fresno and Central Valley businesses.',
        isPartOf: {
          '@id': `${siteMetadata.siteUrl}/#website`,
        },
        about: serviceLinks.map((service) => service.title),
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${pageUrl}#professional-service`,
        name: 'Software Survivor Fresno Software Development',
        provider: {
          '@id': `${siteMetadata.siteUrl}/#organization`,
        },
        areaServed: areas.map((area) => ({
          '@type': 'City',
          name: area.city,
        })),
        serviceType: siteMetadata.localBusiness.serviceType,
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteMetadata.siteUrl },
          { '@type': 'ListItem', position: 2, name: 'Fresno Software Development', item: pageUrl },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-5 pt-6 pb-10">
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide uppercase">
            Fresno and Central Valley software consulting
          </p>
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Fresno Software Development for Central Valley Businesses
          </h1>
          <p className="max-w-4xl text-lg leading-8 text-gray-600 dark:text-gray-400">
            Software Survivor is a Fresno software development consultant for businesses that need
            practical custom software, AI workflow automation, systems integration, and software
            modernization. The work is principal-engineer led, based in Fresno, and available to
            teams across Central California and remote across the US.
          </p>
          <p className="max-w-4xl text-gray-600 dark:text-gray-400">
            This is not a collection of thin city pages. It is one regional landing page for the
            actual service area: Fresno, Clovis, Madera, Visalia, Hanford, Merced, and the broader
            Central Valley.
          </p>
        </div>

        <div className="container py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Local Software Help When the Workflow Is Specific
              </h2>
              <div className="mt-5 space-y-4 text-gray-600 dark:text-gray-400">
                <p>
                  Many Central Valley businesses do not need generic web development. They need a
                  Fresno software developer who can understand how the business actually runs:
                  orders, inventory, customer handoffs, field work, compliance, logistics,
                  fulfillment, and reporting.
                </p>
                <p>
                  The strongest fit is custom software development in Fresno where software touches
                  revenue, operations, customer experience, or a product roadmap. That includes
                  internal tools, portals, AI-assisted workflows, Shopify and NetSuite integration,
                  and modernization of fragile systems that still matter.
                </p>
              </div>
            </div>
            <div className="grid gap-4">
              {serviceLinks.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="hover:border-brand-300 dark:hover:border-brand-700 rounded-lg border border-gray-200 bg-white p-5 transition-colors dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Regional Service Area
            </h2>
            <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {areas.map((area) => (
                <div
                  key={area.city}
                  className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{area.city}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {area.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Central Valley Industry Examples
            </h2>
            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {industries.map((industry) => (
                <div
                  key={industry.title}
                  className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    {industry.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {industry.examples}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                What the Work Usually Looks Like
              </h2>
              <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-600 dark:text-gray-400">
                <li>Map the real workflow before choosing tools.</li>
                <li>Start with the smallest release that improves a business-critical process.</li>
                <li>
                  Add integrations, reporting, automation, and AI where they reduce manual work.
                </li>
                <li>Keep production systems observable, recoverable, and maintainable.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Related Work</h2>
              <div className="mt-5 space-y-4">
                <Link
                  href="/portfolio/tlaloc-harvest"
                  className="block rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    Tlaloc Harvest case study
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    A sustainability platform with community, logistics, and food-system
                    coordination constraints.
                  </p>
                </Link>
                <Link
                  href="/blog/gis-data-tools-california-water-agriculture"
                  className="block rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                    GIS data tools for California water and agriculture
                  </h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    Related writing on data-heavy regional workflows.
                  </p>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Need a Fresno Software Development Consultant?
            </h2>
            <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-400">
              Share the workflow, systems, constraints, and business outcome. We will help decide
              whether the right next step is a custom build, AI automation pilot, integration
              cleanup, modernization plan, or architecture review.
            </p>
            <Link
              href="/contact"
              className="bg-brand-600 hover:bg-brand-700 mt-6 inline-flex items-center rounded-md px-6 py-3 text-base font-medium text-white"
            >
              Start a Project Conversation
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
