# CI Usage

AI Agent Debug Kit can fail a CI job when an agent run contains too many errors.

## Basic Gate

```bash
node cli.js agent-run.jsonl --max-errors 0 --max-warnings 0
```

Exit codes:

- `0`: report generated and error count is within threshold
- `1`: CLI usage problem
- `2`: error count exceeded `--max-errors`
- `3`: warning count exceeded `--max-warnings`

## JSON Report

```bash
node cli.js agent-run.jsonl --json > agent-debug-report.json
```

## Markdown Report

```bash
node cli.js agent-run.jsonl > agent-debug-report.md
```

## GitHub Actions Example

```yaml
name: Agent Log Gate

on:
  pull_request:

jobs:
  agent-log-gate:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 22
      - run: node cli.js sample-agent-log.jsonl --max-errors 0 --max-warnings 0
```

A copyable workflow is available at `docs/examples/agent-log-gate.yml`.

## Pricing

```bash
node cli.js agent-run.jsonl --input-price 1.25 --output-price 10
```

Prices are dollars per 1M tokens.
