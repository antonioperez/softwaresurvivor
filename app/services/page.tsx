import Link from '@/components/Link'
import ServiceSchema from '@/components/ServiceSchema'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({
  title: 'Software Development & Tech Consulting Services',
  description:
    'Custom software development, tech consulting, AI workflow automation, systems integration, software modernization, and technical leadership for established businesses and funded teams.',
  canonical: '/services',
  keywords: [
    'custom software development services',
    'tech consulting services',
    'AI workflow automation services',
    'systems integration consulting',
    'software modernization services',
    'fractional CTO services',
  ],
})

const services = [
  {
    title: 'Custom Software & SaaS Development',
    description:
      'We design and build the web applications, portals, and SaaS products your revenue and operations depend on, with maintainable architecture and practical delivery milestones.',
    items: [
      'Web applications and customer portals (React, Next.js, Node.js)',
      'Mobile apps (React Native, Flutter, native iOS/Android)',
      'API design and development (REST, GraphQL, gRPC)',
      'Database design and optimization (PostgreSQL, MongoDB, Redis)',
    ],
    iconBg: 'bg-blue-100 dark:bg-blue-900',
    iconColor: 'text-blue-600 dark:text-blue-400',
    iconPaths: [
      'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
    ],
  },
  {
    title: 'AI Workflow Automation',
    description:
      'We automate expensive manual workflows and add AI where it creates measurable leverage, grounded safely in your business data instead of bolted on as a demo.',
    items: [
      'AI-assisted document, email, and data processing',
      'Automating manual review, routing, and data-entry steps',
      'LLM integration with your existing systems and guardrails',
      'Pilot first: prove the ROI before scaling the automation',
    ],
    iconBg: 'bg-purple-100 dark:bg-purple-900',
    iconColor: 'text-purple-600 dark:text-purple-400',
    iconPaths: [
      'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
    ],
  },
  {
    title: 'Systems Integration',
    description:
      'We connect the tools your team already uses so data flows without copy-paste: ERPs, CRMs, e-commerce platforms, and the spreadsheets in between.',
    items: [
      'ERP, CRM, and e-commerce integrations (NetSuite, WooCommerce, and more)',
      'Email-to-order and document intake automation',
      'Reliable data sync with webhooks, queues, and retries',
      'Third-party API integrations and internal API gateways',
    ],
    iconBg: 'bg-teal-100 dark:bg-teal-900',
    iconColor: 'text-teal-600 dark:text-teal-400',
    iconPaths: [
      'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1',
    ],
  },
  {
    title: 'Software Modernization & Rescue',
    description:
      'We stabilize fragile systems and modernize legacy code incrementally, so the business keeps running while the risky parts get replaced.',
    items: [
      'Legacy system assessment and migration planning',
      'Stabilizing fragile production systems before they fail',
      'Incremental replatforming instead of risky big-bang rewrites',
      'Performance, reliability, and cost optimization',
    ],
    iconBg: 'bg-orange-100 dark:bg-orange-900',
    iconColor: 'text-orange-600 dark:text-orange-400',
    iconPaths: [
      'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    ],
  },
  {
    title: 'Architecture & Technical Leadership',
    description:
      'We bring Principal Engineer-level judgment to architecture decisions, delivery planning, and team growth, before and during the build.',
    items: [
      'Fractional CTO and senior technical direction',
      'System and cloud architecture design (AWS, Azure, GCP)',
      'Code review, quality standards, and team mentoring',
      'Technical strategy, roadmaps, and key-hire support',
    ],
    iconBg: 'bg-green-100 dark:bg-green-900',
    iconColor: 'text-green-600 dark:text-green-400',
    iconPaths: ['M13 10V3L4 14h7v7l9-11h-7z'],
  },
  {
    title: 'DevOps & Cloud Infrastructure',
    description:
      'We set up the deployment pipelines, infrastructure, and monitoring that let your team ship quickly without breaking production.',
    items: [
      'CI/CD pipeline setup and release automation',
      'Infrastructure as code',
      'Monitoring, alerting, and incident readiness',
      'Security and compliance fundamentals',
    ],
    iconBg: 'bg-indigo-100 dark:bg-indigo-900',
    iconColor: 'text-indigo-600 dark:text-indigo-400',
    iconPaths: [
      'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
      'M15 12a3 3 0 11-6 0 3 3 0 016 0z',
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Software Development &amp; Tech Consulting Services
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            We help established businesses and funded teams build, modernize, and integrate the
            software their operations depend on. The work spans custom business applications, AI
            workflow automation, systems integration,{' '}
            <Link
              href="/fresno-tech-consulting"
              className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium"
            >
              tech consulting
            </Link>
            , architecture, and delivery leadership. Based in{' '}
            <Link
              href="/fresno-software-development"
              className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium"
            >
              Fresno
            </Link>
            , we serve Central California businesses and remote teams across the US.
          </p>
        </div>

        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${service.iconBg}`}
                >
                  <svg
                    className={`h-6 w-6 ${service.iconColor}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    {service.iconPaths.map((d) => (
                      <path
                        key={d}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d={d}
                      />
                    ))}
                  </svg>
                </div>
                <h2 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h2>
                <p className="mb-4 text-gray-600 dark:text-gray-400">{service.description}</p>
                <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {service.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="mx-auto mb-6 max-w-2xl text-gray-600 dark:text-gray-400">
              Not sure which service fits? Describe the problem and we will recommend the smallest
              engagement that moves it forward.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                <span className="relative z-10">Start a Project Conversation</span>
                <div className="from-brand-700 to-brand-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-8 py-4 text-base font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:border-gray-600 dark:text-gray-300 dark:hover:bg-gray-700"
              >
                See Relevant Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
