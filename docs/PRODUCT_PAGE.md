# Product Page Copy

## Headline

Debug AI agent logs in one browser tab.

## Subheadline

Paste JSONL, JSON, or plain-text logs and get tool-call metrics, cost estimates, risk flags, repeated-pattern detection, Run A/B comparison, and shareable Markdown reports.

## Primary CTA

Download AI Agent Debug Kit

## Secondary CTA

Try the browser demo: https://butianhua4.github.io/ai-agent-debug-kit/

## Who It Is For

- AI agent builders debugging tool-calling runs
- automation developers who need quick run summaries
- freelancers preparing client handoff reports
- indie hackers shipping LLM tools
- teams that want a lightweight CI gate before adopting a larger observability stack

## Problem

Agent logs are noisy. One failed run can contain tool calls, retries, warnings, token usage, permission errors, and secrets mixed across long transcripts.

AI Agent Debug Kit gives builders a quick first-pass report before they open a full tracing platform or spend time manually reading every line.

## What Buyers Get

- static browser app
- Node CLI
- Manifest V3 extension prototype
- sample agent log
- sample Markdown and JSON reports
- copyable GitHub Actions workflows
- buyer guide
- release notes, privacy draft, and customization notes

## Key Features

- local-first browser app
- no backend, no account, no build step for the web app
- JSONL, JSON, pretty JSON, wrapped arrays, and plain-text parsing
- Run A/B comparison
- drag-and-drop log loading
- local snapshot history
- configurable token pricing
- estimated run cost
- redacted Markdown export
- Copy Markdown action
- repeated failure and retry-loop detection
- CLI Markdown and JSON reports
- CI gates with `--max-errors`, `--max-warnings`, and `--fail-on-risk`

## Use Cases

### Debug A Failed Run

Paste a failed run and immediately see the first errors, affected tools, warnings, and recommended next step.

### Prepare A PR Or Incident Note

Export or copy a redacted Markdown report and attach it to a PR, issue, evaluation run, or customer handoff.

### Compare Two Agent Attempts

Use Run A/B mode to compare event count, tool calls, errors, warnings, and estimated cost between two attempts.

### Add A CI Gate

Use the CLI to fail builds when agent logs contain errors, warnings, secrets, permission issues, repeated retry loops, or high-cost runs.

## Suggested Pricing

### Starter Download, USD 9

- release zip
- browser app
- Node CLI
- extension prototype
- sample log and example reports

### Builder Pack, USD 29

- Starter Download
- CI workflow examples
- product launch copy
- buyer guide
- customization notes

### Commercial Customization, USD 99+

- Builder Pack
- custom branding checklist
- internal workflow adaptation
- agency/client handoff packaging

## Proof

- dependency-free browser app
- smoke tests
- extension validation
- release package validation
- GitHub Actions workflow
- public sample reports

## FAQ

### Does it upload logs?

No. The browser app runs locally and does not send logs to a server.

### Does it replace LangSmith, Langfuse, or a full tracing stack?

No. It is a lightweight first-pass inspector for quick debugging, reporting, and CI checks.

### Can it parse plain text?

Yes. It can infer common error, warning, tool, and duration patterns from plain text logs.

### Can I use it in CI?

Yes. The CLI supports Markdown reports, JSON reports, threshold gates, and structured risk gates.

### Can I customize it?

Yes. The package includes source files and is designed to be easy to fork, brand, and adapt.
