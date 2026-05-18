# Supported Log Formats

AI Agent Debug Kit is intentionally permissive. It accepts structured logs when available and falls back to plain-text heuristics when needed.

## JSONL

Best option for agent logs:

```jsonl
{"ts":"2026-05-18T09:10:03.200Z","level":"info","event":"tool_call","tool":"shell.exec","duration_ms":1260,"input_tokens":340,"output_tokens":580}
{"ts":"2026-05-18T09:10:13.100Z","level":"error","event":"tool_result","tool":"shell.exec","message":"tests failed"}
```

## JSON Array

One-line arrays are supported:

```json
[{"level":"info","event":"run_started"},{"level":"warn","tool":"search","message":"retry timeout"}]
```

## Plain Text

Plain text is parsed with lightweight heuristics:

```text
tool=shell npm test failed after 4.2s
warning: retry timeout from browser
```

The parser looks for:

- `error`, `failed`, `exception`, `traceback`, `fatal`
- `warn`, `retry`, `timeout`, `rate limit`, `permission`
- `tool=something` or `tool: something`
- durations like `120ms` or `4.2s`

## Recognized Fields

- `ts`, `time`, `timestamp`, `created_at`
- `level`, `severity`
- `event`, `type`
- `tool`, `tool_name`, `name`
- `duration_ms`, `latency_ms`, `elapsed_ms`
- `input_tokens`, `prompt_tokens`
- `output_tokens`, `completion_tokens`
- `message`, `msg`, `content`, `error`

## Redaction

Exported reports redact common sensitive patterns by default:

- `token: ...`
- `api_key=...`
- `secret: ...`
- `password=...`
- `sk-...` API-key style strings
- email addresses

Always review reports before sharing.
