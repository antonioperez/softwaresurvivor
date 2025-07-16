import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href }) => (
  <div className="group h-full">
    <div className="flex h-full flex-col overflow-hidden rounded-xl bg-white shadow-lg transition-all duration-300 hover:shadow-xl dark:bg-gray-800">
      {imgSrc &&
        (href ? (
          <Link href={href} aria-label={`Link to ${title}`}>
            <Image
              alt={title}
              src={imgSrc}
              className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              width={544}
              height={306}
            />
          </Link>
        ) : (
          <Image
            alt={title}
            src={imgSrc}
            className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105"
            width={544}
            height={306}
          />
        ))}
      <div className="flex flex-1 flex-col p-6">
        <h2 className="mb-3 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
          {href ? (
            <Link
              href={href}
              aria-label={`Link to ${title}`}
              className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors duration-300"
            >
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-4 flex-1 text-gray-600 dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="inline-flex items-center font-medium text-brand-600 hover:text-brand-700 dark:text-brand-400 dark:hover:text-brand-300 transition-colors duration-300"
            aria-label={`Link to ${title}`}
          >
            Learn more →
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
