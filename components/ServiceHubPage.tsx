import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import type { ServiceHub } from '@/data/serviceHubData'

interface ServiceHubPageProps {
  hub: ServiceHub
}

export default function ServiceHubPage({ hub }: ServiceHubPageProps) {
  const pageUrl = `${siteMetadata.siteUrl}${hub.path}`
  const breadcrumbItems = [
    { name: 'Home', item: siteMetadata.siteUrl },
    { name: 'Services', item: `${siteMetadata.siteUrl}/services` },
    { name: hub.pageTitle, item: pageUrl },
  ]
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebPage',
        '@id': `${pageUrl}#webpage`,
        url: pageUrl,
        name: hub.pageTitle,
        description: hub.description,
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
        name: hub.pageTitle,
        description: hub.description,
        provider: {
          '@id': `${siteMetadata.siteUrl}/#organization`,
        },
        areaServed: siteMetadata.localBusiness.areaServed,
        serviceType: hub.serviceType,
        hasOfferCatalog: hub.engagementOptions
          ? {
              '@type': 'OfferCatalog',
              name: `${hub.pageTitle} engagement options`,
              itemListElement: hub.engagementOptions.map((option) => ({
                '@type': 'Offer',
                itemOffered: {
                  '@type': 'Service',
                  name: option.title,
                  description: option.description,
                },
              })),
            }
          : undefined,
      },
      {
        '@type': 'FAQPage',
        '@id': `${pageUrl}#faq`,
        mainEntity: hub.faqs.map((faq) => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: breadcrumbItems.map((item, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          name: item.name,
          item: item.item,
        })),
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
        <div className="space-y-6 pt-6 pb-10 md:space-y-8">
          <div className="space-y-3">
            <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide uppercase">
              {hub.eyebrow}
            </p>
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              {hub.h1}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-gray-600 dark:text-gray-400">
              {hub.description}
            </p>
            {hub.buyerIntro && (
              <p className="max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400">
                {hub.buyerIntro}
              </p>
            )}
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {hub.summaryCards.map((card) => (
              <div
                key={card.title}
                className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
              >
                <h2 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {card.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="container py-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {hub.fitTitle}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">{hub.fitIntro}</p>
            </div>
            <ul className="space-y-4">
              {hub.fitSignals.map((signal) => (
                <li
                  key={signal}
                  className="rounded-lg border border-gray-200 bg-white p-5 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                >
                  {signal}
                </li>
              ))}
            </ul>
          </div>

          {(hub.problemsSolved || hub.whatYouGet) && (
            <div className="mt-16 grid gap-10 lg:grid-cols-2">
              {hub.problemsSolved && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Problems This Solves
                  </h2>
                  <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                    {hub.problemsSolved.map((problem) => (
                      <li
                        key={problem}
                        className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-700 dark:bg-gray-800"
                      >
                        {problem}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {hub.whatYouGet && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    What You Get
                  </h2>
                  <div className="mt-6 space-y-4">
                    {hub.whatYouGet.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              {hub.processTitle}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {hub.processSteps.map((step, index) => (
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

          {(hub.technologies || hub.useCases || hub.engagementOptions) && (
            <div className="mt-16 grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                {hub.technologies && (
                  <>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Relevant Technologies and Platforms
                    </h2>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {hub.technologies.map((technology) => (
                        <span
                          key={technology}
                          className="rounded-full border border-gray-200 bg-white px-3 py-1 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300"
                        >
                          {technology}
                        </span>
                      ))}
                    </div>
                  </>
                )}
                {hub.engagementOptions && (
                  <div className={hub.technologies ? 'mt-10' : undefined}>
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                      Engagement Options
                    </h2>
                    <div className="mt-5 space-y-4">
                      {hub.engagementOptions.map((option) => (
                        <div key={option.title}>
                          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                            {option.title}
                          </h3>
                          <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                            {option.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              {hub.useCases && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                    Example Use Cases
                  </h2>
                  <div className="mt-6 grid gap-4">
                    {hub.useCases.map((useCase) => (
                      <div
                        key={useCase.title}
                        className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                      >
                        <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                          {useCase.title}
                        </h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                          {useCase.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="mt-16 grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {hub.controlsTitle}
              </h2>
              <p className="mt-4 text-gray-600 dark:text-gray-400">{hub.controlsIntro}</p>
              <ul className="mt-6 list-disc space-y-3 pl-6 text-gray-600 dark:text-gray-400">
                {hub.controls.map((control) => (
                  <li key={control}>{control}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                {hub.relatedTitle}
              </h2>
              <div className="mt-6 space-y-4">
                {hub.relatedLinks.map((item) => (
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{hub.faqTitle}</h2>
            <div className="mt-6 space-y-5">
              {hub.faqs.map((faq) => (
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
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{hub.ctaTitle}</h2>
            <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-400">{hub.ctaDescription}</p>
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
