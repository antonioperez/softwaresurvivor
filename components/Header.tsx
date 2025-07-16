import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'
import SearchButton from './SearchButton'
import Image from 'next/image'

const Header = () => {
  let headerClass =
    'flex items-center w-full bg-white/95 backdrop-blur-sm dark:bg-gray-950/95 justify-between py-6 border-b border-gray-200 dark:border-gray-800 relative z-50'
  if (siteMetadata.stickyNav) {
    headerClass += ' sticky top-0'
  }

  return (
    <header className={headerClass}>
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div className="group flex items-center justify-between">
          <div className="mr-3 transition-transform duration-300 group-hover:scale-105">
            <Image src="/static/images/big-logo.png" alt="Logo" width={32} height={32} />
          </div>
          {typeof siteMetadata.headerTitle === 'string' ? (
            <div className="group-hover:text-brand-600 dark:group-hover:text-brand-400 hidden h-6 text-2xl font-bold text-gray-900 transition-colors duration-300 sm:block dark:text-white">
              {siteMetadata.headerTitle}
            </div>
          ) : (
            siteMetadata.headerTitle
          )}
        </div>
      </Link>
      <div className="flex items-center space-x-4 leading-5 sm:-mr-6 sm:space-x-6">
        <div className="no-scrollbar hidden max-w-40 items-center gap-x-4 overflow-x-auto sm:flex md:max-w-72 lg:max-w-96">
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-brand-600 dark:hover:text-brand-400 group relative m-1 font-medium text-gray-700 transition-colors duration-300 dark:text-gray-300"
              >
                {link.title}
                <span className="bg-brand-600 dark:bg-brand-400 absolute -bottom-1 left-0 h-0.5 w-0 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
        </div>
        <SearchButton />
        <ThemeSwitch />
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
