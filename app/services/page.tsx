import Link from '@/components/Link'
import ServiceSchema from '@/components/ServiceSchema'
import { genPageMetadata } from '../seo'

export const metadata = genPageMetadata({
  title: 'Custom Software Consulting Services | Software Survivor',
  description:
    'Comprehensive custom software consulting services in Fresno, CA. Enterprise software development, technical leadership, system architecture, DevOps, and consulting services for growing businesses. Expert custom software solutions.',
  canonical: '/services',
  keywords: [
    'custom software consulting services',
    'enterprise software consulting',
    'custom software development services',
    'software consulting services fresno',
    'technical consulting services',
  ],
})

export default function ServicesPage() {
  return (
    <>
      <ServiceSchema />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Our Services
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            We provide comprehensive custom software consulting and technical leadership services to
            help your business succeed. Expert guidance on enterprise software development,
            architecture, and implementation.
          </p>
        </div>

        <div className="container py-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Custom Software Development */}
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Enterprise Software Development
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We build enterprise-grade web applications, mobile apps, and scalable systems using
                modern architectural patterns and best practices.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Enterprise Web Applications (React, Next.js, Node.js)</li>
                <li>• Mobile Apps (React Native, Flutter, Native iOS/Android)</li>
                <li>• API Development (REST, GraphQL, gRPC)</li>
                <li>• Database Design & Optimization (PostgreSQL, MongoDB, Redis)</li>
              </ul>
            </div>

            {/* Technical Leadership */}
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Technical Leadership & Architecture
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We provide Principal Engineer-level leadership, enterprise architecture design, and
                technical strategy for growing companies.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Engineering Team Management & Mentoring</li>
                <li>• Enterprise Architecture Design</li>
                <li>• Code Review & Quality Standards</li>
                <li>• Technical Strategy & Roadmap Planning</li>
              </ul>
            </div>

            {/* System Design & Architecture */}
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
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
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                System Design & Cloud Architecture
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We design enterprise system architectures, microservices, and cloud infrastructure
                solutions across multiple platforms.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Enterprise System Design</li>
                <li>• Microservices & Event-Driven Architecture</li>
                <li>• Multi-Cloud Infrastructure (AWS, Azure, GCP)</li>
                <li>• Performance & Cost Optimization</li>
              </ul>
            </div>

            {/* DevOps & CI/CD */}
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-900">
                <svg
                  className="h-6 w-6 text-orange-600 dark:text-orange-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                DevOps & CI/CD
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We set up automated deployment pipelines, monitoring, and infrastructure management.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• CI/CD Pipeline Setup</li>
                <li>• Infrastructure as Code</li>
                <li>• Monitoring & Alerting</li>
                <li>• Security & Compliance</li>
              </ul>
            </div>

            {/* Technical Consulting */}
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-teal-100 dark:bg-teal-900">
                <svg
                  className="h-6 w-6 text-teal-600 dark:text-teal-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Technical Consulting
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We provide expert guidance on technology decisions, code reviews, and technical
                problem-solving.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Technology Stack Selection</li>
                <li>• Code Review & Refactoring</li>
                <li>• Performance Optimization</li>
                <li>• Technical Problem Solving</li>
              </ul>
            </div>

            {/* Training & Mentoring */}
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-100 dark:bg-indigo-900">
                <svg
                  className="h-6 w-6 text-indigo-600 dark:text-indigo-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                  />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Training & Mentoring
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We help teams improve their technical skills through training and mentoring
                programs.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Team Training Programs</li>
                <li>• Code Review Best Practices</li>
                <li>• Architecture Design Patterns</li>
                <li>• Technical Interview Preparation</li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/contact"
              className="group bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-4 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <span className="relative z-10">Get Started with Our Services</span>
              <div className="from-brand-700 to-brand-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
