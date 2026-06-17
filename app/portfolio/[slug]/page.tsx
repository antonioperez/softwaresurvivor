import Image from 'next/image'
import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import caseStudies, { caseStudyBySlug } from '@/data/caseStudyData'
import { genPageMetadata } from 'app/seo'
import { notFound } from 'next/navigation'

export function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }))
}

export async function generateMetadata(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const study = caseStudyBySlug[params.slug]

  if (!study) {
    return
  }

  return genPageMetadata({
    title: `${study.title} Case Study`,
    description: study.description,
    canonical: `/portfolio/${study.slug}`,
    image: study.image,
    keywords: [
      `${study.title} case study`,
      'custom software case study',
      'software consulting portfolio',
      ...study.serviceLinks.map((link) => link.title),
    ],
  })
}

export default async function PortfolioCaseStudyPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params
  const study = caseStudyBySlug[params.slug]

  if (!study) {
    return notFound()
  }

  const pageUrl = `${siteMetadata.siteUrl}/portfolio/${study.slug}`
  const imageUrl = study.image?.startsWith('http')
    ? study.image
    : `${siteMetadata.siteUrl}${study.image}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['CreativeWork', 'SoftwareApplication'],
        '@id': `${pageUrl}#case-study`,
        name: study.title,
        headline: `${study.title} Case Study`,
        description: study.description,
        url: pageUrl,
        image: imageUrl,
        applicationCategory: 'BusinessApplication',
        creator: {
          '@id': `${siteMetadata.siteUrl}/#organization`,
        },
        about: study.serviceLinks.map((service) => service.title),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${pageUrl}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: siteMetadata.siteUrl },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Portfolio',
            item: `${siteMetadata.siteUrl}/portfolio`,
          },
          { '@type': 'ListItem', position: 3, name: study.title, item: pageUrl },
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
      <article className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-6 pt-6 pb-10">
          <p className="text-brand-600 dark:text-brand-400 text-sm font-semibold tracking-wide uppercase">
            Case study
          </p>
          <div className="max-w-4xl space-y-4">
            <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
              {study.title}
            </h1>
            <p className="text-xl leading-8 text-gray-600 dark:text-gray-400">{study.subtitle}</p>
            <p className="text-gray-600 dark:text-gray-400">{study.description}</p>
          </div>
          {study.image && (
            <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50 dark:border-gray-700 dark:bg-gray-900">
              <Image
                src={study.image}
                alt={`${study.title} project screenshot`}
                width={1200}
                height={675}
                className="max-h-[520px] w-full object-contain"
                unoptimized={study.image.startsWith('http') || study.image.endsWith('.gif')}
                priority
              />
            </div>
          )}
        </div>

        <div className="container py-12">
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
            <aside className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Related Services
                </h2>
                <div className="mt-4 flex flex-wrap gap-2">
                  {study.serviceLinks.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      className="border-brand-200 text-brand-700 dark:border-brand-800 dark:text-brand-300 rounded-full border px-3 py-1 text-sm font-medium"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  Architecture and Stack
                </h2>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-gray-600 dark:text-gray-400">
                  {study.architecture.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {study.externalUrl && (
                <Link
                  href={study.externalUrl}
                  className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex font-medium"
                >
                  Visit project →
                </Link>
              )}
            </aside>

            <div className="space-y-12">
              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Problem</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{study.problem}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Constraints</h2>
                <ul className="mt-4 space-y-3">
                  {study.constraints.map((constraint) => (
                    <li
                      key={constraint}
                      className="rounded-lg border border-gray-200 bg-white p-4 text-gray-600 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400"
                    >
                      {constraint}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Role</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{study.role}</p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Solution</h2>
                <div className="mt-5 grid gap-4">
                  {study.solution.map((section) => (
                    <div
                      key={section.title}
                      className="rounded-lg border border-gray-200 bg-white p-5 dark:border-gray-700 dark:bg-gray-800"
                    >
                      <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                        {section.title}
                      </h3>
                      <p className="mt-2 text-gray-600 dark:text-gray-400">{section.body}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Outcome</h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400">{study.outcome}</p>
              </section>

              <section className="rounded-lg bg-gray-50 p-8 dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Have a Similar Problem?
                </h2>
                <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-400">
                  Share the workflow, system constraints, and business outcome. We will help decide
                  whether the right next step is custom software, integration, modernization, or an
                  architecture review.
                </p>
                <Link
                  href="/contact"
                  className="bg-brand-600 hover:bg-brand-700 mt-6 inline-flex items-center rounded-md px-6 py-3 text-base font-medium text-white"
                >
                  Start a Project Conversation
                </Link>
              </section>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}
