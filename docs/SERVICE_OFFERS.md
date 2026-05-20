# Service Offers

These service packages turn AI Agent Debug Kit into a freelance offer.

Do not publish paid listings, bind payout methods, or accept client work without user confirmation.

## Offer 1: AI Agent Log Debug Report

### English Listing Title

I will debug your AI agent logs and deliver a readable failure report

### Chinese Listing Title

AI Agent 运行日志诊断报告：定位错误、成本、权限和风险问题

### Price

- Starter: USD 49 / RMB 299
- Delivery: 1-2 days

### Buyer Sends

- redacted JSONL, JSON, or plain-text logs
- short description of expected behavior
- framework/tool name if known

### Deliverables

- Markdown debug report
- JSON summary report
- top 3 suspected failure causes
- risk flags: secrets, permission issues, repeated loops, high-cost runs
- next-step recommendations

### Boundaries

- no production credentials
- no private repo access required
- no live system login
- no guaranteed bug fix in this package

## Offer 2: AI Automation Failure Fix

### English Listing Title

I will fix one failing AI automation or agent workflow

### Chinese Listing Title

修复一个 AI 自动化 / Agent 工作流失败问题

### Price

- Standard: USD 149 / RMB 999
- Delivery: 2-4 days

### Buyer Sends

- redacted logs
- reproducible steps
- public repo or isolated file bundle
- expected output

### Deliverables

- one scoped fix
- before/after explanation
- test or manual verification notes
- optional AI Agent Debug Kit report

### Boundaries

- no paid API usage unless buyer provides test quota
- no private production access
- no broad rewrites
- no security exploit work

## Offer 3: AI Agent Debug Kit Custom Setup

### English Listing Title

I will customize an AI agent log dashboard and CI gate for your workflow

### Chinese Listing Title

定制 AI Agent 日志分析看板和 CI 风险门禁

### Price

- Pro: USD 299-599 / RMB 1999-3999
- Delivery: 5-10 days

### Buyer Sends

- target log format
- preferred report fields
- branding text or colors if needed
- CI platform if needed

### Deliverables

- customized static web app
- parser support for the buyer's log shape
- Markdown/JSON report templates
- CI gate example
- handoff guide

### Boundaries

- customization is based on AI Agent Debug Kit
- no backend hosting unless separately scoped
- no enterprise SSO/auth work in this package
- no payout or account setup for the buyer

## Offer 4: AI Agent Bug Report Triage

### English Listing Title

I will triage AI generated bug reports and agent logs

### Chinese Listing Title

AI 生成 Bug 报告 / Agent 日志分拣：筛掉噪音，标记真实风险

### Price

- Starter: USD 120 / RMB 799
- Standard: USD 250 / RMB 1699
- Premium: USD 500 / RMB 3499

### Buyer Sends

- issue bodies, bug reports, or redacted log snippets
- product or repository context
- existing severity or label rules if available

### Deliverables

- triage table
- reproducibility status
- evidence quality rating
- likely false-positive list
- suggested labels and reply drafts
- optional CI/log gate recommendation

### Boundaries

- defensive triage only
- no exploit writing
- no credential handling
- no unknown downloads before a real order exists

Full offer draft: `docs/BUG_REPORT_TRIAGE_OFFER.md`

## Platform Copy

### Fiverr Short Description

I will inspect your AI agent logs, identify failures, cost spikes, permission issues, retry loops, and deliver a clean Markdown/JSON debug report.

### Upwork Project Summary

I help AI builders debug failed agent runs. Send redacted JSONL, JSON, or plain-text logs and I will return a structured report with error analysis, tool-call breakdown, risk flags, cost estimate, and recommended fixes.

### Chinese Platform Summary

我可以帮你诊断 AI Agent / 自动化脚本运行日志，定位工具调用失败、权限错误、token 成本异常、重复重试和潜在敏感信息，并交付 Markdown/JSON 报告或定制一个轻量日志分析工具。

## Client Intake Questions

1. Which framework or tool produced the logs?
2. What result did you expect?
3. What failed or looked suspicious?
4. Can you share a redacted minimal log sample?
5. Do you need only a report, or do you also need a code fix?

Use the full intake form in `docs/CLIENT_INTAKE_FORM.md` before accepting custom work.

Use `docs/MICRO_PRODUCT_PACKS.md` when choosing between a report, fix scope, CI gate, or lightweight automation script.

## Rejection Rules

Reject or rescope requests that require:

- production passwords or API keys
- private repo access without explicit user approval
- paid API usage without buyer-provided test quota
- malware, spam, scraping abuse, or security exploitation
- vague "fix everything" scope
- live account/payout/payment configuration
