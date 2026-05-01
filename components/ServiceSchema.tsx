'use client'

import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'

export default function ServiceSchema() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'Custom Software Consulting Services',
    description:
      'Custom software development, AI workflow automation, systems integration, and technical leadership services for established businesses and funded teams.',
    provider: {
      '@type': 'Organization',
      name: siteMetadata.localBusiness.name,
      url: siteMetadata.siteUrl,
      email: siteMetadata.localBusiness.email,
      address: {
        '@type': 'PostalAddress',
        addressLocality: siteMetadata.localBusiness.address.addressLocality,
        addressRegion: siteMetadata.localBusiness.address.addressRegion,
        addressCountry: siteMetadata.localBusiness.address.addressCountry,
      },
    },
    serviceType: siteMetadata.localBusiness.serviceType,
    areaServed: siteMetadata.localBusiness.areaServed,
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Custom Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Business Software and SaaS',
            description:
              'Business-critical web applications, SaaS products, internal platforms, and customer portals built with maintainable architecture',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'AI Workflow Automation and Integrations',
            description:
              'Workflow automation, AI-assisted operations, and systems integration for teams with expensive manual processes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Architecture, Rescue, and Technical Leadership',
            description:
              'Senior engineering leadership for legacy modernization, cloud architecture, codebase rescue, and delivery planning',
          },
        },
      ],
    },
  }

  return (
    <Script
      id="service-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
    />
  )
}
