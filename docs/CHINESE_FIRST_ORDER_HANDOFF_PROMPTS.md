# Chinese First Order Handoff Prompts

Use these copy-and-paste prompts when you are on mobile and need Codex to continue a Fiverr or domestic-platform order without you operating the computer.

Goal: let the owner send only safe context, then let Codex triage, prepare delivery files, and ask only for owner-only confirmations.

## 1. Confirmed Paid 299 Order

Send this when the order is visible in Fiverr Orders or another platform dashboard.

```text
有一个 299 诊断订单已经确认付款。请按第一单流程处理：

1. 不打开买家外链。
2. 不收集或保存密码、API Key、Token、Cookie、OAuth、付款、KYC、税务、钱包或私密客户数据。
3. 先判断材料是否脱敏、完整、安全。
4. 如果材料不够，准备一条平台内补材料回复草稿。
5. 如果材料足够，建立订单跟踪记录，准备 299 诊断报告。
6. 需要我确认发给买家的消息、上传文件、收款、身份、税务、付款或高权限授权时，先停下来告诉我。

订单截图/文字如下：
[粘贴订单状态、买家需求、平台内消息，不粘贴外链和密钥]
```

Codex may do:

- read the safe order text you provide;
- classify the order status;
- prepare tracker rows and delivery drafts;
- prepare a buyer reply draft;
- prepare the diagnosis report template.

Codex must stop for:

- payment uncertainty;
- identity, payout, tax, wallet, KYC, subscription, or billing;
- external links;
- login or direct production access;
- private repos or raw customer secrets;
- sending the final reply without owner confirmation.

## 2. Suspicious Message Or External Link

Send this when the buyer claims an order exists but asks you to open a non-platform link.

```text
Fiverr/平台里出现一条可疑消息。请只做安全判断，不打开任何外链。

消息内容如下：
[粘贴消息文字]

请判断：
1. 是否是真实订单线索；
2. 是否应该回复；
3. 回复草稿是什么；
4. 是否需要我举报、归档或忽略。
```

Default safe reply draft:

```text
Hi, thanks for reaching out. For safety, I can only review order details and requirements inside Fiverr. Please place the order or share the project requirements directly here in Fiverr chat, without external links, passwords, tokens, cookies, or private data.
```

Chinese safe reply draft:

```text
你好，为了安全，我只能在平台内查看订单和需求。请直接在当前聊天里说明需求，或者通过平台订单提交材料。不要发送外部链接、密码、Token、Cookie、付款信息或隐私数据。
```

## 3. Buyer Has Not Sent Enough Material

Send this when the order is real but the buyer materials are incomplete.

```text
订单已确认，但买家材料不够。请帮我准备平台内补材料回复，不要要求任何密钥或登录信息。

当前材料：
[粘贴买家已发内容]
```

Reply draft:

```text
I can start once I have a safe, redacted snapshot of the issue. Please send:

1. the tool or platform name;
2. the failed step;
3. the exact error text or screenshot;
4. one redacted sample input and expected output;
5. what should happen when it works.

Please do not send passwords, API keys, tokens, cookies, payment details, customer private data, or admin login access.
```

Chinese reply draft:

```text
可以开始看。请直接在平台内补充这 5 项：

1. 用的是什么工具或平台；
2. 卡在哪一步；
3. 报错原文或截图；
4. 一条脱敏后的输入样例和期望输出；
5. 正常情况下应该发生什么。

请不要发送密码、API Key、Token、Cookie、付款信息、客户隐私数据或后台登录权限。
```

## 4. Upgrade Or Re-Scope Decision

Send this after a 299 diagnosis is drafted and the buyer may need 999 or 1999+.

```text
299 诊断报告已经准备好。请根据下面的诊断结论，判断是直接交付、建议 999 小范围修复方案，还是建议 1999+ 重新拆范围。

诊断结论：
[粘贴报告摘要，不粘贴密钥或隐私数据]

请输出：
1. 路由判断；
2. 给买家的平台内回复草稿；
3. 是否需要我确认价格或发送 offer。
```

Routing:

| Route | Use when | Owner action |
| --- | --- | --- |
| Deliver 299 | Report is enough for buyer to self-check | approve delivery reply |
| Offer 999 | One clear small repair path exists | confirm price and custom offer |
| Re-scope 1999+ | Multiple workflows, production risk, repeated failure, or cost spike | confirm new scope before offer |
| Stop | External links, secrets, login, payment, KYC, private data | owner handles or declines |

## 5. Minimal Mobile Packet

When you are busy, send only this packet:

```text
平台：
订单是否已付款/可见：
买家原话：
已收到的安全材料：
是否有外链：
是否有密码/Token/Cookie/API Key/付款/KYC/隐私数据：
我希望 Codex 做什么：
```

If the packet is missing key data, Codex should ask for one missing item at a time.

## 6. Links For Codex

Use these files in order:

1. `docs/CHINESE_FIRST_PAID_ORDER_RUNBOOK.md`
2. `docs/CHINESE_FIRST_ORDER_DASHBOARD.md`
3. `docs/CHINESE_299_PAID_ORDER_LAUNCH_CHECKLIST.md`
4. `docs/CHINESE_299_PAID_ORDER_TRACKER.md`
5. `docs/CHINESE_299_30_MIN_DELIVERY_CHECKLIST.md`
6. `docs/FIVERR_EXTERNAL_LINK_REPLY_PACK.md`

## 7. One-Line Operating Rule

Codex can prepare safe drafts and delivery files. The owner confirms money, identity, platform actions, uploads, final buyer replies, and any high-permission step.
