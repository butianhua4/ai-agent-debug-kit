# Chinese First Order Operator Dashboard

Use this dashboard when running the RMB 299 AI automation diagnosis offer. It links the posting assets, lead scoring, buyer replies, payment handoff, and delivery files into one operating page.

The goal is to move from exposure to paid diagnosis without losing time or crossing safety boundaries.

## Current Offer

Primary offer:

299 RMB AI automation failure diagnosis.

Positioning:

I diagnose AI automation workflow failures using desensitized screenshots, error text, and sample input/output. I do not log in to accounts, collect secrets, handle payment/KYC/wallet/tax, or bypass platform limits.

Primary buyer:

People using n8n, Make, Zapier, Dify, Coze, Webhook, API, JSON mapping, Feishu, Notion, CRM, forms, or AI agent workflows.

## 1. Publish

Use these in order:

1. Full listing page: `docs/CHINESE_299_DOMESTIC_LISTING_PAGE.md`
2. Xiaohongshu / Xianyu posts: `docs/CHINESE_299_XHS_XIANYU_POSTS.md`
3. 7-day posting schedule: `docs/CHINESE_DOMESTIC_POSTING_SCHEDULE.md`

Primary images:

1. `assets/domestic-299-diagnosis-cover.png`
2. `assets/domestic-299-diagnosis-proof.png`
3. `assets/domestic-299-price-ladder.png`
4. `assets/domestic-299-diagnosis-one-pager.png`

Publishing rule:

Post once per channel according to schedule. Do not spam duplicate listings or cold-DM unrelated people.

## 2. Triage Incoming Lead

Use:

`docs/CHINESE_DOMESTIC_LEAD_SCORECARD.md`

Fast question:

Does the buyer provide desensitized material and a clear failed step?

Route:

- 8-10 points: quote 299 diagnosis.
- 5-7 points: ask one clarifying question.
- 3-4 points: route to 999 or 1999+.
- 0-2 points: decline or stop.

Stop immediately if the buyer asks for:

- password;
- API Key, Token, Cookie;
- private repo or production admin access;
- payment, wallet, KYC, or tax handling;
- bypassing platform controls;
- external links or off-platform contact.

## 3. Reply

Use:

`docs/CHINESE_DOMESTIC_CHAT_REPLY_ROUTER.md`

Default safe intake reply:

可以，先不要发账号密码、API Key、Token 或 Cookie。你把失败节点截图、报错文字、一条脱敏输入样例、期望输出、使用平台发来，我先判断适合 299 诊断、999 修复方案，还是需要重新拆复杂范围。

If the buyer is qualified:

Use Route A from the reply router.

If the buyer is unclear:

Use Route B and ask only one clarifying question.

If the buyer wants repair:

Use Route C and avoid underpricing.

If the buyer asks for unsafe access:

Use Route D and stop.

## 4. Quote

Use:

- 299 custom offer pack: `docs/CHINESE_299_CUSTOM_OFFER_PACK.md`
- 999 custom offer pack: `docs/CHINESE_999_CUSTOM_OFFER_PACK.md`
- 1999+ re-scope pack: `docs/CHINESE_1999_RESCUE_RESCOPE_PACK.md`
- Package ladder: `docs/CHINESE_PACKAGE_LADDER_ONE_PAGER.md`

299 quote boundary:

299 is a diagnosis report only. It does not include direct repair, login operation, or guaranteed full fix.

999 quote boundary:

999 is a repair-plan package for a small, clear scope after diagnosis.

1999+ quote boundary:

1999+ is for multi-workflow, production-risk, repeated-send, cost-spike, or long-term instability cases.

## 5. Confirm Order

Use:

- paid order handoff: `docs/CHINESE_299_PAID_ORDER_HANDOFF.md`
- paid order launch checklist: `docs/CHINESE_299_PAID_ORDER_LAUNCH_CHECKLIST.md`
- paid order tracker: `docs/CHINESE_299_PAID_ORDER_TRACKER.md`
- tracker CSV: `docs/examples/chinese-299-paid-order-tracker.csv`

Start only when:

- platform order is visible;
- platform chat shows paid order state;
- user confirms payment was received in an approved channel.

Do not start from:

- external links;
- "I paid, click here";
- unknown payment screenshots;
- unconfirmed off-platform claims.

Order launch flow:

1. Confirm the order is visible in a platform dashboard or the owner confirms payment.
2. Create one tracker row in `docs/examples/chinese-299-paid-order-tracker.csv` or a private copy.
3. Mark `status` as `paid_active`, `waiting_payment_confirmation`, `missing_materials`, `blocked`, or `in_progress`.
4. Mark `risk_flags` before opening any material.
5. Send the scope-lock message from `docs/CHINESE_299_PAID_ORDER_LAUNCH_CHECKLIST.md`.
6. Start the 30-minute diagnosis only after the material is complete and safe.

Never store passwords, API keys, tokens, cookies, OAuth codes, payout data, KYC, tax, wallet, payment details, private customer data, external links, or raw production logs with secrets in the tracker.

## 6. Deliver 299 Diagnosis

Use:

- launch checklist: `docs/CHINESE_299_PAID_ORDER_LAUNCH_CHECKLIST.md`
- 30-minute checklist: `docs/CHINESE_299_30_MIN_DELIVERY_CHECKLIST.md`
- report template: `docs/examples/chinese-299-diagnosis-report-template.md`
- sample report: `docs/examples/chinese-299-diagnosis-sample-report.md`

Delivery file name:

`YYYY-MM-DD-buyer-platform-299-diagnosis.md`

Required report sections:

- diagnosis scope;
- buyer goal;
- failed step;
- evidence;
- likely cause;
- minimal test;
- risk warning;
- route after delivery.

## 7. Close And Upsell

After delivery, choose one:

### Diagnosis Done

Use when the buyer can self-check.

Reply:

这个 299 诊断已经可以支持你做第一轮自查。建议先按最小测试步骤执行，观察通过/失败信号，再决定是否继续修。

### Upgrade To 999

Use when one clear repair path exists.

Reply:

如果你希望我继续把修复路径拆成可执行方案，可以升级到 999 小范围修复方案。我会写清楚改哪个节点、改什么字段、怎么测试、失败怎么回滚。

### Re-Scope To 1999+

Use when issue is bigger than one workflow or has production risk.

Reply:

这个问题已经超过单点诊断，涉及多流程、生产风险或长期稳定性。建议不要按 299 或 999 强行处理，需要重新确认范围。

## 8. Track

Use:

- lead tracker: `docs/DOMESTIC_LEAD_TRIAGE_TRACKER.md`
- tracker CSV: `docs/examples/domestic-lead-tracker.csv`
- paid order tracker: `docs/CHINESE_299_PAID_ORDER_TRACKER.md`
- paid order tracker CSV: `docs/examples/chinese-299-paid-order-tracker.csv`

Record:

- source channel;
- buyer handle;
- score;
- route;
- quote;
- payment confirmed: yes/no;
- delivery file;
- upgrade recommendation;
- follow-up date.

For paid orders, also record:

- package status;
- diagnosis deadline;
- material status;
- risk flags;
- owner confirmation needed: yes/no;
- report path;
- upgrade route.

Keep tracker notes operational only. Do not paste buyer secrets, payment details, private logs, or external links.

## Daily Operating Checklist

- [ ] Check Fiverr Orders.
- [ ] Check Fiverr Inbox.
- [ ] Check domestic channel replies if user has posted.
- [ ] Score every new lead.
- [ ] Send only safe replies after user confirmation if needed.
- [ ] Quote 299 / 999 / 1999+ based on score.
- [ ] Start delivery only after confirmed payment/order.
- [ ] Log every qualified lead.

## Safety Checklist

Before any buyer-facing action, confirm:

- [ ] No private credentials requested.
- [ ] No external links opened.
- [ ] No KYC/payment/wallet/tax handled.
- [ ] No platform bypass promised.
- [ ] No guaranteed repair promised.
- [ ] No private repo touched.
- [ ] User confirmation obtained when needed.

## First-Order Success Definition

The first real win is not a large order. The first real win is:

1. a qualified lead sends desensitized material;
2. the lead pays for 299 diagnosis;
3. a useful report is delivered;
4. the buyer understands whether to self-check, upgrade to 999, or re-scope to 1999+;
5. the process is recorded and repeatable.
