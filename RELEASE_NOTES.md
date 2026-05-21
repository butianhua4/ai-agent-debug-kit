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
- Upload-ready domestic 299 RMB diagnosis cover added as PNG with editable SVG source.
- Upload-ready domestic 299 RMB diagnosis proof card added as PNG with editable SVG source.
- Upload-ready domestic 299 / 999 / 1999+ price ladder card added as PNG with editable SVG source.
- Domestic three-image posting bundle added with platform captions, first replies, and safety checks.
- Chinese 299 diagnosis one-pager added for buyer education, intake boundaries, and direct domestic posting.
- Upload-ready domestic 299 diagnosis one-page image added for buyer clarification and marketplace attachments.
- Domestic 299 upload checklist added with four-image order, platform captions, first replies, intake prompt, upgrade reply, and refusal boundary.
- Chinese 299 buyer reply bundle added to route domestic inquiries into safe redacted intake and quote decisions.
- Chinese 299 / 999 / 1999+ quote decision matrix added for faster safe pricing and re-scope decisions.
- Chinese 299-to-999 upsell handoff added to turn completed diagnosis reports into scoped repair-plan offers.
- Chinese 999 repair-plan template added for fast delivery after a 299 diagnosis upsell.
- Filled Chinese 999 repair-plan sample added to show buyers the exact upgrade deliverable after diagnosis.
- Upload-ready 999 RMB repair-plan proof card added for domestic platform galleries and buyer chats.
- Domestic upload checklists now include the 999 proof card in the recommended buyer-facing gallery order.
- Chinese 999 upgrade reply pack added with short buyer replies, proof-card handoff, sample-report handoff, discount response, confirmation prompt, and safety-stop wording.
- Chinese 299 paid-order launch checklist added for confirming safe order state, locking scope, checking intake, building diagnosis, QA, delivery, and follow-up routing.
- Chinese 299 paid-order tracker added as a safe CSV template for status, deadline, material completeness, risk flags, report path, upgrade route, and follow-up without storing secrets.
- Chinese first-order operator dashboard now connects the paid-order launch checklist and safe tracker into the 299 RMB diagnosis workflow.
- Chinese first paid-order phone runbook added so the first 299 RMB order can be triaged, launched, delivered, and routed from mobile without crossing owner-only safety boundaries.
- Chinese first-order handoff prompts added so mobile order screenshots, suspicious messages, missing-material cases, and upgrade decisions can be passed to Codex without exposing secrets or requiring desktop operation.
- Fiverr external-link reply pack added for high-risk inbox messages that claim an order exists but ask the seller to open a non-Fiverr project or payment link.
- Chinese 299 sample-and-intake reply added to show the sample diagnosis report, request redacted materials, and route buyers into 299 / 999 / 1999+ scope.
- Chinese 299 30-minute delivery checklist added for fast first-order diagnosis delivery with intake, failure mapping, minimal tests, risk routing, and upgrade handoff.
- Chinese 299 custom offer pack added for Fiverr custom offers and domestic chat payment messages with scope, requirements, boundaries, pricing, and delivery fields.
- Chinese 999 custom offer pack added for post-diagnosis repair-plan upsells with payment wording, scope confirmation, direct-operation boundary, requirements, and delivery message.
- Chinese 1999+ rescue re-scope pack added for multi-workflow, production-risk, cost-spike, retry-loop, and complex automation rescue opportunities.
- Chinese package ladder one-pager added to compare 299 / 999 / 1999+ in buyer chats and route unclear leads into the right paid scope.
- Chinese buyer objection-handling pack added for price, guarantee, login, free-look, same-day, API-key, and pay-after-work objections.
- Chinese 299 domestic listing page added with title variants, full marketplace copy, buyer requirements, pinned FAQ, tags, image order, and safe first reply.
- Chinese 299 Xiaohongshu and Xianyu post pack added with three Xiaohongshu posts, Xianyu listing copy, first replies, WeChat group copy, posting order, and safety reminders.
- Chinese domestic posting schedule added with a 7-day channel rotation, daily 10-minute operating loop, reply rules, stop conditions, and weekly decision rules.
- Chinese domestic lead scorecard added to route chats into 299 diagnosis, 999 repair-plan, 1999+ rescue, or decline paths.
- Chinese domestic chat reply router added with exact buyer replies for 299 diagnosis, 999 repair-plan, 1999+ re-scope, objections, intake, and decline cases.
- Chinese 299 paid order handoff added to bridge confirmed payment into safe intake, diagnosis delivery, quality gates, and upgrade routing.
- Chinese first-order operator dashboard added to connect publishing, lead scoring, replies, quotes, payment confirmation, delivery, follow-up, and safety checks.
- Chinese buyer pre-diagnosis asset copy added for image cards, PDF copy, pinned comments, first replies, and buyer material instructions.
- Domestic 299 pre-diagnosis material card added as an upload-ready buyer-facing visual asset.
- Domestic 299 sensitive-data safety card added to reduce risky buyer intake and keep diagnosis platform-safe.
- Domestic posting bundle and upload checklist updated to include the two new pre-diagnosis cards in the recommended seven-image order.
- Domestic 299 summary card added to explain price, fit, buyer materials, deliverable, and exclusions in one screen.
- Domestic posting bundle and upload checklist updated to include the summary card in the recommended eight-image order.
- Chinese 299 eight-image posting caption added for Xianyu, Xiaohongshu, WeChat/private groups, comment hooks, buyer intake, safety-stop replies, and posting checks.
- Chinese 299 mobile posting checklist added with exact eight-image upload order, fast platform copy, reply rules, tracking fields, and stop conditions.
- Chinese 299 24-hour follow-up cadence added for domestic comments and DMs, including 0-minute, 2-hour, 12-hour, and 24-hour replies plus stop rules.
- Chinese daily lead review checklist added for scoring domestic leads, routing 299 / 999 / 1999+ quotes, stopping unsafe requests, and recording end-of-day metrics.
