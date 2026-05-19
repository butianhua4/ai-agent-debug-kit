# Buyer Guide

Thank you for downloading AI Agent Debug Kit.

## What You Received

- `index.html`: browser app
- `cli.js`: Node CLI report generator
- `extension/`: Manifest V3 extension prototype
- `sample-agent-log.jsonl`: sample log file
- `docs/`: usage, privacy, CI, and packaging notes

## Quick Start

Open `index.html` in a browser.

Click `Load Demo`, paste a log, or import a `.jsonl`, `.json`, `.log`, or `.txt` file.

## CLI

```bash
node cli.js sample-agent-log.jsonl > report.md
node cli.js sample-agent-log.jsonl --json > report.json
node cli.js sample-agent-log.jsonl --max-errors 0
```

## Browser Extension Prototype

Run:

```bash
npm run build:release
```

Then load `dist/ai-agent-debug-kit/extension` as an unpacked extension in a Chromium-based browser.

## Privacy

The tool runs locally. It does not upload logs.

Review logs and exported reports before sharing them.

## Support

Open an issue:

https://github.com/butianhua4/ai-agent-debug-kit/issues

