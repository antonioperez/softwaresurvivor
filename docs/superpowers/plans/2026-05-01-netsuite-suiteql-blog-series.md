# NetSuite SuiteQL Blog Series Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Draft a polished SEO-focused NetSuite SuiteQL blog series as separate MDX posts that the user can publish on staggered dates.

**Architecture:** Create four new draft posts under `data/blog`, each with a focused SEO target and internal links between the series entries. Reuse the existing `reading-netsuite-inventory-with-suiteql.mdx` post as the inventory spoke instead of creating a duplicate inventory article.

**Tech Stack:** Next.js, Contentlayer, MDX, Markdown frontmatter, SuiteQL examples from the provided NetSuite service script.

---

### Task 1: Draft the Hub Post

**Files:**

- Create: `data/blog/netsuite-suiteql-examples-ecommerce-integrations.mdx`

- [ ] **Step 1: Create the MDX file**

  Use this frontmatter exactly:

  ```mdx
  ---
  title: 'NetSuite SuiteQL Examples for E-commerce Integrations'
  date: '2026-05-01'
  tags: ['e-commerce', 'software-development', 'automation', 'custom-development']
  draft: true
  summary: 'Practical NetSuite SuiteQL examples for sales orders, fulfillment tracking, pending items, inventory, and e-commerce integration workflows.'
  images: []
  ---
  ```

- [ ] **Step 2: Write the article body**

  Include these sections in order:

  ```mdx
  ## Why SuiteQL matters for e-commerce integrations

  ## Calling the SuiteQL REST endpoint from Node.js

  ## Example 1: Find a sales order by order number

  ## Example 2: Read sales order line items

  ## Example 3: List pending fulfillment orders by location

  ## Example 4: Track item fulfillments and package tracking

  ## Example 5: Find partially fulfilled pending items

  ## Example 6: Read lot and bin inventory availability

  ## Practical SuiteQL notes from production integrations

  ## Building better NetSuite integrations
  ```

  Use short query snippets derived from `readSalesOrder`, `readSalesOrderItems`, `listPendingFulfillmentSalesOrders`, `listOrderFulfillmentTrackingHistory`, and `listPartiallyFulfilledSalesOrderPendingItems`.

- [ ] **Step 3: Add internal links**

  Link to:
  - `/blog/query-netsuite-sales-orders-line-items-suiteql`
  - `/blog/track-netsuite-item-fulfillments-shipping-packages-suiteql`
  - `/blog/find-partially-fulfilled-sales-orders-netsuite-suiteql`
  - `/blog/reading-netsuite-inventory-with-suiteql`

### Task 2: Draft the Sales Orders Post

**Files:**

- Create: `data/blog/query-netsuite-sales-orders-line-items-suiteql.mdx`

- [ ] **Step 1: Create the MDX file**

  Use this frontmatter exactly:

  ```mdx
  ---
  title: 'Query NetSuite Sales Orders and Line Items with SuiteQL'
  date: '2026-05-01'
  tags: ['e-commerce', 'software-development', 'custom-development']
  draft: true
  summary: 'Learn how to query NetSuite sales orders and transaction lines with SuiteQL, including order number search, status labels, fulfillable lines, and location filters.'
  images: []
  ---
  ```

- [ ] **Step 2: Write the article body**

  Include these sections in order:

  ```mdx
  ## Why sales order queries matter

  ## Search for a sales order by order number or reference number

  ## Read sales order line items

  ## Find pending fulfillment lines

  ## List pending fulfillment orders by warehouse location

  ## Notes on NetSuite status values

  ## Where this fits in an integration
  ```

  Use cleaned-up query examples derived from `readSalesOrder`, `readSalesOrderItems`, `readPendingSalesOrderItems`, and `listPendingFulfillmentSalesOrders`.

- [ ] **Step 3: Link back to the hub**

  Include a sentence near the end linking to `/blog/netsuite-suiteql-examples-ecommerce-integrations`.

### Task 3: Draft the Fulfillment Tracking Post

**Files:**

- Create: `data/blog/track-netsuite-item-fulfillments-shipping-packages-suiteql.mdx`

- [ ] **Step 1: Create the MDX file**

  Use this frontmatter exactly:

  ```mdx
  ---
  title: 'Track NetSuite Item Fulfillments and Shipping Packages with SuiteQL'
  date: '2026-05-01'
  tags: ['e-commerce', 'software-development', 'automation', 'custom-development']
  draft: true
  summary: 'Use NetSuite SuiteQL to connect item fulfillments back to sales orders and report package tracking numbers, carriers, shipment dates, and fulfillment metadata.'
  images: []
  ---
  ```

- [ ] **Step 2: Write the article body**

  Include these sections in order:

  ```mdx
  ## The fulfillment tracking problem

  ## Connect item fulfillments to sales orders

  ## Read fulfillment lines and original order lines

  ## Join package tracking records

  ## Build an order-level tracking history report

  ## Clean up duplicate package and carrier rows

  ## Operational uses for fulfillment tracking data
  ```

  Use cleaned-up query examples derived from `listItemFulfillmentsBySalesOrderId`, `listItemFulfillmentTrackingHistory`, and `listOrderFulfillmentTrackingHistory`.

- [ ] **Step 3: Link to related posts**

  Include links to the hub post and the partially fulfilled post.

### Task 4: Draft the Partially Fulfilled Orders Post

**Files:**

- Create: `data/blog/find-partially-fulfilled-sales-orders-netsuite-suiteql.mdx`

- [ ] **Step 1: Create the MDX file**

  Use this frontmatter exactly:

  ```mdx
  ---
  title: 'Find Partially Fulfilled Sales Orders in NetSuite with SuiteQL'
  date: '2026-05-01'
  tags: ['e-commerce', 'software-development', 'automation', 'custom-development']
  draft: true
  summary: 'Build a NetSuite SuiteQL report that finds partially fulfilled sales order lines, calculates pending quantities, and exports the result for operations teams.'
  images: []
  ---
  ```

- [ ] **Step 2: Write the article body**

  Include these sections in order:

  ```mdx
  ## Why partially fulfilled orders need their own report

  ## Filter open, fulfillable sales order lines

  ## Join fulfillment lines back to order lines

  ## Calculate pending quantity

  ## Return product, channel, location, and memo fields

  ## Export the report to CSV

  ## How operations teams use this report
  ```

  Use cleaned-up query examples derived from `listPartiallyFulfilledSalesOrderPendingItems` and `exportPartiallyFulfilledSalesOrderPendingItemsCsv`.

- [ ] **Step 3: Link to related posts**

  Include links to the hub post, the sales orders post, and the fulfillment tracking post.

### Task 5: Verify the MDX Series

**Files:**

- Verify: `data/blog/netsuite-suiteql-examples-ecommerce-integrations.mdx`
- Verify: `data/blog/query-netsuite-sales-orders-line-items-suiteql.mdx`
- Verify: `data/blog/track-netsuite-item-fulfillments-shipping-packages-suiteql.mdx`
- Verify: `data/blog/find-partially-fulfilled-sales-orders-netsuite-suiteql.mdx`

- [ ] **Step 1: Search for unresolved drafting markers**

  Run:

  ```bash
  rg -n "TB[D]|TO[D]O|FIXM[E]|lorem|insert " data/blog/netsuite-suiteql-examples-ecommerce-integrations.mdx data/blog/query-netsuite-sales-orders-line-items-suiteql.mdx data/blog/track-netsuite-item-fulfillments-shipping-packages-suiteql.mdx data/blog/find-partially-fulfilled-sales-orders-netsuite-suiteql.mdx
  ```

  Expected: no matches.

- [ ] **Step 2: Run the production build**

  Run:

  ```bash
  yarn build
  ```

  Expected: successful Next.js and Contentlayer build.

- [ ] **Step 3: Review changed files**

  Run:

  ```bash
  git diff --stat
  git status --short
  ```

  Expected: the four new blog posts and this plan file are changed or untracked, with no unrelated edits.
