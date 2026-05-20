# AI Workflow Audit Delivery Kit

This kit turns the `AI Workflow Cost and Failure Audit` service into a repeatable delivery workflow. Use it when a buyer sends redacted logs, traces, GitHub Actions output, or AI automation failure notes.

## Safe Intake Checklist

Before starting, confirm that the buyer provided:

- workflow goal
- expected output
- actual failure or cost concern
- redacted log, trace, or sample output
- tool or framework name
- model name if known
- target deliverable: audit only, fix plan, or CI gate recommendation

Reject or ask for a redacted version if the input contains:

- passwords
- API keys
- bearer tokens
- cookies
- payment data
- private customer data
- production account access

## Triage Steps

1. Identify the input format: plain text, JSON, JSONL, Markdown, CI log, or mixed notes.
2. Count visible errors, warnings, retries, repeated messages, and failed tool calls.
3. Mark output-shape problems such as malformed JSON, missing fields, or unexpected schema drift.
4. Look for cost signals such as repeated loops, unnecessary retries, duplicate prompts, or oversized context.
5. Group findings by risk: reliability, cost, tool-call, output-format, security/redaction, and CI readiness.
6. Recommend only scoped next steps that can be verified from the provided material.

## Delivery Report Template

```markdown
# AI Workflow Cost and Failure Audit

## Client Goal

The workflow was expected to:

## Input Reviewed

- Format:
- Tool/framework:
- Model:
- Number of traces or examples:
- Redaction status:

## Executive Summary

Short summary of the main failure pattern and cost or reliability risk.

## Key Findings

### 1. Finding Title

- Evidence:
- Impact:
- Risk label:
- Recommended fix:

### 2. Finding Title

- Evidence:
- Impact:
- Risk label:
- Recommended fix:

### 3. Finding Title

- Evidence:
- Impact:
- Risk label:
- Recommended fix:

## Cost and Loop Signals

- Repeated retries:
- Repeated messages:
- Oversized context:
- Unnecessary model calls:
- Estimated cost signal:

## Tool and Output Reliability

- Tool-call failures:
- Permission or configuration problems:
- Malformed output:
- Schema drift:
- Missing validation:

## Prioritized Fix Plan

1. Quick fix:
2. Medium fix:
3. Verification step:

## CI Gate Recommendation

Recommended: Yes/No

Reason:

Suggested threshold:

## Safety Note

No passwords, API keys, tokens, cookies, payment data, or production secrets were required for this review.
```

## Buyer Delivery Message

```text
Hi,

I reviewed the redacted workflow material and prepared the AI workflow cost and failure audit.

Summary:
- Main failure pattern:
- Highest risk:
- Cost signal:
- Recommended next step:

Included:
- Audit report
- Risk labels
- Prioritized fix plan
- CI gate recommendation where relevant

No credentials, production secrets, payment data, or private customer data were required.
```

## Follow-Up Offers

Offer these only after the buyer accepts the first delivery:

- implement one scoped automation fix
- add a CI risk gate for future runs
- create a custom parser for their log format
- build a lightweight debug dashboard
- turn the report into a recurring weekly workflow check

