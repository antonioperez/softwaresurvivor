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
  aliases?: string[]
  eyebrow: string
  pageTitle: string
  h1: string
  description: string
  keywords: string[]
  serviceType: string
  buyerIntro?: string
  summaryCards: ServiceHubStep[]
  fitTitle: string
  fitIntro: string
  fitSignals: string[]
  problemsSolved?: string[]
  whatYouGet?: ServiceHubStep[]
  technologies?: string[]
  useCases?: ServiceHubStep[]
  processTitle: string
  processSteps: ServiceHubStep[]
  engagementOptions?: ServiceHubStep[]
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
  path: '/ai-workflow-automation-consulting',
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
  path: '/shopify-netsuite-integration-consulting',
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
  h1: 'Custom Software Development for Business-Critical Workflows',
  description:
    'Custom software development for business owners who need internal tools, customer portals, SaaS products, integrations, and workflow automation.',
  keywords: [
    'custom software development',
    'custom software development consultant',
    'business software development',
    'custom web application development',
    'internal software platform',
    'SaaS product development consultant',
    'workflow automation software',
    'customer portal development',
  ],
  serviceType: 'Custom Software Development',
  buyerIntro:
    'This page is for business owners, operators, and decision makers who need to understand whether a custom build is the right move before committing budget, team time, or operational risk.',
  summaryCards: [
    {
      title: 'Best fit',
      description:
        'A valuable workflow where off-the-shelf software creates workarounds, duplicate entry, or missed visibility.',
    },
    {
      title: 'Core work',
      description:
        'Discovery, requirements, architecture, UX, implementation, integrations, testing, launch, and support.',
    },
    {
      title: 'First milestone',
      description: 'A scoped first release that proves business value before the system expands.',
    },
  ],
  fitTitle: 'When Custom Software Makes Sense',
  fitIntro:
    'Custom software development is justified when the workflow is specific, valuable, and hard to force into generic tools without creating manual work.',
  fitSignals: [
    'The workflow directly affects revenue, operations, compliance, reporting, or customer experience.',
    'Existing SaaS tools require spreadsheets, duplicate entry, copy-paste work, or informal workarounds to keep running.',
    'The team needs control over data, user permissions, approval paths, integration behavior, or business rules.',
    'A smaller first release can prove the direction before the business commits to a larger platform or rebuild.',
  ],
  problemsSolved: [
    'Internal operations that depend on fragile spreadsheets, email chains, and manual status updates.',
    'Customer-facing portals where clients, vendors, or field teams need secure self-service access.',
    'Disconnected systems where CRM, ERP, e-commerce, warehouse, accounting, or internal tools do not share reliable data.',
    'Legacy software that still runs the business but is slow to change, hard to support, or blocking new workflows.',
  ],
  whatYouGet: [
    {
      title: 'Business-first discovery',
      description:
        'A clear map of users, current tools, manual steps, constraints, risks, and the outcome the software must support.',
    },
    {
      title: 'A practical build plan',
      description:
        'Scope, architecture, integrations, data model, permissions, rollout sequence, and the smallest responsible first release.',
    },
    {
      title: 'Production-ready implementation',
      description:
        'Custom web applications, internal platforms, customer portals, SaaS features, API integrations, testing, deployment, and ongoing maintainability.',
    },
  ],
  technologies: [
    'Next.js',
    'React',
    'TypeScript',
    'Node.js',
    'PostgreSQL',
    'APIs',
    'Webhooks',
    'ERP integrations',
    'CRM integrations',
    'Cloud deployment',
    'AI workflow automation',
  ],
  useCases: [
    {
      title: 'Internal workflow software',
      description:
        'Replace spreadsheet-driven approvals, scheduling, reporting, reconciliation, or fulfillment workflows with a clearer operating system.',
    },
    {
      title: 'Customer and vendor portals',
      description:
        'Give customers, vendors, partners, or field teams secure access to orders, documents, requests, status updates, and account data.',
    },
    {
      title: 'SaaS and product development',
      description:
        'Turn a validated product idea, manual service, or internal capability into a maintainable web application with real user workflows.',
    },
    {
      title: 'Reporting dashboards and data tools',
      description:
        'Unify data from operational systems so leadership can see what is happening without asking the team for another spreadsheet export.',
    },
    {
      title: 'ERP, CRM, and e-commerce extensions',
      description:
        'Build focused software around NetSuite, Shopify, CRMs, accounting systems, and warehouse tools when the standard platform does not cover the edge cases.',
    },
  ],
  processTitle: 'How a Responsible Build Starts',
  processSteps: [
    {
      title: 'Define the business problem',
      description:
        'Start with users, current tools, manual steps, system boundaries, budget, timeline, and the business outcome that would make the project worth doing.',
    },
    {
      title: 'Scope the smallest useful release',
      description:
        'Choose the first version that can reduce real pain, prove adoption, and expose the right next questions without trying to build the entire platform at once.',
    },
    {
      title: 'Design for production behavior',
      description:
        'Plan the data model, API boundaries, permissions, integrations, error handling, observability, and support paths before the workflow is business-critical.',
    },
  ],
  engagementOptions: [
    {
      title: 'Discovery and architecture review',
      description:
        'Best when the business knows the pain but needs clarity on buy-vs-build, scope, cost, timeline, and technical risk before funding a build.',
    },
    {
      title: 'Scoped first release',
      description:
        'Best when one workflow is ready to replace manual work with a focused internal tool, portal, dashboard, or integration-backed application.',
    },
    {
      title: 'Ongoing product and platform development',
      description:
        'Best when the system will evolve through new workflows, users, integrations, reporting needs, and operational improvements after launch.',
    },
  ],
  controlsTitle: 'What Keeps a Custom Build Maintainable',
  controlsIntro:
    'The long-term value of custom software comes from clarity around ownership, system boundaries, and production behavior, not just the first launch.',
  controls: [
    'Clear source-code ownership, repository access, deployment notes, and handoff documentation.',
    'A data model and API boundaries that future developers can understand without reverse-engineering the whole business.',
    'Automated checks around revenue, operations, permissions, integrations, and other critical workflows.',
    'Monitoring and observability for background jobs, API failures, sync issues, slow workflows, and user-facing errors.',
    'A phased roadmap so improvements are tied to real adoption instead of an oversized feature list.',
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
      title: 'From Inbox to Order',
      description:
        'A practical example of turning messy email workflows into structured operational software.',
      href: '/blog/from-inbox-to-order-email-to-order-automation',
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
        'Most serious custom software development engagements start in the five-figure range because they include discovery, architecture, implementation, testing, deployment, and support planning. A smaller discovery or architecture review can come first when the build path is not clear.',
    },
    {
      question: 'How long does a custom software project take?',
      answer:
        'A focused first release may take 4-8 weeks. More complex platforms, integration-heavy systems, customer portals, or modernization projects can take 3-6 months or longer depending on scope, data complexity, and rollout risk.',
    },
    {
      question: 'Should we buy software or build it?',
      answer:
        'Buy when the process is standard and a mature tool fits most of the workflow. Customize or integrate when an existing platform is close. Build custom software when the workflow is part of how the business creates value or when control over data, process, permissions, or integration behavior matters.',
    },
    {
      question: 'Can custom software replace spreadsheets?',
      answer:
        'Yes, when the spreadsheet is acting as a workflow system, reporting layer, or source of truth. The right first step is to map what decisions the spreadsheet supports before rebuilding it.',
    },
    {
      question: 'Do we need a full development team?',
      answer:
        'Not always. Some businesses start with a principal-engineer-led discovery, a focused first release, or a small implementation team. The right team size depends on the workflow, timeline, integrations, design needs, and ongoing support expectations.',
    },
    {
      question: 'What happens after custom software launches?',
      answer:
        'After launch, the work usually shifts to monitoring, support, user feedback, bug fixes, security updates, reporting improvements, and phased feature development. A maintainable system should have a clear plan for ownership after the first release.',
    },
  ],
  ctaTitle: 'Bring the Workflow, Not Just the Feature List',
  ctaDescription:
    'Share the users, current tools, manual steps, constraints, and business outcome. We will help decide whether the right next step is buying, integrating, modernizing, or building custom software.',
}

export const systemsIntegrationHub: ServiceHub = {
  path: '/systems-integration-consulting',
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
      href: '/shopify-netsuite-integration-consulting',
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
  path: '/software-modernization-consulting',
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
  path: '/fractional-cto-fresno',
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
      href: '/blog/fractional-cto-fresno-growing-business',
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

Object.assign(customSoftwareDevelopmentHub, {
  buyerIntro:
    'This page is for buyers who need software tied to a real operating constraint: internal tools, portals, SaaS products, dashboards, or workflow systems that cannot be handled cleanly by off-the-shelf software.',
  problemsSolved: [
    'Spreadsheet-driven workflows that have become a shadow application.',
    'Customer, vendor, or team portals that need business-specific permissions and data.',
    'SaaS or internal product ideas that need senior architecture before scaling.',
    'Disconnected data and manual handoffs around revenue, operations, or service delivery.',
  ],
  whatYouGet: [
    {
      title: 'A scoped first release',
      description:
        'A build plan focused on the smallest useful workflow instead of a speculative full rebuild.',
    },
    {
      title: 'Production-minded engineering',
      description:
        'Architecture, implementation, testing, deployment, and observability around the workflows that matter.',
    },
    {
      title: 'Integration-ready software',
      description:
        'APIs, data models, and system boundaries designed to work with the rest of the business.',
    },
  ],
  technologies: [
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'AWS',
    'Cloudflare',
    'Stripe',
    'Shopify',
    'NetSuite',
  ],
  useCases: [
    {
      title: 'Operations portals',
      description:
        'Replace ad hoc spreadsheets and inbox-driven status checks with a workflow your team can actually trust.',
    },
    {
      title: 'Customer-facing platforms',
      description:
        'Build portals, dashboards, and SaaS workflows where generic software does not model the buyer journey.',
    },
    {
      title: 'Workflow automation products',
      description:
        'Turn repeated service delivery, intake, review, or fulfillment work into maintainable software.',
    },
  ],
  relatedLinks: [
    {
      title: 'Candid Moments Case Study',
      description:
        'A serverless photo-sharing product with QR uploads, AWS media storage, and automated moderation.',
      href: '/portfolio/candid-moments',
    },
    {
      title: 'Tlaloc Harvest Case Study',
      description:
        'A community food-waste platform with sustainability, logistics, and multi-sided workflow constraints.',
      href: '/portfolio/tlaloc-harvest',
    },
    {
      title: 'A Practical Buy vs. Build Guide for Fresno Businesses',
      description:
        'How to decide when to buy software, customize an existing platform, or build a custom system.',
      href: '/blog/buy-vs-build-guide-fresno-businesses',
    },
  ],
  engagementOptions: [
    {
      title: 'Discovery and architecture',
      description:
        'Clarify the workflow, integration boundaries, data model, risks, and first useful release.',
    },
    {
      title: 'Build and launch',
      description:
        'Implement the product or internal system with practical milestones and production checks.',
    },
    {
      title: 'Modernize and extend',
      description:
        'Improve an existing system without throwing away working business logic unnecessarily.',
    },
  ],
})

Object.assign(aiWorkflowAutomationHub, {
  path: '/ai-workflow-automation-consulting',
  aliases: ['/ai-workflow-automation'],
  buyerIntro:
    'This page is for operators, founders, and department leaders who want AI automation attached to a controlled workflow instead of a fragile demo.',
  problemsSolved: [
    'Teams manually reading, classifying, summarizing, or routing the same documents and emails.',
    'Order, intake, support, or review workflows that need AI help but still require human approval.',
    'Messy handoffs between inboxes, spreadsheets, CRMs, ERPs, and e-commerce platforms.',
    'AI experiments that need permissions, auditability, and production guardrails.',
  ],
  whatYouGet: [
    {
      title: 'Workflow assessment',
      description:
        'A clear map of inputs, outputs, review points, business rules, and systems the automation must respect.',
    },
    {
      title: 'Controlled AI pilot',
      description:
        'A narrow automation that extracts, drafts, classifies, routes, or recommends with human review built in.',
    },
    {
      title: 'Integration and safety controls',
      description:
        'Validation, logging, permissions, approval queues, and rollback paths before automated writes are allowed.',
    },
  ],
  technologies: [
    'OpenAI',
    'Anthropic',
    'Vercel AI SDK',
    'LangChain',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Gmail',
    'Outlook',
    'Shopify',
    'NetSuite',
  ],
  useCases: [
    {
      title: 'Email-to-order automation',
      description:
        'Parse inbound email, extract order intent, validate fields, and prepare a reviewed order draft.',
    },
    {
      title: 'Document intake',
      description:
        'Extract structured data from PDFs, forms, claims, invoices, or service requests for human approval.',
    },
    {
      title: 'Internal knowledge workflows',
      description:
        'Help teams search, summarize, and route information without giving the model broad write permissions.',
    },
  ],
  relatedLinks: [
    {
      title: 'Inbox2Order Case Study',
      description:
        'Email-to-order automation that turns unstructured email inquiries into structured order drafts.',
      href: '/portfolio/inbox2order',
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
  engagementOptions: [
    {
      title: 'AI opportunity review',
      description:
        'Identify one or two workflows where AI can reduce repeated work without creating operational risk.',
    },
    {
      title: 'Pilot build',
      description:
        'Build a focused automation around real examples, validation rules, and a review surface.',
    },
    {
      title: 'Production hardening',
      description:
        'Add permissions, monitoring, exception handling, and integration controls for live business use.',
    },
  ],
})

Object.assign(systemsIntegrationHub, {
  path: '/systems-integration-consulting',
  aliases: ['/systems-integration'],
  buyerIntro:
    'This page is for businesses whose teams are losing time because important data lives across disconnected systems.',
  problemsSolved: [
    'Duplicate data entry between ERPs, CRMs, e-commerce platforms, spreadsheets, and internal tools.',
    'Sync failures that require engineering help because there is no recovery workflow.',
    'Operational reporting that cannot answer questions across multiple systems.',
    'Manual customer, inventory, fulfillment, finance, or support handoffs.',
  ],
  whatYouGet: [
    {
      title: 'Source-of-truth map',
      description:
        'A practical model for which system owns each record, field, status, and lifecycle event.',
    },
    {
      title: 'Reliable integration layer',
      description:
        'Webhooks, jobs, queues, retries, idempotency, mapping logic, and APIs built around failure recovery.',
    },
    {
      title: 'Operational visibility',
      description:
        'Dashboards, reports, exports, or admin actions that show what moved, what failed, and what needs attention.',
    },
  ],
  technologies: [
    'REST APIs',
    'GraphQL',
    'Webhooks',
    'Queues',
    'PostgreSQL',
    'NetSuite',
    'Shopify',
    'WooCommerce',
    'HubSpot',
    'Salesforce',
    'Gmail',
    'Outlook',
  ],
  useCases: [
    {
      title: 'Order and fulfillment flows',
      description:
        'Connect e-commerce, warehouse, ERP, and customer-support systems with recoverable sync behavior.',
    },
    {
      title: 'CRM and operations sync',
      description:
        'Keep customer, account, and workflow state aligned across sales, service, and back-office tools.',
    },
    {
      title: 'Cross-system reporting',
      description:
        'Join business data across systems so leaders can see exceptions, throughput, and bottlenecks.',
    },
  ],
  relatedLinks: [
    {
      title: 'Inbox2Order Case Study',
      description:
        'A business workflow example where unstructured email becomes reviewed, integration-ready order data.',
      href: '/portfolio/inbox2order',
    },
    {
      title: 'Shopify-NetSuite Integration Consulting',
      description:
        'A focused service hub for connector cleanup, custom middleware, SuiteQL reporting, and recovery tooling.',
      href: '/shopify-netsuite-integration-consulting',
    },
    {
      title: 'API Monitoring for Revenue-Critical Order Flows',
      description:
        'How to monitor order APIs, fulfillment integrations, payment flows, and background jobs.',
      href: '/blog/api-monitoring-revenue-critical-order-flows',
    },
  ],
  engagementOptions: [
    {
      title: 'Integration audit',
      description: 'Review current systems, failure patterns, mappings, and manual recovery steps.',
    },
    {
      title: 'Focused integration build',
      description:
        'Implement one critical flow with clear ownership, logging, retries, and visibility.',
    },
    {
      title: 'Connector support layer',
      description:
        'Keep the connector for standard flows and add custom code around edge cases and reporting.',
    },
  ],
})

Object.assign(shopifyNetSuiteIntegrationHub, {
  path: '/shopify-netsuite-integration-consulting',
  aliases: ['/shopify-netsuite-integration'],
  buyerIntro:
    'This page is for e-commerce teams that rely on Shopify and NetSuite but need more control than a connector dashboard provides.',
  problemsSolved: [
    'Orders, refunds, fulfillments, payments, or inventory states that do not map cleanly through the connector.',
    'Finance and operations teams exporting spreadsheets to reconcile what happened.',
    'Warehouse, package, lot, or tracking workflows that need SuiteQL visibility.',
    'Repeated connector exceptions with no safe retry or replay path.',
  ],
  whatYouGet: [
    {
      title: 'Flow diagnosis',
      description:
        'A clear read on whether the issue is configuration, business logic, missing reporting, or custom middleware.',
    },
    {
      title: 'Custom middleware where needed',
      description:
        'Focused services around order normalization, fulfillment, refunds, inventory, and recovery behavior.',
    },
    {
      title: 'SuiteQL reporting',
      description:
        'Practical NetSuite reports for pending orders, fulfillment gaps, package tracking, and reconciliation.',
    },
  ],
  technologies: [
    'Shopify Admin API',
    'Shopify webhooks',
    'NetSuite RESTlets',
    'SuiteTalk',
    'SuiteQL',
    'Node.js',
    'TypeScript',
    'Queues',
    'PostgreSQL',
  ],
  useCases: [
    {
      title: 'Connector recovery tooling',
      description:
        'Create safe retry, replay, and exception workflows around the connector instead of relying on ad hoc fixes.',
    },
    {
      title: 'Fulfillment visibility',
      description:
        'Expose pending lines, package tracking, partial shipments, and warehouse-specific fulfillment states.',
    },
    {
      title: 'Finance reconciliation',
      description:
        'Trace Shopify orders, payments, refunds, cash sales, and invoices through NetSuite records.',
    },
  ],
  relatedLinks: [
    {
      title: 'When Shopify-NetSuite Connectors Are Not Enough',
      description:
        'How to identify when a connector needs custom middleware, recovery tooling, SuiteQL reports, or workflow-specific business logic.',
      href: '/blog/when-shopify-netsuite-connectors-are-not-enough',
    },
    {
      title: 'NetSuite SuiteQL Examples for E-commerce Integrations',
      description:
        'SuiteQL examples for sales orders, fulfillment tracking, pending items, inventory, and e-commerce workflows.',
      href: '/blog/netsuite-suiteql-examples-ecommerce-integrations',
    },
    {
      title: 'Inbox2Order Case Study',
      description:
        'A related automation case study for turning customer email into reviewed operational data.',
      href: '/portfolio/inbox2order',
    },
  ],
  engagementOptions: [
    {
      title: 'Connector assessment',
      description: 'Review mappings, records, failure cases, SuiteQL evidence, and recovery gaps.',
    },
    {
      title: 'Middleware or report build',
      description:
        'Build the smallest custom layer needed to resolve the recurring operational problem.',
    },
    {
      title: 'Ongoing integration support',
      description:
        'Maintain reporting, exception queues, sync improvements, and new business rules as operations change.',
    },
  ],
})

Object.assign(softwareModernizationHub, {
  path: '/software-modernization-consulting',
  aliases: ['/software-modernization'],
  buyerIntro:
    'This page is for teams with valuable software that has become expensive, fragile, slow to change, or difficult to staff.',
  problemsSolved: [
    'Legacy systems that block integrations, reporting, AI automation, or product changes.',
    'Production codebases where small changes are risky because tests and ownership are weak.',
    'Old platforms, dependencies, or deployment processes that create business continuity risk.',
    'Rewrite pressure without a clear migration path or business case.',
  ],
  whatYouGet: [
    {
      title: 'Current-state assessment',
      description:
        'A practical review of architecture, deployment, data, integration, dependency, and operational risks.',
    },
    {
      title: 'Incremental modernization plan',
      description:
        'A sequenced path that stabilizes the system and replaces high-value boundaries first.',
    },
    {
      title: 'Implementation support',
      description:
        'Refactoring, test coverage, migration work, API extraction, and replacement workflows where useful.',
    },
  ],
  technologies: [
    'Legacy PHP',
    '.NET',
    'Node.js',
    'React',
    'Next.js',
    'PostgreSQL',
    'MySQL',
    'AWS',
    'Azure',
    'Docker',
    'CI/CD',
  ],
  useCases: [
    {
      title: 'Stabilize before replacing',
      description:
        'Add observability, tests, backups, and rollback paths around fragile revenue or operations workflows.',
    },
    {
      title: 'Extract a bounded workflow',
      description:
        'Move one risky module, integration, or reporting path behind a clearer modern interface.',
    },
    {
      title: 'Prepare for AI and automation',
      description:
        'Clean up data ownership and system boundaries so automation has reliable inputs and permissions.',
    },
  ],
  engagementOptions: [
    {
      title: 'Modernization assessment',
      description:
        'Review the codebase and production workflow enough to rank risks and useful migration seams.',
    },
    {
      title: 'Stabilization sprint',
      description:
        'Add missing checks, deployment fixes, monitoring, and documentation around critical paths.',
    },
    {
      title: 'Incremental migration',
      description: 'Replace or refactor selected workflows while the business keeps operating.',
    },
  ],
})

Object.assign(fractionalCtoHub, {
  path: '/fractional-cto-fresno',
  aliases: ['/fractional-cto'],
  pageTitle: 'Fractional CTO in Fresno',
  description:
    'Fractional CTO consulting in Fresno and remote across the US for founders and operators who need architecture, vendor review, delivery planning, and senior technical judgment.',
  keywords: [
    'fractional CTO Fresno',
    'Fresno fractional CTO',
    'technical leadership consulting Fresno',
    'software architecture review Fresno',
    'technology strategy consultant',
  ],
  buyerIntro:
    'This page is for Fresno, Central California, and remote US businesses that need senior technical judgment before making expensive software, vendor, hiring, or architecture decisions.',
  problemsSolved: [
    'Founders and operators making technical decisions without a senior engineering counterpart.',
    'Vendor proposals that need independent architecture, scope, and maintenance review.',
    'Delivery plans that keep slipping because risk and ownership are unclear.',
    'Hiring decisions that depend on knowing what technical capability the business actually needs.',
  ],
  whatYouGet: [
    {
      title: 'Decision support',
      description:
        'Clear tradeoffs around build vs. buy, vendor selection, architecture, hiring, and delivery risk.',
    },
    {
      title: 'Technical due diligence',
      description:
        'Codebase, proposal, architecture, or platform review from a Principal Engineer perspective.',
    },
    {
      title: 'Execution direction',
      description:
        'Roadmaps, milestones, standards, and scope boundaries that teams and vendors can work from.',
    },
  ],
  technologies: [
    'AWS',
    'Azure',
    'Cloudflare',
    'Next.js',
    'React',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'Shopify',
    'NetSuite',
    'AI/LLM platforms',
  ],
  useCases: [
    {
      title: 'Pre-build strategy',
      description:
        'Clarify what should be built, bought, postponed, or reviewed before committing budget.',
    },
    {
      title: 'Vendor review',
      description:
        'Evaluate proposals, architecture claims, scope gaps, maintenance assumptions, and integration risk.',
    },
    {
      title: 'Team and roadmap support',
      description:
        'Help a growing business define technical priorities before hiring or scaling a delivery team.',
    },
  ],
  engagementOptions: [
    {
      title: 'Advisory call package',
      description:
        'Focused technical guidance around a narrow decision, proposal, or roadmap question.',
    },
    {
      title: 'Fractional leadership',
      description:
        'Recurring senior technical direction for founders, operators, or teams without a full-time CTO.',
    },
    {
      title: 'Architecture and delivery review',
      description:
        'A deeper review with written recommendations, risk ranking, and implementation sequence.',
    },
  ],
})

export const technicalArchitectureReviewHub: ServiceHub = {
  path: '/technical-architecture-review',
  eyebrow: 'Technical architecture review',
  pageTitle: 'Technical Architecture Review',
  h1: 'Independent Architecture Review Before You Bet More Budget',
  description:
    'Technical architecture review for teams that need a practical assessment of software risk, scalability, integrations, vendor plans, or modernization options.',
  keywords: [
    'technical architecture review',
    'software architecture review',
    'codebase assessment consultant',
    'system architecture consulting',
    'technical due diligence consultant',
  ],
  serviceType: 'Technical Architecture Review',
  buyerIntro:
    'This page is for founders, operators, and technical leaders who need an experienced outside read on a system, proposal, migration plan, or high-risk software decision.',
  summaryCards: [
    {
      title: 'Best fit',
      description: 'A technical decision is expensive enough that guessing would be irresponsible.',
    },
    {
      title: 'Core work',
      description:
        'Architecture, codebase, data, integration, operational, and vendor risk review.',
    },
    {
      title: 'Output',
      description: 'A ranked set of risks, tradeoffs, and practical next steps.',
    },
  ],
  fitTitle: 'Who This Is For',
  fitIntro:
    'A technical architecture review helps when the business needs clarity before a rebuild, vendor contract, funding milestone, hiring plan, or major integration.',
  fitSignals: [
    'A system works today, but the team is not sure it can support the next phase.',
    'A vendor or internal team has proposed a rebuild, migration, or platform choice.',
    'Executives need a plain-English read on risk, cost, and sequencing.',
    'Engineering needs an outside principal-level review before committing to a path.',
  ],
  problemsSolved: [
    'Architecture choices that are hard to evaluate from inside the delivery pressure.',
    'Fragile integrations, unclear ownership, missing observability, or weak deployment practices.',
    'Vendor proposals with hidden scope, maintenance, security, or data risks.',
    'Modernization plans that need sequencing instead of a risky all-at-once rewrite.',
  ],
  whatYouGet: [
    {
      title: 'Evidence-based assessment',
      description:
        'Review of code, architecture diagrams, deployment flow, data model, logs, integrations, and team constraints where available.',
    },
    {
      title: 'Risk ranking',
      description:
        'A prioritized list of technical and business risks with the consequences stated clearly.',
    },
    {
      title: 'Actionable recommendation',
      description:
        'A practical sequence for stabilizing, building, migrating, buying, or stopping work.',
    },
  ],
  technologies: [
    'React',
    'Next.js',
    'Node.js',
    'TypeScript',
    'PostgreSQL',
    'AWS',
    'Azure',
    'Cloudflare',
    'Shopify',
    'NetSuite',
    'CI/CD',
    'Legacy web stacks',
  ],
  useCases: [
    {
      title: 'Pre-rewrite review',
      description:
        'Check whether a full rewrite is necessary, and identify safer migration boundaries when possible.',
    },
    {
      title: 'Vendor proposal review',
      description:
        'Evaluate whether scope, architecture, timeline, ownership, and maintenance assumptions are credible.',
    },
    {
      title: 'Scale and reliability review',
      description:
        'Assess whether the current system can support planned traffic, workflow volume, integrations, or product expansion.',
    },
  ],
  processTitle: 'Review Process',
  processSteps: [
    {
      title: 'Collect evidence',
      description:
        'Review goals, architecture, code, deployments, incidents, dependencies, vendors, and business constraints.',
    },
    {
      title: 'Identify risk and leverage',
      description:
        'Separate urgent risks from noise and look for high-leverage changes that reduce uncertainty quickly.',
    },
    {
      title: 'Deliver the recommendation',
      description:
        'Summarize the system honestly, rank the risks, and propose the most responsible next sequence.',
    },
  ],
  engagementOptions: [
    {
      title: 'Focused review',
      description:
        'A narrow read on one proposal, architecture decision, integration, or migration path.',
    },
    {
      title: 'Codebase and architecture assessment',
      description:
        'A deeper review of the application, data, deployment, testing, and operational model.',
    },
    {
      title: 'Follow-on implementation',
      description:
        'If useful, turn the recommendation into stabilization, modernization, or integration work.',
    },
  ],
  controlsTitle: 'What the Review Looks For',
  controlsIntro:
    'The review focuses on the risks that tend to become expensive after a system is already in motion.',
  controls: [
    'System boundaries, ownership, and data flow.',
    'Deployment, rollback, observability, and incident readiness.',
    'Integration failure modes, retries, and recovery paths.',
    'Testing strategy around revenue, operations, and customer-critical workflows.',
  ],
  relatedTitle: 'Related Services and Writing',
  relatedLinks: [
    {
      title: 'Software Modernization Consulting',
      description:
        'Use an architecture review to find the safest modernization sequence before committing to a rewrite.',
      href: '/software-modernization-consulting',
    },
    {
      title: 'Fractional CTO in Fresno',
      description:
        'Ongoing technical leadership when the business needs senior judgment beyond a one-time review.',
      href: '/fractional-cto-fresno',
    },
    {
      title: 'Production Checklist for AI-Assisted Software',
      description:
        'A practical checklist for software that needs to hold up after AI-assisted development.',
      href: '/blog/production-checklist-ai-assisted-software',
    },
  ],
  faqTitle: 'Common Architecture Review Questions',
  faqs: [
    {
      question: 'What do you review in a technical architecture review?',
      answer:
        'The review can cover code structure, system boundaries, database design, integrations, deployment, observability, testing, security basics, vendor assumptions, and whether the architecture fits the business goal.',
    },
    {
      question: 'Do you need access to source code?',
      answer:
        'Source code helps for a deeper review, but a useful first assessment can also start from diagrams, deployment notes, vendor proposals, incident history, data models, and walkthroughs with the team.',
    },
    {
      question: 'Is this only for broken systems?',
      answer:
        'No. A review is often most useful before a major rebuild, funding milestone, vendor contract, scale-up, or integration project.',
    },
    {
      question: 'What is the deliverable?',
      answer:
        'The deliverable is a plain-English technical recommendation: what is working, what is risky, what should happen next, and which changes should wait.',
    },
  ],
  ctaTitle: 'Bring the Decision or the Risk',
  ctaDescription:
    'Share the system, proposal, migration plan, or technical decision you need reviewed. We will help clarify the risk before more budget is committed.',
}

export const serviceHubs: ServiceHub[] = [
  customSoftwareDevelopmentHub,
  aiWorkflowAutomationHub,
  systemsIntegrationHub,
  shopifyNetSuiteIntegrationHub,
  softwareModernizationHub,
  fractionalCtoHub,
  technicalArchitectureReviewHub,
]

export const serviceHubByPath = Object.fromEntries(serviceHubs.map((hub) => [hub.path, hub]))
