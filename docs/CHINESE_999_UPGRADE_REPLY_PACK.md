# Chinese 999 Upgrade Reply Pack

Use this after a buyer has seen the RMB 299 diagnosis offer, a 299 diagnosis report, or the 999 proof card. The goal is to move a qualified buyer from "what is wrong?" to "what exactly should I change next?" without asking for secrets or promising direct account operation.

Do not send this before a concrete repair path is identified. Do not ask for passwords, API keys, tokens, cookies, private repositories, customer lists, payment data, KYC materials, wallets, or production admin access.

## 30-Second Upgrade Reply

可以继续，但我建议不要直接大改。

你这个更适合升级到 999 元“小范围修复方案”：我会把已定位的问题拆成可执行步骤，写清楚旧字段/新字段、该改哪个节点、用什么脱敏 payload 测、通过标准和失败时怎么回滚。

你可以先看这张 999 交付示意图：`assets/domestic-999-repair-plan-proof.png`

完整样例在：`docs/examples/chinese-999-repair-plan-sample.md`

这个 999 仍然不需要账号密码、API Key、Token 或 Cookie，只基于脱敏截图、错误文本和样例输入输出整理方案。

## Short Version

299 是定位问题，999 是把问题变成可执行修复方案：改哪里、怎么测、失败怎么回滚。仍然不登录账号、不收密钥。

## If Buyer Says "Can You Just Fix It?"

可以，但要先确认安全边界。

999 交付的是“小范围修复方案”，不是代登录生产后台。如果你能自己按步骤操作，我会把节点、字段、测试和回滚写到可以照着执行；如果需要我直接代操作后台，那要重新确认安全方式和范围，不能直接发账号密码或 Token。

## If Buyer Asks "Why Is This Not Included In 299?"

299 的价值是快速判断问题在哪里，避免乱改。

999 是在诊断结果明确后，把修复路径写成可执行清单。这样不会把一个小问题直接做成大单，也不会在没定位前乱承诺修好。

## If Buyer Asks For A Discount

可以先按 299 诊断报告自己做第一步测试。

如果测试后仍失败，再升级 999 会更稳。我不建议为了降价省掉测试和回滚，因为自动化流程一旦重复发送、误写 CRM 或错误调用接口，损失会更大。

## Confirmation Message

确认 999 后，请只补充三类脱敏材料：

1. 当前失败节点截图。
2. 一条脱敏输入样例。
3. 你希望最终输出长什么样。

不需要账号、密码、API Key、Token、Cookie、客户名单或生产后台权限。

## Send With Assets

Recommended buyer-facing order:

1. Send or attach `assets/domestic-999-repair-plan-proof.png`.
2. If the buyer wants more detail, send `docs/examples/chinese-999-repair-plan-sample.md`.
3. After payment or formal scope confirmation, deliver from `docs/examples/chinese-999-repair-plan-template.md`.

## Safety Stop Reply

这个信息我不能接收，也不建议你发给任何外包人员。

请把账号密码、API Key、Token、Cookie、客户名单或生产后台权限删掉，只保留脱敏截图、错误提示、字段名和样例输入输出。我可以基于脱敏材料继续判断是否适合 999 修复方案。
