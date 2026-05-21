# Auto Delivery SOP: AI Automation Emergency Rescue

Use this when a real inbound lead sends sanitized screenshots, workflow exports, or redacted logs. This is not proof of revenue. It is the delivery procedure for paid or qualified work.

## Trigger

Start this SOP when the customer provides any of:

- sanitized n8n / Make / Zapier workflow export
- redacted failed execution log
- error screenshot
- webhook payload with secrets removed
- expected vs actual behavior
- deadline or business-impact statement

Do not start if the customer asks for credential sharing, payment access, wallet actions, KYC, password handling, or off-platform payment.

## Intake Gate

Required:

- tool/platform
- expected behavior
- actual behavior
- sanitized error screenshot/log
- workflow structure or export with credentials removed
- last-known-good run
- business impact
- deadline

Forbidden:

- password
- API key
- token
- cookie
- wallet
- payment access
- KYC
- private customer data

## First 30 Minutes

1. Confirm the issue is in scope.
2. Identify the failure class:
   - webhook not triggering
   - HTTP/API error
   - JSON mapping drift
   - AI node empty/invalid output
   - loop/branch logic failure
   - retry/error handling missing
   - rate limit or timeout
   - CI/release automation failure
3. Confirm whether the material is sufficiently sanitized.
4. Produce a short triage note:
   - likely root cause
   - required safe evidence
   - risk level
   - suggested package and price

## Diagnostic Report Structure

```md
# Automation Rescue Diagnostic

## Summary

## Customer Goal

## Observed Failure

## Evidence Reviewed

## Likely Root Cause

## Risk Level

## Recommended Fix Plan

## Validation Plan

## What I Need Next

## Safety Boundary
No passwords, API keys, tokens, payment access, wallet access, or KYC material requested.
```

## Repair Plan By Failure Class

### Webhook not triggering

- verify production vs test URL
- check HTTP method and path
- confirm active workflow version
- inspect payload shape
- add minimal request logging
- validate expected response status

### HTTP/API error

- capture redacted request and response
- verify required fields, auth mode, content type
- inspect rate limits and retry behavior
- map provider error to workflow node
- propose fallback and retry logic

### JSON mapping drift

- compare expected schema with current payload
- identify missing/null/renamed fields
- add guards/defaults
- add transformation note
- validate with sample payloads

### AI node empty output

- inspect prompt input variables
- verify model/provider error vs empty completion
- enforce structured output schema
- add fallback for invalid JSON
- log sanitized prompt/output metadata only

### Loop/branch failure

- trace branch conditions
- check item indexes and merge behavior
- detect infinite loop or exploding batch
- propose circuit breaker
- add test path for representative items

### CI/release automation failure

- reproduce command locally when possible
- isolate workflow step
- check version/package/release assumptions
- propose minimal patch
- run repository test/lint/build command

## Delivery Report

```md
# Delivery Report

## Work Completed

## Files / Workflow Areas Touched

## Fixes Applied

## Validation Performed

## Remaining Risks

## Recommended Next Safeguards

## Handoff Notes

## Safety Boundary
No credentials, payment access, wallet access, or KYC material were requested or handled.
```

## Pricing Gate

- `$499 Quick Diagnostic`: triage report, root-cause hypothesis, fix plan, safety intake checklist.
- `$1,500 Same-Day Workflow Rescue`: one scoped workflow or integration repair with validation and handoff report.
- `$5,000 48-Hour Rescue Sprint`: multiple workflows, error handling, retry/fallback strategy, monitoring notes, and executive handoff.

Do not promise fixed results until sanitized evidence confirms scope.

## Completion Criteria

- customer-facing report generated
- validation evidence recorded
- remaining risks documented
- no credential/payment/KYC boundary crossed
- revenue counted only after order/payment/award evidence exists
