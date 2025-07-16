import Link from '@/components/Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function Home({ posts }) {
  return (
    <>
      {/* Local Business Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Software Survivor',
            description: 'Leading software development company in Fresno, CA',
            url: 'https://softwaresurvivor.com',
            telephone: '+1-559-512-5993',
            email: 'aperez2541@gmail.com',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Fresno',
              addressRegion: 'CA',
              addressCountry: 'US',
            },
            areaServed: [
              'Fresno',
              'Clovis',
              'Madera',
              'Visalia',
              'Hanford',
              'Merced',
              'Central California',
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Software Development Services',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Custom Software Development' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Technical Leadership' },
                },
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'System Architecture' },
                },
              ],
            },
          }),
        }}
      />

      {/* Hero Section */}
      <div className="from-brand-600 via-brand-700 to-brand-800 relative overflow-hidden bg-gradient-to-br text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                We Build Software That
                <span className="from-accent-300 to-accent-400 block bg-gradient-to-r bg-clip-text text-transparent">
                  Scales with Confidence.
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-100 md:text-2xl">
                Enterprise-grade software architecture and technical leadership. From startups to
                Fortune 500, we build scalable systems that survive the test of time.
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group text-brand-600 focus:ring-offset-brand-600 relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="from-brand-500 to-brand-600 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <Link
                href="/projects"
                className="group hover:text-brand-600 focus:ring-offset-brand-600 relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-15 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              From concept to deployment, we handle every aspect of your software project with
              expertise and precision.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="bg-brand-100 dark:bg-brand-900 mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
                <svg
                  className="text-brand-600 dark:text-brand-400 h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Enterprise Software Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enterprise-grade web applications, mobile apps, and scalable systems built with
                modern architectural patterns and best practices.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="bg-accent-100 dark:bg-accent-900 mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
                <svg
                  className="text-accent-600 dark:text-accent-400 h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Technical Leadership & Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Principal Engineer-level leadership, enterprise architecture design, and technical
                strategy for growing companies.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="bg-success-100 dark:bg-success-900 mb-6 flex h-16 w-16 items-center justify-center rounded-xl">
                <svg
                  className="text-success-600 dark:text-success-400 h-8 w-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                System Design & Cloud Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Enterprise system design, microservices architecture, and cloud infrastructure
                planning across AWS, Azure, and Google Cloud.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blog Post */}
      {posts.length > 0 && (
        <div className="bg-gray-50 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                Latest Insights
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                Stay updated with our latest thoughts on software development, architecture, and
                technical leadership
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
              <div className="md:flex">
                <div className="p-8 md:w-2/3">
                  <div className="mb-4 flex items-center space-x-2">
                    <span className="bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-200 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium">
                      Latest Post
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {new Date(posts[0].date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric',
                      })}
                    </span>
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                    {posts[0].title}
                  </h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-400">{posts[0].summary}</p>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {posts[0].tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <Link
                      href={`/${posts[0].path}`}
                      className="group bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    >
                      <span className="relative z-10">Read Full Article</span>
                      <div className="from-brand-700 to-brand-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                    </Link>
                    <Link
                      href="/blog"
                      className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-700"
                    >
                      <span className="relative z-10">View All Posts</span>
                      <div className="absolute inset-0 bg-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:bg-gray-600"></div>
                    </Link>
                  </div>
                </div>
                <div className="md:w-1/3">
                  <div className="from-brand-600 to-brand-700 h-full bg-gradient-to-br p-8 text-white">
                    <div className="flex h-full flex-col justify-center">
                      <h4 className="mb-4 text-xl font-semibold">Technical Leadership</h4>
                      <p className="text-brand-100">
                        Insights from a Principal Engineer on building scalable systems, leading
                        engineering teams, and delivering enterprise solutions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Featured Project - FeelsReel */}
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              Featured Project: FeelsReel
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              Revolutionary AI-powered story book generator that creates personalized children's
              stories and transforms them into engaging videos
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/static/images/projects/feelsreel.png"
                  alt="FeelsReel"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover md:h-full"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">FeelsReel</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  An innovative AI-powered platform that generates personalized children's stories
                  and transforms them into engaging videos using OpenAI (GPT-4) and RunwayAI. This
                  project showcases cutting-edge AI integration and creative content generation.
                </p>
                <div className="mb-8 space-y-3">
                  <div className="flex items-center">
                    <div className="bg-brand-500 mr-3 h-2 w-2 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      AI Story Generation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-accent-500 mr-3 h-2 w-2 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Video Creation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-success-500 mr-3 h-2 w-2 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      OpenAI Integration
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-warning-500 mr-3 h-2 w-2 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      RunwayAI Video Processing
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://feelsreel.com/story/bee8aa0a-895d-4d17-af3e-e9a8c98f97e3"
                    className="group bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">View Live Demo</span>
                    <div className="from-brand-700 to-brand-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                  </Link>
                  <Link
                    href="https://feelsreel.com"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:outline-none dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    <span className="relative z-10">Visit Website</span>
                    <div className="absolute inset-0 bg-gray-100 opacity-0 transition-opacity duration-300 group-hover:opacity-10 dark:bg-gray-600"></div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="bg-gray-50 py-10 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              More Projects
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Explore our other innovative solutions and cutting-edge projects.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <Image
                src="/static/images/projects/candid-moments.png"
                alt="Candid Moments"
                width={600}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Candid Moments
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Photo-sharing app with AWS Lambda, Rekognition, and S3 for safe event photography.
                </p>
                <Link
                  href="https://candidmoments.io"
                  className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex items-center font-medium"
                >
                  Visit Website →
                </Link>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <Image
                src="/static/images/projects/sgma.gif"
                alt="Sigma Solutions"
                width={600}
                height={300}
                unoptimized
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Sigma Solutions
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Groundwater management web app for California water agencies with interactive
                  mapping and SGMA compliance tools.
                </p>
                <Link
                  href="https://antonioperez.github.io/sgma/index.html#/login"
                  className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex items-center font-medium"
                >
                  See Demo →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="group bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <span className="relative z-10">View All Projects</span>
              <div className="from-brand-700 to-brand-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="from-brand-600 via-brand-700 to-brand-800 bg-gradient-to-br py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Ready to Build Something Amazing?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
            Let's discuss how we can help your company navigate complex technical challenges and
            build scalable solutions.
          </p>
          <Link
            href="/contact"
            className="group text-brand-600 focus:ring-offset-brand-600 relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
          >
            <span className="relative z-10">Start a Conversation</span>
            <div className="from-brand-500 to-brand-600 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
          </Link>
        </div>
      </div>
    </>
  )
}
