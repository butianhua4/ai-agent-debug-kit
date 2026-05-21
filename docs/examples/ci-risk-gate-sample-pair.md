# CI Risk Gate Pass/Fail Sample Pair

Use this pair as public proof for the Fiverr CI risk gate gig.

Both files are synthetic and redacted. They do not contain real buyer logs, credentials, or private repository data.

## Files

- Passing sample: `docs/examples/ci-risk-gate-pass-log.jsonl`
- Failing sample: `docs/examples/ci-risk-gate-fail-log.jsonl`

## Passing Sample

Command:

```bash
node cli.js docs/examples/ci-risk-gate-pass-log.jsonl --fail-on-risk all
```

Expected result:

- Exit code: `0`
- No obvious risk flags.
- Good fit for warning-mode onboarding and baseline checks.

## Failing Sample

Command:

```bash
node cli.js docs/examples/ci-risk-gate-fail-log.jsonl --fail-on-risk all
```

Expected result:

- Exit code: non-zero, currently `1`
- Risk flags include errors, warnings, repeated patterns, secret-like text, and permission text.
- Good fit for showing buyers what the CI gate blocks before merge.

## Fiverr Use

Show this pair when a buyer asks what the CI risk gate actually does:

```text
I can provide a lightweight CI gate like this sample: a clean redacted log passes, while a risky log with repeated failures, permission errors, and secret-like text fails before merge.
```

## Delivery Use

Attach this sample pair with a paid delivery when the buyer does not yet have safe historical logs. Ask the buyer to replace these examples with their own redacted logs before switching the gate to fail mode.
