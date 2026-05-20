# Fiverr Operating Playbook

Operating rules for the `aibuildflow` Fiverr account and AI Agent Debug Kit service funnel.

## Current Public Assets

- Fiverr profile: `https://www.fiverr.com/aibuildflow`
- Live gig: `https://www.fiverr.com/aibuildflow/fix-agent-workflow-errors-and-debug-automation-logs`
- Public demo: `https://butianhua4.github.io/ai-agent-debug-kit/`
- Public repository: `https://github.com/butianhua4/ai-agent-debug-kit`

## Daily Loop

1. Check Fiverr Inbox.
2. Reject or safely reply to suspicious external-link messages.
3. Check Fiverr Orders.
4. If no real orders exist, improve the public funnel:
   - profile completeness
   - gig packs
   - GitHub Pages CTA
   - portfolio material
   - buyer-facing docs
5. Check GitHub status and keep public docs current.
6. Prepare the next Fiverr listing or platform listing from existing copy packs.

## Message Triage

### Likely Spam

Signals:

- external link before an order exists
- "confirm this" or "I completed" without a Fiverr order
- WhatsApp, Telegram, email, Discord, or payment-outside-Fiverr request
- file download from a strange domain

Action:

```text
Hi, please keep all details, files, and payments inside Fiverr. If you need this service, please place an order or send the requirements here in this chat. I cannot open external links for safety reasons.
```

Do not click the link.

### Real Lead

Signals:

- describes an AI agent, workflow, automation, Node.js, JSONL, JSON, Python, or CI failure
- asks for scope, delivery time, or price
- attaches or pastes safe redacted logs inside Fiverr

Action:

```text
Thanks. I can help with this if we keep the scope clear. Please send the workflow goal, sample input, expected output, and the exact error message here in Fiverr. Do not send passwords, API keys, tokens, payment data, or private customer data.
```

### Ready For Order

Create or recommend an order when:

- the buyer has sent a redacted sample or clear error
- the package is obvious
- no private account access is required
- paid API usage is not required, or buyer provides test quota

## Package Routing

### Basic: USD 90

Use when:

- one log file or trace
- report only
- no code patch requested

Deliver:

- concise Markdown report
- top suspected causes
- next steps

### Standard: USD 150

Use when:

- root-cause analysis is needed
- failed tool calls or repeated loops need explanation
- buyer wants scoped fix recommendations

Deliver:

- deeper report
- risk flags
- likely fix plan
- verification notes

### Premium: USD 300

Use when:

- buyer needs patch guidance
- multiple traces or reproduction notes are included
- buyer wants before/after reasoning

Deliver:

- full debug report
- reproduction notes
- patch guidance
- test notes

## Custom Offer Rules

Create a custom offer only after scope is clear.

Do not create custom offers for:

- vague "fix everything" requests
- requests requiring production passwords
- security exploitation
- spam automation
- account farming
- platform policy evasion
- private repository access without explicit owner approval

Ask the owner before:

- any custom offer above USD 300
- accepting work that requires private repo access
- accepting work that requires paid API spending
- accepting urgent delivery under 24 hours
- accepting live account access

## Delivery Workflow

1. Save the buyer's redacted input in a local working folder outside the public repo.
2. Run AI Agent Debug Kit locally when logs are available.
3. Produce a Markdown report using `docs/CLIENT_DELIVERY_TEMPLATE.md`.
4. Redact sensitive content before delivery.
5. Deliver inside Fiverr only.
6. Do not share local internal notes unless cleaned for the buyer.

## Owner Required

Stop and ask the owner for:

- payout or bank setup
- tax forms
- identity verification
- phone or SMS verification
- paid subscriptions
- accepting or modifying a paid order if the consequence is unclear
- private repository access
- deleting or pausing live services

## Current Known Limitation

The in-app browser may fail to type into some Fiverr form fields or upload files. When that happens, keep progressing by preparing exact copy packs and file paths for manual upload.

Portfolio image path:

```text
C:\Users\33065\Documents\Codex\2026-05-18\5000\fiverr-portfolio-ai-agent-debug-kit.png
```
