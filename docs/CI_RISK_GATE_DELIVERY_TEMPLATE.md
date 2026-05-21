# CI Risk Gate Delivery Template

Use this template after completing a Fiverr order for the AI agent CI risk gate service.

Do not include private repository names, raw production logs, credentials, API keys, tokens, cookies, customer data, payment data, or identity documents. Use redacted examples only.

Before delivery, run the one-screen QA check in `docs/CI_RISK_GATE_DELIVERY_QA_CHECKLIST.md`.

## Delivery Message

```text
Hi,

I prepared the CI risk gate package for your AI agent logs.

Included:
- CI gate workflow / command
- Recommended threshold settings
- Sample pass/fail log examples
- Markdown or JSON report example
- Tuning notes and safe rollout plan

Recommended rollout:
1. Run the gate in warning mode first.
2. Test it on 2-3 redacted historical logs.
3. Tune the threshold if the gate is too strict or too loose.
4. Switch to fail mode only after your team agrees on the signal quality.

No credentials, tokens, cookies, payment data, or private customer data were required.
```

## Delivery Report Outline

```markdown
# AI Agent CI Risk Gate Delivery Report

## Client Goal

Short description of what the buyer wanted the CI gate to prevent or flag.

## Inputs Reviewed

- CI provider:
- Log format:
- Sample log type:
- Redaction status:
- Desired gate behavior: warn / fail
- Target risky patterns:

## Gate Summary

Short explanation of what the gate checks and when it should trigger.

## Installed Or Prepared Files

- Workflow path:
- Command:
- Sample log:
- Report output:
- Documentation or handoff note:

## Threshold Recommendation

- Starting mode:
- Recommended fail threshold:
- Recommended warning threshold:
- Patterns included:
- Patterns excluded:

## Pass Example

What a clean or acceptable run looks like.

## Fail Example

What a risky run looks like and why it fails.

## Tuning Notes

1. Start in warning mode.
2. Review false positives.
3. Raise or lower the risk threshold.
4. Add ignored paths only for known noisy logs.
5. Switch to fail mode after the team agrees.

## Safety Boundary

- This is a lightweight preflight signal, not a full security audit.
- No production systems were accessed.
- No private credentials were used.
- No guarantee is made that every security issue will be found.

## Next Optional Scope

- Tune thresholds against more historical logs.
- Add a custom parser for the buyer's log format.
- Add a PR comment summary.
- Add a Slack or Teams notification.
- Build a small internal dashboard for repeated failures.
```

## Sample Workflow Step

```yaml
- name: Check AI agent risk signals
  run: |
    node cli.js \
      --input ./logs/agent-run.jsonl \
      --fail-on-risk all \
      --format markdown > ai-risk-report.md
```

## Sample Pass/Fail Logs

- Passing sample: `docs/examples/ci-risk-gate-pass-log.jsonl`
- Failing sample: `docs/examples/ci-risk-gate-fail-log.jsonl`
- Buyer-facing explanation: `docs/examples/ci-risk-gate-sample-pair.md`

Use these only as synthetic proof. Replace them with the buyer's own redacted logs before tuning real thresholds.

## Sample JSON Handoff

```json
{
  "ciProvider": "GitHub Actions",
  "gateMode": "warning",
  "failOn": "high",
  "inputPath": "./logs/agent-run.jsonl",
  "reportPath": "ai-risk-report.md",
  "riskPatterns": ["repeated_failures", "secret_like_strings", "retry_loop"],
  "excludedPaths": [],
  "nextStep": "Run against two historical redacted logs before switching to fail mode"
}
```

## Quality Gate Before Delivery

- [ ] The workflow or command is copy-pasteable.
- [ ] The buyer can run the gate without sharing secrets.
- [ ] The report includes both pass and fail examples.
- [ ] The threshold recommendation is explicit.
- [ ] The delivery message reminds the buyer to start in warning mode.
- [ ] No private logs or credentials are included.

## Upsell Routes

Only offer these after the buyer accepts the delivery:

- Threshold tuning against more logs.
- PR comment integration.
- Slack or Teams alert integration.
- Custom parser support for their agent framework.
- Internal dashboard for repeated failures and cost spikes.
