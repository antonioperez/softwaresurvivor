interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Lighthouse Medical Transport',
    description: `Professional medical transportation website providing reliable, safe, and compassionate non-emergency medical transport services.`,
    href: 'http://lighthousecv.com',
  },
  {
    title: 'FeelsReel',
    description: `Revolutionary AI-powered story book generator that creates personalized children's stories and transforms them into engaging videos using OpenAI (GPT-4) and RunwayAI.`,
    imgSrc: '/static/images/projects/feelsreel.png',
    href: 'https://feelsreel.com/story/bee8aa0a-895d-4d17-af3e-e9a8c98f97e3',
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
    imgSrc: '/static/images/projects/candid-moments.png',
    href: 'https://candidmoments.io',
  },
  {
    title: 'Sigma Solutions',
    description: `Groundwater Management web app built to simplify SGMA compliance for California water agencies with interactive mapping and data management tools.`,
    imgSrc: '/static/images/projects/sgma.gif',
    href: 'https://antonioperez.github.io/sgma/index.html',
  },
]

export default projectsData
