# Portfolio Case: AI Agent CI Risk Gate

This is a public demo case built from synthetic pass/fail logs. It is not a private client claim.

Use it as a Fiverr portfolio proof sheet, profile summary, or buyer-facing attachment for the CI risk gate service.

## Scenario

An AI agent project already runs in CI, but failed agent runs are hard to interpret. The team wants an early signal before merge when logs contain risky patterns.

Typical problems:

- Repeated tool-call failures are buried in long logs.
- Retry loops waste tokens and slow down CI.
- Secret-like strings may appear in logs by mistake.
- CI fails with a generic message instead of a useful report.
- Developers need a warning mode before turning on hard fail mode.

## Safe Demo Inputs

This public case uses only synthetic files:

- `docs/examples/ci-risk-gate-pass-log.jsonl`
- `docs/examples/ci-risk-gate-fail-log.jsonl`
- `docs/examples/ci-risk-gate-sample-pair.md`

No passwords, API keys, OAuth tokens, cookies, payment data, identity documents, private repo access, or private customer data are used.

## Before

The team sees a generic CI failure:

```text
Agent workflow failed.
Check logs for details.
```

That is not enough to decide whether the failure is a harmless retry, a risky secret leak, or a repeated automation issue.

## Gate Behavior

The lightweight CI gate checks for:

- Secret-like strings.
- Repeated tool failures.
- Permission errors.
- Retry loops.
- High-risk scores.
- Cost or model-call patterns that deserve review.

Recommended rollout:

1. Start in warning-only mode.
2. Test against 2-3 redacted historical logs.
3. Tune thresholds.
4. Switch to fail-build mode only after the team accepts the signal quality.

## After

The buyer receives:

- CI workflow step or command.
- Risk threshold recommendation.
- Pass/fail sample behavior.
- Markdown or JSON report example.
- Short handoff note for warning-mode rollout.

## Example Buyer-Facing Summary

```text
I set up a lightweight CI risk gate for AI agent logs. The gate checks redacted logs for repeated tool failures, retry loops, permission errors, secret-like text, and high-risk scores. It can start in warning mode and later fail CI when the team is ready.
```

## Package Fit

| Package | Best For | Deliverable |
| --- | --- | --- |
| Starter | No real log yet | Template gate and threshold advice |
| Standard | One redacted sample log | Working command/YAML, sample pass/fail behavior, report example |
| Premium | Multiple jobs or log formats | Tuned thresholds, multiple examples, team handoff |

## Proof Links

- Public demo: https://butianhua4.github.io/ai-agent-debug-kit/
- Public repository: https://github.com/butianhua4/ai-agent-debug-kit
- CI risk gate one-pager: `docs/CI_RISK_GATE_ONE_PAGER.md`
- Custom offer runbook: `docs/CI_RISK_GATE_CUSTOM_OFFER_RUNBOOK.md`

## Boundary

This is a CI risk-signal gate, not a full security audit or penetration test. It does not require direct repo login or sensitive production data.
