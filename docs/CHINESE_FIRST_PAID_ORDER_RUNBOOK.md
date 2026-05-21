# Chinese First Paid Order Runbook

Use this one-screen runbook from a phone when the first 299 RMB diagnosis order appears.

Goal: move from paid order to safe delivery without opening risky links, asking for secrets, or losing the 999 / 1999+ upgrade path.

## 1. First Check

Open in this order:

1. Fiverr Orders or the marketplace order dashboard.
2. Fiverr Inbox or the platform chat.
3. `docs/CHINESE_FIRST_ORDER_DASHBOARD.md`.

Start only if:

- The order is visible in the platform dashboard; or
- The platform state says paid, active, or in progress; or
- The owner confirms payment in an approved channel.

Do not start if the buyer says "click this link to confirm payment".

## 2. Send This To Codex

If the order is real, send this instruction to Codex:

```text
有一个 299 诊断订单已确认。请按第一单流程处理：先检查材料是否安全完整，不打开外链，不需要登录，不接触密码/Token/Cookie/付款/KYC/税务/钱包。请建立订单跟踪行、准备诊断报告，并告诉我是否需要我确认付款、上传材料或回复买家。
```

## 3. Ask Buyer For Safe Material

If the buyer has not sent enough material, send:

```text
我可以开始看。请发这 5 项就够：

1. 用的是什么平台或工具？
2. 失败发生在哪一步？
3. 报错原文或截图是什么？
4. 脱敏后的示例输入/输出是什么？
5. 你期望它正常输出什么？

请不要发送密码、Token、Cookie、付款信息、客户隐私数据或后台登录信息。
```

## 4. What Codex Should Open

Primary files:

- `docs/CHINESE_299_PAID_ORDER_LAUNCH_CHECKLIST.md`
- `docs/CHINESE_299_PAID_ORDER_TRACKER.md`
- `docs/examples/chinese-299-paid-order-tracker.csv`
- `docs/CHINESE_299_30_MIN_DELIVERY_CHECKLIST.md`
- `docs/examples/chinese-299-diagnosis-report-template.md`

## 5. Owner-Only Stop Points

Stop and ask the owner if:

- Payment is unclear.
- The buyer asks to leave the platform.
- The buyer sends an external link.
- The buyer asks for login.
- The buyer sends passwords, API keys, tokens, cookies, private customer data, payment, KYC, tax, wallet, or payout information.
- The buyer wants direct production changes.
- Scope is bigger than one diagnosis report.

## 6. Delivery Decision

After diagnosis, choose one route:

| Route | Use when | Next file |
| --- | --- | --- |
| 299 done | Buyer can self-check with the report | `docs/examples/chinese-299-diagnosis-report-template.md` |
| 999 upgrade | One clear small repair path exists | `docs/CHINESE_999_UPGRADE_REPLY_PACK.md` |
| 1999+ re-scope | Multi-workflow, production-risk, cost-spike, or repeated failure | `docs/CHINESE_1999_RESCUE_RESCOPE_PACK.md` |
| stop | Unsafe, account/payment/KYC/wallet/private-data request | ask owner |

## 7. Delivery Message

Use this after the diagnosis report is ready:

```text
诊断报告已完成。我整理了当前失败点、最可能原因、风险点、最小测试步骤和下一步建议。

这单是 299 诊断，不包含登录账号或直接改生产环境。如果你确认要继续，我可以基于报告给你一个 999 小范围修复方案，或者如果范围更复杂，再重新拆成 1999+ 的救援范围。
```

## 8. Track And Follow Up

Record only safe metadata:

- buyer alias;
- platform;
- package;
- status;
- material status;
- risk flags;
- report path;
- upgrade route;
- next follow-up time.

Never record secrets, payment details, IDs, wallet data, private customer data, or external links.

## 9. Fast Status Labels

Use these labels:

- `paid_active`
- `waiting_payment_confirmation`
- `missing_materials`
- `in_progress`
- `delivered`
- `follow_up`
- `blocked`
- `closed`

## 10. One-Line Rule

If the order is paid and materials are safe, Codex can prepare the report. If money, identity, login, private data, or external links appear, the owner must confirm first.
