# Launch Pack

## Positioning

AI Agent Debug Kit is a tiny, no-backend debugging tool for AI agent builders.

It turns messy JSONL, JSON, or plain-text agent logs into:

- run metrics
- tool-call breakdown
- cost estimate
- risk flags
- Run A/B comparison
- Markdown report

## Short Launch Post

I built AI Agent Debug Kit, a zero-dependency browser tool for debugging AI agent logs.

Paste JSONL, JSON, or plain text and it summarizes tool calls, errors, token cost, risk flags, and recommendations. It also supports Run A/B comparison, local snapshot history, report redaction, and a small Node CLI for local log files.

No backend, no account, no install required.

Repo: https://github.com/butianhua4/ai-agent-debug-kit
Demo: https://butianhua4.github.io/ai-agent-debug-kit/

Preview image: `assets/product-preview.svg`

## Longer Launch Post

AI agent traces are often too noisy to read quickly. I wanted a small tool that works before you set up a full observability stack.

AI Agent Debug Kit runs entirely in the browser. You paste a log, load a demo, or run the CLI against a local JSONL file. It extracts events, tool calls, errors, warnings, token usage, estimated cost, risky patterns, and a Markdown report you can attach to an issue, PR, or incident note.

Current features:

- JSONL, JSON, and plain-text parsing
- tool-call breakdown
- error and warning detection
- configurable model pricing
- Run A/B comparison
- local snapshot history
- redacted Markdown export
- Node CLI report generation

I am keeping it dependency-free and easy to fork.

Repo: https://github.com/butianhua4/ai-agent-debug-kit
Demo: https://butianhua4.github.io/ai-agent-debug-kit/

## Product Page Headline

Debug AI agent logs in one browser tab.

## Product Page Subheadline

Paste JSONL, JSON, or plain-text logs and get tool-call metrics, cost estimates, risk flags, Run A/B comparison, and a Markdown report.

## Paid Asset Angle

Free version:

- public GitHub repo
- browser demo
- CLI

Paid bundle idea:

- packaged source archive
- custom branding guide
- extra sample logs
- report templates
- browser extension roadmap
- customization notes for agencies and freelancers

Suggested launch price:

- USD 9 to USD 19 for packaged download
- USD 49 to USD 99 for source + customization guide

## Buyer Phrases

- "I need a lightweight agent log inspector."
- "I do not want to set up LangSmith just to inspect one run."
- "I need a quick report for a PR or incident."
- "I want to compare two AI agent runs."
- "I need to redact logs before sharing."

## Communities To Consider

Do not post automatically without user approval.

- GitHub repository topics
- Product Hunt
- Hacker News Show HN
- Indie Hackers
- Reddit developer communities
- AI agent Discord/Slack communities
- Gumroad-style product listing
