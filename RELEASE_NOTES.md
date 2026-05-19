# Release Notes

## v0.5.0

AI Agent Debug Kit now includes a browser app, Node CLI, CI gates, release package, browser extension prototype, and product distribution drafts.

Highlights:

- zero-dependency browser app
- JSONL, JSON, and plain-text parsing
- Run A/B comparison
- configurable token pricing
- redacted Markdown report export
- local snapshot history
- shared parser/report core
- CLI report generator
- smoke tests
- GitHub Actions check workflow
- release package builder
- release preflight command
- CI release artifact upload
- supported log format documentation
- product preview image
- browser extension prototype
- extension testing notes
- extension manifest validation
- pretty JSON and wrapped event array parsing
- file import and drag-and-drop log loading
- CLI JSON output for automation
- CLI `--max-errors` CI gate
- CI usage documentation
- release package manifest and validation
- repeated message and retry-loop detection
- copyable GitHub Actions gate example
- repeated-pattern section in Markdown reports
- README feature matrix
- store listing and privacy drafts

Build a local release package:

```bash
npm run build:release
```

The package is created in `dist/`.

See `CHANGELOG.md` for version history.

Digital product packaging draft: `docs/DIGITAL_PRODUCT.md`.

GitHub release draft: `docs/GITHUB_RELEASE_DRAFT.md`.

Latest:

- Run B file import for comparison mode.
- Expanded Run A/B metrics in exported Markdown reports.
- Buyer guide included in release package.
- CLI `--max-warnings` CI gate.
- Timestamped Markdown report filenames in the web app.
- CLI threshold failures now explain the reason on stderr.
- Web app Clear button for current logs.
- README quick links for demo, buyer guide, release draft, and mobile progress.
- CLI reference documentation.
- Release readiness checklist.
- Ctrl/Cmd+Enter shortcut for web report export.
- CLI can read logs from stdin.
- CLI `--fail-on-risk` gate for structured risk flags.
- Public Markdown and JSON sample reports for buyers and reviewers.
- Web app Copy Markdown action with clipboard fallback.
- Copyable GitHub Actions risk gate workflow.
- Product page copy for paid download listings.
- SEO and social preview metadata for the public demo page.
- Public demo `robots.txt` and `sitemap.xml`.
- JSON-LD software application metadata for the public demo.
- Web app JSON report export.
- Web app Copy JSON action.
- Public launch status checklist.
- GitHub Actions release package artifact for version tags and manual runs.
- GitHub issue template for log-format support requests.
- Public support guide for safe log sharing and issue reports.
- Demo script for screenshots, GIFs, and launch videos.
- Service offer copy for Fiverr, Upwork, and Chinese freelance platforms.
- Client delivery template for paid debugging reports.
