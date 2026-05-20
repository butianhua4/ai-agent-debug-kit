# Continuous Operating Mode

This mode treats the monetization workflow as a rolling execution loop, not a passive order monitor.

## Core Principle

Never stop at "no order yet."

If there is no real marketplace order, immediately move to the next useful action:

- find a public opportunity
- improve a public product asset
- create a reusable delivery template
- build a small script
- prepare a safer buyer reply
- verify the repo
- update operating status

## Work Loop

1. Check Fiverr Inbox and Orders.
2. If a real order exists, follow safe intake and delivery.
3. If only a message exists, handle it inside Fiverr and do not open external links.
4. If there is no real order, search public opportunity sources.
5. If a strong public task exists, inspect it and score it before coding.
6. If no strong task exists, improve the public product and delivery assets.
7. Run the relevant verification command.
8. Commit and push only verified public-repo improvements.
9. Update operating status.
10. Continue with the next node.

## What Counts As Progress

Valid progress includes:

- verified code
- a tested script
- a reusable template
- a sample report
- a public listing draft
- a delivery checklist
- a bounty screening decision
- a buyer-safe response
- a public demo or docs improvement

Invalid progress:

- waiting for orders
- vague brainstorming
- unverified scripts
- empty placeholders
- editing old gigs without evidence
- opening buyer external links
- touching payout, KYC, tax, payment, wallet, or high-permission auth

## Active Opportunity Rule

When there is no order, pick the highest-value safe node in this order:

1. Real Fiverr order or buyer message
2. Public bounty candidate with score 10/14 or higher
3. Productized service asset that can be sold today
4. Delivery automation that reduces future fulfillment time
5. Public proof that improves buyer trust

## Verification Rule

Every code or packaging change must run at least one relevant check:

- `npm run preflight`
- `npm run render:aeo`
- `npm run check`
- `node --check <file>`
- JSON parse validation

If verification fails, fix it before publishing.

## Human Approval Gates

Pause only for:

- payout or withdrawal setup
- KYC or identity verification
- tax forms
- payments, subscriptions, ads, or paid tools
- wallet/OAuth/high-permission authorization
- private repository access
- Fiverr publishing/upload steps that require user-side file selection or final confirmation

## Current Safe Tracks

- AI workflow quick diagnosis
- AI agent log debugging
- AI workflow cost and failure audit
- CI agent risk gate
- custom AI automation script
- AEO / AI search readiness audit
- public JS/TS/docs/CI bounty screening

## Marketplace Reality

Fiverr can receive orders when gigs are active and the seller dashboard is accessible. If orders are zero, treat it as a traffic and opportunity pipeline problem, not a reason to stop.
