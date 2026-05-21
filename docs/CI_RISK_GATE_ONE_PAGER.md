# CI Risk Gate One-Pager

Use this as a Fiverr gallery document, portfolio attachment, or buyer-facing proof sheet for the CI risk gate gig.

## Buyer Promise

I set up a lightweight CI gate that scans AI agent logs, workflow traces, and tool-call reports before a change merges. The gate does not replace security review, but it gives the team an early warning when logs show risky patterns.

## Best Fit

- AI agent repositories that already produce JSON, JSONL, Markdown, or text logs.
- Teams that want a pre-merge signal for repeated tool failures, secret-looking strings, runaway retries, or expensive model calls.
- Builders who need a small GitHub Actions workflow, not a heavy platform migration.

## What The Gate Checks

- Repeated tool-call failures or the same error appearing across many steps.
- Possible secrets, tokens, cookies, or credentials in logs.
- Retry loops, timeout clusters, and high-risk failure density.
- Cost-risk signals such as too many model calls or repeated failed calls.
- A configurable score threshold that can pass, warn, or fail CI.

## What The Buyer Sends

- A public or redacted repository structure.
- One redacted sample log or report.
- Current CI provider, usually GitHub Actions.
- The failure threshold they want to enforce.
- Any file paths that should be ignored.

Never send passwords, API keys, OAuth tokens, cookies, payout data, identity documents, or private customer data.

## Deliverables

| Package | Deliverable | Typical Use |
| --- | --- | --- |
| Starter | Risk-gate workflow draft plus threshold advice | Add a quick warning gate |
| Standard | Working workflow, sample log, and Markdown/JSON report | Block obvious bad logs before merge |
| Premium | Workflow, tuned thresholds, sample failure report, and team handoff notes | Use the gate as part of release readiness |

## Example GitHub Actions Step

```yaml
- name: Check AI agent logs
  run: |
    node cli.js ./logs/agent-run.jsonl --fail-on-risk all > ai-risk-report.md
```

## Public Proof

- Demo: https://butianhua4.github.io/ai-agent-debug-kit/
- Repository: https://github.com/butianhua4/ai-agent-debug-kit
- Fiverr profile: https://www.fiverr.com/aibuildflow

## Safe Boundary

This service sets up a lightweight risk signal. It does not guarantee that all security issues are found, and it does not require direct access to private production systems.
