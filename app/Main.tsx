import Link from '@/components/Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'
import NewsletterForm from '@/components/NewsletterForm'
import FAQSchema from '@/components/FAQSchema'
import { serviceHubs } from '@/data/serviceHubData'

const homepageDescription =
  'Software Survivor helps established businesses and funded product teams build business-critical web apps, AI workflow automation, integrations, and cloud platforms.'

const serviceHighlights = [
  {
    title: 'Custom Business Software and SaaS',
    description:
      'Plan and build revenue, operations, and customer-facing products with maintainable architecture, clean APIs, and practical delivery milestones.',
    iconPath:
      'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z',
  },
  {
    title: 'AI Workflow Automation and Integrations',
    description:
      'Connect the tools your team already uses, automate expensive manual workflows, and add AI where it can create measurable leverage.',
    iconPath:
      'M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z',
  },
  {
    title: 'Architecture, Rescue, and Technical Leadership',
    description:
      'Stabilize fragile systems, modernize legacy code, and get senior engineering judgment before a rebuild, scale-up, or key technical hire.',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
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

const trustSignals = [
  'Principal Engineer-led delivery',
  'Enterprise and growth-stage experience',
  'Business-critical systems, integrations, and AI workflows',
  'Fresno-based, serving remote US teams',
]

const mobileTrustSignals = [
  'Principal Engineer-led',
  'Target + Pressed Juicery experience',
  '1 business day response',
]

const proofSignals = [
  {
    value: '10+ years',
    label: 'building and modernizing production software',
  },
  {
    value: 'Target + Pressed Juicery',
    label: 'enterprise and operations-heavy experience',
  },
  {
    value: '1 business day',
    label: 'typical response for qualified project conversations',
  },
]

// Kept in sync with the full list on /faq so the FAQPage schema stays consistent.
const homepageFaqs = [
  {
    question: 'How much does custom software development cost?',
    answer:
      'Most serious custom software engagements start in the five-figure range. Smaller advisory or architecture reviews can be scoped separately when you need a clear technical plan before implementation. Share the problem, constraints, and budget range so we can recommend the smallest responsible next step.',
  },
  {
    question: 'How long does a typical software project take?',
    answer:
      'Project timelines vary by complexity, existing systems, and decision speed. A focused first release may take 4-8 weeks, while more complex integrations or modernization efforts can take 3-6 months. The first conversation is used to clarify scope, risk, and a practical delivery path.',
  },
  {
    question: 'Can you help with existing software systems?',
    answer:
      'Yes. Existing-system work is often the strongest fit: architecture reviews, modernization plans, rescue work, performance and reliability improvements, integration cleanup, and incremental replacement of fragile workflows.',
  },
  {
    question: 'How do I get started with a software project?',
    answer:
      'Start with a project conversation. Share the workflow, business constraint, timeline, budget range if known, and what a useful first release would accomplish. If there is a fit, the next step is usually a short discovery call or scoped architecture recommendation.',
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

        <div className="relative mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 md:py-24 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <div className="mb-6 sm:mb-8">
              <p className="mb-3 text-xs leading-5 font-semibold tracking-wide text-white/80 uppercase sm:mb-4 sm:text-sm">
                Custom software consulting for serious operational constraints
              </p>
              <h1 className="mb-4 text-3xl leading-tight font-bold tracking-tight sm:mb-6 sm:text-4xl md:text-6xl">
                Business-critical software{' '}
                <span className="block font-extrabold text-yellow-100 dark:text-yellow-200">
                  when workarounds start costing real money.
                </span>
              </h1>
              <p className="mx-auto mb-6 max-w-3xl text-base leading-7 text-gray-100 sm:mb-8 sm:text-lg sm:leading-8 md:text-xl">
                <span className="sm:hidden">
                  Senior engineering help for custom software, AI workflow automation, integrations,
                  and modernization.
                </span>
                <span className="hidden sm:inline">
                  {homepageDescription}{' '}
                  <Link
                    href="/fresno-software-development"
                    className="underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    Based in Fresno
                  </Link>
                  , we offer custom development and{' '}
                  <Link
                    href="/fresno-tech-consulting"
                    className="underline decoration-white/50 underline-offset-4 transition-colors hover:decoration-white"
                  >
                    tech consulting
                  </Link>{' '}
                  to teams across California and the US.
                </span>
              </p>
            </div>

            <div className="mx-auto mb-6 grid max-w-sm gap-2 text-sm text-white/90 sm:hidden">
              {mobileTrustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-lg border border-white/20 bg-white/10 px-3 py-2 backdrop-blur-sm"
                >
                  {signal}
                </span>
              ))}
            </div>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group text-brand-600 focus:ring-offset-brand-600 relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg bg-white px-6 py-3.5 font-semibold shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none sm:w-auto sm:px-8 sm:py-4"
              >
                <span className="relative z-10">Start a Project Conversation</span>
                <div className="from-brand-500 to-brand-600 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <Link
                href="/portfolio"
                className="group hover:text-brand-600 focus:ring-offset-brand-600 relative inline-flex w-full items-center justify-center overflow-hidden rounded-lg border-2 border-white px-6 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:outline-none sm:w-auto sm:px-8 sm:py-4"
              >
                <span className="relative z-10">See Relevant Work</span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
            </div>

            <div className="mx-auto mt-10 hidden max-w-4xl flex-wrap justify-center gap-3 text-sm text-white/85 sm:flex">
              {trustSignals.map((signal) => (
                <span
                  key={signal}
                  className="rounded-full border border-white/25 bg-white/10 px-4 py-2 backdrop-blur-sm"
                >
                  {signal}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust Signals */}
      <div className="border-b border-gray-200 bg-white py-8 dark:border-gray-800 dark:bg-gray-950">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          {proofSignals.map((signal) => (
            <div key={signal.value}>
              <div className="text-brand-600 dark:text-brand-400 text-xl font-bold">
                {signal.value}
              </div>
              <p className="mt-1 text-sm leading-6 text-gray-600 dark:text-gray-400">
                {signal.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="warm-gradient py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
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
            {serviceHighlights.map((service) => (
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
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={service.iconPath}
                    />
                  </svg>
                </div>
                <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {serviceHubs.map((hub) => (
              <Link
                key={hub.path}
                href={hub.path}
                className="hover:border-brand-300 dark:hover:border-brand-700 block rounded-lg border border-gray-200 bg-white p-5 text-left transition-colors dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="text-base font-semibold text-gray-900 dark:text-gray-100">
                  {hub.pageTitle}
                </h3>
                <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {hub.summaryCards[0].description}
                </p>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex font-medium"
            >
              Explore all software services →
            </Link>
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
                Start a Project Conversation
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

      {/* Founder Section */}
      <div className="warm-gradient py-16 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 md:flex-row">
            <Image
              src="/static/images/antonio-headshot.JPG"
              alt="Antonio Perez, Principal Engineer and founder of Software Survivor"
              width={288}
              height={384}
              className="h-72 w-56 flex-none rounded-2xl object-cover object-top shadow-xl"
              loading="lazy"
              sizes="224px"
            />
            <div className="text-center md:text-left">
              <p className="text-brand-600 dark:text-brand-400 mb-3 text-sm font-semibold tracking-wide uppercase">
                Who you'll work with
              </p>
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
                Antonio Perez, Principal Engineer
              </h2>
              <p className="mb-6 text-lg text-gray-600 dark:text-gray-400">
                Every engagement is led directly by a Principal Engineer with over a decade of
                experience building software for startups, small businesses, and enterprises
                including Target and Pressed Juicery. You get senior judgment on architecture and
                delivery from the first conversation.
              </p>
              <Link
                href="/about"
                className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex font-medium"
              >
                More about Software Survivor →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Latest Blog Posts */}
      {posts.length > 0 && (
        <div className="bg-gray-50 py-16 dark:bg-gray-900">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
                Latest Insights
              </h2>
              <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
                Practical writing on custom software, AI workflow automation, architecture, and
                technical leadership
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {posts.slice(0, 3).map((post) => (
                <article
                  key={post.path}
                  className="flex flex-col rounded-xl bg-white p-6 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800"
                >
                  <time
                    dateTime={post.date}
                    className="mb-3 text-sm text-gray-500 dark:text-gray-400"
                  >
                    {new Date(post.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </time>
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">
                    <Link
                      href={`/${post.path}`}
                      className="hover:text-brand-600 dark:hover:text-brand-400"
                    >
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mb-4 grow text-gray-600 dark:text-gray-400">{post.summary}</p>
                  <div className="mb-4 flex flex-wrap gap-2">
                    {post.tags?.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    href={`/${post.path}`}
                    className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex font-medium"
                  >
                    Read article →
                  </Link>
                </article>
              ))}
            </div>

            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex font-medium"
              >
                View all posts →
              </Link>
            </div>

            <div className="mt-16">
              <NewsletterForm />
            </div>
          </div>
        </div>
      )}

      {/* Featured Project - Candid Moments */}
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              Featured Product Build: Candid Moments
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              A serverless photo-sharing product that replaces manual photo review with automated
              moderation, built on AWS Lambda, Rekognition, and S3.
            </p>
          </div>

          <div className="overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-gray-800">
            <div className="md:flex">
              <div className="md:w-1/2">
                <Image
                  src="/static/images/portfolio/candid-moments.png"
                  alt="Candid Moments photo-sharing app showing a private event gallery"
                  width={600}
                  height={400}
                  className="h-64 w-full object-cover md:h-full"
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 md:w-1/2">
                <h3 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">
                  Candid Moments
                </h3>
                <p className="mb-6 text-gray-600 dark:text-gray-400">
                  Candid Moments gives private events a shared photo gallery where every guest
                  upload is screened automatically before anyone sees it. It is a useful example of
                  where Software Survivor fits: turning a costly manual review process into a
                  dependable serverless platform.
                </p>
                <div className="mb-8 space-y-3">
                  <div className="flex items-center">
                    <div className="bg-brand-500 mr-3 h-2 w-2 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Automated Photo Moderation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-accent-500 mr-3 h-2 w-2 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Private Event Galleries
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-success-500 mr-3 h-2 w-2 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      AWS Rekognition Screening
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="bg-warning-500 mr-3 h-2 w-2 rounded-full"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      Serverless Lambda and S3 Pipeline
                    </span>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-4">
                  <Link
                    href="/portfolio"
                    className="group bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 relative inline-flex items-center justify-center overflow-hidden rounded-lg px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:shadow-xl focus:ring-2 focus:ring-offset-2 focus:outline-none"
                  >
                    <span className="relative z-10">See How We Build Products</span>
                    <div className="from-brand-700 to-brand-800 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                  </Link>
                  <Link
                    href="https://candidmoments.io"
                    className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visit Candid Moments →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Other Projects */}
      <div className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              More Client Work
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              Production systems we have built for clients, from AI media products to compliance
              tools for California water agencies.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <Image
                src="/static/images/portfolio/feelsreel.png"
                alt="FeelsReel AI story generator interface showing a personalized children's story"
                width={600}
                height={300}
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  FeelsReel
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Turns a child's name and interests into a personalized storybook video — a complex
                  AI and media pipeline with OpenAI and RunwayAI, shipped as a working product.
                </p>
                <Link
                  href="https://feelsreel.com"
                  className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex items-center font-medium"
                >
                  Visit Website →
                </Link>
              </div>
            </div>
            <div className="group overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <Image
                src="/static/images/portfolio/sgma.webp"
                alt="Sigma Solutions groundwater management app with interactive California map"
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
                  Gives California water agencies one place for groundwater data, interactive
                  mapping, and SGMA compliance reporting instead of scattered spreadsheets.
                </p>
                <Link
                  href="/portfolio"
                  className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex items-center font-medium"
                >
                  See More Client Work →
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

      {/* FAQ Section */}
      <FAQSchema faqs={homepageFaqs} />
      <div className="py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Common Questions
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              The questions most teams ask before starting a custom software project
            </p>
          </div>

          <div className="space-y-5">
            {homepageFaqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800"
              >
                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/faq"
              className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 inline-flex font-medium"
            >
              Read all frequently asked questions →
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
            <span className="relative z-10">Start a Project Conversation</span>
            <div className="from-brand-500 to-brand-600 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
          </Link>
          <p className="mx-auto mt-6 max-w-xl text-sm text-white/80">
            You'll hear back within one business day — no sales deck, just a working conversation
            about your constraints and the most useful first step.
          </p>
        </div>
      </div>
    </>
  )
}
