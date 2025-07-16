'use client'

import Script from 'next/script'

export default function ServiceSchema() {
  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Software Development Services',
    description:
      'Comprehensive software development and technical leadership services in Fresno, CA',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Software Survivor',
      url: 'https://softwaresurvivor.com',
      telephone: '+1-559-512-5993',
      email: 'aperez2541@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Fresno, CA',
        addressLocality: 'Fresno',
        addressRegion: 'CA',
        postalCode: '93701',
        addressCountry: 'US',
      },
    },
    serviceType: [
      'Enterprise Software Development',
      'Technical Leadership & Architecture',
      'System Design & Cloud Architecture',
      'DevOps & CI/CD',
      'Technical Consulting',
      'Training & Mentoring',
    ],
    areaServed: [
      'Fresno',
      'Clovis',
      'Madera',
      'Visalia',
      'Hanford',
      'Merced',
      'Modesto',
      'Central California',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Software Development Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Enterprise Software Development',
            description:
              'Enterprise-grade web applications, mobile apps, and scalable systems using modern architectural patterns',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Leadership & Architecture',
            description:
              'Principal Engineer-level leadership, enterprise architecture design, and technical strategy',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'System Design & Cloud Architecture',
            description:
              'Enterprise system architectures, microservices, and cloud infrastructure solutions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'DevOps & CI/CD',
            description:
              'Automated deployment pipelines, monitoring, and infrastructure management',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Technical Consulting',
            description:
              'Expert guidance on technology decisions, code reviews, and technical problem-solving',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Training & Mentoring',
            description: 'Team training programs and technical skill development',
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
