import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { genPageMetadata } from 'app/seo'

const pageTitle = 'AI Workflow Automation Consulting'
const pageDescription =
  'AI workflow automation consulting for established businesses that need safer document, email, review, routing, and data-entry automation.'
const pageUrl = `${siteMetadata.siteUrl}/ai-workflow-automation`

export const metadata = genPageMetadata({
  title: pageTitle,
  description: pageDescription,
  canonical: '/ai-workflow-automation',
  keywords: [
    'AI workflow automation consulting',
    'AI automation consultant',
    'business process automation with AI',
    'AI document processing',
    'email workflow automation',
    'LLM business automation',
  ],
})

const fitSignals = [
  'A team repeats the same review, routing, or data-entry task every week.',
  'The workflow has clear source material and a person who can judge whether the output is right.',
  'The automation can start with a review step before it is trusted to write back into business systems.',
  'The business value is measurable through time saved, faster response, fewer errors, or better throughput.',
]

const pilotSteps = [
  {
    title: 'Map the workflow',
    description:
      'Document inputs, decision points, systems touched, failure modes, and the human review step before choosing a model or tool.',
  },
  {
    title: 'Build a narrow first pass',
    description:
      'Start with one bounded workflow such as email intake, document triage, quote preparation, order review, or internal knowledge lookup.',
  },
  {
    title: 'Add controls before scale',
    description:
      'Use permissions, audit logs, confidence thresholds, approval queues, and rollback paths before allowing automated writes.',
  },
]

const riskControls = [
  'Keep the model separate from system permissions.',
  'Use read-only access until the workflow has proven accuracy.',
  'Store evidence with each generated recommendation or draft.',
  'Log failures and ambiguous cases as product feedback, not one-off exceptions.',
]

const relatedProof = [
  {
    title: 'Inbox2Order',
    description:
      'Email-to-order automation that turns unstructured email inquiries into structured operational data.',
    href: '/blog/from-inbox-to-order-email-to-order-automation',
  },
  {
    title: 'Building Inbox2Order',
    description:
      'A project writeup covering parsing, validation, order creation, and automated communication.',
    href: '/blog/building-inbox2order-email-to-order-automation',
  },
  {
    title: 'Safe AI Agents',
    description:
      'A practical architecture for AI agents that read business data while staying inside controlled permission boundaries.',
    href: '/blog/build-safe-ai-agent-around-business-data',
  },
]

const faqs = [
  {
    question: 'What is AI workflow automation?',
    answer:
      'AI workflow automation uses language models, rules, integrations, and human review to reduce repeated document, email, routing, and data-entry work. The best first projects automate a narrow workflow where a human can quickly verify the output.',
  },
  {
    question: 'Where should a business start with AI automation?',
    answer:
      'Start with a workflow that is repeated often, has clear inputs, and does not require the AI system to make irreversible decisions. Good first candidates include inbox triage, document extraction, draft responses, order intake, and internal lookup tools.',
  },
  {
    question: 'How do you make AI automation safer?',
    answer:
      'Separate model reasoning from system permissions, keep early pilots read-only, require approval for writes, store evidence with each output, and monitor ambiguous cases. The system should make review easier before it is allowed to act directly.',
  },
  {
    question: 'How long does an AI automation pilot take?',
    answer:
      'A focused pilot can often be scoped around a few weeks of work after the workflow is understood. More complex automations that touch ERPs, CRMs, payment systems, or customer-facing actions need more discovery and controls.',
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
      name: 'AI Workflow Automation Consulting',
      description: pageDescription,
      provider: {
        '@id': `${siteMetadata.siteUrl}/#organization`,
      },
      areaServed: siteMetadata.localBusiness.areaServed,
      serviceType: 'AI Workflow Automation',
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

export default function AIWorkflowAutomationPage() {
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
              AI workflow automation
            </p>
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              AI Automation for Business Workflows That Need Control
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              Software Survivor designs AI workflow automation for businesses with repeated
              document, email, review, routing, and data-entry work. The goal is not a demo. The
              goal is a controlled workflow that saves time without creating operational risk.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              ['Best first use case', 'A narrow repeated workflow with clear inputs and review.'],
              ['Typical first outcome', 'A pilot that drafts, extracts, routes, or recommends.'],
              ['Safety principle', 'Human approval before automated writes to business systems.'],
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
                When AI Automation Is a Good Fit
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                AI automation works best when it is attached to a real operating constraint. It
                should remove repeated judgment-light work, surface evidence faster, or prepare
                cleaner drafts for human review.
              </p>
            </div>
            <ul className="space-y-4">
              {fitSignals.map((signal) => (
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
              A Practical Pilot Structure
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {pilotSteps.map((step, index) => (
                <div
                  key={step.title}
                  className="rounded-lg border border-gray-200 bg-white p-6 dark:border-gray-700 dark:bg-gray-800"
                >
                  <div className="bg-brand-100 text-brand-700 dark:bg-brand-900 dark:text-brand-300 mb-4 flex h-10 w-10 items-center justify-center rounded-lg font-semibold">
                    {index + 1}
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-gray-100">{step.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Controls That Matter
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">
                The safest AI systems are boring around permissions, evidence, and rollback. That is
                where most production value comes from.
              </p>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600 dark:text-gray-400">
                {riskControls.map((control) => (
                  <li key={control}>{control}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Related Work and Writing
              </h2>
              <div className="mt-6 space-y-4">
                {relatedProof.map((item) => (
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
              Common AI Automation Questions
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
              Start With the Workflow
            </h2>
            <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-400">
              Share the repeated task, the source data, the systems involved, and what a correct
              result looks like. We will help decide whether an AI automation pilot is the right
              next step.
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
