# CI Risk Gate Buyer FAQ And Objection Replies

Use this sheet when a Fiverr buyer is close to ordering the AI agent CI risk gate service but hesitates about access, price, guarantees, timing, or what to send.

Goal: answer common questions without asking for secrets, direct repo login, external links, payment details, identity documents, or private customer data.

## Quick Positioning

```text
This service adds a lightweight CI risk gate for AI agent logs.

It helps flag risky patterns before merge, such as repeated tool failures, retry loops, permission errors, secret-like text, and high-risk scores.

It is not a full security audit, penetration test, or guarantee that every issue will be caught.
```

## FAQ Replies

### Do you need access to my repository?

```text
No direct repo login is needed for the first version.

Please paste a redacted CI YAML snippet, a redacted file path or structure, and 10-20 redacted log lines inside Fiverr chat. I can deliver copy-paste files and clear setup instructions.
```

### Can I send you the full logs?

```text
Please send only redacted logs.

Remove passwords, API keys, OAuth tokens, cookies, private customer data, payment information, identity documents, and any production secrets before sharing. A 10-20 line redacted sample is usually enough to scope the first version.
```

### Can this guarantee my AI workflow is safe?

```text
No tool can guarantee full safety from a small log sample.

This service is a lightweight CI risk-signal gate. It can catch agreed patterns and make risky runs more visible before merge, but it does not replace a full security audit or production review.
```

### Why do you need a redacted sample?

```text
The redacted sample tells me the log format, field names, and failure patterns.

Without it, I can still deliver a Starter template, but a working gate needs at least a small safe sample or a clear synthetic format to test against.
```

### Can you make it fail the build?

```text
Yes, if the rule is clear.

My recommendation is to start in warning-only mode, test it on 2-3 redacted historical logs, then switch to fail-build mode after the signal looks reliable.
```

### How fast can this be delivered?

```text
If the scope is clear and you provide a redacted sample, a first working version can usually be delivered faster than a broad custom automation project.

For urgent delivery, please confirm the CI provider, log format, desired fail rules, and whether you want warning-only or fail-build behavior.
```

### Why does this cost more than a simple YAML snippet?

```text
The value is not only the YAML.

The work includes mapping your log format, choosing safe thresholds, preparing pass/fail examples, documenting warning vs fail rollout, and making the handoff understandable for your team.
```

### Can you add Slack, Teams, or PR comments?

```text
Yes, as an add-on if the base gate is already scoped.

For the first version, I recommend shipping the CI gate first. After that, alerts or PR comments can be added with a clear message format and no secrets.
```

### Can you work from an external task link?

```text
For Fiverr policy and account safety, I cannot open external task links or move the project outside Fiverr.

Please paste the non-sensitive scope here in Fiverr chat: CI provider, log format, redacted snippet, desired risk rules, and desired gate behavior.
```

## Objection Routing

| Buyer Concern | Best Reply | Package Direction |
| --- | --- | --- |
| "I don't have logs yet" | Offer Starter template and sample format. | Starter |
| "I need it running in CI" | Ask for redacted sample and CI provider. | Standard |
| "We have several workflows" | Explain tuning and handoff scope. | Premium |
| "Can you guarantee security?" | Clarify risk-signal boundary. | Rescope |
| "Can you log in and fix it?" | Decline direct login; offer copy-paste files. | Rescope / Standard |
| "Can you open this link?" | Keep all scope inside Fiverr chat. | Clarify |

## Short Close For A Custom Offer

```text
Based on your answers, I can prepare the CI risk gate as a scoped Fiverr order.

I will deliver:
- CI workflow step or command
- Risk threshold recommendation
- Sample pass/fail behavior
- Markdown or JSON report example
- Warning-mode rollout notes

No direct repo login, secrets, cookies, payment data, or private customer data are needed.
```

## Operator Rules

- Use `docs/CI_RISK_GATE_BUYER_INTAKE_MINI_FORM.md` before pricing if the buyer has not provided enough detail.
- Use `docs/CI_RISK_GATE_CUSTOM_OFFER_CALCULATOR.md` after the intake answer is complete.
- Do not send a real custom offer without owner confirmation.
- Do not open buyer external links.
- Do not accept secrets, account access, payment data, identity documents, or private customer data.
