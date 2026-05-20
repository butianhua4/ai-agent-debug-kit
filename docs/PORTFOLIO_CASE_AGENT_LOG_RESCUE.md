# Portfolio Case: AI Agent Log Rescue

This is a **sample case study** built from demo logs. It is not a private client claim.

Use it to show buyers what an emergency AI automation rescue delivery looks like before they place an order.

## Scenario

A buyer has an AI agent workflow that intermittently fails during tool calls. The workflow sometimes completes, but it also produces invalid JSON, retries the same step, and causes CI to fail.

## Buyer Inputs

Safe inputs only:

- Redacted JSONL agent logs
- Screenshot of the CI failure
- Public workflow snippet
- No API keys, passwords, tokens, or private customer data

## Before

The buyer only sees:

```text
Agent failed.
Tool call returned invalid output.
CI job exited with code 1.
```

Problems:

- No clear root cause
- No tool-level breakdown
- No cost or retry visibility
- No verification checklist
- No safe handoff summary for the developer

## Rescue Process

1. Parse the redacted agent log.
2. Identify repeated tool-call failures.
3. Separate output-format errors from runtime errors.
4. Check for repeated retries and cost spikes.
5. Produce a Markdown rescue report.
6. Provide a concrete verification checklist.

## Findings

| Area | Finding | Impact |
| --- | --- | --- |
| Tool call | Tool output is not consistently valid JSON | Downstream parser fails |
| Retry loop | Same failing step repeats | Cost and latency increase |
| CI | Failure message is too generic | Developer cannot isolate cause |
| Safety | No secrets found in redacted report | Safe to share with developer |

## After

The buyer receives:

- Root-cause hypothesis
- Error pattern table
- Fix plan
- Small output validation snippet when safe
- Verification checklist
- Follow-up implementation scope

## Example Fix Direction

```js
function parseAgentToolOutput(raw) {
  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      return { ok: false, error: "Tool output must be a JSON object" };
    }
    return { ok: true, value: parsed };
  } catch (error) {
    return { ok: false, error: `Invalid JSON: ${error.message}` };
  }
}
```

## Delivery Assets Used

- `docs/examples/emergency-rescue-report-template.md`
- `docs/RESCUE_BUYER_BRIEF.md`
- `docs/CLIENT_REQUEST_TRIAGE.md`
- `docs/EMERGENCY_AI_AUTOMATION_RESCUE_OFFER.md`

## Buyer-Facing Summary

```text
I reviewed the redacted logs and found that the main failure is not the model itself, but inconsistent tool output and weak CI error isolation. The fastest fix is to validate tool output before downstream parsing, stop retry loops earlier, and make CI fail with a more specific message.
```

## Reusable Offer

This case supports the Emergency AI Automation Rescue package:

- USD 99 fast diagnosis
- USD 299 diagnosis plus fix plan
- USD 599 emergency rescue package

