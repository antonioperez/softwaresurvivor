import portfolioData from '@/data/portfolioData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'Selected Client Systems',
  description:
    'Selected client systems by Software Survivor: business workflow automation, AI products, integrations, and compliance tooling with problem, role, and proof context.',
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
            Selected Client Systems
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Production software and business workflows we have built for clients — with enough
            context to show the problem, role, and technical proof behind each project.
          </p>
        </div>
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {portfolioData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                problem={d.problem}
                role={d.role}
                proof={d.proof}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-16 rounded-lg bg-gray-50 p-8 text-center dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
              Have a Similar Operational Software Problem?
            </h3>
            <p className="mb-6 text-gray-600 dark:text-gray-400">
              Share the current workflow, constraints, and business outcome you need. We will help
              clarify whether a custom build, integration, modernization effort, or architecture
              review is the right next step.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="/faq"
                className="bg-brand-600 hover:bg-brand-700 inline-flex items-center rounded-md px-6 py-3 text-base font-medium text-white"
              >
                Read FAQ
              </a>
              <a
                href="/contact"
                className="inline-flex items-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600"
              >
                Start a Project Conversation
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
