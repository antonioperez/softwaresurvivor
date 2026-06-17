import { sortPosts, allCoreContent } from 'pliny/utils/contentlayer'
import { allBlogs } from 'contentlayer/generated'
import Main from './Main'
import { genPageMetadata } from './seo'

// The root layout's title.template only applies to child segments, so the
// homepage must append the brand suffix itself.
export const metadata = {
  ...genPageMetadata({
    title: 'Custom Software Development & AI Automation in Fresno',
    description:
      'Principal engineer-led consulting for custom software, AI workflow automation, integrations, and software modernization in Fresno, Central California, and remote across the US.',
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
  }),
  title: 'Custom Software Development & AI Automation in Fresno | Software Survivor',
}

export default async function Page() {
  const sortedPosts = sortPosts(allBlogs)
  const posts = allCoreContent(sortedPosts)
  return <Main posts={posts} />
}
