# Chinese Package Ladder One-Pager

Use this one-pager in buyer chats when the buyer is unsure whether they need RMB 299 diagnosis, RMB 999 repair plan, or RMB 1999+ rescue scope. It is written to reduce explanation time and move the buyer toward a clear paid choice.

Do not use it to promise account login, production operation, password/API key handling, payment/KYC/tax/wallet work, scraping bypass, or platform evasion.

## Buyer-Facing Message

你可以按问题复杂度选，不用一开始就上大单：

### 299 元：先判断哪里错

适合：

- 一个流程或一个节点失败；
- 你还不确定问题在哪里；
- 你有脱敏截图、报错、样例输入输出；
- 你想先拿一份诊断报告和最小测试步骤。

交付：

- 失败点判断；
- 可能原因；
- 最小测试步骤；
- 风险提醒；
- 是否值得升级到 999 或 1999+。

不包含：直接登录后台修复、生产部署、长期维护。

### 999 元：把问题变成可执行修复方案

适合：

- 299 诊断后已经知道大概问题；
- 你想知道具体改哪个节点、字段、JSON 路径或提示词输出；
- 你需要测试步骤和失败回滚；
- 仍然是一个流程或一个主要失败点。

交付：

- 修复步骤；
- before / after 字段说明；
- 脱敏测试 payload；
- 通过/失败判断；
- 回滚提醒。

不包含：直接登录生产后台、多平台重构、长期维护。

### 1999+ 元：复杂自动化救援

适合：

- 多个流程或多个平台同时出问题；
- 可能重复发送、写错 CRM、产生 API 成本或影响真实用户；
- 需要多轮测试、风险拆分和恢复路线；
- 你想要更完整的救援计划。

交付：

- 完整失败链路；
- 风险节点清单；
- 修复优先级；
- 测试和回滚计划；
- 哪些地方必须你本人操作；
- 后续实施范围建议。

不包含：默认代登录后台、接收密钥、付款/KYC/钱包/平台绕过。

## Fast Recommendation

- 不确定哪里错：先选 299。
- 已经知道哪里错，想要具体怎么改：选 999。
- 多流程、生产风险、成本异常、重复发送、长期不稳定：选 1999+。

## Short Chat Version

简单说：

- 299 = 找出问题在哪里；
- 999 = 写清楚具体怎么修；
- 1999+ = 多流程或生产风险救援。

如果你现在还不确定问题点，先做 299 最稳；如果已经有明确诊断，再升级 999；如果牵涉多个流程或真实客户/成本风险，就不要低价硬修，直接按 1999+ 重新拆范围。

## Safety Boundary

三个套餐都不需要你发账号密码、API Key、Token、Cookie、客户名单或后台权限。

请只发脱敏截图、错误提示、字段名、样例输入输出和期望结果。

## Asset Pairing

When sending this one-pager, pair it with:

- price ladder image: `assets/domestic-299-price-ladder.png`
- 299 sample report: `docs/examples/chinese-299-diagnosis-sample-report.md`
- 999 proof card: `assets/domestic-999-repair-plan-proof.png`
- 1999+ re-scope pack: `docs/CHINESE_1999_RESCUE_RESCOPE_PACK.md`

## Seller Routing Note

If the buyer still cannot choose, ask for redacted materials first and route using `docs/CHINESE_299_QUOTE_DECISION_MATRIX.md`.
