import siteMetadata from '@/data/siteMetadata'

interface LocalSEOProps {
  pageTitle?: string
  pageDescription?: string
  pageUrl?: string
}

export default function LocalSEO({ pageTitle, pageDescription, pageUrl }: LocalSEOProps) {
  const title = pageTitle || siteMetadata.title
  const description = pageDescription || siteMetadata.description
  const url = pageUrl || siteMetadata.siteUrl

  // Local Business Structured Data
  const localBusinessStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: siteMetadata.localBusiness.name,
    description: siteMetadata.localBusiness.description,
    url: siteMetadata.localBusiness.url,
    telephone: siteMetadata.localBusiness.telephone,
    email: siteMetadata.localBusiness.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteMetadata.localBusiness.address.streetAddress,
      addressLocality: siteMetadata.localBusiness.address.addressLocality,
      addressRegion: siteMetadata.localBusiness.address.addressRegion,
      postalCode: siteMetadata.localBusiness.address.postalCode,
      addressCountry: siteMetadata.localBusiness.address.addressCountry,
    },
    areaServed: siteMetadata.localBusiness.areaServed.map((area) => ({
      '@type': 'City',
      name: area,
    })),
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
    foundingDate: siteMetadata.localBusiness.foundingDate,
    sameAs: [siteMetadata.github, siteMetadata.linkedin].filter(Boolean),
  }

  // Breadcrumb Structured Data
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteMetadata.siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: url,
      },
    ],
  }

  return (
    <>
      {/* Local Business Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessStructuredData) }}
      />

      {/* Breadcrumb Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* Local SEO Meta Tags */}
      <meta name="geo.region" content="US-CA" />
      <meta name="geo.placename" content="Fresno" />
      <meta name="geo.position" content="36.7378;-119.7871" />
      <meta name="ICBM" content="36.7378, -119.7871" />

      {/* Local Business Keywords */}
      <meta
        name="keywords"
        content="Fresno software development, Fresno web development, Fresno mobile app development, Central California software company, Fresno IT consulting, Clovis software development, Madera web development, Visalia software development, Hanford IT services, Merced technology consulting"
      />

      {/* Local Business Information */}
      <meta name="business:contact_data:street_address" content="Fresno, CA" />
      <meta name="business:contact_data:locality" content="Fresno" />
      <meta name="business:contact_data:region" content="CA" />
      <meta name="business:contact_data:postal_code" content="93701" />
      <meta name="business:contact_data:country_name" content="United States" />
      <meta name="business:contact_data:email" content="aperez2541@gmail.com" />
    </>
  )
}
