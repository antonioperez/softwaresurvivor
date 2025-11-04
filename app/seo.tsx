import { Metadata } from 'next'
import siteMetadata from '@/data/siteMetadata'

interface PageSEOProps {
  title: string
  description?: string
  image?: string
  canonical?: string
  keywords?: string | string[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function genPageMetadata({
  title,
  description,
  image,
  canonical,
  keywords,
  ...rest
}: PageSEOProps): Metadata {
  const finalKeywords = keywords || siteMetadata.keywords
  const finalDescription = description || siteMetadata.description
  const canonicalUrl = canonical
    ? canonical.startsWith('http')
      ? canonical
      : `${siteMetadata.siteUrl}${canonical.startsWith('/') ? canonical : `/${canonical}`}`
    : undefined

  return {
    title,
    description: finalDescription,
    keywords: Array.isArray(finalKeywords) ? finalKeywords.join(', ') : finalKeywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: finalDescription,
      url: canonicalUrl || siteMetadata.siteUrl,
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: 'summary_large_image',
      images: image ? [image] : [siteMetadata.socialBanner],
      description: finalDescription,
    },
    ...rest,
  }
}
