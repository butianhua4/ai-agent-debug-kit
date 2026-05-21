# CI Risk Gate Buyer Reply Pack

Use this pack when a Fiverr buyer asks about the AI agent CI risk gate service.

Goal: turn a vague inquiry into a safe, scoped order without asking for secrets, private repositories, payment details, or off-platform access.

If the buyer needs proof before sharing requirements, use `docs/CI_RISK_GATE_CHAT_HANDOFF.md` with the pass/block proof card first.

## Fast Fit Check

Good fit:

- The buyer has AI agent logs, workflow traces, GitHub Actions logs, or JSON/JSONL reports.
- The buyer wants a warning or failing CI step before merge.
- The buyer can share a redacted sample log and repo structure.
- The scope is a lightweight gate, threshold tuning, and report handoff.

Bad fit:

- They need full security review, penetration testing, malware analysis, or credential handling.
- They require direct production access, private secrets, or account login.
- They ask to move communication or payment outside Fiverr.
- They want a guaranteed fix without showing safe sample logs.

## First Reply: Qualified Inquiry

```text
Hi, yes, I can help set up a lightweight AI agent log risk gate for CI.

To scope it safely, please send these details here in Fiverr chat:

1. CI provider, for example GitHub Actions
2. Log format, for example JSON, JSONL, Markdown, or plain text
3. One redacted sample log or error snippet
4. What should fail the gate: secrets, repeated failures, retries, cost spike, or high-risk score
5. Whether you want warning-only or fail-the-build behavior

Please do not send passwords, API keys, OAuth tokens, cookies, private customer data, payment information, or identity documents.
```

## If Buyer Has No Sample Log Yet

```text
No problem. I can start with a template gate and a sample log format.

For the first version, please tell me:

1. Which CI platform you use
2. Where agent logs are saved in the repo or build output
3. What risky patterns matter most to you
4. Whether the first version should warn only or fail CI

I can then deliver a starter workflow and show exactly where your real redacted log should plug in later.
```

## If Buyer Wants Private Repo Access

```text
For account safety, I do not need direct private repo access at the start.

Please share a redacted file tree, the current CI YAML without secrets, and one redacted sample log. I can prepare the gate as copy-paste files or patch instructions. If deeper access is needed later, we should first agree the exact scope inside Fiverr.
```

## If Buyer Wants A Guaranteed Security Gate

```text
This service is a lightweight CI risk signal, not a full security audit or penetration test.

It can flag risky log patterns such as secret-looking strings, repeated tool failures, retry loops, and high-risk scores. It cannot guarantee that all security issues are found. If that boundary works, I can set up the gate and provide a clear handoff report.
```

## If Buyer Asks For Price Guidance

```text
For a lightweight CI gate, I usually scope it like this:

Starter: template gate and threshold advice
Standard: working gate with sample log and Markdown/JSON report
Premium: tuned gate, failure examples, and team handoff notes

If you send the CI provider, log format, and one redacted sample log, I can recommend the right package.
```

## If Buyer Sends An External Link

```text
For Fiverr policy and account safety, I cannot open external links or move the project outside Fiverr.

Please paste the non-sensitive details here in Fiverr chat: CI provider, log format, error snippet, desired threshold, and whether the gate should warn or fail.
```

## Minimum Order Requirements

Ask for these before accepting or creating a custom offer:

- CI provider.
- Desired gate behavior: warn or fail.
- Redacted sample log or sample log format.
- One target risky pattern.
- Expected deliverable: workflow file, CLI command, report template, or all three.

## Custom Offer Draft

```text
I will set up a lightweight AI agent CI risk gate that checks redacted agent logs for repeated tool failures, risky strings, retry loops, and configurable high-risk score thresholds.

Deliverables:
- CI workflow or copy-paste YAML step
- Risk threshold recommendation
- Sample pass/fail log
- Markdown or JSON report example
- Short handoff note explaining how to tune the gate

Boundary: this is a preflight/risk-signal gate, not a full security audit. No passwords, API keys, OAuth tokens, cookies, private customer data, or payment data should be shared.
```

## Delivery Message Draft

```text
Here is the CI risk gate package.

Included:
1. Workflow step / command
2. Sample pass/fail log
3. Threshold notes
4. Report output example
5. Safe tuning instructions

Recommended next step: run it first in warning mode, review the report on 2-3 real redacted logs, then switch to fail mode only after the team agrees on the threshold.
```

## Operator Notes

- Do not open buyer external links.
- Do not request secrets, tokens, cookies, private data, payment data, or identity documents.
- Do not promise complete security coverage.
- Keep the promise narrow: lightweight CI risk signal, threshold tuning, workflow handoff.
- Ask the owner before sending a real buyer reply or custom offer.
