# AI Agent Debug Kit

A zero-dependency browser tool for inspecting AI agent run logs.

It accepts JSONL, JSON, or plain-text logs and produces:

- run metrics
- tool-call breakdown
- error and warning flags
- rough token cost estimates
- configurable model pricing
- run A/B comparison
- local snapshot history
- multiple demo scenarios
- debugging recommendations
- downloadable Markdown report

## Use

Open `index.html` in a browser, paste logs, or click `Load Sample`.

No server or build step is required.

Snapshots are saved in browser `localStorage`. Logs never leave the browser unless you export and share a report yourself.

## Supported Log Shapes

JSONL works best:

```json
{"ts":"2026-05-18T09:10:03.200Z","level":"info","event":"tool_call","tool":"shell.exec","duration_ms":1260,"input_tokens":340,"output_tokens":580}
```

The parser also recognizes common fields:

- `ts`, `time`, `timestamp`, `created_at`
- `level`, `severity`
- `event`, `type`
- `tool`, `tool_name`, `name`
- `duration_ms`, `latency_ms`, `elapsed_ms`
- `input_tokens`, `prompt_tokens`
- `output_tokens`, `completion_tokens`

## Why It Exists

Agent failures are often hidden in long transcripts. This tool gives developers a quick first-pass view before they open a full trace viewer or incident report.

## Privacy

The app is static and runs in the browser. It does not upload logs or call an external API.

Do not paste secrets into any tool unless you are comfortable storing them in that browser session. Use the exported report only after reviewing it for sensitive data.

## Roadmap

- pricing presets for popular models
- CLI version for CI logs
- browser extension wrapper
- OpenAI Responses API trace import
- repeated failure and retry-loop detection
