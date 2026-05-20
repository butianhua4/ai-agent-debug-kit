# Opportunity Pipeline

This pipeline keeps AI Agent Debug Kit aligned with real buyer demand without relying only on passive marketplace traffic.

## Operating Loop

1. Check marketplace inbox and orders.
2. If there is a real platform order, follow the safe intake and delivery process.
3. If there is no order, search for public demand signals.
4. Convert useful signals into a small productized offer, sample report, script, checklist, or demo.
5. Verify the new artifact with tests or a repeatable command.
6. Publish only the public, non-sensitive improvement.

This is a rolling loop, not a scheduled waiting room. If there is no order, move immediately to opportunity sourcing or public product development.

Full operating mode: `docs/CONTINUOUS_OPERATING_MODE.md`

## Demand Sources

- Fiverr inbox and order pages
- public GitHub issues
- public bounty boards
- public product-launch conversations
- AI automation, AEO, CI, and developer-tool trend signals
- buyer questions that can be answered without private data

## Acceptable Opportunity Types

- AI workflow diagnosis
- agent log analysis
- CI gate setup
- small Node.js automation scripts
- AEO / AI search readiness audit
- public docs, examples, and sample reports
- public JS/TS/docs/CI issues that can be reproduced locally

## Reject Or Defer

Reject or defer any opportunity that requires:

- private repository access before scope is clear
- production credentials
- payout, tax, wallet, KYC, subscription, or payment setup
- unknown buyer external links before a real order exists
- malware, spam, scraping abuse, or exploit work
- crowded bounty issues with active PRs and no clear path
- unclear bounty pages without a public issue or reproducible task

## Bounty Screening Score

Score public bounty candidates from 0 to 2 on each dimension:

- public issue clarity
- low setup cost
- JS/TS/docs/CI fit
- no wallet or OAuth requirement before coding
- few active PRs or claims
- reproducible locally
- clear payout or portfolio value

Attempt only candidates scoring 10 or higher out of 14.

## Marketplace Order Check

A message is not a real order.

Treat work as a real order only when the platform order page shows an order, contract, or paid custom offer.

If a buyer says they paid but the order is not visible, use the platform-safe reply and do not open external links.

## Safe Buyer Reply

```text
Thanks. I can help if we keep the scope clear and safe.

Please send the details here on the platform:

1. The workflow or page you want reviewed
2. The expected result
3. The current error, issue, or goal
4. A redacted log, screenshot, public URL, or minimal example
5. Whether you need a report, a fix plan, or a small implementation

Please remove passwords, API keys, tokens, customer data, and private credentials.
```

## Development Rule

Every public repo increment must include at least one of:

- `npm run preflight`
- a targeted syntax check
- a JSON parse check
- a renderer/demo command
- a clear manual verification note

Do not publish unverified scripts, empty placeholders, or vague service claims.

## Current Product Tracks

- AI workflow quick diagnosis
- agent log health check
- AI workflow cost and failure audit
- CI agent risk gate
- custom AI automation script
- AEO / AI search readiness audit

## Next Expansion Rules

Create a new gig or marketplace listing only when:

- the offer has a clear input
- the deliverable is concrete
- a sample or template exists
- the boundary is safe
- the user is present for uploads, publishing, or platform confirmations
