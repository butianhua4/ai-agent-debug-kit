# Client Delivery Template

Use this template after completing an AI Agent Log Debug Report or AI Automation Failure Fix order.

Do not include private logs, credentials, customer data, or private repository names unless the client explicitly approved sharing that information in the delivery channel.

## Delivery Message

```text
Hi,

I reviewed the redacted agent logs and prepared the attached debug report.

Summary:
- Main issue:
- Most affected tool or step:
- Risk flags:
- Estimated cost signal:
- Recommended next step:

Included:
- Markdown debug report
- JSON summary report
- Notes on likely root causes
- Suggested follow-up fixes

No credentials or production secrets were required for this review.
```

## Debug Report Outline

```markdown
# AI Agent Debug Delivery Report

## Client Goal

What the agent or automation was expected to do.

## Input Reviewed

- Format:
- Approximate event count:
- Framework or tool:
- Redaction status:

## Executive Summary

One short paragraph explaining the failure or health of the run.

## Key Findings

1. Finding:
   Evidence:
   Impact:
   Recommendation:

2. Finding:
   Evidence:
   Impact:
   Recommendation:

3. Finding:
   Evidence:
   Impact:
   Recommendation:

## Risk Flags

- Errors:
- Warnings:
- Permission issues:
- Potential secrets:
- Repeated patterns:
- Cost spike:

## Recommended Fix Plan

1. First fix:
2. Second fix:
3. Verification:

## What I Did Not Change

- No production systems were accessed.
- No private credentials were used.
- No broad rewrite was performed.

## Next Optional Scope

- Implement a scoped code fix.
- Add a CI risk gate.
- Customize AI Agent Debug Kit for this log format.
```

## JSON Summary Shape

```json
{
  "clientGoal": "",
  "inputFormat": "",
  "framework": "",
  "summary": {
    "totalEvents": 0,
    "toolCalls": 0,
    "errors": 0,
    "warnings": 0,
    "estimatedCost": 0
  },
  "riskFlags": [],
  "topFindings": [],
  "recommendedNextSteps": []
}
```

## Upsell Options

Offer these only after the first delivery is accepted:

- Add a CI gate for future agent runs.
- Customize parser support for the client's log format.
- Create a branded internal debug dashboard.
- Fix one scoped automation failure.
