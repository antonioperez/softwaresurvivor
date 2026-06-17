export interface ServiceHubLink {
  title: string
  description: string
  href: string
}

export interface ServiceHubStep {
  title: string
  description: string
}

export interface ServiceHubFaq {
  question: string
  answer: string
}

export interface ServiceHub {
  path: string
  eyebrow: string
  pageTitle: string
  h1: string
  description: string
  keywords: string[]
  serviceType: string
  summaryCards: ServiceHubStep[]
  fitTitle: string
  fitIntro: string
  fitSignals: string[]
  processTitle: string
  processSteps: ServiceHubStep[]
  controlsTitle: string
  controlsIntro: string
  controls: string[]
  relatedTitle: string
  relatedLinks: ServiceHubLink[]
  faqTitle: string
  faqs: ServiceHubFaq[]
  ctaTitle: string
  ctaDescription: string
}

export const aiWorkflowAutomationHub: ServiceHub = {
  path: '/ai-workflow-automation',
  eyebrow: 'AI workflow automation',
  pageTitle: 'AI Workflow Automation Consulting',
  h1: 'AI Automation for Business Workflows That Need Control',
  description:
    'AI workflow automation consulting for established businesses that need safer document, email, review, routing, and data-entry automation.',
  keywords: [
    'AI workflow automation consulting',
    'AI automation consultant',
    'business process automation with AI',
    'AI document processing',
    'email workflow automation',
    'LLM business automation',
  ],
  serviceType: 'AI Workflow Automation',
  summaryCards: [
    {
      title: 'Best first use case',
      description: 'A narrow repeated workflow with clear inputs and review.',
    },
    {
      title: 'Typical first outcome',
      description: 'A pilot that drafts, extracts, routes, or recommends.',
    },
    {
      title: 'Safety principle',
      description: 'Human approval before automated writes to business systems.',
    },
  ],
  fitTitle: 'When AI Automation Is a Good Fit',
  fitIntro:
    'AI automation works best when it is attached to a real operating constraint. It should remove repeated judgment-light work, surface evidence faster, or prepare cleaner drafts for human review.',
  fitSignals: [
    'A team repeats the same review, routing, or data-entry task every week.',
    'The workflow has clear source material and a person who can judge whether the output is right.',
    'The automation can start with a review step before it is trusted to write back into business systems.',
    'The business value is measurable through time saved, faster response, fewer errors, or better throughput.',
  ],
  processTitle: 'A Practical Pilot Structure',
  processSteps: [
    {
      title: 'Map the workflow',
      description:
        'Document inputs, decision points, systems touched, failure modes, and the human review step before choosing a model or tool.',
    },
    {
      title: 'Build a narrow first pass',
      description:
        'Start with one bounded workflow such as email intake, document triage, quote preparation, order review, or internal knowledge lookup.',
    },
    {
      title: 'Add controls before scale',
      description:
        'Use permissions, audit logs, confidence thresholds, approval queues, and rollback paths before allowing automated writes.',
    },
  ],
  controlsTitle: 'Controls That Matter',
  controlsIntro:
    'The safest AI systems are boring around permissions, evidence, and rollback. That is where most production value comes from.',
  controls: [
    'Keep the model separate from system permissions.',
    'Use read-only access until the workflow has proven accuracy.',
    'Store evidence with each generated recommendation or draft.',
    'Log failures and ambiguous cases as product feedback, not one-off exceptions.',
  ],
  relatedTitle: 'Related Work and Writing',
  relatedLinks: [
    {
      title: 'Inbox2Order',
      description:
        'Email-to-order automation that turns unstructured email inquiries into structured operational data.',
      href: '/blog/from-inbox-to-order-email-to-order-automation',
    },
    {
      title: 'Building Inbox2Order',
      description:
        'A project writeup covering parsing, validation, order creation, and automated communication.',
      href: '/blog/building-inbox2order-email-to-order-automation',
    },
    {
      title: 'Safe AI Agents',
      description:
        'A practical architecture for AI agents that read business data while staying inside controlled permission boundaries.',
      href: '/blog/build-safe-ai-agent-around-business-data',
    },
  ],
  faqTitle: 'Common AI Automation Questions',
  faqs: [
    {
      question: 'What is AI workflow automation?',
      answer:
        'AI workflow automation uses language models, rules, integrations, and human review to reduce repeated document, email, routing, and data-entry work. The best first projects automate a narrow workflow where a human can quickly verify the output.',
    },
    {
      question: 'Where should a business start with AI automation?',
      answer:
        'Start with a workflow that is repeated often, has clear inputs, and does not require the AI system to make irreversible decisions. Good first candidates include inbox triage, document extraction, draft responses, order intake, and internal lookup tools.',
    },
    {
      question: 'How do you make AI automation safer?',
      answer:
        'Separate model reasoning from system permissions, keep early pilots read-only, require approval for writes, store evidence with each output, and monitor ambiguous cases. The system should make review easier before it is allowed to act directly.',
    },
    {
      question: 'How long does an AI automation pilot take?',
      answer:
        'A focused pilot can often be scoped around a few weeks of work after the workflow is understood. More complex automations that touch ERPs, CRMs, payment systems, or customer-facing actions need more discovery and controls.',
    },
  ],
  ctaTitle: 'Start With the Workflow',
  ctaDescription:
    'Share the repeated task, the source data, the systems involved, and what a correct result looks like. We will help decide whether an AI automation pilot is the right next step.',
}

export const shopifyNetSuiteIntegrationHub: ServiceHub = {
  path: '/shopify-netsuite-integration',
  eyebrow: 'Shopify and NetSuite integration',
  pageTitle: 'Shopify NetSuite Integration Consulting',
  h1: 'Shopify-NetSuite Integration When Connectors Stop Being Enough',
  description:
    'Shopify NetSuite integration consulting for e-commerce teams that need connector cleanup, custom middleware, SuiteQL reporting, and operational recovery workflows.',
  keywords: [
    'Shopify NetSuite integration consultant',
    'Shopify NetSuite middleware',
    'NetSuite SuiteQL reporting',
    'Shopify ERP integration',
    'ecommerce systems integration',
    'NetSuite integration consulting',
  ],
  serviceType: 'Systems Integration',
  summaryCards: [
    {
      title: 'Best fit',
      description: 'A live or planned connector with business-specific edge cases.',
    },
    {
      title: 'Core work',
      description: 'Middleware, reports, exception handling, and recovery tooling.',
    },
    {
      title: 'Proof area',
      description: 'SuiteQL, fulfillment, inventory, order, and package visibility.',
    },
  ],
  fitTitle: 'Connector Failure Signals',
  fitIntro:
    'Off-the-shelf connectors are useful for standard flows. Problems show up when the real business process has exceptions the connector cannot express clearly.',
  fitSignals: [
    'Item, SKU, bundle, discount, tax, or location rules do not fit the connector defaults.',
    'Fulfillment, cancellation, refund, and payment states need explicit recovery logic.',
    'Operations needs exception queues instead of silent sync failures.',
    'Finance needs reconciliation reporting that connects Shopify orders to NetSuite records.',
  ],
  processTitle: 'What Production Integrations Need',
  processSteps: [
    {
      title: 'Business-rule mapping',
      description:
        'Document the rules for items, customers, taxes, payments, refunds, fulfillments, locations, and exception handling before writing middleware.',
    },
    {
      title: 'Recoverable sync design',
      description:
        'Use idempotent jobs, audit records, retries, replay tools, and manual exception queues so failures can be corrected without data loss.',
    },
    {
      title: 'SuiteQL visibility',
      description:
        'Create reports that show pending orders, fulfillment gaps, inventory availability, package tracking, and reconciliation issues.',
    },
  ],
  controlsTitle: 'Common Integration Work',
  controlsIntro:
    'The practical work is usually a mix of connector configuration, custom middleware, reporting, and support tools.',
  controls: [
    'Order, customer, item, and fulfillment mapping.',
    'Refund, cancellation, payment, and tax reconciliation.',
    'Inventory, package tracking, and pending fulfillment reporting.',
    'Exception queues, replay tools, and audit trails for operations teams.',
  ],
  relatedTitle: 'Related Integration Guides',
  relatedLinks: [
    {
      title: 'When Shopify-NetSuite Connectors Are Not Enough',
      description:
        'How to identify when a connector needs custom middleware, recovery tooling, SuiteQL reports, or workflow-specific business logic.',
      href: '/blog/when-shopify-netsuite-connectors-are-not-enough',
    },
    {
      title: 'What Breaks After the Connector Goes Live',
      description:
        'A practical guide to item mapping, fulfillment state, refunds, taxes, payment reconciliation, and operational exceptions.',
      href: '/blog/shopify-to-netsuite-integration-what-breaks-after-connector-goes-live',
    },
    {
      title: 'NetSuite SuiteQL Examples for E-commerce Integrations',
      description:
        'SuiteQL examples for sales orders, fulfillment tracking, pending items, inventory, and e-commerce integration workflows.',
      href: '/blog/netsuite-suiteql-examples-ecommerce-integrations',
    },
  ],
  faqTitle: 'Common Shopify-NetSuite Questions',
  faqs: [
    {
      question: 'When is a Shopify-NetSuite connector not enough?',
      answer:
        'A connector is not enough when the business rules around items, fulfillment, refunds, payments, taxes, inventory, or exceptions do not fit the connector defaults. That is when custom middleware, reports, and recovery workflows become important.',
    },
    {
      question: 'What does custom Shopify-NetSuite middleware do?',
      answer:
        'Custom middleware translates business-specific order, customer, fulfillment, inventory, and payment events between Shopify and NetSuite. It also records sync state, handles retries, and gives operators a way to recover from exceptions.',
    },
    {
      question: 'Why does SuiteQL matter for e-commerce integrations?',
      answer:
        'SuiteQL gives operations and finance teams direct visibility into NetSuite records. It can answer questions about pending fulfillment, package tracking, inventory availability, sales order lines, and reconciliation gaps that connector dashboards may not expose.',
    },
    {
      question: 'Can an existing connector be kept?',
      answer:
        'Often, yes. The practical answer may be to keep the connector for standard flows and add middleware or reports around the edge cases. The goal is to replace only the parts that create risk or repeated manual work.',
    },
  ],
  ctaTitle: 'Bring the Failing Flow',
  ctaDescription:
    'Share the connector, order flow, NetSuite records, failure examples, and manual recovery steps. We will help identify whether the right fix is configuration, reporting, middleware, or a targeted replacement.',
}

export const customSoftwareDevelopmentHub: ServiceHub = {
  path: '/custom-software-development',
  eyebrow: 'Custom software development',
  pageTitle: 'Custom Software Development Consulting',
  h1: 'Custom Software for Business-Critical Workflows',
  description:
    'Custom software development for businesses that need maintainable internal platforms, customer portals, SaaS products, and workflow tools tied to real operations.',
  keywords: [
    'custom software development consultant',
    'business software development',
    'custom web application development',
    'internal software platform',
    'SaaS product development consultant',
  ],
  serviceType: 'Custom Software Development',
  summaryCards: [
    {
      title: 'Best fit',
      description: 'A workflow, product, or operation where off-the-shelf software no longer fits.',
    },
    {
      title: 'Core work',
      description: 'Requirements, architecture, implementation, integration, testing, and launch.',
    },
    {
      title: 'First milestone',
      description: 'A scoped release that proves value before the system grows.',
    },
  ],
  fitTitle: 'When Custom Software Makes Sense',
  fitIntro:
    'Custom software is justified when the workflow is specific, valuable, and hard to force into generic tools without creating manual work.',
  fitSignals: [
    'The workflow directly affects revenue, operations, compliance, or customer experience.',
    'Existing tools require spreadsheets, duplicate entry, or informal workarounds to keep running.',
    'The team needs ownership over data, process, permissions, and integration behavior.',
    'A smaller first release can prove the direction without committing to a risky rebuild.',
  ],
  processTitle: 'How a Responsible Build Starts',
  processSteps: [
    {
      title: 'Define the constraint',
      description:
        'Start with the business problem, current workflow, system boundaries, budget, timeline, and the smallest useful outcome.',
    },
    {
      title: 'Shape the architecture',
      description:
        'Choose the simplest architecture that supports the workflow, integration points, permissions, observability, and maintainable delivery.',
    },
    {
      title: 'Ship in phases',
      description:
        'Release a useful first version, measure where it helps, then expand around the proven workflow instead of guessing at the full system.',
    },
  ],
  controlsTitle: 'What Keeps a Custom Build Maintainable',
  controlsIntro:
    'The long-term value comes from clarity around ownership, system boundaries, and production behavior.',
  controls: [
    'Clear data model and API boundaries.',
    'Automated checks around the most important workflows.',
    'Observability for background jobs, integrations, and failed states.',
    'Documentation for handoffs, support, and future development.',
  ],
  relatedTitle: 'Related Custom Software Writing',
  relatedLinks: [
    {
      title: 'A Practical Buy vs. Build Guide for Fresno Businesses',
      description:
        'How to decide when to buy software, customize an existing platform, or build a custom system.',
      href: '/blog/buy-vs-build-guide-fresno-businesses',
    },
    {
      title: 'Building Scalable and Reliable Systems',
      description:
        'An architecture guide for systems that need to survive real traffic and operational complexity.',
      href: '/blog/building-scalable-reliable-systems-enterprise-architecture-guide',
    },
    {
      title: 'Selected Client Systems',
      description: 'Examples of production software and business workflows built for real clients.',
      href: '/portfolio',
    },
  ],
  faqTitle: 'Common Custom Software Questions',
  faqs: [
    {
      question: 'How much does custom software development cost?',
      answer:
        'Most serious custom software engagements start in the five-figure range. A smaller architecture review or discovery engagement can come first when the build path is not yet clear.',
    },
    {
      question: 'How long does a custom software project take?',
      answer:
        'A focused first release may take 4-8 weeks. More complex platforms, integrations, or modernization efforts can take 3-6 months or longer depending on risk and scope.',
    },
    {
      question: 'Should we buy software or build it?',
      answer:
        'Buy when the process is standard. Customize when an existing platform is close. Build when the workflow is part of how the business creates value or when control over the process matters.',
    },
    {
      question: 'Can custom software replace spreadsheets?',
      answer:
        'Yes, when the spreadsheet is acting as a workflow system, reporting layer, or source of truth. The right first step is to map what decisions the spreadsheet supports before rebuilding it.',
    },
  ],
  ctaTitle: 'Bring the Workflow, Not a Feature List',
  ctaDescription:
    'Share the users, current tools, manual steps, constraints, and business outcome. We will help shape the smallest responsible custom software path.',
}

export const systemsIntegrationHub: ServiceHub = {
  path: '/systems-integration',
  eyebrow: 'Systems integration',
  pageTitle: 'Systems Integration Consulting',
  h1: 'Systems Integration for Teams Tired of Copy-Paste Operations',
  description:
    'Systems integration consulting for ERPs, CRMs, e-commerce platforms, internal tools, APIs, and operational workflows that need reliable data movement.',
  keywords: [
    'systems integration consultant',
    'ERP integration consulting',
    'API integration services',
    'business systems integration',
    'workflow integration consultant',
  ],
  serviceType: 'Systems Integration',
  summaryCards: [
    {
      title: 'Best fit',
      description: 'Disconnected systems that create manual handoffs, duplicate entry, or delays.',
    },
    {
      title: 'Core work',
      description: 'APIs, webhooks, queues, retries, mapping, reporting, and recovery.',
    },
    {
      title: 'Success signal',
      description: 'The team trusts the flow and can recover from exceptions.',
    },
  ],
  fitTitle: 'When Integration Work Creates Leverage',
  fitIntro:
    'Integration work is valuable when the same data must move across tools and the current process depends on people manually translating system state.',
  fitSignals: [
    'Teams copy data between Shopify, NetSuite, CRMs, spreadsheets, or internal systems.',
    'Support or operations cannot tell which system has the current truth.',
    'Failed syncs require engineering intervention or manual spreadsheet cleanup.',
    'Leadership needs reporting that joins data across systems.',
  ],
  processTitle: 'A Safer Integration Path',
  processSteps: [
    {
      title: 'Map source of truth',
      description:
        'Decide which system owns each record, field, status, and lifecycle event before moving data automatically.',
    },
    {
      title: 'Design for failure',
      description:
        'Add idempotency, retries, audit logs, exception queues, and manual recovery paths from the start.',
    },
    {
      title: 'Expose operational visibility',
      description:
        'Give teams dashboards, reports, or exports that show what moved, what failed, and what needs action.',
    },
  ],
  controlsTitle: 'Integration Controls',
  controlsIntro:
    'Good integrations are less about API calls and more about reliable operational behavior.',
  controls: [
    'Stable identifiers across systems.',
    'Documented mapping and status contracts.',
    'Safe retries and replay behavior.',
    'Reports that show missing, stuck, or inconsistent records.',
  ],
  relatedTitle: 'Related Integration Writing',
  relatedLinks: [
    {
      title: 'Shopify-NetSuite Integration Consulting',
      description:
        'A focused service hub for connector cleanup, custom middleware, SuiteQL reporting, and recovery tooling.',
      href: '/shopify-netsuite-integration',
    },
    {
      title: 'API Monitoring for Revenue-Critical Order Flows',
      description:
        'How to monitor order APIs, fulfillment integrations, payment flows, and background jobs.',
      href: '/blog/api-monitoring-revenue-critical-order-flows',
    },
    {
      title: 'From Inbox to Order',
      description:
        'How email-to-order automation turns messy inbox data into reviewed order drafts.',
      href: '/blog/from-inbox-to-order-email-to-order-automation',
    },
  ],
  faqTitle: 'Common Systems Integration Questions',
  faqs: [
    {
      question: 'What systems can be integrated?',
      answer:
        'Common targets include ERPs, CRMs, e-commerce platforms, payment systems, warehouse tools, spreadsheets, internal databases, and third-party APIs.',
    },
    {
      question: 'Do integrations need a full custom app?',
      answer:
        'Not always. Some integration work is a small service, scheduled job, report, webhook handler, or admin tool around an existing platform.',
    },
    {
      question: 'What makes an integration production-ready?',
      answer:
        'A production-ready integration has clear ownership, idempotent behavior, retries, audit logs, operational visibility, and a way to recover from failures.',
    },
    {
      question: 'Can an existing connector be improved?',
      answer:
        'Often, yes. A connector can handle standard flows while custom code handles exceptions, reporting, recovery, or business-specific transformation.',
    },
  ],
  ctaTitle: 'Start With the Broken Handoff',
  ctaDescription:
    'Share the systems, the manual steps between them, the failure examples, and who feels the pain. We will help identify the smallest useful integration layer.',
}

export const softwareModernizationHub: ServiceHub = {
  path: '/software-modernization',
  eyebrow: 'Software modernization',
  pageTitle: 'Software Modernization Consulting',
  h1: 'Modernize Fragile Software Without Betting the Business on a Rewrite',
  description:
    'Software modernization consulting for legacy systems, fragile applications, risky codebases, and teams that need an incremental path to safer architecture.',
  keywords: [
    'software modernization consultant',
    'legacy software modernization',
    'application modernization consulting',
    'software rescue consultant',
    'legacy system migration',
  ],
  serviceType: 'Software Modernization',
  summaryCards: [
    {
      title: 'Best fit',
      description:
        'A system that still matters but is slow, fragile, expensive, or hard to change.',
    },
    {
      title: 'Core work',
      description: 'Assessment, stabilization, migration planning, refactoring, and replacement.',
    },
    {
      title: 'Preferred path',
      description: 'Incremental modernization over a risky big-bang rewrite.',
    },
  ],
  fitTitle: 'When Modernization Becomes Urgent',
  fitIntro:
    'Modernization is usually driven by business risk: the system is valuable enough to keep, but fragile enough that change has become expensive.',
  fitSignals: [
    'Small changes require too much regression testing or tribal knowledge.',
    'A few people are the only ones who understand the system.',
    'Integrations, deployments, or dependencies are blocking business goals.',
    'The business wants AI, automation, analytics, or product changes that the current architecture cannot support.',
  ],
  processTitle: 'A Practical Modernization Sequence',
  processSteps: [
    {
      title: 'Stabilize first',
      description:
        'Add visibility, backup plans, test coverage, and operational safeguards around the parts most likely to fail.',
    },
    {
      title: 'Map replacement boundaries',
      description:
        'Identify seams where a module, workflow, API, or data flow can be improved without replacing the whole system.',
    },
    {
      title: 'Migrate by value',
      description:
        'Modernize the parts tied to business outcomes first, then retire risky legacy paths as replacement workflows prove themselves.',
    },
  ],
  controlsTitle: 'Modernization Guardrails',
  controlsIntro:
    'The point is to reduce risk while the business keeps running, not to create a prettier version of the same fragility.',
  controls: [
    'Current-state assessment before technology decisions.',
    'Rollback plans for risky changes.',
    'Tests around revenue, fulfillment, reporting, and user-critical paths.',
    'Architecture decisions tied to business constraints, not fashion.',
  ],
  relatedTitle: 'Related Modernization Writing',
  relatedLinks: [
    {
      title: 'Legacy Software Modernization in the AI Era',
      description:
        'How AI changes the economics of legacy modernization while architecture and data ownership still matter.',
      href: '/blog/legacy-software-modernization-ai-era',
    },
    {
      title: 'From Legacy Systems to Modern Architecture',
      description:
        'A technical migration guide for moving from fragile legacy systems to modern architecture.',
      href: '/blog/from-legacy-systems-to-modern-architecture-technical-migration-guide',
    },
    {
      title: 'Production Checklist for AI-Assisted Software',
      description: 'A readiness checklist for software built or modified with AI assistance.',
      href: '/blog/production-checklist-ai-assisted-software',
    },
  ],
  faqTitle: 'Common Modernization Questions',
  faqs: [
    {
      question: 'Is modernization the same as a rewrite?',
      answer:
        'No. Modernization often means stabilizing, refactoring, extracting, or replacing one part at a time. A full rewrite is only one option, and often the riskiest one.',
    },
    {
      question: 'How do you modernize software while the business keeps running?',
      answer:
        'Start by stabilizing the current system, adding visibility around failure points, and replacing bounded workflows behind clear interfaces.',
    },
    {
      question: 'When should a legacy system be replaced?',
      answer:
        'Replacement makes sense when maintenance risk, staffing risk, integration limits, or business opportunity cost exceed the cost and risk of incremental migration.',
    },
    {
      question: 'Can AI help modernize legacy software?',
      answer:
        'AI can help inspect, document, test, and refactor parts of a legacy system, but it does not remove the need for architecture judgment, data ownership, and safe rollout planning.',
    },
  ],
  ctaTitle: 'Start With the Risk',
  ctaDescription:
    'Share the system, the workflows it supports, recent failures, deployment pain, and what the business needs next. We will help identify the safest modernization path.',
}

export const fractionalCtoHub: ServiceHub = {
  path: '/fractional-cto',
  eyebrow: 'Fractional CTO',
  pageTitle: 'Fractional CTO and Technical Leadership',
  h1: 'Fractional CTO Help for Founders and Operators Who Need Senior Technical Judgment',
  description:
    'Fractional CTO and technical leadership for growing businesses that need architecture decisions, vendor review, delivery planning, hiring support, or technology strategy.',
  keywords: [
    'fractional CTO consultant',
    'technical leadership consulting',
    'software architecture review',
    'technology strategy consultant',
    'engineering leadership consultant',
  ],
  serviceType: 'Technical Leadership',
  summaryCards: [
    {
      title: 'Best fit',
      description: 'A business with technical decisions but no full-time senior technical leader.',
    },
    {
      title: 'Core work',
      description: 'Architecture, roadmap, vendor review, hiring guidance, and delivery oversight.',
    },
    {
      title: 'First outcome',
      description: 'Clearer technical direction before more money or hiring is committed.',
    },
  ],
  fitTitle: 'When a Fractional CTO Helps',
  fitIntro:
    'The role is most useful when technical uncertainty is slowing a business decision, project, or team.',
  fitSignals: [
    'A founder or operator needs help choosing what to build, buy, fix, or stop.',
    'A vendor proposal, codebase, or architecture decision needs independent review.',
    'The team needs senior delivery judgment but not a full-time executive hire yet.',
    'Hiring plans depend on clarifying the technical direction first.',
  ],
  processTitle: 'Common Engagement Shape',
  processSteps: [
    {
      title: 'Decision review',
      description:
        'Clarify the business goal, current system, constraints, and decision that needs technical judgment.',
    },
    {
      title: 'Technical assessment',
      description:
        'Review architecture, codebase, vendors, roadmap, risks, and team capacity enough to recommend a responsible path.',
    },
    {
      title: 'Execution support',
      description:
        'Help translate the decision into scope, milestones, hiring guidance, implementation standards, or delivery oversight.',
    },
  ],
  controlsTitle: 'What Good Technical Leadership Produces',
  controlsIntro:
    'The useful output is not a title. It is better decisions, clearer tradeoffs, and fewer expensive technical surprises.',
  controls: [
    'Architecture choices tied to business constraints.',
    'Vendor and platform decisions with clear tradeoffs.',
    'Delivery plans that expose risk early.',
    'Hiring and team guidance based on the work that actually needs to be done.',
  ],
  relatedTitle: 'Related Leadership Writing',
  relatedLinks: [
    {
      title: 'What a Fractional CTO Actually Does',
      description:
        'A practical explanation of fractional CTO work and when it makes sense for a growing business.',
      href: '/blog/fractional-cto-growing-business',
    },
    {
      title: 'Management Leverage for Software Leaders',
      description:
        'How software leaders can improve decisions, remove bottlenecks, and raise team output.',
      href: '/blog/management-leverage-software-leaders-andy-grove',
    },
    {
      title: 'Fresno Tech Consulting',
      description:
        'Local technical consulting for architecture reviews, AI strategy, and buy-vs-build guidance.',
      href: '/fresno-tech-consulting',
    },
  ],
  faqTitle: 'Common Fractional CTO Questions',
  faqs: [
    {
      question: 'What does a fractional CTO do?',
      answer:
        'A fractional CTO helps with technical strategy, architecture decisions, vendor review, delivery planning, hiring support, risk reduction, and technical leadership without requiring a full-time executive hire.',
    },
    {
      question: 'When should a business hire a fractional CTO?',
      answer:
        'It makes sense when technical decisions are expensive, unclear, or blocking progress, but the business is not ready for a full-time CTO.',
    },
    {
      question: 'Can a fractional CTO review an existing vendor proposal?',
      answer:
        'Yes. Reviewing a proposal before signing can clarify scope gaps, architecture risk, delivery assumptions, maintenance cost, and whether a simpler path exists.',
    },
    {
      question: 'Is this different from software development?',
      answer:
        'Yes. Fractional CTO work is advisory and leadership-focused. It can lead into development, but the first value is usually clearer technical direction.',
    },
  ],
  ctaTitle: 'Bring the Decision',
  ctaDescription:
    'Share the decision you are weighing, the systems involved, the vendor or hiring context, and the business constraint. We will help identify the clearest technical next step.',
}

export const serviceHubs: ServiceHub[] = [
  customSoftwareDevelopmentHub,
  aiWorkflowAutomationHub,
  systemsIntegrationHub,
  shopifyNetSuiteIntegrationHub,
  softwareModernizationHub,
  fractionalCtoHub,
]

export const serviceHubByPath = Object.fromEntries(serviceHubs.map((hub) => [hub.path, hub]))
