'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Script from 'next/script'

interface BreadcrumbItem {
  name: string
  href: string
}

export default function Breadcrumb() {
  const pathname = usePathname()

  if (pathname === '/') return null

  const pathSegments = pathname.split('/').filter(Boolean)

  const breadcrumbItems: BreadcrumbItem[] = [
    { name: 'Home', href: '/' },
    ...pathSegments.map((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/')
      const name = segment.replace(/-/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())
      return { name, href }
    }),
  ]

  // Generate structured data for breadcrumbs
  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://softwaresurvivor.com${item.href}`,
    })),
  }

  return (
    <>
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="py-2">
        <ol className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
          {breadcrumbItems.map((item, index) => (
            <li key={item.href} className="flex items-center">
              {index > 0 && (
                <svg
                  className="mx-2 h-3 w-3 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              )}
              {index === breadcrumbItems.length - 1 ? (
                <span className="font-medium text-gray-900 dark:text-gray-100">{item.name}</span>
              ) : (
                <Link href={item.href} className="hover:text-gray-900 dark:hover:text-gray-100">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  )
}
