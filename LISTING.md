# Product Listing Draft

## Short Name

AI Agent Debug Kit

## One-Liner

A zero-dependency browser tool that turns messy AI agent logs into a readable debug report.

## Description

AI Agent Debug Kit helps developers inspect AI-agent runs without setting up a trace platform.

Paste JSONL, JSON, or plain-text logs and the tool summarizes:

- total events
- tool-call count
- errors and warnings
- rough token cost
- configurable input/output token pricing
- Run A/B comparison
- local snapshot history
- multiple demo scenarios
- risky log patterns
- tool breakdown
- debugging recommendations

It also exports a Markdown report that can be attached to pull requests, incident notes, evaluation runs, or client handoffs.

## Buyer

- AI agent builders
- automation developers
- indie hackers shipping LLM tools
- teams debugging tool-calling workflows
- freelancers who need quick run reports

## Features

- Runs fully in the browser
- No account, backend, or build step
- Supports JSONL and plain text
- Detects common error, warning, permission, and secret-risk patterns
- Estimates token cost from common token fields
- Lets users tune input/output pricing per 1M tokens
- Compares two runs side by side
- Saves local snapshots in the browser
- Ships with healthy, failure, cost-spike, and permission demo logs
- Exports Markdown reports
- Includes sample agent log

## Suggested Price

Launch price:

- USD 9 to USD 19 for the static tool
- USD 49 to USD 99 for source + customization rights

Bundle option:

- AI Agent Debug Kit
- Agent log sample pack
- Report template
- Roadmap for browser extension / CLI

## Proof Points

- Pure HTML/CSS/JS
- No dependencies
- Can be opened locally
- Tested with syntax check

## Next Product Improvements

- configurable model pricing
- compare two agent runs
- import OpenAI Responses API traces
- browser extension wrapper
- CLI parser
- saved report history
