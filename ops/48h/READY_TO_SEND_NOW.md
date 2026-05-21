# Ready To Send Now

These are short user-send drafts. Codex must not send them automatically.

Confirmed revenue remains `$0` until a platform order, paid invoice, or awarded bounty is visible.

Offer page: https://butianhua4.github.io/ai-agent-debug-kit/rescue.html

## Send order

1. Freelancer n8n Webhook -> MySQL Automation.
2. Freelancer n8n + Meta Webhook Automation.
3. Freelancer n8n JSON webhook trigger integration.
4. Reddit r/n8n inherited workflow cleanup thread.
5. Freelancer workflow repair / optimization project.
6. Freelancer AI voice / Twilio to n8n urgent fix if the exact project is still visible in the logged-in account.

## Draft 0A: Freelancer n8n Webhook -> MySQL Automation

Source: https://www.freelancer.com/projects/n8n/webhook-mysql-automation

```text
Hi, I can build this n8n Webhook -> validation/transform -> MySQL workflow with clear mapping, duplicate protection, and handoff notes.

I do not need production database passwords, API keys, tokens, or private credentials to start. Please share a sample webhook payload with fake values, the target MySQL table/column schema, and the field that should be used as the unique dedupe key.

My build plan:
- Webhook trigger and payload parsing
- field mapping into MySQL columns
- required-field validation and duplicate checks
- failure branches for bad payloads or database write errors
- sample-call testing
- documentation for updating mappings and redeploying later

For the compact scope, I can keep this inside your listed fixed budget. If you want stronger rescue-grade validation, replay testing, and failure documentation, I can also do a $499 hardening/diagnostic pass.

What field should be used as the unique key to prevent duplicate rows?
```

Suggested status after sending: `proposal_sent`.

## Draft 0B: Freelancer n8n + Meta Webhook Automation

Source: https://www.freelancer.in/projects/n8n/Meta-Webhook-Automation.html

```text
Hi, I can help design and stabilize the n8n + Meta webhook flow for Messenger/Instagram and ChatGPT routing.

For safety, I do not need passwords, access tokens, API keys, app secrets, payment access, or admin credentials to begin. A good first step can be done from redacted screenshots, sample webhook events, and your intended routing rules.

My diagnostic/build plan:
- map Messenger/Instagram webhook events and subscription requirements
- define n8n trigger, verification, routing, and enrichment nodes
- design ChatGPT tagging/reply logic with guardrails
- add error handling for expired permissions, missing fields, duplicate events, and failed posts
- document how to expand the flow and rotate credentials safely on your side

Because Meta token/app setup can become the real blocker, I would start with a small diagnostic/architecture sprint, then move to implementation once permissions and webhook events are confirmed.

Is the Meta app already receiving webhook test events successfully?
```

Suggested status after sending: `proposal_sent`.

## Draft 0C: Freelancer n8n JSON Webhook Trigger

Source: https://www.freelancer.com/projects/api/develop-webhook-trigger-integration

```text
Hi, I can build the n8n webhook trigger path with JSON POST handling, API-key authentication pattern, validation, and a short setup guide.

I do not need your real API key, tokens, passwords, or private credentials. I can deliver the workflow using placeholder environment variables and a sample payload, then document exactly where you add the real value on your side.

Implementation plan:
- define the POST webhook contract and expected JSON schema
- add API-key header validation using an environment variable placeholder
- normalize and validate incoming JSON
- return clear success/error responses
- add test examples with curl/Postman-style requests
- provide import/redeploy notes

What header name should carry the API key, and what should the success response look like?
```

Suggested status after sending: `proposal_sent`.

## Draft 1: Reddit r/n8n workflow cleanup reply

Source: https://www.reddit.com/r/n8n/comments/1tgrlhg/we_have_50_n8n_flows_undocumented_constantly/

Use only if subreddit rules allow helpful service replies. Do not DM automatically.

```text
I would not migrate everything first. With inherited n8n estates, the fastest first step is usually a read-only triage pass:

1. Pull the last 30-60 days of execution history and rank workflows by run count, failure rate, and blast radius.
2. Separate dead/seasonal flows from active business-critical flows before touching architecture.
3. For the active flows, look for common silent-failure patterns: Continue On Fail, expired OAuth/credentials, changed webhook/API response shapes, missing error branches, and nodes writing to external systems without verification.
4. Document each live workflow in a consistent format before deciding whether it should stay in n8n, become a sub-workflow, or move to Python/Cloud Run.

I help with this kind of audit using sanitized workflow exports and redacted execution logs only. No passwords, API keys, tokens, or account access needed.

Offer/safe intake: https://butianhua4.github.io/ai-agent-debug-kit/rescue.html

First question: are the silent failures mostly credentials/API schema changes, swallowed node errors, or unclear business ownership?
```

Suggested status after sending: `post_sent`.

## Draft 2: Freelancer workflow repair / optimization

Source: https://www.freelancer.com/projects/n8n/workflow-repair-optimization

```text
Hi, I can help repair and stabilize this n8n workflow.

The issues you listed match my workflow rescue process: broken trigger references, disconnected branches, AI Agent model connections, data reference errors, webhook payload mapping, and end-to-end validation.

For security, I do not need passwords, API keys, tokens, wallet/payment access, or private credentials to start. Please provide a sanitized n8n workflow export with credentials removed, redacted execution logs, and screenshots of the failing nodes.

Offer/safe intake: https://butianhua4.github.io/ai-agent-debug-kit/rescue.html

Suggested scope:
- $1,500 for a focused critical-fix rescue sprint covering Phase 1 and a concise report.
- $5,000 for a full 48-hour rescue across critical fixes, optimization, testing, and handoff after I see the sanitized workflow.

Could you share the sanitized workflow export and one failed execution log so I can confirm the exact scope?
```

Suggested status after sending: `proposal_sent`.

## Draft 3: Freelancer AI voice / Twilio to n8n urgent fix

Source: https://www.freelancer.com/jobs/n8n/

Only send if the exact project is available in the logged-in Freelancer account. Do not reply to an index snippet.

```text
Hi, I can help stabilize the Twilio + n8n AI voice flow and get one clean call loop working.

I work on failed automations, webhook routing, AI node failures, JSON mapping, and API integration debugging. I do not need passwords, API keys, tokens, wallet/payment access, or private credentials to begin.

Please share sanitized screenshots of the n8n workflow, redacted execution logs, the Twilio webhook/error screen, and the expected call path.

Offer/safe intake: https://butianhua4.github.io/ai-agent-debug-kit/rescue.html

For an urgent same-day rescue, my suggested quote is $1,500 for one call flow from inbound call to AI response and confirmation path. If the system needs deeper production hardening, retry logic, monitoring, and multiple call scenarios, I would scope that as a $5,000 48-hour sprint.

Where does the call fail right now: Twilio webhook trigger, n8n routing, AI response, or confirmation step?
```

Suggested status after sending: `proposal_sent`.

## After any send

Update:

- `ops/48h/LEAD_CANDIDATES.csv`
- `ops/48h/REVENUE_BOARD.md`
- `ops/48h/NIGHT_REPORT.md`

Do not count as revenue until the platform shows paid order, paid invoice, or awarded bounty evidence.
