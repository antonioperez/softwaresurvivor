import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex space-x-6">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
            <SocialIcon kind="github" href={siteMetadata.github} size={6} />
            <SocialIcon kind="linkedin" href={siteMetadata.linkedin} size={6} />
          </div>
          <div className="mb-4 flex flex-col items-center space-y-2 text-center text-sm text-gray-600 dark:text-gray-400">
            <div className="flex items-center space-x-2">
              <span>{siteMetadata.author}</span>
              <span>•</span>
              <span>{`© ${new Date().getFullYear()}`}</span>
              <span>•</span>
              <Link href="/" className="font-semibold text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors duration-300">
                {siteMetadata.title}
              </Link>
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
