# Claude Cowork Reseller Automation Bid Brief

## Live project

- Platform: Freelancer
- URL: https://www.freelancer.com/projects/api/Optimize-Automated-Reselling-Workflow/details
- Project ID: 40460116
- Status: Open
- Budget: CAD 250-750
- Bids at live check: 164
- Client: Canada, 4.9 rating, 6 reviews, identity/payment/deposit/email/profile/phone verified
- Deadline signal: bidding ends in about 6.5 days from the live check

## Buyer pain

The buyer has a Claude Cowork ecommerce reselling workflow that runs end-to-end only about 60% of the time. Known failure points:

- listing uploads stall
- Higgsfield jobs hang
- comparable sold-price research is slow
- no retry logic
- no step-level resume behavior
- no parallelism where it matters
- no observability

This is a strong match for an automation reliability audit, but the buyer explicitly says not to apply without shipped Claude Cowork workflow experience.

## Bid decision

Use one of these two paths only:

1. If actual Claude Cowork workflow experience can be represented honestly: bid CAD 499 for the initial paid audit.
2. If not: either skip, or submit the transparent limited-fit version below. Do not claim experience we cannot verify.

## Suggested bid fields

- Bid amount: CAD 499
- Delivery time: 2 days
- Milestone framing: paid audit first, then fixed repair/rebuild quote after diagnosis
- Package angle: audit + failure map + repair plan + optional execution

## Proposal draft

Hi, your issue sounds like a workflow reliability problem rather than a generic AI problem: stalled upload steps, long-running Higgsfield jobs, slow research, missing retry logic, no resumability, and no execution-level observability.

Before I bid aggressively, I want to be transparent: I can help with API orchestration, async job polling, webhook/retry patterns, failure logs, and automation rescue work. If you require prior shipped Claude Cowork-specific production workflows only, please confirm whether you are open to a focused paid audit from someone with adjacent AI automation/API reliability experience.

For the initial audit, I would check:

- whether the Higgsfield step uses polling, callbacks, or a blocking wait,
- where listing upload state is stored and whether failed uploads can resume,
- whether comparable research and Higgsfield generation can run in parallel,
- which step is actually consuming the most wall-clock time,
- what failure logs or checkpoints exist today.

I do not need passwords, API keys, tokens, OAuth grants, seller-account access, payment access, or private credentials. A screen share, redacted workflow map, sanitized timing/error logs, and one fake product payload are enough for diagnosis.

Deliverables for the paid audit:

- 3-5 actual bottlenecks ranked by impact,
- fix-in-place vs rebuild recommendation,
- retry/resume/observability plan,
- estimate for the repair phase.

If you are open to this approach, can you share whether Higgsfield is currently handled by polling only, and whether failed Cowork steps can be resumed individually or the full run must restart?

## Safety boundaries

Do not request or accept:

- passwords
- API keys
- tokens
- OAuth grants
- seller account access
- payment access
- wallet access
- KYC/tax/payout information
- off-platform contact or payment

Use only:

- screen share controlled by the client
- sanitized workflow map
- redacted logs
- fake product payload
- timing screenshots

## Current blocker

Freelancer blocks bidding until the user completes personal/profile/compliance fields:

- update skills
- verify email
- update profile
- legal name/profile fields
- city, ZIP/postal code, state/region, country
- date of birth
- profile hourly rate

Codex must not invent or submit these personal/compliance fields.

## Revenue status

This is qualified pipeline only. It is not revenue until Freelancer accepts the bid and the client funds/orders the work.
