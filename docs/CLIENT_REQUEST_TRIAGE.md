# Client Request Triage

Use this checklist before accepting or replying to an AI automation, agent debugging, CI, or log-analysis request.

The goal is to move fast without opening unsafe links, requesting private access too early, or accepting work that cannot be delivered from safe inputs.

## Fast Classification

| Signal | Meaning | Action |
| --- | --- | --- |
| Platform order exists | The buyer has started a real paid workflow | Continue to scope and delivery |
| Buyer only says "I paid" but no order exists | Not a confirmed order | Ask them to place the order on platform |
| Buyer sends external document or unknown link | Possible off-platform or phishing risk | Ask them to paste the scope inside the platform |
| Buyer asks for private repo access before contract | High risk | Ask for redacted logs or public reproduction first |
| Buyer shares API keys, tokens, passwords, or customer data | Sensitive data exposure | Ask them to remove secrets before review |
| Buyer asks for spam, fake engagement, scraping protected accounts, or bypassing controls | Policy and account risk | Decline |
| Scope is public URL, redacted log, screenshot, CI error, or public repo | Good fit | Proceed with a scoped diagnostic offer |

## Safe Intake Questions

Ask for only the minimum inputs needed to diagnose the issue:

1. What workflow or automation should succeed?
2. What currently fails?
3. What exact error message or log line appears?
4. What system is involved: agent, CLI, GitHub Actions, browser tool, API, or script?
5. What result do you want: report, fix plan, small patch, or repeatable script?
6. Can you provide a public repo, redacted log, screenshot, or pasted config?

Do not request passwords, API keys, tokens, payment details, personal IDs, private customer data, or private repository access for initial triage.

## Safe Reply For Unknown External Links

```text
Thanks for reaching out. For safety, please paste the job scope directly here instead of using an external link.

I can help with AI automation, agent log debugging, CI failures, workflow risk gates, or small Node.js automation scripts.

Please send:
1. The workflow or task goal
2. The current error or problem
3. The expected result
4. Any redacted logs, screenshots, public URLs, or public repository links
5. Whether you need a report, a fix plan, or a small implementation

Please remove passwords, API keys, tokens, and private customer data before sharing.
```

## Go / No-Go Score

Score each request from 0 to 2:

- Clear paid platform order: 0 or 2
- Clear technical scope: 0 to 2
- Safe input available: 0 to 2
- Fits agent/debug/CI/automation service: 0 to 2
- Can deliver in 1 to 3 hours: 0 to 2
- No policy, payment, identity, or off-platform risk: 0 to 2

Decision:

- 10 to 12: accept or propose a scoped offer.
- 7 to 9: ask clarifying questions.
- 0 to 6: reject or defer.

## Offer Mapping

| Request type | Best offer |
| --- | --- |
| Redacted AI agent log fails | Agent log debugging report |
| CI workflow breaks on agent/tool output | GitHub Actions risk gate setup |
| AI workflow is expensive or unreliable | AI workflow cost and failure audit |
| Public website needs AI search visibility | AEO / AI Search Readiness audit |
| Repetitive browser or API task | Small Node.js automation script |

## Delivery Boundary

For a first paid task, prefer deliverables that can be verified without private access:

- Markdown report
- JSON report
- Redacted log diagnosis
- Public repo pull request
- Standalone Node.js script
- GitHub Actions workflow snippet
- Checklist and implementation plan

Do not promise production access, live account changes, payment setup, KYC, wallet actions, private data migration, or guaranteed ranking/revenue results.
