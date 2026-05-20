# Chinese Buyer Objection Handling Pack

Use this when a domestic buyer hesitates after seeing the 299 / 999 / 1999+ automation rescue package ladder. The goal is to keep the conversation moving toward a safe paid scope without discounting into risky work, promising guaranteed recovery, or accepting credentials.

Do not promise guaranteed fixes. Do not ask for passwords, API keys, tokens, cookies, private repositories, customer lists, payment data, KYC materials, wallets, production admin access, scraping bypass, or platform evasion.

## Objection: "Too Expensive"

理解，自动化故障看起来像一个小问题，但真正花时间的是判断它会不会影响生产流程。

我这边的报价不是按“改一个字段”算，而是按风险来分：

- 299：先定位问题，避免乱改；
- 999：定位后写具体修复步骤和回滚；
- 1999+：多流程或生产风险，需要拆完整链路。

如果你不确定值不值得做，可以先选 299。先花小钱确认问题位置，比直接上大修更稳。

## Objection: "Can You Guarantee It Will Be Fixed?"

我不能在没看到脱敏材料、没做最小测试前保证一定修好。

我能保证的是交付过程：

- 不收账号密码和密钥；
- 先定位失败点；
- 写清证据和风险；
- 给最小测试步骤；
- 如果适合继续修，再告诉你升级到 999 或 1999+ 是否有必要。

自动化流程涉及接口、权限、字段、第三方平台和生产数据，负责任的做法是先诊断，再承诺下一步。

## Objection: "Can You Just Login And Fix It?"

这个默认不建议。

直接登录后台会涉及账号安全、密钥、生产数据和平台风控。我可以把步骤写到你能照着操作的程度，但账号、密钥、付款、KYC、钱包、客户数据这些必须你本人处理。

如果后续确实需要协作操作，也要重新确认安全方式和范围，不能直接在聊天里发账号密码或 Token。

## Objection: "Can You Look First For Free?"

我可以先看你的一句话描述，判断大概适不适合做。

但如果要我根据截图、报错和样例输入输出做判断，就属于 299 诊断范围。这样对你也更公平：我会给一份结构化报告，而不是随口猜。

你可以先看样例报告：`docs/examples/chinese-299-diagnosis-sample-report.md`

## Objection: "Another Person Said They Can Do It Cheaper"

可以理解。

你可以对比一下对方是否说明了：

- 是否不收账号密码和密钥；
- 是否会写失败点证据；
- 是否有最小测试步骤；
- 是否有回滚方案；
- 如果失败是否会重新定范围。

如果只是“我帮你搞定”，但没有测试和回滚，自动化流程可能会出现重复发送、写错 CRM 或接口成本上涨。我这边更适合你想稳一点处理的情况。

## Objection: "I Only Have A Screenshot"

可以先发脱敏截图。

如果截图能看出失败节点和报错，可以做 299 诊断；如果看不出，我会告诉你还缺哪一类脱敏材料。不要发账号、密钥、客户名单或后台权限。

## Objection: "Can You Finish Today?"

如果只是 299 诊断，材料清楚的话可以快很多。

999 或 1999+ 要看范围：越涉及生产风险，越不能为了快直接乱改。我可以先按 299 诊断帮你确认问题位置，再决定是否需要升级。

## Objection: "I Do Not Understand Tech"

没关系，你不用懂代码。

你只要发：

1. 哪一步失败；
2. 报错截图；
3. 你原本希望它输出什么；
4. 一条脱敏样例。

我会把报告写成“问题在哪里、先测什么、下一步怎么做”的形式，不会只写技术术语。

## Objection: "Can You Use My API Key Temporarily?"

不建议，也不要发。

API Key、Token、Cookie 都属于敏感权限。你可以把真实值替换成 `***`，只保留字段名和报错。我会基于脱敏信息判断问题，必要时告诉你本人应该在哪个位置检查权限或配置。

## Objection: "Can We Pay After It Works?"

这个服务不是代运营或保底修复，而是诊断/修复方案交付。

我会先明确范围、交付内容和边界。确认后按平台规则付款，交付报告或修复方案。如果范围不适合，我会先说明，不会让你乱下单。

## Close The Conversation

如果你想稳一点，建议这样走：

1. 先发脱敏材料；
2. 我判断适合 299 / 999 / 1999+ 哪个范围；
3. 确认范围后再付款；
4. 我按对应模板交付。

套餐对比：`docs/CHINESE_PACKAGE_LADDER_ONE_PAGER.md`

需求表：`docs/CHINESE_BUYER_INTAKE_FORM.md`
