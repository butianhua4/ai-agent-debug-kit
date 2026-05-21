# CI Risk Gate Chat Handoff

Use this handoff when a buyer asks about the CI risk gate gig and needs a quick visual proof before sharing requirements.

Goal: move the buyer from a vague "can you do this?" message into a scoped Fiverr order without asking for private repository access, account login, secrets, external links, payment data, or identity documents.

## Attach Or Reference

Use these assets in this order:

1. `assets/ci-risk-gate-sample-proof.png` - visual pass/block proof card.
2. `assets/ci-risk-gate-one-pager.pdf` - one-page buyer explainer.
3. `docs/examples/ci-risk-gate-sample-pair.md` - technical pass/fail sample pair.

If the platform only allows one attachment, use the proof card first. It explains the value fastest.

## First Buyer Reply With Proof Card

```text
Hi, yes, I can help set up a lightweight CI risk gate for AI agent logs.

The attached sample shows the intended behavior: a clean redacted log passes, while a risky log with repeated failures, permission issues, and secret-like text is blocked before merge.

To scope this safely, please paste these details here in Fiverr chat:

1. CI provider, for example GitHub Actions
2. Log format, for example JSON, JSONL, Markdown, or plain text
3. One redacted sample log or 10-20 redacted error lines
4. What should fail the gate: secrets, repeated failures, retries, cost spike, or high-risk score
5. Whether you want warning-only or fail-the-build behavior

Please do not send passwords, API keys, OAuth tokens, cookies, private customer data, payment information, or identity documents.
```

## If Buyer Has No Log Yet

```text
No problem. I can start with a template gate and sample log format.

Please send:

1. Your CI platform
2. Where agent logs will be saved, for example build output or a log file path
3. The top 2-3 risky patterns you want flagged
4. Whether the first version should warn only or fail CI

I can deliver a starter gate first, then show exactly where your real redacted logs plug in later.
```

## If Buyer Wants Direct Repo Login

```text
For account safety, I do not need direct repo login for the first version.

Please paste a redacted file tree, your current CI YAML without secrets, and one redacted sample log. I can deliver copy-paste files, a workflow step, and clear patch instructions inside Fiverr.
```

## If Buyer Sends External Links

```text
For Fiverr policy and account safety, I cannot open external links or move the project outside Fiverr.

Please paste the non-sensitive details here: CI provider, log format, desired risk rules, and one redacted snippet. I can scope the work from that.
```

## Custom Offer Routing

Use this only after the buyer has given enough safe details.

Starter fit:

- Buyer only needs a template workflow and threshold advice.
- Suggested range: USD 49-99.
- Deliverable: copy-paste gate step, sample command, and tuning note.

Standard fit:

- Buyer has a redacted sample log and wants a working pass/fail gate.
- Suggested range: USD 199-299.
- Deliverable: working command/YAML, pass/fail samples, Markdown or JSON report example, and handoff notes.

Premium fit:

- Buyer wants tuned thresholds, multiple sample patterns, report wording, and team handoff.
- Suggested range: USD 399-599.
- Deliverable: tuned gate, failure examples, report template, handoff notes, and follow-up recommendations.

## Custom Offer Draft

```text
I will set up a lightweight AI agent CI risk gate using your redacted log format.

Deliverables:
- CI workflow step or copy-paste YAML
- Risk threshold recommendation
- Sample pass/fail logs
- Markdown or JSON report example
- Short handoff note explaining how to tune warning vs fail mode

Boundary: this is a CI risk-signal gate, not a full security audit. Please do not share passwords, API keys, OAuth tokens, cookies, private customer data, payment details, or identity documents.
```

## Safety Stop Rules

Stop and ask the owner before:

- Sending any real buyer reply or custom offer.
- Opening buyer links.
- Accepting private repo access.
- Requesting or handling secrets, cookies, OAuth tokens, payment data, KYC, identity documents, or private customer data.
- Promising a guaranteed security fix.
- Offering off-platform communication or payment.

## Operator Checklist

- [ ] Confirm no real order is already active.
- [ ] Attach or reference `assets/ci-risk-gate-sample-proof.png`.
- [ ] Ask for only redacted details in Fiverr chat.
- [ ] Route to Starter / Standard / Premium only after scope is clear.
- [ ] Keep the promise narrow: lightweight CI gate, risk flags, threshold tuning, and handoff.
