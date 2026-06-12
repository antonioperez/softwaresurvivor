import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

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

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={author.body.code} />
      </AuthorLayout>
    </>
  )
}
