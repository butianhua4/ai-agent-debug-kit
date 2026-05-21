# Fiverr External-Link Reply Pack

Use this pack when a Fiverr inbox message claims an order exists but asks the seller to open an external link.

Current rule: do not open the link. A real Fiverr order should be visible in Fiverr Orders or in the official Fiverr order page.

## Fast Risk Pattern

Treat the message as high risk if it contains:

- "I chose your service" plus an external URL.
- "I completed the order" plus an external URL.
- "Please confirm this" plus an external URL.
- A non-Fiverr project/task page.
- A domain that is not `fiverr.com`.
- Any request to verify payment outside Fiverr.

Example pattern:

```text
I chose your service and provided all the necessary details when placing the order. Please see: https://example-domain/project/tasks
```

Action: do not click. Check Fiverr Orders first.

## Safe Reply: External Link With Claimed Order

```text
Hi, thanks for reaching out. For safety, I can only review order details and requirements inside Fiverr. Please place the order or share the project requirements directly here in Fiverr chat, without external links, passwords, tokens, cookies, or private data.
```

## Safe Reply: Buyer Says Link Has Requirements

```text
I cannot open external links for account safety. Please paste the non-sensitive requirements here in Fiverr chat: workflow goal, failed step, error text, expected output, and actual output. Please do not send passwords, API keys, tokens, cookies, payment information, or private customer data.
```

## Safe Reply: Buyer Says Payment Is Already Done

```text
I can only start after the order is visible inside Fiverr Orders. If you already placed the order, please make sure it appears in Fiverr and send the requirements here in Fiverr chat. I cannot verify payment through external links.
```

## Safe Reply: Buyer Pushes Off-Platform Contact

```text
For Fiverr policy and account safety, I keep all communication, requirements, files, orders, and payments inside Fiverr. I cannot move to external sites, email, Telegram, WhatsApp, Discord, or other channels.
```

## Chinese Internal Translation

中文意思：

```text
谢谢联系。为了账号安全，我只能在 Fiverr 里面查看订单和需求。请直接在 Fiverr 聊天里发项目需求，或者通过 Fiverr 正常下单。不要发外链、密码、Token、Cookie、付款信息或客户隐私数据。
```

## Operator Checklist

- [ ] Do not open the link.
- [ ] Check Fiverr Orders.
- [ ] If no order is visible, treat as unconfirmed.
- [ ] Send one safe reply only.
- [ ] Do not create an offer until the buyer states a real, safe requirement inside Fiverr.
- [ ] If the buyer continues pushing the link, stop replying or report/block through Fiverr UI if appropriate.
- [ ] Never paste the link into other tools for investigation.

## If A Real Order Appears Later

If the buyer later places a real Fiverr order and sends safe requirements inside Fiverr, switch to:

- `docs/CHINESE_FIRST_PAID_ORDER_RUNBOOK.md`
- `docs/CHINESE_299_PAID_ORDER_LAUNCH_CHECKLIST.md`
- `docs/CHINESE_299_PAID_ORDER_TRACKER.md`

Do not reuse external-link content as order requirements.
