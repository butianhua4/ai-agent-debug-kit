# Public Lead Conversion Playbook

Status: revenue sprint asset, not a sent message, not confirmed revenue.

## Goal

Turn public automation pain signals into two separate revenue tracks without misusing platform buyer data:

1. Fulfill small paid lead-research work on Freelancer when awarded.
2. Build our own public-source pipeline for higher-ticket AI automation rescue offers.

## Hard Boundaries

- Do not use private buyer lists, private chat context, scraped personal data, login-only pages, leaked databases, or purchased spam lists.
- Do not contact Freelancer buyers off-platform.
- Do not route Freelancer customers to off-platform payment.
- Do not claim a lead is a customer, order, or confirmed revenue until the platform shows award/payment/order evidence.
- Do not ask for passwords, API keys, tokens, cookies, wallets, payment access, KYC, or tax documents.

## Public Signals Worth Collecting

| Signal | Why It Matters | Example Offer |
| --- | --- | --- |
| Job posts mentioning Zapier, n8n, Make, HubSpot, Salesforce, webhooks, APIs, Airtable, Google Sheets, or Apps Script | The company is already spending effort on workflow plumbing | $499 automation diagnostic |
| Hiring for RevOps, GTM Ops, Automation Engineer, CRM Admin, or Sales Ops | They likely have workflow debt and reporting bottlenecks | $1,500 same-day workflow rescue |
| Public bug reports, status pages, or community posts about failed automations | Stronger urgency than generic leads | $499 diagnostic or $1,500 rescue |
| Tool migration posts such as Excel to Sheets, Outlook automation, Power Automate, or API sync | Clear bounded deliverable | seed project or fixed-scope repair |
| Repeated manual data-entry or reporting roles | Pain is operational and recurring | automation audit plus prototype |

## Lead Row Schema

Use this schema for both buyer delivery and internal pipeline, but keep the two sheets separate:

| Field | Required | Notes |
| --- | --- | --- |
| company_name | yes | Public company name only |
| country_or_region | yes | Public source or inferred region |
| public_source_url | yes | Job post, careers page, public issue, public community post |
| contact_path | yes | Company contact page, public careers page, or platform-safe contact path |
| tool_signal | yes | n8n, Zapier, Make, OpenAI, HubSpot, Salesforce, API, webhook, Sheets, Outlook |
| pain_observed | yes | One sentence based only on public signal |
| fit_for_yashbank | optional | Use only for the Freelancer lead-research buyer |
| fit_for_our_offer | optional | Use for our internal automation rescue pipeline |
| urgency_score | yes | 1-5 based on recency, explicit failure, and business impact |
| budget_signal | yes | hiring, paid job post, enterprise tools, urgent wording, verified buyer |
| next_safe_action | yes | platform reply, public-source research, or wait for buyer award |

## Dual-Use Rule

If a lead is found while fulfilling a Freelancer lead-research order:

- Deliver only what the buyer paid for and what was promised.
- Do not reuse buyer-provided private filters, private target accounts, or paid deliverables for our own outreach.
- Public signals independently found from open sources can inform our market research, but keep records separate and do not mention the Freelancer buyer.

If a lead is found independently:

- It can enter our internal pipeline if the source is public and the pain signal matches automation rescue.
- Any outreach must be non-spam, personalized, and compliant with the platform or channel rules.
- Prefer inbound-safe posts and public portfolio proof over cold messages.

## Fast Qualification

Score 0-20:

- Tool fit: 0-5
- Pain clarity: 0-5
- Urgency: 0-5
- Budget signal: 0-3
- Safe contact path: 0-2

Only act on leads scoring 14+ unless they are part of a paid buyer deliverable.

## Offer Mapping

| Score / Situation | Offer |
| --- | --- |
| 14-15, unclear error | $499 Quick Diagnostic |
| 16-18, broken workflow or API sync | $1,500 Same-Day Workflow Rescue |
| 19-20, business-critical automation or multiple systems | $5,000 48-Hour AI Automation Rescue Sprint |
| Small platform seed job | Fixed seed bid only if it can create review/history |

## Yashbank-Specific Next Step

If Yashbank replies positively:

> Glad the direction fits. I can prepare the first 50-lead batch with company, public contact path, source link, observed problem, service-fit note, and priority score. To keep this clean on Freelancer, please award the project or create the milestone first, then I will deliver the batch here.

If Yashbank asks for more free leads:

> I can share a couple more examples to calibrate quality, but the full 50-lead batch is the paid deliverable. I will keep it public-source only and avoid scraped private data or spam lists.

## Internal Next Step

Build a separate internal lead sheet from public sources only:

1. Search public job posts and communities for automation pain.
2. Keep only 14+ score leads.
3. Prepare one personalized diagnostic angle per lead.
4. Use the public offer page or platform-safe reply path.
5. Track actual paid outcomes separately from pipeline.
