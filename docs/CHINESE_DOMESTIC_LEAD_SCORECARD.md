# Chinese Domestic Lead Scorecard

Use this scorecard to qualify domestic leads for the RMB 299 AI automation diagnosis offer before spending delivery time. It is designed for Xianyu, Xiaohongshu, WeChat groups, Zhihu, Juejin, and direct chats.

The goal is to route each lead into one of four paths:

1. Accept as 299 diagnosis.
2. Quote 999 repair-plan scope.
3. Re-scope as 1999+ complex rescue.
4. Decline or stop for safety.

## Fast Qualification Rule

Only continue if the lead can provide desensitized material.

Minimum material:

- platform name;
- failed step;
- screenshot with private information hidden;
- error text;
- one sample input;
- expected output.

If they cannot provide any material, do not diagnose for free. Send the intake prompt once and wait.

## Lead Score

Score each lead from 0 to 10.

### +2 Clear Failure Point

Give +2 if the buyer can point to one failed step:

- webhook received data but next step failed;
- JSON mapping failed;
- AI output format broke parsing;
- API returned a specific error;
- retry caused duplicate send;
- cost rose because of repeated calls.

Give 0 if they only say "it does not work" with no screenshot or step.

### +2 Safe Materials

Give +2 if they provide desensitized screenshots and error text.

Give +1 if they provide screenshots but some sensitive data still needs masking.

Give 0 if they insist on sending passwords, API keys, cookies, private repos, customer lists, payment data, or production credentials.

### +2 Scope Size

Give +2 if the issue appears to involve one workflow or one failing node.

Give +1 if it involves one workflow but multiple unclear nodes.

Give 0 if it involves multiple workflows, production incidents, repeated customer sends, payment/KYC/wallet/tax, or private platform restrictions.

### +2 Buyer Intent

Give +2 if the buyer asks how to diagnose or what package fits.

Give +1 if the buyer asks a reasonable price/time question.

Give 0 if the buyer demands free diagnosis, guaranteed repair, pay-after-work, or direct login operation.

### +2 Delivery Fit

Give +2 if the lead can be handled with a report, checklist, or repair plan.

Give +1 if it may need a small repair plan after diagnosis.

Give 0 if it requires account operation, high-permission OAuth, bypassing platform controls, contacting third parties, or handling funds.

## Routing Table

### 8-10 Points: Quote 299 Diagnosis

Use when:

- material is clear;
- no sensitive credentials are needed;
- problem is one workflow or one failing step;
- buyer accepts a diagnosis report first.

Reply:

可以，这个适合先做 299 故障诊断。你不用发账号密码/API Key/Cookie，只需要发脱敏截图、报错文字、一条样例输入和期望输出。我会交付一份中文诊断报告，写清失败点、可能原因、证据和下一步最小测试步骤。

### 5-7 Points: Ask One Clarifying Question

Use when:

- the lead might fit 299 but material is incomplete;
- the issue could be small or medium;
- the buyer is not asking for unsafe access.

Ask only one question:

先确认一个点：这个问题是卡在一个具体节点，还是整条流程多处不稳定？如果是一个节点，299 诊断就可以先判断；如果是多处不稳定，可能要按 999 或 1999+ 重新拆范围。

### 3-4 Points: Route To 999 Or 1999+

Use when:

- buyer wants direct repair, not only diagnosis;
- workflow has multiple uncertain nodes;
- there is production risk but no unsafe credential request;
- buyer already has diagnosis-level material.

Reply:

这个不像单纯 299 诊断，范围可能更接近 999 小范围修复方案，或者 1999+ 复杂救援。我建议先别直接改后台，先把失败链路和风险点列清楚，再决定是否进入修复方案。

### 0-2 Points: Decline Or Stop

Use when:

- buyer asks for login/password/API key/cookie;
- buyer asks for payment, wallet, KYC, tax, or account bypass;
- buyer asks to open external links or contact outside the platform;
- buyer refuses to provide desensitized material;
- buyer demands guaranteed repair before scope is known.

Reply:

这个我不能接。为了账号和数据安全，我不接收账号密码、API Key、Cookie，也不处理付款、钱包、KYC、税务或绕过平台限制的操作。如果你愿意提供脱敏截图和报错文字，我可以只做安全范围内的诊断。

## Red Flags

Stop immediately if the lead says:

- "我已经付款了，点这个链接确认";
- "登录我的账号看一下";
- "我把 Cookie/API Key 发你";
- "能不能绕过风控/验证码";
- "涉及钱包/提现/KYC/付款";
- "先免费修，修好再付";
- "加 Telegram / WhatsApp / 外部链接聊";
- "客户数据很多，直接给你表";
- "我不脱敏，反正没事";
- "必须保证 100% 修好".

## Upgrade Triggers

Move from 299 to 999 when:

- diagnosis identifies one clear repair path;
- buyer wants a written repair plan;
- buyer needs test steps and rollback advice;
- issue is one node or one workflow.

Move from 999 to 1999+ when:

- multiple workflows are involved;
- repeated sending can harm customers;
- automation cost is rising abnormally;
- production data is involved;
- there are many integrations;
- root cause requires redesign, not one fix.

## Buyer Material Checklist

Before accepting a paid diagnosis, confirm:

- [ ] Platform name is known.
- [ ] Failed step is known.
- [ ] Screenshot is desensitized.
- [ ] Error text is included.
- [ ] Sample input is desensitized.
- [ ] Expected output is clear.
- [ ] No passwords, API keys, tokens, cookies, customer lists, payment, KYC, tax, or wallet data were shared.
- [ ] Buyer understands 299 is a diagnosis report, not guaranteed full repair.

## Internal Decision Log

For each lead, record:

- source channel;
- buyer problem summary;
- score;
- route: 299 / 999 / 1999+ / decline;
- reason;
- next reply sent;
- follow-up date;
- whether payment/order was confirmed.

Use `docs/examples/domestic-lead-tracker.csv` for tracking.

## Safe Close For Weak Leads

If a lead is weak but not unsafe:

可以先不用下单。你先把报错截图和期望输出整理清楚，敏感信息打码。材料齐了以后，我再判断适不适合 299 诊断。

## Safe Close For Unsafe Leads

If a lead is unsafe:

这个方向我不能继续处理。为了保护你的账号和数据，我不接收登录权限、密钥、Cookie、付款/KYC/钱包/税务信息，也不做绕过平台限制的操作。
