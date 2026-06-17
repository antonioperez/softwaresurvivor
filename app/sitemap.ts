import { MetadataRoute } from 'next'
import { allBlogs } from 'contentlayer/generated'
import siteMetadata from '@/data/siteMetadata'
import { serviceHubs } from '@/data/serviceHubData'
import caseStudies from '@/data/caseStudyData'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const blogRoutes = allBlogs
    .filter((post) => !post.draft)
    .map((post) => ({
      url: `${siteUrl}/${post.path}`,
      lastModified: post.lastmod || post.date,
    }))

  // Static routes intentionally omit lastModified: stamping the build date on
  // every page makes lastmod meaningless to crawlers.
  const routes = [
    '',
    'blog',
    'services',
    'contact',
    'about',
    'portfolio',
    'tags',
    'fresno-software-development',
    'fresno-tech-consulting',
    'faq',
    ...serviceHubs.map((hub) => hub.path.replace(/^\//, '')),
    ...caseStudies.map((study) => `portfolio/${study.slug}`),
  ].map((route) => ({
    url: `${siteUrl}/${route}`,
  }))

  return [...routes, ...blogRoutes]
}
