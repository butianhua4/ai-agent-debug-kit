# Freelancer Top 3 Send Script

Updated: 2026-05-22T14:48:00+08:00

Purpose: the fastest compliant send path after the Freelancer profile/compliance gate is clear.

Confirmed revenue remains `$0` until Freelancer shows an awarded/paid project.

## Before Sending

Only send if the project page is still open for bidding and the account can bid without adding funds.

Do not add funds, handle KYC, tax, payout, wallet, billing, Payoneer, Stripe, or payment setup. If Freelancer asks for any of those, stop and mark `USER_ACTION_REQUIRED`.

All messages must stay inside Freelancer. Do not ask clients to move off-platform.

## Send 1: Make.com Training System

URL: https://www.freelancer.com/projects/make-com/automation-specialist-for-make-com

Why first: highest current fit and budget signal, `$750-1500 USD`, payment-verified buyer, explicit Make.com/Twilio/WhatsApp scheduling questions already answered.

Bid amount:

```text
1500 USD
```

Delivery:

```text
7 days
```

Opening line:

```text
I can build this Make.com training rollout system with schedule accuracy, duplicate-send protection, and clean handoff documentation.
```

Proposal source:

```text
ops/48h/MAKE_TRAINING_SYSTEM_BID.md
```

Screening answers: use the two numbered answers in `MAKE_TRAINING_SYSTEM_BID.md`.

After sending, record status:

```text
sent_make_training_system
```

## Send 2: Ongoing Zapier Automation Management

URL: https://www.freelancer.com/projects/zapier/ongoing-zapier-automation-management

Why second: recurring maintenance potential across Zapier, IMAP, Nanonets, OpenAI, Xero, OCR, PDFs, and email automation.

Bid amount:

```text
499 CAD
```

Delivery:

```text
2 days
```

Opening line:

```text
I can help stabilize your Zapier/OpenAI/OCR/Xero workflow chain safely from sanitized run history and fake sample files.
```

Proposal source:

```text
ops/48h/FREELANCER_BID_FIELD_PACK.md
```

After sending, record status:

```text
sent_zapier_automation_management
```

## Send 3: OpenClaw Business Automation

URL: https://www.freelancer.com/projects/chatbot/openclaw-business-automation

Why third: direct OpenClaw business automation fit, can use `agent-skill-packs` as trust asset, and starts from fake data instead of risky store/customer credentials.

Bid amount:

```text
499 USD
```

Delivery:

```text
3 days
```

Opening line:

```text
I can scope and build this OpenClaw business automation safely, starting with one fake-data proof path before touching live systems.
```

Proposal source:

```text
ops/48h/OPENCLAW_BUSINESS_AUTOMATION_BID.md
```

After sending, record status:

```text
sent_openclaw_business_automation
```

## If Any Page Is Closed

Skip it immediately. Do not spend bids, upgrades, or funds on closed/select-only projects.

Fallback order:

1. `ops/48h/OPENCLAW_SYSTEMS_ENGINEER_BID.md`
2. `ops/48h/OPENCLAW_WINDOWS_AUTONOMOUS_BID.md`
3. `ops/48h/OPENCLAW_AWS_BID.md`
4. `ops/48h/FREELANCER_BID_FIELD_PACK.md` Bid #2: AI Bid Filter Automation

## Safe Client Intake After Reply

Ask only for:

- sanitized workflow exports
- redacted run history
- screenshots with secrets hidden
- fake payloads/sample files
- expected result
- actual result
- highest-impact workflow
- deadline

Never ask for:

- passwords
- API keys
- OAuth grants
- access tokens
- browser cookies
- payment access
- wallet/KYC/tax/payout details
- private customer data
- off-platform contact

## Revenue Accounting

Do not count proposal sent as revenue.

Count only:

- `confirmed_order`: Freelancer shows awarded/paid project
- `paid_milestone`: Freelancer shows funded/paid milestone
- `bounty_awarded`: bounty platform explicitly awards payout
