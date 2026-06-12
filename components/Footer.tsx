import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'
import NewsletterForm from './NewsletterForm'

const footerLinks = [
  { href: '/services', title: 'Services' },
  { href: '/portfolio', title: 'Portfolio' },
  { href: '/blog', title: 'Blog' },
  { href: '/faq', title: 'FAQ' },
  { href: '/about', title: 'About' },
  { href: '/contact', title: 'Contact' },
  { href: '/fresno-software-development', title: 'Fresno & Central California' },
]

export default function Footer() {
  return (
    <footer>
      {/* Newsletter Subscription */}
      <div className="warm-gradient border-t border-gray-200 dark:border-gray-700 dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <NewsletterForm />
        </div>
      </div>

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <nav aria-label="Footer" className="mb-6">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-brand-600 dark:hover:text-brand-400 text-gray-600 transition-colors duration-300 dark:text-gray-400"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="mb-6 flex space-x-6">
            <SocialIcon kind="mail" href={'/contact'} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          </div>
          <div className="mb-4 flex flex-col items-center space-y-2 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span>{`© ${new Date().getFullYear()}`}</span>
              <span>•</span>
              <Link
                href="/"
                className="text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 font-semibold transition-colors duration-300"
              >
                {siteMetadata.headerTitle}
              </Link>
              <span>•</span>
              <span>Fresno, CA</span>
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-500">
              Building software that survives the test of time
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
