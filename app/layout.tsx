import 'css/tailwind.css'
import 'pliny/search/algolia.css'
import 'remark-github-blockquote-alert/alert.css'

import { Space_Grotesk } from 'next/font/google'
import { Analytics, AnalyticsConfig } from 'pliny/analytics'
import { SearchProvider, SearchConfig } from 'pliny/search'
import Header from '@/components/Header'
import SectionContainer from '@/components/SectionContainer'
import Footer from '@/components/Footer'
import Breadcrumb from '@/components/Breadcrumb'
import siteMetadata from '@/data/siteMetadata'
import { ThemeProviders } from './theme-providers'
import { Metadata } from 'next'

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.title,
    template: `%s | ${siteMetadata.headerTitle}`,
  },
  description: siteMetadata.description,
  openGraph: {
    title: siteMetadata.title,
    description: siteMetadata.description,
    url: './',
    siteName: siteMetadata.headerTitle,
    images: [siteMetadata.socialBanner],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: './',
    types: {
      'application/rss+xml': `${siteMetadata.siteUrl}/feed.xml`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: siteMetadata.title,
    card: 'summary_large_image',
    images: [siteMetadata.socialBanner],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const basePath = process.env.BASE_PATH || ''

  const organizationId = `${siteMetadata.siteUrl}/#organization`
  const personId = `${siteMetadata.siteUrl}/about#antonio-perez`
  const websiteId = `${siteMetadata.siteUrl}/#website`
  const serviceId = `${siteMetadata.siteUrl}/#software-development-services`
  const logoUrl = `${siteMetadata.siteUrl}/static/images/logo.png`
  const headshotUrl = `${siteMetadata.siteUrl}/static/images/antonio-headshot.JPG`
  const knowsAbout = [
    'Custom software development',
    'AI workflow automation',
    'Systems integration',
    'Software modernization',
    'Shopify NetSuite integration',
    'NetSuite SuiteQL',
    'Fractional CTO consulting',
    'Technical leadership',
  ]

  const siteStructuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteMetadata.localBusiness.name,
        alternateName: siteMetadata.headerTitle,
        url: siteMetadata.siteUrl,
        logo: logoUrl,
        description: siteMetadata.localBusiness.description,
        email: siteMetadata.localBusiness.email,
        foundingDate: siteMetadata.localBusiness.foundingDate,
        address: {
          '@type': 'PostalAddress',
          addressLocality: siteMetadata.localBusiness.address.addressLocality,
          addressRegion: siteMetadata.localBusiness.address.addressRegion,
          addressCountry: siteMetadata.localBusiness.address.addressCountry,
        },
        sameAs: [siteMetadata.github, siteMetadata.linkedin].filter(Boolean),
        founder: {
          '@id': personId,
        },
        contactPoint: {
          '@type': 'ContactPoint',
          email: siteMetadata.localBusiness.email,
          contactType: 'sales',
          areaServed: siteMetadata.localBusiness.areaServed,
        },
        knowsAbout,
      },
      {
        '@type': 'Person',
        '@id': personId,
        name: siteMetadata.author,
        url: `${siteMetadata.siteUrl}/about`,
        image: headshotUrl,
        jobTitle: 'Principal Engineer',
        sameAs: [siteMetadata.github, siteMetadata.linkedin].filter(Boolean),
        worksFor: {
          '@id': organizationId,
        },
        knowsAbout,
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteMetadata.localBusiness.name,
        alternateName: siteMetadata.headerTitle,
        url: siteMetadata.siteUrl,
        inLanguage: siteMetadata.language,
        publisher: {
          '@id': organizationId,
        },
      },
      {
        '@type': 'ProfessionalService',
        '@id': serviceId,
        name: 'Custom Software Development Services',
        description: siteMetadata.localBusiness.description,
        url: siteMetadata.siteUrl,
        email: siteMetadata.localBusiness.email,
        provider: {
          '@id': organizationId,
        },
        areaServed: siteMetadata.localBusiness.areaServed.map((area) => ({
          '@type': 'City',
          name: area,
        })),
        serviceType: siteMetadata.localBusiness.serviceType,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Software Development Services',
          itemListElement: siteMetadata.localBusiness.serviceType.map((service) => ({
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: service,
            },
          })),
        },
      },
    ],
  }

  return (
    <html
      lang={siteMetadata.language}
      className={`${space_grotesk.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteStructuredData) }}
        />
      </head>
      <link
        rel="apple-touch-icon"
        sizes="76x76"
        href={`${basePath}/static/favicons/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href={`${basePath}/static/favicons/favicon-32x32.png`}
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href={`${basePath}/static/favicons/favicon-16x16.png`}
      />
      <link rel="manifest" href={`${basePath}/static/favicons/site.webmanifest`} />
      <link
        rel="mask-icon"
        href={`${basePath}/static/favicons/safari-pinned-tab.svg`}
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="theme-color" media="(prefers-color-scheme: light)" content="#fff" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000" />
      <link rel="alternate" type="application/rss+xml" href={`${basePath}/feed.xml`} />
      <body className="bg-white pl-[calc(100vw-100%)] text-black antialiased dark:bg-gray-950 dark:text-white">
        <ThemeProviders>
          <Analytics analyticsConfig={siteMetadata.analytics as AnalyticsConfig} />
          <SectionContainer>
            <SearchProvider searchConfig={siteMetadata.search as SearchConfig}>
              <Header />
              <Breadcrumb />
              <main className="mb-auto">{children}</main>
            </SearchProvider>
            <Footer />
          </SectionContainer>
        </ThemeProviders>
      </body>
    </html>
  )
}
