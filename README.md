# AI Agent Debug Kit

![Check](https://github.com/butianhua4/ai-agent-debug-kit/actions/workflows/check.yml/badge.svg)

A zero-dependency browser tool for inspecting AI agent run logs.

![AI Agent Debug Kit preview](assets/product-preview.svg)

It accepts JSONL, JSON, or plain-text logs and produces:

- run metrics
- tool-call breakdown
- error and warning flags
- rough token cost estimates
- configurable model pricing
- run A/B comparison
- local snapshot history
- multiple demo scenarios
- model pricing presets
- redacted report export
- file import and drag-and-drop log loading
- debugging recommendations
- downloadable Markdown report

## Use

Open `index.html` in a browser, paste logs, or click `Load Demo`.

No server or build step is required.

Snapshots are saved in browser `localStorage`. Logs never leave the browser unless you export and share a report yourself.

## CLI

Generate a Markdown report from a log file:

```bash
node cli.js sample-agent-log.jsonl > report.md
```

Optional flags:

```bash
node cli.js sample-agent-log.jsonl --input-price 1.25 --output-price 10 --no-redact
```

## Checks

```bash
npm run check
```

## Release Package

```bash
npm run build:release
```

The packaged app is created in `dist/`.

Full preflight:

```bash
npm run preflight
```

GitHub Actions also uploads `ai-agent-debug-kit.zip` as a workflow artifact on each push to `main`.

## Browser Extension Prototype

The `extension/` folder contains a minimal Manifest V3 popup prototype. See `docs/EXTENSION.md`.

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

More examples are in `docs/LOG_FORMATS.md`.

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

## Contributing

See `CONTRIBUTING.md`.

## Launch

See `LAUNCH.md` for positioning, launch copy, and product listing material.

## Store And Privacy Drafts

- `docs/STORE_LISTING.md`
- `docs/PRIVACY.md`
