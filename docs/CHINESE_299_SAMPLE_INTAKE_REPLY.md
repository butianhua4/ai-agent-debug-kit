# Chinese 299 Sample And Intake Reply

Use this as the first safe reply when a buyer asks about AI automation repair, workflow failure, n8n / Make / Zapier errors, webhook JSON mapping problems, or agent log debugging, but has not yet provided enough detail for a quote.

The goal is to show a concrete 299 RMB sample deliverable, collect only redacted materials, and route qualified leads into 299 diagnosis or 999 repair-plan scope.

Do not ask for passwords, API keys, tokens, cookies, private repositories, customer lists, payment data, KYC materials, wallet access, or production admin access.

## First Buyer Reply

可以，我先不让你发账号密码，也不需要 API Key。

这类问题我一般先做一个 299 元“自动化故障诊断”：看脱敏截图、错误提示、样例输入输出，然后给你一份报告，写清楚：

- 问题大概率卡在哪个节点；
- 是字段映射、JSON 路径、Webhook payload、提示词输出，还是重试/调用逻辑问题；
- 最小测试步骤怎么做；
- 哪些地方不能乱改；
- 如果要继续修，是否适合升级到 999 元小范围修复方案。

你可以先看一个 299 样例报告：`docs/examples/chinese-299-diagnosis-sample-report.md`

如果觉得这种交付形式符合你的需求，请按这个表发脱敏材料：`docs/CHINESE_BUYER_INTAKE_FORM.md`

注意：不要发账号、密码、API Key、Token、Cookie、客户名单或生产后台权限。只要错误截图、失败节点、脱敏样例输入输出就够。

## Short Version

可以先做 299 诊断，不需要账号密码或密钥。你先看样例报告：`docs/examples/chinese-299-diagnosis-sample-report.md`。如果交付形式 OK，再按这个需求表发脱敏材料：`docs/CHINESE_BUYER_INTAKE_FORM.md`。

## If Buyer Only Says "Can You Fix It?"

可以，但要先判断是不是小范围问题。

你先不要发账号密码或 Token。请按需求表发脱敏材料，我会先判断适合 299 诊断、999 小范围修复方案，还是需要 1999+ 重新报价。

需求表：`docs/CHINESE_BUYER_INTAKE_FORM.md`

## If Buyer Asks "What Do You Need From Me?"

只需要 4 类脱敏材料：

1. 当前流程/节点截图，隐藏账号、密钥、客户信息。
2. 具体报错文字，能复制就复制。
3. 一条脱敏输入样例，例如字段名和假数据。
4. 你希望最终输出长什么样。

不要发账号、密码、API Key、Token、Cookie、客户名单或后台权限。

## If Buyer Sends Sensitive Data

这个信息请先撤回或打码，我不能接收账号密码、API Key、Token、Cookie、客户名单或后台权限。

你可以把敏感值替换成 `***`，只保留字段名、错误信息、流程节点、样例输入输出。我可以基于脱敏材料继续判断。

## Quote Routing

Use this after the buyer replies with materials:

- Clear single error, few materials, buyer only wants diagnosis: quote 299.
- Diagnosis already clear and buyer wants exact repair steps: quote 999.
- Multiple workflows, direct operation, production risk, private data, or long-term maintenance: re-scope to 1999+ or refuse unsafe parts.

Reference pricing matrix: `docs/CHINESE_299_QUOTE_DECISION_MATRIX.md`

## Follow-Up If Buyer Does Not Reply

我先把安全边界说清楚：这个服务不需要账号密码，也不会碰你的生产后台。

如果你只是想知道“为什么流程失败、下一步该怎么查”，发脱敏截图和错误提示就能开始做 299 诊断。

样例报告：`docs/examples/chinese-299-diagnosis-sample-report.md`
