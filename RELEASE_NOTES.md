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
- Mobile status page updated with live Fiverr links and order-safety checks.
- Fiverr operating playbook now reflects all three live service offers.
- Micro product packs for report, fix-scope, CI gate, and automation-script offers.
- Client intake form for safely scoping buyer requests before accepting work.
- AI agent bug report triage offer for noisy issue queues and generated report review.
- GitHub release draft updated to position the zip as a tool and service-product package.
- AI workflow cost and failure audit offer for unstable or expensive automations.
- Demo script for screenshots, GIFs, and launch videos.
- Service offer copy for Fiverr, Upwork, and Chinese freelance platforms.
- Client delivery template for paid debugging reports.
- Platform setup checklist for Fiverr, Upwork Project Catalog, and Chinese freelance listings.
- First Fiverr gig status and follow-up gig packs for automation scripts and CI gates.
- Fiverr inbox safety rules and response templates for suspicious buyer messages.
- Fiverr portfolio pack for the public AI Agent Debug Kit demo.
- Fiverr operating playbook for message triage, package routing, and delivery boundaries.
- Second Fiverr gig published for custom AI automation scripts.
- Third Fiverr gig published for AI agent CI risk gates.
- Mobile status page now acts as a selling board with current revenue state, offer routing, proof assets, and owner-only boundaries.
- Domestic outreach scripts added for WeChat, Xianyu, Xiaohongshu, Zhihu, Juejin, and private-community lead generation.
- Chinese buyer intake form added to turn automation rescue inquiries into scoped quotes without collecting secrets.
- Chinese 299 RMB diagnosis report template added for fast first-order delivery.
- Filled Chinese 299 RMB sample report added as buyer-facing proof for the webhook JSON mapping demo.
- Chinese buyer conversion messages added to move inquiries from sample report to intake form and quote.
- Chinese offer-card copy added for marketplace covers, first comments, pinned posts, and domestic short posts.
- Visual asset production checklist added for Fiverr gallery images, domestic covers, PDF one-pagers, and short demo videos/GIFs.
