import Link from '@/components/Link'

export default function ServicesPage() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Our Services
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            We provide comprehensive software development and technical leadership services to help
            your business succeed.
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
                Custom Software Development
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We build scalable web applications, mobile apps, and enterprise solutions using
                modern technologies and best practices.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Web Applications (React, Next.js, Node.js)</li>
                <li>• Mobile Apps (React Native, Flutter)</li>
                <li>• API Development (REST, GraphQL)</li>
                <li>• Database Design & Optimization</li>
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
                Technical Leadership
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We provide engineering team management, architecture design, and technical strategy
                for growing companies.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Engineering Team Management</li>
                <li>• Technical Architecture Design</li>
                <li>• Code Review & Quality Assurance</li>
                <li>• Technical Strategy & Planning</li>
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
                System Design & Architecture
              </h3>
              <p className="mb-4 text-gray-600 dark:text-gray-400">
                We design scalable system architectures, microservices, and cloud infrastructure
                solutions.
              </p>
              <ul className="mb-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li>• Scalable System Design</li>
                <li>• Microservices Architecture</li>
                <li>• Cloud Infrastructure (AWS, GCP, Azure)</li>
                <li>• Performance Optimization</li>
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
              className="inline-flex items-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
            >
              Get Started with Our Services
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
