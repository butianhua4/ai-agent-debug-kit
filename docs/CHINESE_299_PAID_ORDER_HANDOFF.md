# Chinese 299 Paid Order Handoff

Use this checklist after a buyer has paid for the RMB 299 AI automation diagnosis offer or a platform order is clearly confirmed. It bridges chat conversion into delivery without improvising, touching accounts, or collecting secrets.

Do not begin delivery from a verbal "I paid" claim. Confirm payment/order inside the platform or with user-approved payment confirmation first.

## Handoff Goal

Turn a paid 299 order into one clear diagnosis report that includes:

- buyer goal;
- failed step;
- evidence;
- likely cause;
- minimal test;
- risk warning;
- route: stay at 299, upgrade to 999, or re-scope to 1999+.

## Step 1 - Confirm The Order

Accept the handoff only if one of these is true:

- Fiverr/marketplace order is visible in the order dashboard;
- platform chat shows a paid order state;
- the user confirms payment was received in an approved channel.

Do not accept:

- "I already paid, click this link";
- screenshots from unknown payment pages;
- external links;
- off-platform payment confirmation without user approval.

Safe reply if payment is unclear:

我这边还不能确认订单状态。为了安全，先不要点外部链接。请在平台内完成订单/付款确认，确认后我再开始诊断交付。

## Step 2 - Lock The 299 Scope

Before starting, confirm:

- one workflow or one failed scenario;
- diagnosis report only, not direct repair;
- no login or credential handling;
- no payment/KYC/wallet/tax/account-risk work;
- no guarantee of full repair.

Scope lock reply:

我先按 299 故障诊断范围处理：不登录账号，不接收密钥，只基于你提供的脱敏截图、报错文字和样例输入输出，交付一份中文诊断报告。报告会写清失败点、可能原因、证据、最小测试步骤和下一步建议。

## Step 3 - Material Intake

Required:

1. Platform name.
2. Failed step screenshot.
3. Error text.
4. One desensitized input sample.
5. Expected output.

Optional:

- what changed recently;
- whether retry/duplicate send happened;
- approximate volume or cost symptom;
- buyer's own suspected cause.

Reject or pause if buyer sends:

- password;
- API Key, Token, Cookie;
- private repo invite;
- customer list;
- payment/KYC/wallet/tax data;
- production admin access.

Safety-stop reply:

这个材料里包含敏感信息，我不能接收或处理。请先删除/打码账号、密钥、Cookie、客户数据、付款或身份信息，再只发报错和脱敏样例。

## Step 4 - Create Delivery File

Use this filename:

`YYYY-MM-DD-buyer-platform-299-diagnosis.md`

Use this template:

`docs/examples/chinese-299-diagnosis-report-template.md`

If writing a sample/demo report, use:

`docs/examples/chinese-299-diagnosis-sample-report.md`

Required sections:

- 诊断范围
- 买家目标
- 当前失败点
- 证据
- 最可能原因
- 最小测试步骤
- 风险提醒
- 下一步建议
- 是否建议升级

## Step 5 - 30-Minute Delivery Flow

Use `docs/CHINESE_299_30_MIN_DELIVERY_CHECKLIST.md`.

Timeline:

- 0-5 min: lock intake and remove unsafe material.
- 5-12 min: map the failure chain.
- 12-20 min: write likely cause and evidence.
- 20-26 min: write minimal tests and risk warnings.
- 26-30 min: route to 299 done / 999 upgrade / 1999+ re-scope.

Do not spend the 299 diagnosis trying to repair the whole workflow.

## Step 6 - Delivery Message

Use after the report is ready:

诊断报告已经整理好。

我没有接收账号密码、API Key、Token、Cookie 或客户数据，只基于你提供的脱敏材料判断。建议你先按报告里的“最小测试步骤”做一轮验证，不要直接大改生产流程。

如果测试后确认只是小范围修复，可以再升级到 999 修复方案；如果涉及多个流程、重复发送、生产风险或成本异常，就需要按 1999+ 重新拆范围。

## Step 7 - Route After Delivery

### Route A: 299 Done

Use when diagnosis is enough for buyer self-check.

Reply:

这个 299 诊断已经可以支持你做第一轮自查。建议先按最小测试步骤执行，观察通过/失败信号，再决定是否继续修。

### Route B: 999 Upgrade

Use when one clear repair path exists.

Reply:

如果你希望我继续把修复路径拆成可执行方案，可以升级到 999 小范围修复方案。我会写清楚改哪个节点、改什么字段、怎么测试、失败怎么回滚。

### Route C: 1999+ Re-Scope

Use when the issue is bigger than one workflow or has production risk.

Reply:

这个问题已经超过单点诊断，涉及多流程、生产风险或长期稳定性。建议不要按 299 或 999 强行处理，需要重新确认范围。

### Route D: Decline Further Work

Use when next step requires unsafe access.

Reply:

后续这部分会涉及账号权限、密钥、付款/KYC/钱包/税务或平台限制，我不能继续处理。可以只保留在安全范围内的脱敏诊断和方案建议。

## Quality Gate Before Sending

Do not send the report until all are true:

- [ ] Buyer goal is stated.
- [ ] Failed step is identified.
- [ ] Evidence is cited.
- [ ] Most likely cause is explained.
- [ ] Minimal test is included.
- [ ] Pass/fail signal is included.
- [ ] Risk warning is included.
- [ ] Upgrade or re-scope recommendation is included.
- [ ] No secrets or private customer data appear in the report.
- [ ] No guaranteed repair language appears.

## Internal Order Log

Record:

- order channel;
- buyer handle;
- platform involved;
- package: 299;
- material received;
- unsafe material removed: yes/no;
- delivery file path;
- delivery time;
- route after delivery;
- recommended follow-up date.

## Related Files

- Lead scorecard: `docs/CHINESE_DOMESTIC_LEAD_SCORECARD.md`
- Chat reply router: `docs/CHINESE_DOMESTIC_CHAT_REPLY_ROUTER.md`
- 299 delivery checklist: `docs/CHINESE_299_30_MIN_DELIVERY_CHECKLIST.md`
- 299 report template: `docs/examples/chinese-299-diagnosis-report-template.md`
- 299 sample report: `docs/examples/chinese-299-diagnosis-sample-report.md`
- 999 upgrade reply: `docs/CHINESE_999_UPGRADE_REPLY_PACK.md`
- 1999+ re-scope pack: `docs/CHINESE_1999_RESCUE_RESCOPE_PACK.md`
