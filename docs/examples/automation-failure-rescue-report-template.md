# Automation Failure Rescue Report

## Summary

- Platform:
- Workflow / scenario name:
- Buyer goal:
- Current failure:
- Business impact:
- Risk level: Low / Medium / High

## Inputs Reviewed

- Error message:
- Screenshot:
- Workflow export:
- Log excerpt:
- Recent change:

## Failure Map

| Step | Expected | Actual | Risk | Notes |
| --- | --- | --- | --- | --- |
| Trigger |  |  |  |  |
| HTTP / API |  |  |  |  |
| Transform / JSON mapping |  |  |  |  |
| AI step |  |  |  |  |
| Output / delivery |  |  |  |  |

## Likely Root Cause

1. 
2. 
3. 

## Recommended Fix

1. 
2. 
3. 

## Safe Test Plan

1. Duplicate the workflow or use a test branch.
2. Run one record through the failing step.
3. Confirm the exact output fields before enabling downstream actions.
4. Check retry and duplicate settings.
5. Re-enable production only after one clean end-to-end run.

## Red Flags

- Secrets were included in logs or screenshots.
- Payment, KYC, tax, or identity data is involved.
- The workflow can send duplicate customer messages.
- The workflow can trigger repeated paid AI calls.
- The fix requires live account access instead of a report-only scope.

## Buyer Handoff

The next safe action is:

If you want me to implement the fix, please confirm the exact platform, non-sensitive test data, and whether you can provide temporary limited access. Do not send passwords or API secrets in chat.

