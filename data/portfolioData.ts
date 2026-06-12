interface PortfolioItem {
  title: string
  description: string
  problem: string
  role: string
  proof: string
  href?: string
  imgSrc?: string
}

const portfolioData: PortfolioItem[] = [
  {
    title: 'Inbox2Order',
    description: `Email-to-order automation platform that turns email inquiries into structured orders automatically, eliminating manual data entry for operations teams.`,
    problem:
      'Manual email intake was slowing order operations and creating repeated data-entry work.',
    role: 'Designed and built the automation workflow from unstructured email to structured order data.',
    proof: 'AI workflow automation for an operations-heavy business process.',
    href: 'http://inbox2order.com',
    imgSrc: '/static/images/portfolio/inbox2order.png',
  },
  {
    title: 'Tlaloc Harvest',
    description: `Stealth startup transforming how communities handle food waste with a sustainable, easy-to-use platform for redistributing surplus food.`,
    problem:
      'A new product needed a reliable software foundation for coordinating surplus food redistribution.',
    role: 'Built product workflows and launch-ready web application architecture.',
    proof: 'Early-stage product build with community, logistics, and sustainability constraints.',
    imgSrc: 'https://tlaloc.pages.dev/assets/public-banner-BQdze4gp.webp',
    href: 'https://tlaloc.pages.dev',
  },
  {
    title: 'Candid Moments',
    description: `A photo-sharing app using AWS Lambda, Rekognition, and S3; scans user photos for safety at private events.`,
    problem:
      'Private event galleries needed user-uploaded photos screened before guests could view them.',
    role: 'Built a serverless moderation pipeline with AWS Lambda, Rekognition, and S3.',
    proof: 'Reduced manual review risk with automated safety checks before publishing.',
    imgSrc: '/static/images/portfolio/candid-moments.png',
    href: 'https://candidmoments.io',
  },
  {
    title: 'FeelsReel',
    description: `AI story book generator that creates personalized children's stories and turns them into videos using OpenAI (GPT-4) and RunwayAI.`,
    problem:
      'A media-heavy AI product needed to coordinate prompt, story, and video generation workflows.',
    role: 'Built the product workflow across OpenAI content generation and third-party video processing.',
    proof: 'Working AI product with multiple generation dependencies and user-facing output.',
    imgSrc: '/static/images/portfolio/feelsreel.png',
    href: 'https://feelsreel.com/story/bee8aa0a-895d-4d17-af3e-e9a8c98f97e3',
  },
  {
    title: 'Schuil Ag Real Estate',
    description: `Schuil Ag Real Estate wanted a way to generate brochures for their properties automatically using WordPress and a custom plugin.`,
    problem:
      'Property brochure creation was a repeated manual workflow tied to changing listing data.',
    role: 'Built a custom WordPress plugin to generate brochures from structured property content.',
    proof:
      'Operational automation for a real estate team with recurring document-production needs.',
    imgSrc: '/static/images/portfolio/schuil.png',
    href: 'https://schuil.com/property/7100-acres-irrigated-farmland-kanosh-utah/',
  },
  {
    title: 'Mid India',
    description: `Non-profit organization website providing child sponsorship and clean water initiatives. Provided WooCommerce support, reporting data solutions, and website improvements.`,
    problem:
      'The organization needed clearer reporting, e-commerce support, and ongoing website improvements.',
    role: 'Supported WooCommerce workflows, reporting data needs, and production website changes.',
    proof: 'Practical software support for donor, sponsorship, and operational workflows.',
    href: 'https://midindia.com',
    imgSrc: '/static/images/portfolio/midindia.png',
  },
  {
    title: 'Lighthouse Medical Transport',
    imgSrc: '/static/images/portfolio/lighthouse.png',
    description: `Professional medical transportation website providing reliable, safe, and compassionate non-emergency medical transport services.`,
    problem:
      'A service business needed a clearer digital presence for trust-sensitive customer acquisition.',
    role: 'Built a professional web presence aligned with local service credibility and lead generation.',
    proof: 'Trust-focused website for a healthcare-adjacent transportation service.',
    href: 'http://lighthousecv.com',
  },
  {
    title: 'Sigma Solutions',
    description: `Groundwater Management web app built to simplify SGMA compliance for California water agencies with interactive mapping and data management tools.`,
    problem:
      'California water agencies needed groundwater data, maps, and compliance workflows in one place.',
    role: 'Built interactive mapping and data-management tooling for SGMA-related workflows.',
    proof: 'Compliance-oriented application for public-agency and environmental data complexity.',
    imgSrc: '/static/images/portfolio/sgma.webp',
    href: 'https://antonioperez.github.io/sgma/index.html',
  },
]

export default portfolioData
