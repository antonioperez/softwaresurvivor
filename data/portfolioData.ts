interface PortfolioItem {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const portfolioData: PortfolioItem[] = [
  {
    title: 'Inbox2Order',
    description: `Intelligent email-to-order automation platform that transforms email inquiries into structured orders automatically, eliminating manual data entry and streamlining business operations.`,
    href: 'http://inbox2order.com',
    imgSrc: '/static/images/portfolio/inbox2order.png',
  },
  {
    title: 'Tlaloc Harvest',
    description: `Stealth startup transforming how communities handle food waste with a sustainable, easy-to-use platform for redistributing surplus food.`,
    imgSrc: 'https://tlaloc.pages.dev/assets/public-banner-BQdze4gp.webp',
    href: 'https://tlaloc.pages.dev',
  },
  {
    title: 'Candid Moments',
    description: `A photo-sharing app using AWS Lambda, Rekognition, and S3; scans user photos for safety at private events.`,
    imgSrc: '/static/images/portfolio/candid-moments.png',
    href: 'https://candidmoments.io',
  },
  {
    title: 'FeelsReel',
    description: `Revolutionary AI-powered story book generator that creates personalized children's stories and transforms them into engaging videos using OpenAI (GPT-4) and RunwayAI.`,
    imgSrc: '/static/images/portfolio/feelsreel.png',
    href: 'https://feelsreel.com/story/bee8aa0a-895d-4d17-af3e-e9a8c98f97e3',
  },
  {
    title: 'Schuil Ag Real Estate',
    description: `Schuil Ag Real Estate wanted a way to generate brochures for their properties automatically using WordPress and a custom plugin.`,
    imgSrc: '/static/images/portfolio/schuil.png',
    href: 'https://schuil.com/property/7100-acres-irrigated-farmland-kanosh-utah/',
  },
  {
    title: 'Mid India',
    description: `Non-profit organization website providing child sponsorship and clean water initiatives. Provided WooCommerce support, reporting data solutions, and website improvements.`,
    href: 'https://midindia.com',
    imgSrc: '/static/images/portfolio/midindia.png',
  },
  {
    title: 'Lighthouse Medical Transport',
    imgSrc: '/static/images/portfolio/lighthouse.png',
    description: `Professional medical transportation website providing reliable, safe, and compassionate non-emergency medical transport services.`,
    href: 'http://lighthousecv.com',
  },
  {
    title: 'Sigma Solutions',
    description: `Groundwater Management web app built to simplify SGMA compliance for California water agencies with interactive mapping and data management tools.`,
    imgSrc: '/static/images/portfolio/sgma.gif',
    href: 'https://antonioperez.github.io/sgma/index.html',
  },
]

export default portfolioData
