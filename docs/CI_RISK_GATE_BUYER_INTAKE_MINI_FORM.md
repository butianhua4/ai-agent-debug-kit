# CI Risk Gate Buyer Intake Mini Form

Use this mini form when a Fiverr buyer is interested in the AI agent CI risk gate service but has not provided enough safe details to price or deliver the work.

Goal: collect only the minimum redacted details needed to route the buyer into Starter, Standard, or Premium without opening external links, requesting repo login, or handling secrets.

## Copy To Buyer

```text
Thanks. I can scope this safely inside Fiverr chat.

Please paste the details below, using redacted examples only:

1. CI provider:
   Example: GitHub Actions, GitLab CI, CircleCI, Azure Pipelines, other

2. Current log location or expected log path:
   Example: build output, agent.log, logs/agent-run.jsonl

3. Log format:
   Example: JSON, JSONL, Markdown, plain text, mixed

4. Redacted sample:
   Paste 10-20 redacted log lines or describe the structure.

5. What should the gate flag or fail?
   Example: secret-like strings, repeated failures, retries, permission errors, cost spike, high risk score, other

6. Desired behavior:
   Warning-only first, fail build now, or not sure

7. Expected deliverable:
   Template only, working YAML + CLI command, tuned thresholds + handoff

8. Deadline or urgency:
   Flexible, same/next day, urgent

Please do not send passwords, API keys, OAuth tokens, cookies, private customer data, payment information, identity documents, or any unredacted production secrets.
```

## Fast Review

- Missing CI provider: ask for CI provider before pricing.
- Missing redacted sample: route to Starter or ask for 10-20 safe sample lines.
- Buyer wants a runnable CI step: require at least one redacted sample or synthetic substitute.
- Buyer wants multiple jobs, formats, or tuned thresholds: route toward Premium.
- Buyer asks for direct login, private repo access, secrets, or external links: rescope before continuing.

## Package Routing

| Intake Signal | Route | Why |
| --- | --- | --- |
| CI provider only, no sample log | Starter | Template and threshold advice are safest. |
| CI provider + redacted sample + 1-5 rules | Standard | Enough detail for a working command/YAML gate. |
| Multiple log shapes, jobs, or rollout notes | Premium | Requires tuning and handoff guidance. |
| External link only | Clarify | Keep all safe details inside Fiverr chat. |
| Secrets or account access requested | Stop / Rescope | Out of boundary for this service. |

## Safe Clarification Reply

```text
Thanks. I can help, but I need the scope in a safe format before pricing.

Please paste the CI provider, log format, desired risk rules, and 10-20 redacted log lines here in Fiverr chat. I cannot open external task links or handle secrets, tokens, cookies, payment data, identity documents, or private customer data.
```

## Ready For Custom Offer Reply

```text
Thanks, this is enough to scope.

Based on the CI provider, redacted sample, risk rules, and desired behavior, I can prepare a lightweight CI risk gate with a workflow step, threshold notes, pass/fail example, and short handoff.

I will keep the delivery to redacted logs and copy-paste files only. No direct repo login or secrets are needed.
```

## Stop Or Rescope Reply

```text
That part is outside this service because it involves account access, secrets, private customer data, or off-platform links.

I can still help with a safer version: paste a redacted sample and the desired risk rules here in Fiverr chat, and I will deliver a copy-paste CI risk gate package without direct login or sensitive data.
```

## Operator Intake Checklist

- [ ] Buyer details are inside Fiverr chat, not only in an external link.
- [ ] CI provider is known.
- [ ] Log format or sample structure is known.
- [ ] Redacted sample is present or Starter route is selected.
- [ ] Desired behavior is warning-only, fail build, or explicitly undecided.
- [ ] No secrets, cookies, OAuth tokens, payment data, identity documents, or private customer data.
- [ ] No direct private repo login is required.
- [ ] Package route is selected before writing a custom offer.
- [ ] Owner confirms before any real custom offer is sent.
