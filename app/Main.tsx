import Link from '@/components/Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

const homepageDescription =
  'Software Survivor helps established businesses and funded product teams build business-critical web apps, AI workflow automation, integrations, and cloud platforms.'

const serviceHighlights = [
  {
    title: 'Custom Business Software and SaaS',
    description:
      'Plan and build revenue, operations, and customer-facing products with maintainable architecture, clean APIs, and practical delivery milestones.',
  },
  {
    title: 'AI Workflow Automation and Integrations',
    description:
      'Connect the tools your team already uses, automate expensive manual workflows, and add AI where it can create measurable leverage.',
  },
  {
    title: 'Architecture, Rescue, and Technical Leadership',
    description:
      'Stabilize fragile systems, modernize legacy code, and get senior engineering judgment before a rebuild, scale-up, or key technical hire.',
  },
]

const clientFit = [
  {
    title: 'Business-critical systems',
    description:
      'Internal platforms, portals, dashboards, and product workflows where reliability and maintainability matter more than a quick prototype.',
  },
  {
    title: 'Operational complexity',
    description:
      'Teams with spreadsheets, disconnected apps, manual review steps, or customer handoffs that are now too costly to run by hand.',
  },
  {
    title: 'Senior technical direction',
    description:
      'Founders and operators who need architectural clarity, delivery leadership, or an experienced partner before growing an engineering team.',
  },
]

const homepageStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': `${siteMetadata.siteUrl}/#homepage`,
  url: siteMetadata.siteUrl,
  name: 'Custom Software Development for Growing Teams',
  description: homepageDescription,
  isPartOf: {
    '@id': `${siteMetadata.siteUrl}/#website`,
  },
  about: serviceHighlights.map((service) => ({
    '@type': 'Service',
    name: service.title,
    description: service.description,
    provider: {
      '@id': `${siteMetadata.siteUrl}/#organization`,
    },
  })),
}

export default function Home({ posts }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageStructuredData) }}
      />

      {/* Hero Section */}
      <div className="campfire-gradient relative overflow-hidden text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="fire-pattern absolute inset-0"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                Custom Software for Teams
                <span className="block font-extrabold text-yellow-100 dark:text-yellow-200">
                  That Outgrew Workarounds.
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl text-gray-100 md:text-2xl">
                {homepageDescription} Based in Fresno and serving teams across California and the
                US.
              </p>
              <div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-3 text-sm font-medium text-white/90">
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
                  Operations-heavy businesses
                </span>
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
                  Funded product teams
                </span>
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
                  Legacy system modernization
                </span>
                <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2">
                  AI and integration work
                </span>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group text-brand-600 focus:ring-offset-brand-600 relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              >
                <span className="relative z-10">Start a Project Conversation</span>
                <div className="from-brand-500 to-brand-600 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <Link
                href="/portfolio"
                className="group hover:text-brand-600 focus:ring-offset-brand-600 relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none"
              >
                <span className="relative z-10">See Relevant Work</span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="warm-gradient mb-8 py-15 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              Software for Business-Critical Workflows
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              The best engagements start with a real business constraint: a workflow that will not
              scale, a product that needs technical depth, or a legacy system that has become too
              expensive to carry.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {serviceHighlights.map((service, index) => (
              <div
                key={service.title}
                className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
              >
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
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
                {index === 0 && (
                  <Link
                    href="/services"
                    className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 mt-6 inline-flex font-medium"
                  >
                    Explore software services →
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Client Fit Section */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-brand-600 dark:text-brand-400 mb-3 text-sm font-semibold tracking-wide uppercase">
                Better-fit clients
              </p>
              <h2 className="mb-5 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Built for buyers with a serious software problem.
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                This is a strong fit when the software is tied to revenue, operations, compliance,
                customer experience, or a product roadmap. It is less useful for one-off brochure
                sites or projects where the only goal is the lowest possible hourly rate.
              </p>
              <Link
                href="/contact"
                className="bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 mt-8 inline-flex items-center rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
              >
                Talk Through the Constraints
              </Link>
            </div>
            <div className="grid gap-5">
              {clientFit.map((fit) => (
                <div
                  key={fit.title}
                  className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
                >
                  <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                    {fit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{fit.description}</p>
                </div>
              ))}
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
              Featured AI Product Build: FeelsReel
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              A media-heavy AI product that combines custom application development, prompt-driven
              content workflows, and third-party video generation APIs.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/static/images/portfolio/feelsreel.png"
                  alt="FeelsReel"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover md:h-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">FeelsReel</h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  FeelsReel generates personalized children's stories and turns them into videos
                  using OpenAI and RunwayAI. It is a useful example of where Software Survivor fits:
                  turning a product idea with complex AI and media dependencies into a working
                  software platform.
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
              Our Portfolio
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Explore our portfolio to see how we solve real client challenges with cutting-edge
              technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <Image
                src="/static/images/portfolio/candid-moments.png"
                alt="Candid Moments"
                width={600}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
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
                src="/static/images/portfolio/sgma.gif"
                alt="Sigma Solutions"
                width={600}
                height={300}
                unoptimized
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
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
              href="/portfolio"
              className="group bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 relative inline-flex items-center justify-center overflow-hidden rounded-lg px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
            >
              <span className="relative z-10">View All Projects</span>
              <div className="from-brand-700 to-brand-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="campfire-gradient py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            Bring a Serious Software Problem.
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
            If your team needs a dependable partner for a revenue, operations, or product system,
            start with the constraints. We will help clarify the architecture, delivery path, and
            first useful release.
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
