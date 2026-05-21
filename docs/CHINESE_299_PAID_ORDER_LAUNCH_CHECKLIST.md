# Chinese 299 Paid Order Launch Checklist

Use this checklist immediately after a 299 RMB diagnosis order is confirmed inside Fiverr, another marketplace, or an owner-approved payment channel.

This is not a sales page. It is the operator launch sequence for the first 30 minutes after a real paid order appears.

## Safety Rules

Only start work when at least one condition is true:

- The order is visible in Fiverr or another marketplace order dashboard.
- The platform order status is paid, active, or in progress.
- The owner confirms payment in an approved channel.

Stop and ask the owner before continuing if:

- The buyer asks you to verify payment through an external link.
- The buyer sends screenshots that claim payment but there is no platform order.
- The buyer asks for login, OAuth, API keys, cookies, wallet access, KYC, tax, payout, or payment actions.
- The buyer sends private customer data, secrets, or production credentials.
- The request requires opening an external file or link outside the marketplace.

## 0-3 Minutes: Create The Order Note

Create a short local note or tracker row with:

- Buyer alias.
- Platform.
- Package: 299 diagnosis.
- Order start time and deadline.
- Platform-internal order link only.
- Material status: complete, missing, unsafe, or unclear.
- Risk flags.
- Expected deliverable: diagnosis report only.

Do not store secrets, passwords, tokens, private customer data, or payment details.

## 3-7 Minutes: Send Scope Lock

Send this short message inside the platform:

```text
收到，我先按 299 元故障诊断范围处理：我会检查你提供的报错、截图和脱敏日志，输出一份“问题原因 + 风险点 + 下一步修复建议”的诊断报告。

为了安全，我不会登录你的账号，也不需要密码、Token、Cookie、付款信息或客户隐私数据。你可以只发脱敏截图、报错文本和一小段示例输入/输出。
```

## 7-12 Minutes: Intake Completeness Check

Confirm the buyer provided:

- Platform or tool name: n8n, Make, Zapier, Python, Node.js, browser automation, AI Agent, CI, or other.
- Failed step: what action failed.
- Error text or screenshot.
- Redacted sample input.
- Expected output.
- What changed recently, if known.

If anything is missing, send:

```text
我可以开始看。为了避免误判，还差 3 个信息：

1. 失败发生在哪一步？
2. 当前报错原文或截图是什么？
3. 你期望它正常输出什么结果？

请不要发送密码、Token、Cookie、付款信息或客户隐私数据，截图里有敏感信息可以先打码。
```

If the buyer sends secrets, stop with:

```text
我先暂停一下。你刚才发的内容里可能包含敏感信息。请先撤回或重新发送打码版本，我不会保存或使用密码、Token、Cookie、付款信息、客户隐私数据。
```

## 12-25 Minutes: Build The Diagnosis

Open these files:

- `docs/examples/chinese-299-diagnosis-report-template.md`
- `docs/CHINESE_299_30_MIN_DELIVERY_CHECKLIST.md`
- `docs/CHINESE_299_QUOTE_DECISION_MATRIX.md`

Fill the report in this order:

1. Buyer goal.
2. Failure point.
3. Evidence received.
4. Likely root cause.
5. Risk flags.
6. Minimal test or reproduction path.
7. Recommended next action.
8. Upgrade route, only if justified.

Use this decision route:

- 299 done: diagnosis is enough, no repair needed.
- 999 repair plan: issue is clear and can be scoped without login.
- 1999+ rescue re-scope: multiple systems, unclear ownership, or production risk.
- Decline further work: payment, account, KYC, wallet, private data, legal, or platform-risk request.

## 25-30 Minutes: QA Gate

Before delivery, confirm the report has:

- Clear buyer goal.
- Clear failed step.
- Evidence summary.
- Likely cause, labeled as diagnosis, not guaranteed truth.
- Minimal test or verification suggestion.
- Risk warning if needed.
- Next-step route.
- No secrets or sensitive data.
- No promise that repair is guaranteed.
- No request for credentials.

## Delivery Message

```text
我已经完成 299 元故障诊断，报告里包含：

1. 当前问题最可能的原因
2. 我看到的风险点
3. 建议你下一步怎么处理
4. 如果要继续修复，适合走哪个范围

这单交付的是诊断报告，不包含登录账号或直接改生产环境。如果你确认要继续，我可以基于报告再给你一个明确的修复范围和报价。
```

## After Delivery

Update the local order tracker:

- Delivered: yes or no.
- Delivery time.
- Buyer reaction.
- Upgrade route: none, 999, 1999+, unsafe, or waiting.
- Next follow-up time.

If the buyer wants repair, use:

- `docs/CHINESE_999_UPGRADE_REPLY_PACK.md`
- `docs/CHINESE_999_CUSTOM_OFFER_PACK.md`
- `docs/CHINESE_1999_RESCUE_RESCOPE_PACK.md`

If the buyer asks for unsafe access, stop and ask the owner.

## Related Files

- `docs/CHINESE_299_PAID_ORDER_HANDOFF.md`
- `docs/CHINESE_299_30_MIN_DELIVERY_CHECKLIST.md`
- `docs/examples/chinese-299-diagnosis-report-template.md`
- `docs/CHINESE_299_TO_999_UPSELL_HANDOFF.md`
- `docs/CHINESE_DAILY_LEAD_REVIEW_CHECKLIST.md`
