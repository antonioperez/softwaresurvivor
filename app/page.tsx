import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { genPageMetadata } from './seo'

export const metadata = genPageMetadata({
  title: 'Custom Software Consulting | Fresno Software Development',
  description:
    'Expert custom software consulting services in Fresno, CA. Enterprise software development, technical leadership, and system architecture. Building scalable solutions for Central California businesses.',
  canonical: '/',
  keywords: [
    'custom software consulting',
    'custom software consulting fresno',
    'custom software development consulting',
    'software consulting services',
    'enterprise software consulting',
  ],
})

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
