import Link from '@/components/Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-6xl">
              We Build Software That
              <span className="block text-yellow-300">Survives the Test of Time</span>
            </h1>
            <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl">{siteMetadata.description}</p>
            <div className="flex justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
              >
                Get Started
              </Link>
              <Link
                href="/projects"
                className="rounded-lg border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-16 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              From concept to deployment, we handle every aspect of your software project
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-900">
                <svg
                  className="h-6 w-6 text-blue-600 dark:text-blue-400"
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
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Custom Software Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scalable web applications, mobile apps, and enterprise solutions built with modern
                technologies.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-green-100 dark:bg-green-900">
                <svg
                  className="h-6 w-6 text-green-600 dark:text-green-400"
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
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                Technical Leadership
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engineering team management, architecture design, and technical strategy for growing
                companies.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900">
                <svg
                  className="h-6 w-6 text-purple-600 dark:text-purple-400"
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
              <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                System Design & Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scalable system design, microservices architecture, and cloud infrastructure
                planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project - FeelsReel */}
      <div className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              Featured Project: FeelsReel
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Revolutionary AI-powered story book generator that creates personalized children's
              stories and transforms them into engaging videos
            </p>
          </div>

          <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
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
                <div className="mb-6 space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-blue-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      AI Story Generation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Video Creation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-purple-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      OpenAI Integration
                    </span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-orange-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">
                      RunwayAI Video Processing
                    </span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://feelsreel.com/story/bee8aa0a-895d-4d17-af3e-e9a8c98f97e3"
                    className="rounded-lg bg-blue-600 px-6 py-2 text-white transition-colors hover:bg-blue-700"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Live Demo
                  </Link>
                  <Link
                    href="https://feelsreel.com"
                    className="rounded-lg border border-gray-300 px-6 py-2 text-gray-700 transition-colors hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-700"
                  >
                    Visit Website
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
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl dark:text-white">
              More Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Explore our other innovative solutions
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
              <Image
                src="/static/images/projects/candid-moments.png"
                alt="Candid Moments"
                width={600}
                height={300}
                className="h-48 w-full object-cover"
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
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  Visit Website →
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
              <Image
                src="/static/images/projects/sgma.gif"
                alt="Sigma Solutions"
                width={600}
                height={300}
                className="h-48 w-full object-cover"
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
                  className="font-medium text-blue-600 hover:underline dark:text-blue-400"
                >
                  See Demo →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white hover:bg-blue-700"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Build Something Amazing?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl">
            Let's discuss how we can help your company navigate complex technical challenges and
            build scalable solutions.
          </p>
          <Link
            href="/contact"
            className="rounded-lg bg-yellow-400 px-8 py-3 font-semibold text-gray-900 transition-colors hover:bg-yellow-300"
          >
            Start a Conversation
          </Link>
        </div>
      </div>
    </>
  )
}
