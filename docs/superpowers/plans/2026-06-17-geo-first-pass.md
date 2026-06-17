# GEO First Pass Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve Software Survivor's generative search visibility by making priority expertise pages, entity relationships, and machine-readable entrypoints clearer.

**Architecture:** Add two answer-first service hubs as static App Router pages, strengthen article JSON-LD in the existing blog route, publish a curated `llms.txt`, and expose the new hubs through sitemap and internal links. Keep the work in existing Next.js, Contentlayer, and schema patterns without broad redesign.

**Tech Stack:** Next.js App Router, React, TypeScript, Contentlayer, Schema.org JSON-LD, Yarn

---

### Task 1: Add Answer-First GEO Hubs

**Files:**

- Create: `app/ai-workflow-automation/page.tsx`
- Create: `app/shopify-netsuite-integration/page.tsx`

- [x] Add an AI workflow automation page that directly answers what the service is, when it fits, pilot scope, risks, and proof links.
- [x] Add a Shopify-NetSuite integration page that directly answers when connectors fail, what production middleware needs, and related NetSuite/SuiteQL content.
- [x] Include page-level metadata, visible answer sections, FAQ-style buyer questions, and WebPage/Service JSON-LD matching visible text.

### Task 2: Improve Article Entity Schema

**Files:**

- Modify: `contentlayer.config.ts`
- Modify: `app/blog/[...slug]/page.tsx`

- [x] Extend generated BlogPosting JSON-LD with canonical URL, mainEntityOfPage, publisher, author identity, and keywords.
- [x] Keep author details consistent with `data/authors/default.mdx` and site metadata.
- [x] Avoid schema claims that are not visible or supported elsewhere on the site.

### Task 3: Add LLM Entry Point and Discovery Links

**Files:**

- Create: `public/llms.txt`
- Modify: `app/sitemap.ts`
- Modify: `app/robots.ts`

- [x] Add a short curated `/llms.txt` with priority pages and topic clusters.
- [x] Add new static hubs to the sitemap.
- [x] Add an explicit `OAI-SearchBot` allow rule without changing the default permissive crawl policy.

### Task 4: Add Internal Links From Existing Pages

**Files:**

- Modify: `app/services/page.tsx`
- Modify: `app/Main.tsx`
- Modify: selected `data/blog/*.mdx`

- [x] Link services and homepage copy to the new hubs.
- [x] Add natural links from related AI automation and Shopify-NetSuite posts to the new hubs.
- [x] Keep the blog taxonomy unchanged.

### Task 5: Verify

**Files:**

- Verify all modified files

- [x] Run `yarn build`.
- [x] Inspect `git status --short`.
- [x] Confirm the sitemap includes the two new hubs and the build succeeds.
