# 48H Overseas Revenue Board

Mode: OVERSEAS_ASYNC_REVENUE_OPERATOR
Started: 2026-05-21
Primary offer: AI Automation Emergency Rescue Sprint

Confirmed revenue is only counted when a platform confirms an order, a bounty is awarded, an invoice is paid, or a paid order is visible. Leads, drafts, unmerged PRs, and unpublished posts are tracked separately.

| source | url | type | amount | status | next_action | owner | artifact | probability | blocker |
| --- | --- | --- | ---: | --- | --- | --- | --- | ---: | --- |
| Fiverr | https://www.fiverr.com/users/aibuildflow/manage_orders | inbound | 0 | no confirmed order visible from last check | Check inbound only if new message/order appears | user + Codex draft | sales/triage-reply-templates-en.md | 0.05 | Needs real buyer message |
| Algora | https://algora.io/challenges/tsperf | bounty challenge | 15000 | candidate, not attempted | Scope challenge requirements and estimate MVP | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.08 | Large build; likely not 2-hour PR |
| Algora/GitHub | https://github.com/archestra-ai/archestra/issues/3851 | bounty issue | 900 | rejected | No action | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.00 | Closed, core-team only / reserved |
| Algora/GitHub | https://github.com/archestra-ai/archestra/issues/3378 | bounty issue | 500 | rejected | No action | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.00 | Closed and reserved for a specific contributor |
| Algora/GitHub | https://github.com/tscircuit/tscircuit/issues/328 | bounty issue | 100 | candidate-low | Only consider if no higher-value public target is viable | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.10 | Low payout and hardware-design acceptance path |
| GitHub/Algora | https://github.com/archestra-ai/archestra/issues/3859 | bounty issue | 100 | rejected | No action | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.00 | Reserved for SE interview |
| GitHub | https://github.com/archestra-ai/archestra/issues/4030 | public issue | 0 | candidate-proof | Consider patch only as proof asset, not revenue | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.12 | No visible bounty amount |
| GitHub | https://github.com/567-labs/instructor-js/issues/8 | public docs issue | 0 | patch_prepared | User can manually submit patch as upstream PR | user | ops/48h/patches/0001-Add-cookbook-pages-for-existing-examples.patch | 0.18 | No bounty; no connector write access to create PR |
| GitHub/Algora | https://github.com/calcom/cal.com/issues/23104 | bounty issue | 2000 | rejected for now | Recheck only if reopened | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.00 | Issue is closed |
| GitHub/Algora | https://github.com/twentyhq/twenty/issues?q=IMAP+algora+bounty | bounty issue | 2500 | rejected for now | No action | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.00 | Search result points to completed/closed IMAP bounty |
| Freelancer | https://www.freelancer.com/projects/n8n/urgent-workflow-consultation-needed | market post | hourly | blocked/market-signal | Do not contact automatically; use as offer positioning signal | user | ops/48h/LEAD_CANDIDATES.csv | 0.00 | In Progress / awarded |
| n8n Community | https://community.n8n.io/t/freelancer-n8n-automation-expert-gmail-google-sheets-slack-ai-email-classification/289856 | market post | unknown | candidate-review | Prepare reply draft only if platform rules allow and user confirms | user | ops/48h/LEAD_CANDIDATES.csv | 0.10 | Needs user/platform confirmation before posting |
| Freelancer | https://www.freelancer.com/projects/n8n/expertise-based-workflow-automation | job post | 1500 target | proposal_ready | User can send proposal through platform if allowed | user | ops/48h/PROPOSALS_TO_SEND.md | 0.18 | No auto-send; platform account/user confirmation required |
| Freelancer index | https://www.freelancer.com/jobs/n8n/ | job index | 1500 target | proposal_ready | Match exact AI voice/n8n urgent-fix project in logged-in account | user | ops/48h/PROPOSALS_TO_SEND.md | 0.16 | Index snippet only; user must open/send on platform |
| Freelancer | https://www.freelancer.com/projects/n8n/workflow-repair-optimization | job post | 1500 target | proposal_ready | User can send proposal through platform if allowed | user | ops/48h/PROPOSALS_TO_SEND.md | 0.20 | May require n8n access; must request sanitized export first |
| Manual send queue | ops/48h/SEND_QUEUE.md | user-send queue | 499-5000 | ready | User sends highest-priority proposal/post manually | user | ops/48h/SEND_QUEUE.md | 0.25 | Requires user platform account and compliant manual sending |
| Ready to send now | ops/48h/READY_TO_SEND_NOW.md | user-send drafts | 499-5000 | ready | User sends top 3 short drafts manually | user | ops/48h/READY_TO_SEND_NOW.md | 0.30 | Requires user platform account and compliant manual sending |
| Make Community | https://community.make.com/t/webhook-data-not-parsing-automatically/14498 | community pain | 499 target | reply_candidate | Helpful diagnostic reply only if rules permit | user | ops/48h/PUBLIC_POSTS_TO_SEND.md | 0.08 | Not a direct job; avoid spam |
| Zapier support pain | https://help.zapier.com/hc/en-us/articles/8496291737485-Troubleshoot-webhooks-in-Zapier | market pain | 499 target | positioning_signal | Use as proof of common pain in public post | Codex | ops/48h/PUBLIC_POSTS_TO_SEND.md | 0.05 | Not a direct lead |
| Reddit r/n8n | https://www.reddit.com/r/n8n/comments/1tgrlhg/we_have_50_n8n_flows_undocumented_constantly/ | high-intent community pain | 499-5000 target | reply_draft_ready | User can post helpful reply if subreddit rules allow | user | ops/48h/PROPOSALS_TO_SEND.md | 0.14 | No auto-DM/no spam; no explicit budget |
| Opire | https://app.opire.dev/issues/01HWJNZ5HQMVG2TCW6XHQQJ3QT | reward issue | 190 | rejected-low | No action unless all higher-value paths stall | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.03 | 22 solvers/claims and low payout |
| Opire | https://app.opire.dev/issues/01HWT26R3S59MS778MAE9786YG | reward issue | 110 | rejected-low | No action unless all higher-value paths stall | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.03 | 1 solver claimed and low payout |
| Opire | https://github.com/hexgrad/kokoro/issues/290 | reward issue | 1620 | rejected-risk | No action | Codex | ops/48h/BOUNTY_ATTEMPTS.md | 0.00 | Looks like funding/donation for maintainer work, not a clear external patch bounty |
| Owned asset | https://github.com/butianhua4/ai-agent-debug-kit | sales asset | 499-5000 | shipped | Keep as proof link for outbound/inbound replies | Codex | sales/48h-emergency-rescue-onepager.md | 0.20 | Needs external distribution |
| Owned offer page | https://butianhua4.github.io/ai-agent-debug-kit/rescue.html | landing page | 499-5000 | shipped | Use as proof/safe-intake link in proposals and posts | Codex | rescue.html | 0.25 | Needs GitHub Pages propagation and external distribution |
| Owned asset | https://github.com/butianhua4/agent-skill-packs | trust asset | 499-5000 | shipped | Use as agent/skill-pack proof asset | Codex | docs/OPENCLAW_COMMUNITY_GUIDE.md | 0.15 | Needs community posting by user or approved channel |
| Freelancer | https://www.freelancer.com/projects/data-processing/automation-workflow-debugging | open job post | 1500-5000 target | proposal_ready | User can send prepared proposal through Freelancer if rules/account allow | user | ops/48h/PROPOSALS_TO_SEND.md | 0.26 | No auto-bid; may require safe access after sanitized triage |
| Freelancer | https://www.freelancer.com/projects/zapier/fix-zapier-error-issues | open job post | 499-1500 target | proposal_ready | User can send prepared proposal through Freelancer if rules/account allow | user | ops/48h/PROPOSALS_TO_SEND.md | 0.21 | No auto-bid; must not request Salesforce/Zapier credentials |
| Reddit r/n8n | https://www.reddit.com/r/n8n/comments/1tjirvz/one_bad_workflow_took_down_our_entire_n8n/ | high-intent community pain | 499-5000 target | reply_draft_ready | User can post helpful recovery/circuit-breaker reply if subreddit rules allow | user | ops/48h/PROPOSALS_TO_SEND.md | 0.15 | No auto-DM/no spam; no explicit budget |
| Reddit r/n8n | https://www.reddit.com/r/n8n/comments/1t16lib/error_details_workflow_did_not_finish_possible/ | community pain | 499-1500 target | reply_draft_candidate | User can post helpful OOM/watcher reply if subreddit rules allow | user | ops/48h/LEAD_CANDIDATES.csv | 0.10 | No explicit budget |
| n8n Community | https://community.n8n.io/t/can-someone-help-me-production-webhook-does-not-execute-workflow-http-500-reading-execute/247738 | community pain | 499 target | reply_candidate | Helpful diagnostic reply only if rules permit | user | ops/48h/LEAD_CANDIDATES.csv | 0.08 | Not a direct job; avoid spam |
| OpenClaw | https://github.com/openclaw/openclaw/issues/50090 | public issue patch | 0 | patch_prepared | User can manually open upstream PR if useful for community exposure | user | ops/48h/patches/openclaw-skill-description-trigger-quality.patch | 0.12 | No bounty; current connector has no write access to upstream |
| Freelancer quick bids | ops/48h/FREELANCER_QUICK_BIDS.md | user-send proposal pack | 499-5000 | ready | User can manually send the top Freelancer proposals if platform rules/account allow | user | ops/48h/FREELANCER_QUICK_BIDS.md | 0.32 | No auto-send; requires user platform account and compliant manual sending |
| GitHub Actions template | https://github.com/actions/typescript-action/issues/854 | public docs patch | 0 | patch_prepared | User can manually open upstream PR if useful for public CI/release proof | user | ops/48h/patches/actions-typescript-action-release-version-check-readme.patch | 0.10 | No bounty; current connector has no write access to upstream |
| FinMind | https://github.com/rohitdash08/FinMind/issues/75 | bounty issue | 500 | rejected-risk | No action unless maintainer clarifies credential-free mock scope and payout path | Codex | ops/48h/HIGH_VALUE_BOUNTY_REFRESH_2026-05-22.md | 0.02 | Partner-portal integration ambiguity, many competing attempts, payment-address chatter |
| FinMind | https://github.com/rohitdash08/FinMind/issues/77 | bounty issue | 50 | rejected-low | Fallback only if proof patch is needed and higher-value paths stall | Codex | ops/48h/HIGH_VALUE_BOUNTY_REFRESH_2026-05-22.md | 0.04 | Low payout and crowded issue comments |

## Current confirmed revenue

$0 confirmed.

## Current qualified pipeline

No confirmed customer pipeline yet. The active monetizable assets are public proof/sales assets, proposal drafts, and one prepared public docs patch.
