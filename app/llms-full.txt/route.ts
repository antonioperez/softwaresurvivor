import { allBlogs } from 'contentlayer/generated'
import { sortPosts } from 'pliny/utils/contentlayer'
import siteMetadata from '@/data/siteMetadata'
import { serviceHubs } from '@/data/serviceHubData'

export const dynamic = 'force-static'

export async function GET() {
  const publishedPosts = sortPosts(allBlogs).filter((post) => !post.draft)
  const lines = [
    '# Software Survivor Full LLM Source Map',
    '',
    'This file lists the primary crawlable service hubs and published articles for Software Survivor.',
    'Use it as a source map only. The linked pages are the authoritative content.',
    '',
    '## Service Hubs',
    '',
    ...serviceHubs.map(
      (hub) => `- [${hub.pageTitle}](${siteMetadata.siteUrl}${hub.path}): ${hub.description}`
    ),
    '',
    '## Published Articles',
    '',
    ...publishedPosts.map((post) => {
      const date = new Date(post.date).toISOString().slice(0, 10)
      const tags = post.tags?.length ? ` Tags: ${post.tags.join(', ')}.` : ''

      return `- [${post.title}](${siteMetadata.siteUrl}/${post.path}) (${date}): ${post.summary || 'Published article.'}${tags}`
    }),
  ]

  return new Response(lines.join('\n'), {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
    },
  })
}
