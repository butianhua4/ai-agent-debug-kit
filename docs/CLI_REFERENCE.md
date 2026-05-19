# CLI Reference

## Usage

```bash
node cli.js [log-file] [options]
```

## Options

| Option | Description |
| --- | --- |
| `--json` | Output a machine-readable JSON report. |
| `--no-redact` | Disable redaction in Markdown reports. |
| `--input-price <number>` | Input token price per 1M tokens. Default: `1.25`. |
| `--output-price <number>` | Output token price per 1M tokens. Default: `10`. |
| `--max-errors <number>` | Exit with code `2` when error count exceeds this number. |
| `--max-warnings <number>` | Exit with code `3` when warning count exceeds this number. |
| `--help` | Print help. |

When no file is provided, the CLI reads from stdin.

## Exit Codes

| Code | Meaning |
| ---: | --- |
| `0` | Success. |
| `1` | CLI usage problem. |
| `2` | Error threshold exceeded. |
| `3` | Warning threshold exceeded. |

## Examples

Markdown report:

```bash
node cli.js sample-agent-log.jsonl > report.md
```

JSON report:

```bash
node cli.js sample-agent-log.jsonl --json > report.json
```

Stdin:

```bash
cat sample-agent-log.jsonl | node cli.js --json > report.json
```

CI gate:

```bash
node cli.js sample-agent-log.jsonl --max-errors 0 --max-warnings 0
```

Custom pricing:

```bash
node cli.js sample-agent-log.jsonl --input-price 1.25 --output-price 10
```
