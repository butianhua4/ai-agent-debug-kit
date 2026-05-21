# CI Risk Gate Custom Offer Calculator

Use this calculator after a buyer provides safe, redacted CI/log details for the AI agent CI risk gate service.

Goal: choose a package in under 60 seconds without underpricing complex work or promising access-heavy delivery.

If the buyer has not provided enough detail yet, send `docs/CI_RISK_GATE_BUYER_INTAKE_MINI_FORM.md` first and score the reply here after they answer.

## Inputs To Score

Only use details pasted inside Fiverr chat:

- CI provider.
- Log format.
- One redacted sample log or sample structure.
- Desired gate behavior: warning-only or fail build.
- Risk patterns to catch.
- Expected deliverable.

Do not ask for passwords, API keys, OAuth tokens, cookies, private customer data, payment data, identity documents, or private repo login.

## Fast Package Decision

| Buyer Signal | Starter | Standard | Premium |
| --- | --- | --- | --- |
| CI provider known | Required | Required | Required |
| Redacted sample log | Optional | Required | Required |
| Number of risk rules | 1-2 | 3-5 | 5+ or custom |
| Deliverable | Template only | Working gate + samples | Tuned gate + handoff |
| Behavior | Warning-only preferred | Warning or fail build | Warning/fail with rollout notes |
| Repo access needed | No | No | No direct login; copy-paste files only |
| Buyer urgency | Flexible | Same/next day | Same day with clear scope |
| Suggested range | USD 49-99 | USD 199-299 | USD 399-599 |

Default route: if the buyer has a redacted sample log and wants the gate to actually run in CI, use Standard.

## Starter Route

Choose Starter when:

- The buyer has no real log yet.
- They only need a copy-paste workflow step.
- They want warning-only behavior.
- They are testing whether CI log gating is useful.

Offer copy:

```text
Based on your current details, I recommend the Starter package.

I will deliver a copy-paste CI gate template, sample command, risk threshold notes, and a short handoff explaining where your real redacted logs should plug in later.

This is best when you want a safe first version without direct repo access or private data sharing.
```

## Standard Route

Choose Standard when:

- The buyer has one redacted sample log.
- They want a working pass/fail or warning gate.
- The rules are clear: repeated failures, secret-like strings, retries, permission errors, or high-risk scores.
- They need a report example.

Offer copy:

```text
Based on your redacted sample log, I recommend the Standard package.

I will deliver a working CI risk gate command/YAML step, pass/fail sample logs, a Markdown or JSON report example, threshold notes, and a short handoff so your team can run it in warning mode first and switch to fail mode later.
```

## Premium Route

Choose Premium when:

- The buyer has multiple log shapes or multiple CI jobs.
- They need tuned thresholds and team handoff notes.
- They want several failure examples.
- They need rollout guidance for warning mode to fail mode.

Offer copy:

```text
Based on the number of log patterns and rollout needs, I recommend the Premium package.

I will deliver a tuned CI risk gate, multiple pass/fail examples, report wording, threshold notes, and team handoff guidance for warning-mode rollout before fail-mode enforcement.

Boundary: this is a lightweight CI risk-signal gate, not a full security audit or penetration test.
```

## Add-On Triggers

Add scope only after the buyer confirms the base package:

- Extra CI provider: add USD 75-150.
- Extra log format: add USD 75-150.
- Extra report format: add USD 50-100.
- Team handoff call notes or written rollout plan: add USD 100-200.
- Same-day rush: add USD 75-200 if scope is clear.

Do not add scope for direct login, secret handling, KYC, payment systems, or private customer data. Those are stop conditions, not upsells.

## Decline Or Rescope

Use this if the buyer asks for full security guarantees, account login, off-platform work, or unknown production access:

```text
That scope is bigger than this CI risk-gate service.

I can help with a lightweight gate that flags risky log patterns and produces a clear handoff, using only redacted logs and copy-paste files inside Fiverr. I cannot handle secrets, account login, private customer data, or guarantee complete security coverage.

If that narrower scope works, I can route it into the right package.
```

## 60-Second Pricing Checklist

- [ ] Buyer gave CI provider.
- [ ] Buyer gave redacted log or sample structure.
- [ ] Buyer chose warning-only or fail-build behavior.
- [ ] Risk rules are countable.
- [ ] No secrets, cookies, OAuth tokens, or private customer data.
- [ ] No external-link dependency.
- [ ] No direct private repo login required.
- [ ] Package selected: Starter / Standard / Premium.
- [ ] Owner confirms before sending a real custom offer.
