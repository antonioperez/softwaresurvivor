import portfolioData from '@/data/portfolioData'
import Card from '@/components/Card'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'Portfolio' })

export default function Portfolio() {
  return (
    <>
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 dark:text-gray-100">
            Our Portfolio
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            Discover how we help clients succeed with innovative software solutions and impactful
            projects.
          </p>
        </div>
        <div className="container py-12">
          <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
            {portfolioData.map((d) => (
              <Card
                key={d.title}
                title={d.title}
                description={d.description}
                imgSrc={d.imgSrc}
                href={d.href}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
