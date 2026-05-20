# AI Workflow Quick Diagnosis Offer

This is the low-friction entry product for turning a new buyer into a first paid order.

## Product Name

AI Workflow Quick Diagnosis

## Price

- USD 49
- RMB 299

## Delivery Time

24 hours after the buyer sends usable redacted material.

## One-Line Pitch

Send one redacted AI workflow log, screenshot, or failure note and get a one-page diagnosis with the top 3 likely fixes.

## Best For

- AI agent failed runs
- workflow loops
- malformed JSON output
- tool-call errors
- GitHub Actions AI workflow failures
- Dify, n8n, Make, Zapier, LangChain, OpenAI API, Claude Code, Cursor, or custom Node.js scripts
- unclear token or retry cost risk

## Buyer Sends

- one redacted log, trace, screenshot, or error message
- what the workflow should do
- what went wrong
- tool or model name if known

The buyer must remove:

- passwords
- API keys
- tokens
- cookies
- payment data
- private customer data
- production secrets

## Deliverables

- one-page diagnosis
- top 3 likely root causes
- risk labels
- next-step fix plan
- recommendation for whether a deeper audit, code fix, or CI gate is worth buying

## Scope Limit

This is not a full implementation package. It does not include:

- live production login
- private repository access
- full code rewrite
- guaranteed bug fix
- exact cost calculation without token/model data
- payment, KYC, or account setup

## Delivery Template

```markdown
# AI Workflow Quick Diagnosis

## Goal

The workflow should:

## Material Reviewed

- Format:
- Tool/framework:
- Model:
- Redaction status:

## Short Diagnosis

One paragraph summary of what is most likely going wrong.

## Top 3 Likely Causes

1. Cause:
   Evidence:
   Fix:

2. Cause:
   Evidence:
   Fix:

3. Cause:
   Evidence:
   Fix:

## Risk Labels

- Reliability:
- Cost:
- Tool-call:
- Output format:
- Security/redaction:

## Recommended Next Step

- Quick fix:
- Deeper audit needed: Yes/No
- Code fix needed: Yes/No
- CI gate useful: Yes/No
```

## Buyer Message

```text
Thanks. For the quick diagnosis, please send one redacted log, screenshot, trace, or error message, plus what the workflow should do and what went wrong.

Please remove passwords, API keys, tokens, cookies, payment data, private customer data, and production secrets.
```

## Delivery Message

```text
Hi,

I reviewed the redacted workflow material and prepared the quick diagnosis.

Included:
- short diagnosis
- top 3 likely causes
- risk labels
- recommended next step

No credentials, production secrets, payment data, or private customer data were required.
```

## Follow-Up Path

If the quick diagnosis finds a real issue, offer one of:

- USD 120 AI workflow cost and failure audit
- USD 149+ scoped automation fix
- USD 100+ CI risk gate setup
- USD 250+ custom workflow script

