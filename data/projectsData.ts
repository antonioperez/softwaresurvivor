interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Tlaloc Harvest',
    description: `Stealth startup transforming how communities handle food waste with a sustainable, easy-to-use platform for redistributing surplus food.`,
    imgSrc: 'https://tlaloc.pages.dev/assets/public-banner-BQdze4gp.webp',
    href: 'https://tlaloc.pages.dev',
  },
  {
    title: 'FeelsReel',
    description: `AI based story book generator with feature to video using OpenAI (gpt-4.1-nano) and RunwayAI`,
    imgSrc: '/static/images/projects/feelsreel.png',
    href: 'https://feelsreel.com/story/bee8aa0a-895d-4d17-af3e-e9a8c98f97e3',
  },
  {
    title: 'Candid Moments',
    description: `A photo-sharing app using AWS Lambda, Rekognition, and S3; scans user photos for safety at private events.`,
    imgSrc: '/static/images/projects/candid-moments.png',
    href: 'https://candidmoments.io',
  },
]

export default projectsData
