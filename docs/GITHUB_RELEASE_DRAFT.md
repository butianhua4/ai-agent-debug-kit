# GitHub Release Draft

Do not publish a release until the user confirms.

## Tag

`v0.5.0`

## Title

AI Agent Debug Kit v0.5.0

## Asset

Upload:

`dist/ai-agent-debug-kit.zip`

The same zip is also uploaded by GitHub Actions as the `ai-agent-debug-kit` artifact.

## Release Notes

AI Agent Debug Kit v0.5.0 packages the project as a local-first AI agent log debugging tool.

### Highlights

- Browser app for inspecting JSONL, JSON, pretty JSON, wrapped arrays, and plain-text logs
- Run A/B comparison
- File import and drag-and-drop loading
- Local snapshot history
- Redacted Markdown report export
- Copy-to-clipboard Markdown reports with fallback for local HTML usage
- Repeated message and retry-loop detection
- CLI Markdown report output
- CLI JSON report output
- CLI CI gates with `--max-errors` and `--max-warnings`
- CLI risk gates with `--fail-on-risk` for secrets, permissions, repeated loops, high-cost runs, errors, and warnings
- Manifest V3 browser extension prototype
- Release package builder
- Release package manifest and validation
- Public Markdown and JSON sample reports
- Copyable GitHub Actions workflows for error/warning gates and risk gates
- Micro product packs for freelance delivery
- Client intake form for safely scoping buyer requests
- AI-generated bug report and agent log triage offer
- AI workflow cost and failure audit offer
- GitHub Actions checks and artifact upload

### Copy/Paste Release Body

````markdown
AI Agent Debug Kit v0.5.0 is a local-first toolkit for turning AI agent logs into readable debug reports.

Use it in the browser, from the Node CLI, or as a lightweight extension prototype. Logs stay local by default.

Highlights:

- Browser app for JSONL, JSON, pretty JSON, wrapped arrays, and plain-text logs
- Run A/B comparison for evaluating two agent attempts
- File import, drag-and-drop loading, local snapshots, and configurable model pricing
- Markdown export plus one-click Copy Markdown
- Repeated message and retry-loop detection
- CLI Markdown and JSON reports
- CI gates with `--max-errors`, `--max-warnings`, and `--fail-on-risk`
- Copyable GitHub Actions examples for agent log quality gates
- Micro product packs for report, fix-scope, CI gate, automation-script, and triage offers
- Client intake form for safe buyer qualification
- AI-generated bug report triage offer for noisy issue queues
- AI workflow cost and failure audit offer for unstable or expensive automations
- Release zip with docs, examples, assets, CLI, browser app, and extension prototype

Useful links:

- Demo: https://butianhua4.github.io/ai-agent-debug-kit/
- CLI reference: docs/CLI_REFERENCE.md
- CI usage: docs/CI_USAGE.md
- Sample Markdown report: docs/examples/sample-report.md
- Sample JSON report: docs/examples/sample-report.json
- Buyer guide: BUYER_GUIDE.md
- Micro product packs: docs/MICRO_PRODUCT_PACKS.md
- Client intake form: docs/CLIENT_INTAKE_FORM.md
- Bug report triage offer: docs/BUG_REPORT_TRIAGE_OFFER.md
- AI workflow cost audit offer: docs/AI_WORKFLOW_COST_AUDIT_OFFER.md

Verification:

```bash
npm run preflight
```

The release package is `dist/ai-agent-debug-kit.zip`.
````

### Verification

```bash
npm run preflight
```

Expected:

- smoke tests pass
- extension validation passes
- release zip builds
- release manifest validation passes

### Links

- Demo: https://butianhua4.github.io/ai-agent-debug-kit/
- Repo: https://github.com/butianhua4/ai-agent-debug-kit
- CI usage: `docs/CI_USAGE.md`
- CLI reference: `docs/CLI_REFERENCE.md`
- Sample Markdown report: `docs/examples/sample-report.md`
- Sample JSON report: `docs/examples/sample-report.json`
- Risk gate workflow: `docs/examples/agent-risk-gate.yml`
- Buyer guide: `BUYER_GUIDE.md`
- Micro product packs: `docs/MICRO_PRODUCT_PACKS.md`
- Client intake form: `docs/CLIENT_INTAKE_FORM.md`
- Bug report triage offer: `docs/BUG_REPORT_TRIAGE_OFFER.md`
- AI workflow cost audit offer: `docs/AI_WORKFLOW_COST_AUDIT_OFFER.md`
- Privacy draft: `docs/PRIVACY.md`

## Publish Steps

1. Run `npm run preflight`.
2. Open GitHub Releases.
3. Create new release.
4. Tag: `v0.5.0`.
5. Title: `AI Agent Debug Kit v0.5.0`.
6. Paste release notes above.
7. Upload `dist/ai-agent-debug-kit.zip`.
8. Publish only after user confirms.
