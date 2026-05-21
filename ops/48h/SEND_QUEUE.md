# Manual Send Queue

Purpose: convert prepared assets into user-sendable actions without violating platform rules. Codex must not auto-send these messages.

Confirmed revenue remains `$0` until an order, paid invoice, or awarded bounty is visible.

## Priority 1: Freelancer n8n workflow repair opportunity

- channel: Freelancer
- url: https://www.freelancer.com/projects/n8n/workflow-repair-optimization
- draft source: `ops/48h/PROPOSALS_TO_SEND.md` lead #3
- suggested offer: `$1,500 Same-Day Workflow Rescue`; offer `$5,000 48-Hour Rescue Sprint` only if the buyer confirms full critical repair, optimization, testing, and handoff scope.
- why first: explicit broken workflow, n8n, WhatsApp/audio/AI model connection issues, data references, testing, and documentation. This is closest to the rescue offer.
- send condition: user confirms the project is still open and platform account allows a compliant proposal.
- do not ask for: passwords, API keys, tokens, WhatsApp account login, payment access, KYC, or private credentials.
- first ask after reply: sanitized n8n workflow export, one failed execution log, and screenshots of broken nodes.
- status after user sends: move to `proposal_sent`.

## Priority 2: Freelancer AI voice / Twilio to n8n urgent fix

- channel: Freelancer jobs index
- url: https://www.freelancer.com/jobs/n8n/
- draft source: `ops/48h/PROPOSALS_TO_SEND.md` lead #2
- suggested offer: `$1,500 Same-Day Workflow Rescue`; upsell to `$5,000` only for production hardening, retries, monitoring notes, and multiple call scenarios.
- why second: high urgency and direct match to Twilio, webhook routing, AI answer flow, and n8n debugging.
- send condition: user finds the exact open project in the logged-in Freelancer account; do not reply to index snippets.
- do not ask for: Twilio credentials, n8n credentials, API keys, call billing access, payment access.
- first ask after reply: redacted Twilio webhook error screen, n8n execution log, and the expected call path.
- status after user sends: move to `proposal_sent`.

## Priority 3: Freelancer AI workflow automation build/maintain

- channel: Freelancer
- url: https://www.freelancer.com/projects/n8n/expertise-based-workflow-automation
- draft source: `ops/48h/PROPOSALS_TO_SEND.md` lead #1
- suggested offer: `$499 Quick Diagnostic` first if scope is unclear; `$1,500 Same-Day Workflow Rescue` for one scoped workflow.
- why third: broad stack fit but scope can balloon into undefined ongoing work.
- send condition: user confirms project is still open and proposal is allowed.
- do not ask for: account logins, API keys, Gmail credentials, Airtable tokens, payment access.
- first ask after reply: identify one highest-priority workflow and request sanitized logs/screenshots.
- status after user sends: move to `proposal_sent`.

## Priority 4: n8n Community service post or reply

- channel: n8n Community
- url: https://community.n8n.io/t/freelancer-n8n-automation-expert-gmail-google-sheets-slack-ai-email-classification/289856
- draft source: `ops/48h/PUBLIC_POSTS_TO_SEND.md` n8n Community version
- suggested offer: do not lead with price in a community reply unless rules allow paid services; lead with a helpful diagnostic boundary.
- why fourth: relevant audience, but community rules matter and this must not look like spam.
- send condition: user confirms posting is allowed in the community and uses personal account context.
- do not ask for: credentials or off-platform payment if community rules prohibit commercial solicitation.
- first ask after reply: sanitized execution logs or workflow outline.

## Priority 5: LinkedIn/X public service post

- channel: LinkedIn or X
- url: user account
- draft source: `ops/48h/PUBLIC_POSTS_TO_SEND.md` LinkedIn / X short version
- suggested offer: public awareness post with 2 urgent slots.
- why fifth: easy distribution, but lower intent than project replies.
- send condition: user decides which personal/professional account to use.
- do not do: repeated posting, mass DMs, fake urgency beyond the two prepared slots.
- first ask after reply: tool used, expected behavior, actual behavior, sanitized log/screenshot.

## Tracking after any send

When the user sends one item, update:

- `ops/48h/LEAD_CANDIDATES.csv`: set status to `proposal_sent` or `post_sent`.
- `ops/48h/REVENUE_BOARD.md`: update next action and probability.
- `ops/48h/NIGHT_REPORT.md`: record as pipeline, not revenue.

Only move to confirmed revenue after platform order/payment/award evidence exists.
