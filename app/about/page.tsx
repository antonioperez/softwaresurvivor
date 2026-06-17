import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'
import siteMetadata from '@/data/siteMetadata'

export const metadata = genPageMetadata({
  title: 'About Antonio Perez',
  description:
    'Software Survivor is the custom software consultancy of Antonio Perez, a Principal Engineer in Fresno, CA with over a decade of experience building and modernizing systems for startups, small businesses, and enterprises.',
  canonical: '/about',
  keywords: [
    'custom software consultant',
    'software consulting expert fresno',
    'about software consulting',
    'fresno software consultant',
  ],
})

export default function Page() {
  const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const mainContent = coreContent(author)
  const personId = `${siteMetadata.siteUrl}/about#antonio-perez`
  const profileStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ProfilePage',
    '@id': `${siteMetadata.siteUrl}/about#profile`,
    url: `${siteMetadata.siteUrl}/about`,
    name: 'About Antonio Perez',
    isPartOf: {
      '@id': `${siteMetadata.siteUrl}/#website`,
    },
    mainEntity: {
      '@type': 'Person',
      '@id': personId,
      name: author.name,
      image: `${siteMetadata.siteUrl}${author.avatar}`,
      jobTitle: 'Principal Engineer',
      email: author.email,
      url: `${siteMetadata.siteUrl}/about`,
      sameAs: [author.linkedin, author.github].filter(Boolean),
      worksFor: {
        '@id': `${siteMetadata.siteUrl}/#organization`,
      },
      knowsAbout: [
        'Custom software development',
        'AI workflow automation',
        'Systems integration',
        'Software modernization',
        'Fractional CTO consulting',
        'NetSuite SuiteQL',
      ],
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(profileStructuredData) }}
      />
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
