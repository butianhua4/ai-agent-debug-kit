# Chinese Domestic Chat Reply Router

Use this router after scoring a domestic lead with `docs/CHINESE_DOMESTIC_LEAD_SCORECARD.md`. It maps lead quality to exact reply text, offer path, price anchor, and stop condition.

Do not send replies that promise guaranteed repair, request passwords/API keys/cookies, handle payment/KYC/wallet/tax, or bypass platform controls.

## Router Overview

| Lead score | Route | Goal | Price anchor |
| --- | --- | --- | --- |
| 8-10 | Accept 299 diagnosis | Convert quickly into paid diagnosis | 299 RMB |
| 5-7 | Ask one clarifying question | Get missing material without doing free diagnosis | 299 or 999 RMB |
| 3-4 | Re-scope upward | Prevent underpricing medium/complex work | 999 or 1999+ RMB |
| 0-2 | Decline or stop | Avoid unsafe/unpaid/high-risk work | No quote |

## Route A: 8-10 Points - Accept 299 Diagnosis

Use when the buyer has a clear failed step, safe materials, and accepts a diagnosis report before repair.

Reply:

可以，这个适合先做 299 故障诊断。

你不用发账号密码、API Key、Token 或 Cookie，只需要发这些脱敏材料：

1. 使用平台：n8n / Make / Zapier / Dify / Coze / 自写脚本 / 其他；
2. 哪一步失败；
3. 报错截图或报错文字；
4. 一条脱敏输入样例；
5. 你希望最终输出什么结果。

我会交付一份中文诊断报告，写清失败点、最可能原因、证据、最小测试步骤，以及是否值得升级到 999 小范围修复方案。

If buyer asks what they get:

299 交付的是诊断报告，不是直接登录后台修系统。报告会告诉你问题大概率卡在哪里、先测哪一步、哪些地方不要乱改。这样可以避免一上来就重做整套流程。

If buyer asks how fast:

材料清楚的话，诊断报告可以很快整理；如果截图不完整，我会先让你补一个关键点，不会让你反复发无用材料。

## Route B: 5-7 Points - Ask One Clarifying Question

Use when the lead may fit 299 but lacks one key detail.

Reply:

先确认一个点：这个问题是卡在一个具体节点，还是整条流程多处不稳定？

如果是一个节点，适合先做 299 诊断，判断失败点和最小测试步骤。

如果是多处不稳定，可能要按 999 修复方案或 1999+ 复杂救援重新拆范围，避免按小单做成大坑。

If buyer gives the missing detail:

明白。按你补充的信息看，如果只围绕这个节点排查，可以先走 299 诊断。你把脱敏截图、报错文字、样例输入和期望输出发来，我先按诊断报告交付。

If buyer remains vague:

现在信息还不够判断，我不建议直接收修复费。你先整理一张失败节点截图和报错文字，敏感信息打码后发来，我再判断是否适合 299。

## Route C: 3-4 Points - Re-Scope Upward

Use when the buyer wants direct repair, has multiple failing nodes, or the issue looks larger than diagnosis.

Reply:

这个不像单纯 299 诊断，范围可能更接近 999 小范围修复方案，或者 1999+ 复杂救援。

我建议先不要直接改后台。先把失败链路、风险点、测试步骤和回滚方式列清楚，再决定是否进入修复方案。

如果你只是想先判断问题方向，可以做 299 诊断。

如果你希望我给出明确修复方案、测试步骤和回滚建议，更适合 999。

如果涉及多个流程、重复发送、生产风险或成本异常，就需要按 1999+ 重新拆范围。

If buyer asks why not 299:

299 适合单点诊断。如果现在直接按 299 接复杂问题，容易出现报告写不清、你也拿不到可执行方案的情况。为了不浪费你的钱，我先把范围说清楚。

## Route D: 0-2 Points - Decline Or Stop

Use when the request is unsafe, off-platform, credential-heavy, or impossible to scope.

Reply:

这个我不能继续处理。

为了保护你的账号和数据，我不接收账号密码、API Key、Token、Cookie，也不处理付款、钱包、KYC、税务或绕过平台限制的操作。

如果你愿意只提供脱敏截图、报错文字和样例输入输出，我可以在安全范围内判断是否适合做 299 诊断。

If buyer sends an external link:

我不能打开外部链接。你可以把关键报错文字、脱敏截图和期望输出直接发在平台内，我只基于这些材料判断。

If buyer insists on pay-after-work:

这个方式我不接。可以先做 299 诊断，把范围和证据写清楚；如果后续需要修复方案，再单独确认 999 或 1999+ 范围。

## Package Upgrade Replies

### 299 To 999

诊断后如果确认是一个小范围问题，可以升级 999 修复方案。

999 不代表我登录你的账号直接乱改，而是交付明确的修复步骤、测试方法、风险点和回滚建议。你可以自己执行，也可以给你信任的执行人照着做。

### 999 To 1999+

如果排查后发现涉及多个流程、重复发送、生产数据、成本异常或长期不稳定，就不能按 999 小修处理，需要按 1999+ 复杂救援重新拆范围。

这样做是为了避免低价承诺大范围问题，最后双方都失控。

## Price Objection Replies

### "Can it be cheaper?"

可以理解你想先控制成本，所以我才把入口拆成 299 诊断。

299 不是完整修复，而是先把问题方向、证据和下一步测试写清楚。这样你不会一上来就花大钱重做系统。

### "Can you diagnose for free first?"

我不能免费完整诊断，因为真正耗时的就是看截图、报错、输入输出并判断问题链路。

你可以先发一张脱敏截图，我只判断是否适合 299，不会展开完整诊断。

### "Can you guarantee it will be fixed?"

诊断阶段不能保证修好，因为还没确认问题范围。

我能保证的是：299 报告会写清失败点、可能原因、证据和下一步测试。是否进入修复，要看诊断结果。

## Material Request Replies

### Standard Intake

请按这个格式发材料，敏感信息记得打码：

1. 使用平台；
2. 哪一步失败；
3. 报错截图或报错文字；
4. 一条脱敏输入样例；
5. 期望输出；
6. 你现在最想解决的问题。

### Missing Screenshot

缺一张失败节点截图。只要截图里能看到失败位置和报错，不需要显示账号、客户数据或密钥。

### Missing Expected Output

还差“你希望最终输出什么结果”。这个很重要，不然只能看到哪里错了，不能判断下一步该怎么修。

## Closing Replies

### Qualified Lead Close

这个可以先走 299 诊断。你把脱敏材料发齐后，我会按诊断报告交付：失败点、可能原因、证据、最小测试步骤和下一步建议。

### Upgrade Close

这个范围建议不要只做 299。如果你要的是可执行修复方案，我建议按 999 小范围修复方案来做；如果涉及多个流程或生产风险，再按 1999+ 拆范围。

### Decline Close

这个请求涉及账号权限/密钥/付款/KYC/平台限制，我不能接。你可以换成脱敏截图和报错文字，我只做安全范围内的诊断判断。

## Internal Use Checklist

Before sending any reply:

- [ ] Did the buyer ask for account login, key, cookie, wallet, KYC, tax, payment, or bypass? If yes, stop.
- [ ] Did the buyer provide enough material for a score?
- [ ] Did the reply avoid guaranteed repair language?
- [ ] Did the reply avoid asking for sensitive data?
- [ ] Is the next action clear: intake, 299 quote, 999 quote, 1999+ re-scope, or decline?
- [ ] If this is a real buyer, get user confirmation before sending.
