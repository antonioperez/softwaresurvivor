# Grove Management Series Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create three scheduled blog posts for software and organizational leaders based on Andy Grove management lessons, using the approved June 12, June 14, and June 16, 2026 publish dates.

**Architecture:** Add three new MDX posts under `data/blog/` using the existing frontmatter format and the site's current practical voice. Keep the implementation isolated to content files unless `yarn build` regenerates derived site data such as tag metadata.

**Tech Stack:** Next.js, Contentlayer, MDX, Yarn

---

### Task 1: Draft the leverage-focused post

**Files:**

- Create: `data/blog/management-leverage-software-leaders-andy-grove.mdx`
- Reference: `docs/superpowers/specs/2026-06-11-grove-management-series-design.md`
- Reference: `data/blog/legacy-software-modernization-ai-era.mdx`

- [ ] **Step 1: Create the frontmatter and opening structure**

```mdx
---
title: 'Management Leverage for Software Leaders: What Andy Grove Still Gets Right'
date: '2026-06-12 00:00:00'
tags: ['software-development']
draft: true
summary: 'How software leaders can use Andy Grove's idea of management leverage to improve decisions, remove bottlenecks, and raise team output.'
images: []
---

Software leaders often get pulled back into individual contributor work because it feels concrete and urgent. The problem is that the highest-value work of leadership is usually indirect.
```

- [ ] **Step 2: Write the core sections**

```mdx
## A manager's output is the output of the team

## Leverage is not management theater

## Vague decisions create drag

## Bottlenecks and process debt are leadership problems

## What software leaders should do differently
```

- [ ] **Step 3: Fill each section with concrete software/org examples**

```mdx
Examples to include:

- Repeated architecture debates with no owner
- Senior engineers blocked on unclear priorities
- Hiring and onboarding as leverage, not admin
- Meetings that clarify decisions versus meetings that consume time
```

- [ ] **Step 4: Review the file for voice and frontmatter consistency**

Run: `sed -n '1,220p' data/blog/management-leverage-software-leaders-andy-grove.mdx`
Expected: complete frontmatter, practical prose, no placeholder bullets

### Task 2: Draft the performance and accountability post

**Files:**

- Create: `data/blog/performance-feedback-accountability-engineering-leaders.mdx`
- Reference: `docs/superpowers/specs/2026-06-11-grove-management-series-design.md`
- Reference: `data/blog/production-checklist-ai-assisted-software.mdx`

- [ ] **Step 1: Create the frontmatter and opening structure**

```mdx
---
title: 'Performance, Feedback, and Accountability for Engineering Leaders'
date: '2026-06-14 00:00:00'
tags: ['software-development']
draft: true
summary: 'Why engineering leaders need direct feedback, honest performance management, and clear accountability instead of management avoidance.'
images: []
---

Many leadership problems get mislabeled as culture problems when they are really performance and accountability problems that no one wants to address directly.
```

- [ ] **Step 2: Write the core sections**

```mdx
## Ability and motivation are different problems

## One-size-fits-all motivation is weak management

## Feedback is not about protecting the manager

## Performance reviews are operational work

## Promotions can hide leadership mistakes
```

- [ ] **Step 3: Fill each section with engineering leadership scenarios**

```mdx
Examples to include:

- Strong engineer struggling in a lead role
- Low-performing team member with unclear expectations
- Promotion based on technical excellence alone
- Avoided feedback creating wider team resentment
```

- [ ] **Step 4: Review the file for voice and frontmatter consistency**

Run: `sed -n '1,220p' data/blog/performance-feedback-accountability-engineering-leaders.mdx`
Expected: complete frontmatter, direct leadership framing, no book-club tone

### Task 3: Draft the knowledge-work critique post

**Files:**

- Create: `data/blog/does-andy-grove-management-model-still-work-knowledge-teams.mdx`
- Reference: `docs/superpowers/specs/2026-06-11-grove-management-series-design.md`
- Reference: `data/blog/legacy-software-modernization-ai-era.mdx`

- [ ] **Step 1: Create the frontmatter and opening structure**

```mdx
---
title: "Does Andy Grove's Management Model Still Work for Knowledge Teams?"
date: '2026-06-16 00:00:00'
tags: ['software-development']
draft: true
summary: "Where Andy Grove's systems-oriented management model still helps modern knowledge teams, and where software leaders need a looser approach."
images: []
---

Andy Grove's management model remains useful because leaders still need clarity, accountability, and operational discipline. The challenge is that software and cross-functional knowledge work do not behave like a factory line.
```

- [ ] **Step 2: Write the core sections**

```mdx
## Why Grove still matters

## Where the factory metaphor helps

## Where knowledge work breaks the model

## What modern leaders should keep

## What modern leaders should adapt
```

- [ ] **Step 3: Fill each section with modern software-org tradeoffs**

```mdx
Examples to include:

- Repeatable operational work versus exploratory product work
- Metrics that help versus metrics that distort behavior
- Cross-functional ambiguity in product, design, and engineering
- The need for systems without treating people as interchangeable
```

- [ ] **Step 4: Review the file for balance and clarity**

Run: `sed -n '1,220p' data/blog/does-andy-grove-management-model-still-work-knowledge-teams.mdx`
Expected: balanced critique, practical advice, no academic digression

### Task 4: Verify site integration

**Files:**

- Verify: `data/blog/management-leverage-software-leaders-andy-grove.mdx`
- Verify: `data/blog/performance-feedback-accountability-engineering-leaders.mdx`
- Verify: `data/blog/does-andy-grove-management-model-still-work-knowledge-teams.mdx`
- Possible modify: `app/tag-data.json`

- [ ] **Step 1: Run the production build**

Run: `yarn build`
Expected: exit code 0, Contentlayer succeeds, Next.js build completes

- [ ] **Step 2: Inspect the resulting diff**

Run: `git status --short`
Expected: only the three new blog posts and any derived content files changed by the build

- [ ] **Step 3: Re-read the published schedule details**

Run: `rg -n "^(title:|date:|draft:)" data/blog/management-leverage-software-leaders-andy-grove.mdx data/blog/performance-feedback-accountability-engineering-leaders.mdx data/blog/does-andy-grove-management-model-still-work-knowledge-teams.mdx`
Expected: dates are `2026-06-12`, `2026-06-14`, and `2026-06-16`, each with `draft: true`
