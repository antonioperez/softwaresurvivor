import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({
  title: 'About | Custom Software Consulting Expert',
  description:
    'Learn about Software Survivor - a custom software consulting firm in Fresno, CA. Expert in enterprise software development, technical leadership, and system architecture. Serving Central California businesses.',
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
