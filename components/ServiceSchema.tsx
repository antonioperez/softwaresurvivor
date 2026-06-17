'use client'

import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'
import { serviceHubs } from '@/data/serviceHubData'

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
      itemListElement: serviceHubs.map((hub) => ({
        '@type': 'Offer',
        url: `${siteMetadata.siteUrl}${hub.path}`,
        itemOffered: {
          '@type': 'Service',
          name: hub.pageTitle,
          description: hub.description,
          serviceType: hub.serviceType,
        },
      })),
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
