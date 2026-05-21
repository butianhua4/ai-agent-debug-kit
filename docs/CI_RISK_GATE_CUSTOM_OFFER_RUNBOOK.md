# CI Risk Gate Custom Offer Runbook

Use this one-page runbook when a Fiverr buyer asks about the AI agent CI risk gate service.

Goal: move from inquiry to a safe custom offer in one pass, without opening external links, requesting private repo login, or handling secrets.

## 1. Classify The Message

| Message Type | Action |
| --- | --- |
| Clear CI/log question | Continue to intake. |
| Vague "can you help?" | Send the intake mini-form. |
| "I already ordered, open this link" | Do not open link; ask for safe details in Fiverr chat. |
| Asks for repo login or secrets | Rescope to copy-paste files and redacted samples. |
| Asks for full security guarantee | Clarify this is a lightweight CI risk-signal gate. |

## 2. Send Intake If Scope Is Missing

Use `docs/CI_RISK_GATE_BUYER_INTAKE_MINI_FORM.md`.

Minimum safe fields:

- CI provider.
- Log format.
- Redacted sample or sample structure.
- Desired warning/fail behavior.
- Risk patterns to catch.
- Expected deliverable.

Stop if the buyer only provides external links, login instructions, secrets, cookies, OAuth tokens, payment data, identity documents, or private customer data.

## 3. Handle Objections Before Pricing

Use `docs/CI_RISK_GATE_BUYER_FAQ_AND_OBJECTIONS.md` if the buyer asks about:

- Repository access.
- Full logs.
- Security guarantees.
- Why a redacted sample is needed.
- Fail-build behavior.
- Delivery speed.
- Pricing.
- Slack, Teams, or PR comment add-ons.

## 4. Pick The Package

Use `docs/CI_RISK_GATE_CUSTOM_OFFER_CALCULATOR.md`.

Fast route:

| Route | Use When | Suggested Range |
| --- | --- | --- |
| Starter | CI provider known, no real log yet, template enough | USD 49-99 |
| Standard | One redacted sample, runnable CI gate expected | USD 199-299 |
| Premium | Multiple log shapes/jobs, threshold tuning, team handoff | USD 399-599 |

Default to Standard when the buyer has one redacted sample and wants a working gate.

## 5. Prepare The Custom Offer Draft

```text
I will set up a lightweight AI agent CI risk gate using your redacted log format.

Deliverables:
- CI workflow step or copy-paste command
- Risk threshold recommendation
- Sample pass/fail behavior
- Markdown or JSON report example
- Warning-mode rollout notes

Boundary:
This is a CI risk-signal gate, not a full security audit or penetration test. No direct repo login, passwords, API keys, OAuth tokens, cookies, payment data, identity documents, or private customer data are needed.
```

Add package-specific scope:

- Starter: template gate, sample command, threshold notes.
- Standard: working command/YAML, pass/fail samples, report example, handoff note.
- Premium: tuned gate, multiple examples, threshold rationale, rollout handoff.

Owner confirmation is required before sending any real custom offer.

## 6. Delivery QA Before Sending Files

Use `docs/CI_RISK_GATE_DELIVERY_QA_CHECKLIST.md`.

Required before delivery:

- Buyer details are redacted and inside Fiverr chat.
- Package route matches the promised deliverable.
- `npm run preflight` passes locally.
- Pass/fail samples behave as expected.
- Delivery message explains warning-mode rollout.
- No secrets, unredacted logs, external links, or private account access are included.

## Operator Stop Conditions

Pause and ask the owner if:

- Fiverr shows a real paid order with unusual requirements.
- Buyer asks for payout, payment, KYC, tax, identity, wallet, OAuth, or subscription actions.
- Buyer requires direct account login or private repo permissions.
- Buyer asks to communicate or pay outside Fiverr.
- Buyer sends external links as the only source of scope.

## Money Loop

Inquiry -> intake -> FAQ/objection reply -> package route -> owner-confirmed custom offer -> safe delivery QA -> reusable report/template asset.
