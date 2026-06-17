import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

const pageTitle = 'Shopify NetSuite Integration Consulting'
const pageDescription =
  'Shopify NetSuite integration consulting for e-commerce teams that need connector cleanup, custom middleware, SuiteQL reporting, and operational recovery workflows.'
const pageUrl = `${siteMetadata.siteUrl}/shopify-netsuite-integration`

export const metadata = genPageMetadata({
  title: pageTitle,
  description: pageDescription,
  canonical: '/shopify-netsuite-integration',
  keywords: [
    'Shopify NetSuite integration consultant',
    'Shopify NetSuite middleware',
    'NetSuite SuiteQL reporting',
    'Shopify ERP integration',
    'ecommerce systems integration',
    'NetSuite integration consulting',
  ],
})

const connectorFailureSignals = [
  'Item, SKU, bundle, discount, tax, or location rules do not fit the connector defaults.',
  'Fulfillment, cancellation, refund, and payment states need explicit recovery logic.',
  'Operations needs exception queues instead of silent sync failures.',
  'Finance needs reconciliation reporting that connects Shopify orders to NetSuite records.',
]

const productionNeeds = [
  {
    title: 'Business-rule mapping',
    description:
      'Document the rules for items, customers, taxes, payments, refunds, fulfillments, locations, and exception handling before writing middleware.',
  },
  {
    title: 'Recoverable sync design',
    description:
      'Use idempotent jobs, audit records, retries, replay tools, and manual exception queues so failures can be corrected without data loss.',
  },
  {
    title: 'SuiteQL visibility',
    description:
      'Create reports that show pending orders, fulfillment gaps, inventory availability, package tracking, and reconciliation issues.',
  },
]

const relatedArticles = [
  {
    title: 'When Shopify-NetSuite Connectors Are Not Enough',
    description:
      'How to identify when a connector needs custom middleware, recovery tooling, SuiteQL reports, or workflow-specific business logic.',
    href: '/blog/when-shopify-netsuite-connectors-are-not-enough',
  },
  {
    title: 'What Breaks After the Connector Goes Live',
    description:
      'A practical guide to item mapping, fulfillment state, refunds, taxes, payment reconciliation, and operational exceptions.',
    href: '/blog/shopify-to-netsuite-integration-what-breaks-after-connector-goes-live',
  },
  {
    title: 'NetSuite SuiteQL Examples for E-commerce Integrations',
    description:
      'SuiteQL examples for sales orders, fulfillment tracking, pending items, inventory, and e-commerce integration workflows.',
    href: '/blog/netsuite-suiteql-examples-ecommerce-integrations',
  },
]

const faqs = [
  {
    question: 'When is a Shopify-NetSuite connector not enough?',
    answer:
      'A connector is not enough when the business rules around items, fulfillment, refunds, payments, taxes, inventory, or exceptions do not fit the connector defaults. That is when custom middleware, reports, and recovery workflows become important.',
  },
  {
    question: 'What does custom Shopify-NetSuite middleware do?',
    answer:
      'Custom middleware translates business-specific order, customer, fulfillment, inventory, and payment events between Shopify and NetSuite. It also records sync state, handles retries, and gives operators a way to recover from exceptions.',
  },
  {
    question: 'Why does SuiteQL matter for e-commerce integrations?',
    answer:
      'SuiteQL gives operations and finance teams direct visibility into NetSuite records. It can answer questions about pending fulfillment, package tracking, inventory availability, sales order lines, and reconciliation gaps that connector dashboards may not expose.',
  },
  {
    question: 'Can an existing connector be kept?',
    answer:
      'Often, yes. The practical answer may be to keep the connector for standard flows and add middleware or reports around the edge cases. The goal is to replace only the parts that create risk or repeated manual work.',
  },
]

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': `${pageUrl}#webpage`,
      url: pageUrl,
      name: pageTitle,
      description: pageDescription,
      isPartOf: {
        '@id': `${siteMetadata.siteUrl}/#website`,
      },
      about: {
        '@id': `${pageUrl}#service`,
      },
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      name: 'Shopify NetSuite Integration Consulting',
      description: pageDescription,
      provider: {
        '@id': `${siteMetadata.siteUrl}/#organization`,
      },
      areaServed: siteMetadata.localBusiness.areaServed,
      serviceType: 'Systems Integration',
    },
    {
      '@type': 'FAQPage',
      '@id': `${pageUrl}#faq`,
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer,
        },
      })),
    },
  ],
}

export default function ShopifyNetSuiteIntegrationPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-6 pt-6 pb-10 md:space-y-8">
          <div className="space-y-3">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide uppercase">
              Shopify and NetSuite integration
            </p>
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              Shopify-NetSuite Integration When Connectors Stop Being Enough
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Software Survivor helps e-commerce teams stabilize Shopify and NetSuite flows with
              custom middleware, SuiteQL reporting, recovery tooling, and production-ready
              operational logic.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Best fit', 'A live or planned connector with business-specific edge cases.'],
              ['Core work', 'Middleware, reports, exception handling, and recovery tooling.'],
              ['Proof area', 'SuiteQL, fulfillment, inventory, order, and package visibility.'],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
              >
                <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Connector Failure Signals
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                Off-the-shelf connectors are useful for standard flows. Problems show up when the
                real business process has exceptions the connector cannot express clearly.
              </p>
            </div>
            <ul className="space-y-4">
              {connectorFailureSignals.map((signal) => (
                <li
                  key={signal}
                  className="rounded-lg border border-gray-200 bg-white p-5 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                >
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              What Production Integrations Need
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {productionNeeds.map((need, index) => (
                <div
                  key={need.title}
                  className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300 mb-4 flex h-10 w-10 items-center justify-center rounded-lg font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{need.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {need.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Common Integration Work
              </h2>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600 dark:text-gray-400">
                <li>Order, customer, item, and fulfillment mapping.</li>
                <li>Refund, cancellation, payment, and tax reconciliation.</li>
                <li>Inventory, package tracking, and pending fulfillment reporting.</li>
                <li>Exception queues, replay tools, and audit trails for operations teams.</li>
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Related Integration Guides
              </h2>
              <div className="mt-6 space-y-4">
                {relatedArticles.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="hover:border-brand-300 dark:hover:border-brand-700 block rounded-lg border border-gray-200 bg-white p-5 transition-colors dark:border-gray-700 dark:bg-gray-800"
                  >
                    <h3 className="font-semibold text-gray-900 dark:text-gray-100">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Common Shopify-NetSuite Questions
            </h2>
            <div className="mt-6 space-y-5">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{faq.question}</h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Bring the Failing Flow
            </h2>
            <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-400">
              Share the connector, order flow, NetSuite records, failure examples, and manual
              recovery steps. We will help identify whether the right fix is configuration,
              reporting, middleware, or a targeted replacement.
            </p>
            <div className="mt-6 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="bg-brand-600 hover:bg-brand-700 inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium text-white"
              >
                Start a Project Conversation
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                See All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
