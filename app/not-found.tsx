import Link from '@/components/Link'

export default function NotFound() {
  return (
    <div className="flex flex-col items-start justify-start md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6">
      <div className="space-x-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-6xl leading-9 font-extrabold tracking-tight text-gray-900 md:border-r-2 md:px-6 md:text-8xl md:leading-14 dark:text-gray-100">
          404
        </h1>
      </div>
      <div className="max-w-md">
        <p className="mb-4 text-xl leading-normal font-bold md:text-2xl">
          Sorry, we couldn't find this page.
        </p>
        <p className="mb-4">
          It may have moved or no longer exists. Here are some good places to go next:
        </p>
        <ul className="mb-8 space-y-2 text-gray-600 dark:text-gray-400">
          <li>
            <Link
              href="/services"
              className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium"
            >
              Services
            </Link>{' '}
            — what we build and how we help
          </li>
          <li>
            <Link
              href="/blog"
              className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium"
            >
              Blog
            </Link>{' '}
            — practical writing on software and AI automation
          </li>
          <li>
            <Link
              href="/contact"
              className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-medium"
            >
              Contact
            </Link>{' '}
            — start a project conversation
          </li>
        </ul>
        <Link
          href="/"
          className="bg-brand-600 hover:bg-brand-700 focus:ring-brand-500 inline rounded-lg border border-transparent px-4 py-2 text-sm leading-5 font-medium text-white shadow-xs transition-colors duration-150 focus:ring-2 focus:ring-offset-2 focus:outline-none"
        >
          Back to homepage
        </Link>
      </div>
    </div>
  )
}
