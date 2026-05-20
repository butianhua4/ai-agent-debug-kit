# Upload Asset Checklist

Use this checklist when uploading assets to Fiverr portfolio, Fiverr gallery, a Chinese service listing, or a buyer message attachment.

## Automation Failure Rescue

For n8n / Make / Zapier / webhook / API / JSON mapping failures.

### Best Upload Order

1. Cover image
2. Short animated demo
3. One-page PDF
4. Public proof link
5. Offer / custom-offer copy

### Files

| Asset | Path | Best Use |
| --- | --- | --- |
| Cover image | `assets/automation-failure-rescue-cover.svg` | Fiverr gallery, portfolio image, Chinese listing cover |
| Animated demo | `assets/automation-rescue-demo.gif` | Fiverr gallery if GIF is accepted, portfolio, chat proof |
| One-page PDF | `assets/automation-rescue-one-pager.pdf` | Fiverr portfolio attachment, buyer clarification, Chinese listing attachment |
| Promo copy | `docs/AUTOMATION_FAILURE_RESCUE_PROMO_PACK.md` | New gig draft, listing copy, FAQ, requirements |
| Custom offer copy | `docs/CUSTOM_OFFER_AUTOMATION_RESCUE.md` | Fiverr inbox custom offer after buyer qualification |
| Before/after case | `docs/PORTFOLIO_CASE_AUTOMATION_FAILURE_RESCUE.md` | Portfolio case, public proof, buyer trust |
| Sample log | `docs/examples/webhook-json-mapping-demo-log.jsonl` | Technical proof and CLI demo |

### Public Links

- Landing page: `https://butianhua4.github.io/ai-agent-debug-kit/`
- Fiverr profile: `https://www.fiverr.com/aibuildflow`

### Upload Notes

- If Fiverr rejects SVG, export the SVG to PNG before upload.
- If Fiverr rejects GIF in gallery, upload the GIF to portfolio or use the PDF and cover instead.
- Do not upload anything that claims a real private client result. These are clearly labeled public sample/demo assets.
- Do not include passwords, API keys, OAuth tokens, KYC, tax, payout, wallet, or private buyer data.

## AI Agent Log Rescue

For AI agent workflow logs, tool-call errors, and CI/debug reports.

### Files

| Asset | Path | Best Use |
| --- | --- | --- |
| Cover image | `assets/agent-log-rescue-cover.svg` | Fiverr portfolio or gallery cover |
| Portfolio case | `docs/PORTFOLIO_CASE_AGENT_LOG_RESCUE.md` | Public sample case |
| Promo pack | `docs/PORTFOLIO_CASE_PROMO_PACK.md` | Fiverr/Chinese listing copy |
| Emergency report template | `docs/examples/emergency-rescue-report-template.md` | Delivery template |
| Buyer brief | `docs/RESCUE_BUYER_BRIEF.md` | Intake questions |

## Quick Decision

If the buyer says:

- "n8n", "Make", "Zapier", "webhook", "API", "JSON", or "automation" -> use Automation Failure Rescue.
- "agent log", "tool call", "Claude/Codex workflow", "CI gate", or "debug report" -> use AI Agent Log Rescue.
- "rank in ChatGPT/Gemini/AI search" -> use AEO Readiness Audit.

## Upload Blockers

Stop and ask the user if the platform asks for:

- payout setup
- tax form
- KYC or identity verification
- paid subscription
- wallet connection
- OAuth / high-permission authorization
- deleting, pausing, or replacing an existing live gig

