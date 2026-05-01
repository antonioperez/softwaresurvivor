import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { genPageMetadata } from './seo'

export const metadata = genPageMetadata({
  title: 'Custom Software Development for Growing Teams',
  description:
    'Custom software development for established businesses and funded teams. We build AI workflow automation, integrations, SaaS products, and cloud systems from Fresno, CA.',
  canonical: '/',
  keywords: [
    'custom software development company',
    'business software development',
    'software modernization consulting',
    'AI workflow automation developer',
    'systems integration consultant',
    'fractional CTO consulting',
    'Fresno software development',
  ],
})

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
