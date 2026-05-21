# CI Risk Gate Delivery QA Checklist

Use this checklist before delivering any AI agent CI risk gate order.

Goal: avoid shipping a broken gate, leaking sensitive data, or promising security coverage beyond the lightweight CI signal.

## 1. Buyer Material Check

Required:

- [ ] CI provider is named.
- [ ] Desired mode is clear: warning-only or fail build.
- [ ] Log format is named: JSON, JSONL, Markdown, plain text, or mixed.
- [ ] At least one redacted sample log, sample structure, or synthetic substitute is available.
- [ ] Target risk patterns are countable.

Stop if the buyer only provides:

- External task links.
- Login instructions.
- Private repo invite without agreed scope.
- Secrets, API keys, OAuth tokens, cookies, payment data, identity documents, or private customer data.

## 2. Scope Match

Starter delivery is enough when:

- The buyer needs a template and threshold advice.
- There is no real redacted log yet.
- The gate starts in warning mode.

Standard delivery is required when:

- The buyer expects a runnable command or workflow step.
- The buyer shared one redacted sample log.
- Pass/fail examples are expected.

Premium delivery is required when:

- There are multiple log shapes or CI jobs.
- Threshold tuning and team handoff notes are expected.
- Multiple failure examples are needed.

If the buyer asks for full security review, production access, account login, or guaranteed protection, rescope before delivery.

## 3. Local Validation

Run or prepare the closest safe validation path:

```bash
npm run preflight
node cli.js docs/examples/ci-risk-gate-pass-log.jsonl --fail-on-risk all
node cli.js docs/examples/ci-risk-gate-fail-log.jsonl --fail-on-risk all
```

Expected result:

- Passing sample exits successfully.
- Failing sample exits non-zero.
- Report explains the risk flags.
- Delivery instructions tell the buyer to start in warning mode.

## 4. Delivery Package Check

Include only the files or snippets needed for the selected package:

- [ ] Workflow/YAML step or command.
- [ ] Threshold recommendation.
- [ ] Sample pass/fail explanation.
- [ ] Markdown or JSON report example.
- [ ] Handoff note for warning-mode rollout.
- [ ] Safety boundary note.

Do not include:

- Raw buyer secrets.
- Unredacted production logs.
- Private repository names if the buyer did not approve them.
- Off-platform contact information.
- Claims that this replaces a security audit.

## 5. Delivery Message

```text
Hi,

I prepared the CI risk gate package for your AI agent logs.

Included:
- CI workflow step or command
- Recommended threshold settings
- Sample pass/fail behavior
- Report example
- Safe rollout notes

Please run it in warning mode first, test it on 2-3 redacted historical logs, tune the threshold if needed, and switch to fail mode only after your team agrees on the signal quality.

Boundary: this is a lightweight CI risk signal, not a full security audit. No credentials, tokens, cookies, payment data, identity documents, or private customer data were required.
```

## 6. Post-Delivery Upsell Gate

Only suggest an upsell if the buyer has accepted the base delivery.

Good upsells:

- Tune thresholds against more redacted logs.
- Add PR comment summary.
- Add Slack or Teams alert.
- Add custom parser for their log format.
- Add a small dashboard for repeated failures and cost spikes.

Bad upsells:

- Direct login.
- Secret handling.
- KYC/payment/tax work.
- Full security guarantee.
- Off-platform work.

## Final QA Decision

- [ ] Safe to deliver now.
- [ ] Needs buyer clarification.
- [ ] Needs owner confirmation.
- [ ] Must be declined or rescoped.
