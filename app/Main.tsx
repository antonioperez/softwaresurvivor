import Link from '@/components/Link'
import Image from 'next/image'
import siteMetadata from '@/data/siteMetadata'

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
                We Build Software That
                <span className="block bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">
                Scales with Confidence.
                </span>
              </h1>
              <p className="mx-auto mb-8 max-w-3xl text-xl md:text-2xl text-gray-100">
                Scalable solutions that evolve with your business. From concept to deployment, we craft software that grows with you.
              </p>
            </div>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold text-brand-600 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
              >
                <span className="relative z-10">Start Your Project</span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
              <Link
                href="/projects"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border-2 border-white px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-white hover:text-brand-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
              >
                <span className="relative z-10">View Our Work</span>
                <div className="absolute inset-0 bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gray-50 py-20 dark:bg-gray-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              Our Services
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
              From concept to deployment, we handle every aspect of your software project with expertise and precision.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-brand-100 dark:bg-brand-900">
                <svg className="h-8 w-8 text-brand-600 dark:text-brand-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Custom Software Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scalable web applications, mobile apps, and enterprise solutions built with modern technologies and best practices.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-accent-100 dark:bg-accent-900">
                <svg className="h-8 w-8 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                Technical Leadership
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Engineering team management, architecture design, and technical strategy for growing companies.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-xl bg-white p-8 shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-success-100 dark:bg-success-900">
                <svg className="h-8 w-8 text-success-600 dark:text-success-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                System Design & Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Scalable system design, microservices architecture, and cloud infrastructure planning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Project - FeelsReel */}
      <div className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl dark:text-white">
              Featured Project: FeelsReel
            </h2>
            <p className="mx-auto max-w-3xl text-lg text-gray-600 dark:text-gray-400">
              Revolutionary AI-powered story book generator that creates personalized children's stories and transforms them into engaging videos
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
                  An innovative AI-powered platform that generates personalized children's stories and transforms them into engaging videos using OpenAI (GPT-4) and RunwayAI. This project showcases cutting-edge AI integration and creative content generation.
                </p>
                <div className="mb-8 space-y-3">
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-brand-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">AI Story Generation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-accent-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">Video Creation</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-success-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">OpenAI Integration</span>
                  </div>
                  <div className="flex items-center">
                    <div className="mr-3 h-2 w-2 rounded-full bg-warning-500"></div>
                    <span className="text-sm text-gray-600 dark:text-gray-400">RunwayAI Video Processing</span>
                  </div>
                </div>
                <div className="flex gap-4">
                  <Link
                    href="https://feelsreel.com/story/bee8aa0a-895d-4d17-af3e-e9a8c98f97e3"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-brand-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-brand-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span className="relative z-10">View Live Demo</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-800 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
                  </Link>
                  <Link
                    href="https://feelsreel.com"
                    className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg border border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-300 hover:bg-gray-50 hover:shadow-lg dark:text-gray-300 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
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
      <div className="bg-gray-50 py-20 dark:bg-gray-900">
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
                  className="inline-flex items-center font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
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
                className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="p-6">
                <h3 className="mb-2 text-xl font-semibold text-gray-900 dark:text-white">
                  Sigma Solutions
                </h3>
                <p className="mb-4 text-gray-600 dark:text-gray-400">
                  Groundwater management web app for California water agencies with interactive mapping and SGMA compliance tools.
                </p>
                <Link
                  href="https://antonioperez.github.io/sgma/index.html#/login"
                  className="inline-flex items-center font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300"
                >
                  See Demo →
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/projects"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-brand-600 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-brand-700 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
            >
              <span className="relative z-10">View All Projects</span>
              <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-brand-800 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
            </Link>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">Ready to Build Something Amazing?</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gray-100">
            Let's discuss how we can help your company navigate complex technical challenges and build scalable solutions.
          </p>
          <Link
            href="/contact"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-white px-8 py-4 font-semibold text-brand-600 shadow-lg transition-all duration-300 hover:bg-gray-50 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-600"
          >
            <span className="relative z-10">Start a Conversation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-brand-500 to-brand-600 opacity-0 transition-opacity duration-300 group-hover:opacity-10"></div>
          </Link>
        </div>
      </div>
    </>
  )
}
