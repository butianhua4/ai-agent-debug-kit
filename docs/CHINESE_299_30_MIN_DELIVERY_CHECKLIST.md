# Chinese 299 Diagnosis 30-Minute Delivery Checklist

Use this checklist after a buyer pays for or clearly confirms the RMB 299 AI automation diagnosis scope. The goal is to deliver a useful first report in 30 minutes without logging into accounts, touching production systems, or collecting secrets.

Never request passwords, API keys, tokens, cookies, private repositories, customer lists, payment data, KYC materials, wallets, or production admin access.

## Fit Check Before Starting

Accept as 299 only if all are true:

- One workflow, one failed scenario, or one clear error chain.
- Buyer can provide redacted screenshots, error text, and sample input/output.
- The goal is diagnosis and next-step guidance, not direct repair.
- No login, credential, wallet, payment, KYC, scraping bypass, or platform evasion is required.

Re-scope to 999 / 1999+ if:

- The buyer wants exact repair steps after the diagnosis.
- Multiple workflows or platforms are involved.
- The issue can trigger duplicate sends, wrong CRM writes, cost spikes, or production damage.
- The buyer expects direct operation inside their account.

## 0-5 Minutes: Intake Lock

Collect only redacted material:

- Failed node or workflow screenshot.
- Exact error text.
- One redacted input sample.
- Expected output shape.
- Platform names only, not credentials.

Stop immediately if the buyer sends secrets. Use: `docs/CHINESE_299_SAMPLE_INTAKE_REPLY.md` safety-stop reply.

## 5-12 Minutes: Failure Map

Create a short failure map:

1. Buyer goal.
2. Current failed step.
3. Observed error.
4. Likely failure category:
   - JSON path mismatch
   - Webhook payload shape changed
   - Required field missing
   - Prompt output schema drift
   - Retry loop
   - Auth / permission boundary
   - Rate / cost issue
   - Unknown, needs more redacted material

## 12-20 Minutes: Diagnosis

Write the diagnosis in this order:

1. Most likely root cause.
2. Evidence from screenshot/error/sample.
3. What not to change yet.
4. Minimal test to confirm.
5. Risk level: low / medium / high.
6. Whether 999 repair-plan upgrade is appropriate.

Use `docs/examples/chinese-299-diagnosis-report-template.md` as the report structure.

## 20-26 Minutes: Buyer-Safe Next Steps

Give 3-5 next steps the buyer can do without sharing secrets:

- Which node or field to inspect.
- Which JSON path or output field to compare.
- What redacted test payload to run.
- What pass/fail signal to look for.
- What to stop doing if the test fails.

Do not provide unsafe production operation instructions if risk is unclear.

## 26-30 Minutes: Close And Route

End the report with one of these routes:

### Route A: Diagnosis Only

这个 299 诊断已经可以支持你做第一轮自查。建议先按“最小测试步骤”执行，不要直接大改生产流程。

### Route B: 999 Upgrade

如果你希望我继续把修复路径拆成可执行方案，可以升级到 999 小范围修复方案。我会写清楚改哪个节点、改什么字段、怎么测试、失败怎么回滚。

Use: `docs/CHINESE_999_UPGRADE_REPLY_PACK.md`

### Route C: 1999+ Re-Scope

这个问题已经超过单点诊断，涉及多流程、生产风险或长期稳定性。建议不要按 299 或 999 强行处理，需要重新确认范围。

## Delivery Message

诊断报告已整理好。

我没有接收账号密码、API Key、Token、Cookie 或客户数据，只基于你提供的脱敏材料判断。建议你先按报告里的“最小测试步骤”做一轮验证；如果测试后仍失败，再决定是否升级到 999 小范围修复方案。

## Quality Bar

Do not deliver until the report includes:

- Buyer goal.
- Current failure.
- Likely root cause.
- Evidence.
- Minimal test.
- Pass/fail signal.
- Risk warning.
- Upgrade or re-scope recommendation.

## Reusable File Links

- Intake reply: `docs/CHINESE_299_SAMPLE_INTAKE_REPLY.md`
- Intake form: `docs/CHINESE_BUYER_INTAKE_FORM.md`
- 299 report template: `docs/examples/chinese-299-diagnosis-report-template.md`
- 299 sample report: `docs/examples/chinese-299-diagnosis-sample-report.md`
- Quote matrix: `docs/CHINESE_299_QUOTE_DECISION_MATRIX.md`
- 999 upgrade reply: `docs/CHINESE_999_UPGRADE_REPLY_PACK.md`
