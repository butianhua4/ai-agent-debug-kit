# AI Agent Debug Kit

![Check](https://github.com/butianhua4/ai-agent-debug-kit/actions/workflows/check.yml/badge.svg)

A zero-dependency browser tool for inspecting AI agent run logs.

![AI Agent Debug Kit preview](assets/product-preview.svg)

## Quick Links

- Demo: https://butianhua4.github.io/ai-agent-debug-kit/
- Fiverr debug service: https://www.fiverr.com/aibuildflow/fix-agent-workflow-errors-and-debug-automation-logs
- Fiverr automation service: https://www.fiverr.com/aibuildflow/build-a-custom-ai-automation-script-for-your-workflow
- Fiverr CI risk gate service: https://www.fiverr.com/aibuildflow/set-up-an-ai-agent-log-risk-gate-for-your-ci-workflow
- Emergency AI automation rescue offer: `docs/EMERGENCY_AI_AUTOMATION_RESCUE_OFFER.md`
- n8n / Make / Zapier automation failure rescue: `docs/AUTOMATION_FAILURE_RESCUE_OFFER.md`
- Automation failure rescue promo pack: `docs/AUTOMATION_FAILURE_RESCUE_PROMO_PACK.md`
- Automation failure rescue cover: `assets/automation-failure-rescue-cover.svg`
- Rescue buyer brief: `docs/RESCUE_BUYER_BRIEF.md`
- CI usage: `docs/CI_USAGE.md`
- Example Markdown report: `docs/examples/sample-report.md`
- Example JSON report: `docs/examples/sample-report.json`
- Example AEO readiness report: `docs/examples/aeo-readiness-sample-report.md`
- AEO JSON report template: `docs/examples/aeo-report-template.json`
- Example AEO JSON report: `docs/examples/aeo-readiness-sample-report.json`
- Emergency rescue report template: `docs/examples/emergency-rescue-report-template.md`
- Automation failure rescue report template: `docs/examples/automation-failure-rescue-report-template.md`
- Portfolio case: AI agent log rescue: `docs/PORTFOLIO_CASE_AGENT_LOG_RESCUE.md`
- Portfolio case promo pack: `docs/PORTFOLIO_CASE_PROMO_PACK.md`
- Portfolio cover: `assets/agent-log-rescue-cover.svg`
- Risk gate workflow: `docs/examples/agent-risk-gate.yml`
- Product page copy: `docs/PRODUCT_PAGE.md`
- Launch status: `docs/LAUNCH_STATUS.md`
- Buyer guide: `BUYER_GUIDE.md`
- Support: `SUPPORT.md`
- Demo script: `docs/DEMO_SCRIPT.md`
- Service offers: `docs/SERVICE_OFFERS.md`
- Fiverr gig packs: `docs/FIVERR_GIG_PACKS.md`
- Fiverr inbox safety: `docs/FIVERR_INBOX_SAFETY.md`
- Fiverr operating playbook: `docs/FIVERR_OPERATING_PLAYBOOK.md`
- Fiverr active sourcing: `docs/FIVERR_ACTIVE_SOURCING.md`
- Fiverr portfolio pack: `docs/FIVERR_PORTFOLIO_PACK.md`
- Opportunity pipeline: `docs/OPPORTUNITY_PIPELINE.md`
- Continuous operating mode: `docs/CONTINUOUS_OPERATING_MODE.md`
- Bug report triage offer: `docs/BUG_REPORT_TRIAGE_OFFER.md`
- AI workflow cost audit offer: `docs/AI_WORKFLOW_COST_AUDIT_OFFER.md`
- Quick diagnosis offer: `docs/QUICK_DIAGNOSIS_OFFER.md`
- AEO readiness audit offer: `docs/AEO_READINESS_AUDIT_OFFER.md`
- Chinese AEO readiness listing: `docs/CHINESE_AEO_READINESS_LISTING.md`
- AEO outreach and quote pack: `docs/AEO_OUTREACH_AND_QUOTE_PACK.md`
- AEO delivery checklist: `docs/AEO_DELIVERY_CHECKLIST.md`
- Chinese quick diagnosis listing: `docs/CHINESE_QUICK_DIAGNOSIS_LISTING.md`
- Platform setup: `docs/PLATFORM_SETUP.md`
- Client delivery template: `docs/CLIENT_DELIVERY_TEMPLATE.md`
- Client intake form: `docs/CLIENT_INTAKE_FORM.md`
- Micro product packs: `docs/MICRO_PRODUCT_PACKS.md`
- GitHub release draft: `docs/GITHUB_RELEASE_DRAFT.md`
- Release readiness: `docs/RELEASE_READINESS.md`
- Digital product pack: `docs/DIGITAL_PRODUCT.md`
- Mobile progress page: `docs/MOBILE_STATUS.md`

It accepts JSONL, JSON, or plain-text logs and produces:

- run metrics
- tool-call breakdown
- error and warning flags
- rough token cost estimates
- configurable model pricing
- run A/B comparison with expanded exported metrics
- local snapshot history
- multiple demo scenarios
- model pricing presets
- redacted report export
- SEO and social preview metadata for the public demo
- `robots.txt` and `sitemap.xml` for the public demo
- JSON-LD software application metadata for the public demo
- file import and drag-and-drop log loading, including Run B imports for comparison
- GitHub issue templates for bugs, features, and log-format support
- one-click log clearing
- repeated failure and retry-loop detection
- repeated-pattern section in exported reports
- timestamped Markdown report filenames
- copy-to-clipboard Markdown reports
- copy-to-clipboard JSON reports
- Ctrl/Cmd+Enter report export shortcut
- downloadable JSON reports from the web app
- debugging recommendations
- downloadable Markdown report

## Feature Matrix

| Feature | Web App | CLI | Extension Prototype |
| --- | :---: | :---: | :---: |
| JSONL / JSON / plain-text parsing | Yes | Yes | Yes |
| Pretty JSON and wrapped arrays | Yes | Yes | Yes |
| Tool-call breakdown | Yes | Yes | Basic |
| Cost estimate | Yes | Yes | No |
| Run A/B comparison | Yes | No | No |
| Local snapshot history | Yes | No | No |
| Markdown report export | Yes | Yes | No |
| JSON report output | Yes | Yes | No |
| CI error gate | No | Yes | No |
| Repeated-pattern detection | Yes | Yes | Yes |

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
node cli.js sample-agent-log.jsonl --json > report.json
node cli.js sample-agent-log.jsonl --max-errors 0 --max-warnings 0
node cli.js sample-agent-log.jsonl --fail-on-risk secrets,permission
type sample-agent-log.jsonl | node cli.js --json
```

`--max-errors` exits with code `2` when the report exceeds the allowed error count. `--max-warnings` exits with code `3` when the warning count is too high.
`--fail-on-risk` exits with code `4` when selected risk flags are detected, such as `secrets`, `permission`, `repeated`, or `all`.

More CI examples are in `docs/CI_USAGE.md`.

Full CLI reference: `docs/CLI_REFERENCE.md`.

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

Render an AEO JSON report template to Markdown:

```bash
npm run render:aeo
```

GitHub Actions also uploads `ai-agent-debug-kit.zip` as a workflow artifact on each push to `main`.

Release draft: `docs/GITHUB_RELEASE_DRAFT.md`.

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
- OpenAI Responses API trace import
- richer framework-specific importers
- packaged browser extension icons and screenshots

## Contributing

See `CONTRIBUTING.md`.

## Launch

See `LAUNCH.md` for positioning, launch copy, and product listing material.

## Changelog

See `CHANGELOG.md`.

## Store And Privacy Drafts

- `docs/STORE_LISTING.md`
- `docs/PRIVACY.md`
- `docs/DIGITAL_PRODUCT.md`

## Mobile Progress

See `docs/MOBILE_STATUS.md`.
