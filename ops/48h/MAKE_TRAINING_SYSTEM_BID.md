# Make.com Training System Bid

Updated: 2026-05-22T14:22:00+08:00

Source: https://www.freelancer.com/projects/make-com/automation-specialist-for-make-com

Status: proposal-ready after Freelancer profile/compliance gate.

Confirmed revenue: `$0`.

## Why This Is High Priority

- Budget: `$750-1500 USD`
- Client payment method: verified in public listing
- Pain: training rollout reminders across Email, SMS, and WhatsApp
- Strong fit: Make.com scenarios, Google Sheets control layer, Twilio/WhatsApp, iterators, date offsets, working-day rules, testability, handoff documentation
- Buyer explicitly asks two technical screening questions, which gives a chance to stand out from generic bids.

## Bid Fields

- Bid amount: `$1500`
- Delivery time: `7 days`
- Alternate smaller first milestone: `$499` architecture/diagnostic if they want to de-risk before full build

## Proposal Draft

```text
Hi, I can build this Make.com training rollout communication system with a focus on schedule accuracy, stakeholder routing, testability, and clean handoff documentation.

I do not need passwords, API keys, Twilio tokens, WhatsApp credentials, OAuth consent, or real learner data to start. We can begin safely from a sanitized Google Sheets template, fake cohort dates, placeholder message text, and your stakeholder/message schedule. You can connect real Twilio/WhatsApp credentials on your side.

My plan:
- structure the Google Sheets template for cohorts, stakeholders, dates, message templates, channels, and send status
- map the 22 messages by stakeholder, channel, trigger date, and offset
- build Make.com scenarios using iterators, filters, routers, and status updates
- add duplicate-send protection, retry visibility, and error logging
- create a test matrix with fake cohort dates before live rollout
- deliver handoff notes so your team can reuse the template for future groups

Answers to your screening questions:

1. For a trigger that fires at 9AM and 3PM every day across a multi-day training session, I would not create 22 separate fragile scenarios. I would keep the schedule data in Google Sheets, calculate due message rows, then run Make on a scheduled interval. The scenario filters rows where the send date/time is due, the stakeholder/channel matches, and `sent_at` is empty. After each successful send, Make writes back sent status, timestamp, channel, and any provider message ID. That gives duplicate protection and controlled retries.

2. For working days, I would avoid simple calendar-day offsets. I would use a transparent working-day table or formula-driven helper columns in Google Sheets that exclude weekends and client-specific holidays. Make then consumes the resolved send dates. If the rules become complex later, we can move the working-day calculation into a small helper function, but I would keep the first version understandable for non-developers.

Suggested scope: $1,500 for the first production-ready cohort workflow, including the Google Sheets control template, Make scenarios, Email/SMS/WhatsApp routing structure, testing with fake data, and documentation. If you want to de-risk first, I can also start with a $499 architecture/diagnostic milestone.

Can you share the sanitized sheet template, the 22-message schedule, channel rules, stakeholder list, and any holiday/working-day rules that must be respected?
```

## First Question To Ask

Which stakeholder sequence should be built and tested first: learners, facilitators, assessors, moderators, or project managers?

## Risk Boundaries

Do not ask for or accept:

- Twilio credentials
- WhatsApp Business credentials
- API keys
- OAuth grants
- access tokens
- learner phone numbers
- real participant data
- payment access
- wallet/KYC/tax/payout details
- off-platform contact

Use only:

- sanitized Google Sheets template
- fake learner/stakeholder rows
- placeholder message templates
- fake training dates
- screenshots with sensitive data hidden
- client-operated screen share if live provider settings are needed

## After Sending

Update:

- `ops/48h/LEAD_CANDIDATES.csv`
- `ops/48h/REVENUE_BOARD.md`
- `ops/48h/NIGHT_REPORT.md`

Do not count revenue unless the platform shows a paid order or confirmed award.
