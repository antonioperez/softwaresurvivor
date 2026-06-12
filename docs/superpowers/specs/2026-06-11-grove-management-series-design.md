# Grove Management Series Design

## Goal

Create a three-post blog series for software and organizational leaders based on notes from a discussion of Andy Grove's _High Output Management_. The series should translate Grove's ideas into practical guidance for modern engineering and leadership contexts rather than reading like a book summary.

## Audience

- Engineering managers
- Technical leads
- Fractional CTO buyers and operators
- Business leaders responsible for software teams or technical operations

## Series Strategy

The series should break the material into three focused posts rather than one long article. That keeps each post practical, readable, and aligned with the existing site voice.

The posts should be scheduled within the next week using Los Angeles local dates:

1. `2026-06-12 00:00:00`
2. `2026-06-14 00:00:00`
3. `2026-06-16 00:00:00`

All three posts should be created as scheduled drafts with `draft: true`.

## Post Plan

### Post 1

- Title: `Management Leverage for Software Leaders: What Andy Grove Still Gets Right`
- Slug: `management-leverage-software-leaders-andy-grove`
- Tags: `['software-development']`
- Core angle: management is leverage, not personal heroics

Content focus:

- A manager's output is the output of the team
- Meetings, decisions, feedback, hiring, and training as leverage points
- Why vague decision-making slows software organizations
- How to identify bottlenecks and process debt in technical teams
- Practical translation for engineering managers and org leaders

### Post 2

- Title: `Performance, Feedback, and Accountability for Engineering Leaders`
- Slug: `performance-feedback-accountability-engineering-leaders`
- Tags: `['software-development']`
- Core angle: honest performance management is part of leadership, not a separate HR ritual

Content focus:

- Ability versus motivation as different management problems
- Why one-size-fits-all motivation is weak leadership
- Direct feedback without ego management
- Performance reviews as operational responsibility
- Promotion risk and the Peter Principle in technical organizations

### Post 3

- Title: `Does Andy Grove's Management Model Still Work for Knowledge Teams?`
- Slug: `does-andy-grove-management-model-still-work-knowledge-teams`
- Tags: `['software-development']`
- Core angle: Grove's factory metaphor still helps in some places, but modern knowledge work needs limits and adaptation

Content focus:

- Where systems thinking still works well in software organizations
- Where knowledge work is less predictable than factory output
- Why creativity, ambiguity, and cross-functional work change the model
- What modern leaders should keep from Grove
- What modern leaders should avoid copying too literally

## Voice and Structure

Each post should match the site's current tone:

- Direct
- Practical
- Business-facing
- Structured with clear section headers
- Not academic
- Not written as literary criticism or a book-club recap

Each article should:

- Open with a concrete leadership problem
- Tie Grove's concept to software or organizational leadership
- Translate the idea into modern operating guidance
- End with a pragmatic takeaway rather than abstract reflection

## Content Boundaries

The series should stay grounded in Grove's ideas, but it should not depend on heavy quotation or assume the reader has read the book. The posts should stand alone as useful articles for leaders.

The series should avoid:

- Long book-summary passages
- Overly reverential treatment of Grove
- Academic management theory digressions
- Generic productivity advice detached from leadership responsibility

## Implementation Notes

Create three new files under `data/blog/` using the existing MDX frontmatter format:

- `title`
- `date`
- `tags`
- `draft`
- `summary`
- `images`

Each file should include:

- A concise summary aligned with search and preview use
- Empty `images: []`
- A full article body in the existing prose style

## Verification

After the posts are written:

1. Run `yarn build`
2. Fix any content or build issues
3. Leave the posts as scheduled drafts

## Out of Scope

- Publishing these posts now
- Adding custom illustrations
- Creating a landing page for the series
- Adding explicit internal links unless the natural writing flow supports them
