export interface CaseStudySection {
  title: string
  body: string
}

export interface CaseStudy {
  slug: string
  title: string
  subtitle: string
  description: string
  image?: string
  externalUrl?: string
  serviceLinks: { title: string; href: string }[]
  problem: string
  constraints: string[]
  role: string
  solution: CaseStudySection[]
  architecture: string[]
  outcome: string
}

const caseStudies: CaseStudy[] = [
  {
    slug: 'candid-moments',
    title: 'Candid Moments',
    subtitle: 'Serverless photo-sharing and moderation for private events',
    description:
      'A private event photo-sharing product built around QR uploads, serverless storage, and automated content moderation before guest photos appear in the gallery.',
    image: '/static/images/portfolio/candid-moments.png',
    externalUrl: 'https://candidmoments.io',
    serviceLinks: [
      { title: 'Custom software development', href: '/custom-software-development' },
      { title: 'Technical architecture review', href: '/technical-architecture-review' },
      { title: 'Software modernization consulting', href: '/software-modernization-consulting' },
    ],
    problem:
      'Event hosts needed a simple way for guests to upload photos without app downloads while keeping private galleries safe before images became visible.',
    constraints: [
      'Guest upload flow had to be fast enough for events where users scan a QR code and move on.',
      'Uploaded media needed to be screened automatically before appearing in the shared gallery.',
      'The architecture needed to avoid a large always-on backend for bursty event traffic.',
      'The product needed a maintainable path for event creation, gallery access, and media storage.',
    ],
    role: 'Designed and built the product workflow and serverless moderation architecture, including the upload flow, storage pipeline, and safety screening model.',
    solution: [
      {
        title: 'QR-first event intake',
        body: 'Guests can join an event gallery from a QR code and upload media without installing an app, which keeps the workflow practical during weddings, parties, and corporate events.',
      },
      {
        title: 'Moderation before publication',
        body: 'User uploads are routed through an automated safety check before being exposed in the private gallery, reducing the burden on event hosts.',
      },
      {
        title: 'Serverless media pipeline',
        body: 'The system uses cloud storage and event-driven processing so gallery activity can spike around an event without requiring a heavy permanent backend footprint.',
      },
    ],
    architecture: [
      'AWS Lambda for event-driven processing',
      'Amazon S3 for media storage',
      'Amazon Rekognition for image safety screening',
      'QR-code based event access',
      'Private gallery workflow for approved uploads',
    ],
    outcome:
      'The result is a production product that turns scattered event photos into one private gallery while reducing manual review risk through automated moderation. Exact customer metrics are not public, so the proof point is the shipped workflow and architecture.',
  },
  {
    slug: 'tlaloc-harvest',
    title: 'Tlaloc Harvest',
    subtitle: 'Community food-waste platform with logistics and sustainability workflows',
    description:
      'A launch-ready product foundation for coordinating surplus food redistribution across residents, businesses, volunteers, and community partners.',
    image: 'https://tlaloc.pages.dev/assets/public-banner-BQdze4gp.webp',
    externalUrl: 'https://tlaloc.pages.dev',
    serviceLinks: [
      { title: 'Custom software development', href: '/custom-software-development' },
      { title: 'Systems integration consulting', href: '/systems-integration-consulting' },
      { title: 'Fresno software development', href: '/fresno-software-development' },
    ],
    problem:
      'The product needed to coordinate surplus food, community participation, logistics, sustainability goals, and partner-facing workflows in one coherent experience.',
    constraints: [
      'The platform had to support multiple participant types rather than a single buyer/seller workflow.',
      'The product needed to communicate social impact without losing operational clarity.',
      'Food redistribution introduces location, timing, coordination, and trust constraints.',
      'The early product needed enough structure to support future growth without overbuilding the first release.',
    ],
    role: 'Built product workflows and launch-ready web application architecture for an early-stage sustainability platform.',
    solution: [
      {
        title: 'Multi-sided workflow model',
        body: 'The product experience accounts for residents, businesses, volunteers, coordinators, and community partners rather than treating the platform as a simple listing board.',
      },
      {
        title: 'Impact-oriented product structure',
        body: 'The site and application language connect sustainability goals with concrete actions such as sharing surplus food, coordinating pickups, and tracking community participation.',
      },
      {
        title: 'Foundation for operational growth',
        body: 'The architecture leaves room for logistics, partner programs, community incentives, and reporting as the model matures.',
      },
    ],
    architecture: [
      'Modern web application front end',
      'Location-aware community workflow concepts',
      'Participant and partner-oriented product flows',
      'Sustainability and impact reporting foundation',
      'Launch-ready marketing and product surface',
    ],
    outcome:
      'The result is a credible early product foundation for a complex community and logistics problem. Public metrics are not available, so the outcome is stated as a shipped launch-ready platform and clearer product model.',
  },
  {
    slug: 'inbox2order',
    title: 'Inbox2Order',
    subtitle: 'Email-to-order automation for operations-heavy businesses',
    description:
      'An AI-assisted workflow that turns unstructured email inquiries into structured order data with validation and review before business systems are updated.',
    image: '/static/images/portfolio/inbox2order.png',
    externalUrl: 'http://inbox2order.com',
    serviceLinks: [
      { title: 'AI workflow automation consulting', href: '/ai-workflow-automation-consulting' },
      { title: 'Systems integration consulting', href: '/systems-integration-consulting' },
      {
        title: 'Shopify-NetSuite integration consulting',
        href: '/shopify-netsuite-integration-consulting',
      },
    ],
    problem:
      'Operations teams receive order requests through email, then spend time interpreting the message, extracting fields, checking product details, and manually entering order data.',
    constraints: [
      'Emails are unstructured and vary by customer, product, quantity, shipping details, and special instructions.',
      'The workflow cannot blindly create orders because missing or incorrect fields affect customers and operations.',
      'The useful output must connect to existing commerce, CRM, ERP, or internal systems.',
      'The automation has to expose confidence, missing information, and review status to a human operator.',
    ],
    role: 'Designed and built the workflow pattern from unstructured email intake to structured order draft, validation, review, and integration-ready output.',
    solution: [
      {
        title: 'Email parsing and extraction',
        body: 'The workflow reads inbound messages and extracts customer details, product references, quantities, shipping context, and requested actions.',
      },
      {
        title: 'Validation before action',
        body: 'Business rules check the extracted payload before it becomes an order, so the AI output is treated as a draft rather than a source of truth.',
      },
      {
        title: 'Reviewable operations flow',
        body: 'A human can inspect the original email, proposed order data, warnings, and missing fields before approving the next system action.',
      },
    ],
    architecture: [
      'Email provider integration',
      'AI extraction and classification layer',
      'Schema validation and business rules',
      'Review workflow for operators',
      'Integration points for e-commerce, ERP, CRM, or custom order systems',
    ],
    outcome:
      'The result is a clear automation pattern for reducing manual order-entry work while keeping humans in control of business-system writes. Public performance metrics are not available, so the case study avoids invented savings claims.',
  },
]

export default caseStudies

export const caseStudyBySlug = Object.fromEntries(caseStudies.map((study) => [study.slug, study]))
