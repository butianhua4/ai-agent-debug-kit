# Chinese 299 Diagnosis Buyer Reply Bundle

Use these replies after a buyer sees the RMB 299 AI automation diagnosis images or listing copy. The goal is to move chat from vague interest into safe, scoped, redacted materials.

Do not ask for passwords, API keys, tokens, cookies, identity documents, payment screenshots, wallet data, private repositories, production admin access, or private customer data.

## Reply 1: Buyer Says "Can You Help?"

可以。你先不用给账号，也不用发密钥。

请按这个格式发我脱敏材料，我先判断能不能按 299 元做一次 AI 自动化故障诊断：

```text
平台/工具：
失败步骤：
完整错误文本或截图：
期望输出：
实际输出：
最近改动：
脱敏样例输入：
脱敏样例输出：
是否紧急：
```

能做我会先说明交付内容；不适合 299 诊断我也会直接说，避免你白花钱。

## Reply 2: Buyer Only Sends Screenshot

截图我看到了，但还需要补 3 个信息才能判断：

1. 这个流程用的是 n8n / Make / Zapier / Coze / Dify / Agent / 其他哪个工具？
2. 你希望这一步正常输出什么？
3. 它现在实际输出了什么，或者完整错误文字是什么？

注意不要发密码、API Key、Token、Cookie 或未脱敏客户数据。

## Reply 3: Buyer Asks What 299 Includes

299 元是一次诊断，不是直接登录修复。

交付通常包含：

- 故障现象摘要
- 可能原因排序
- 失败节点定位
- 优先修复顺序
- 最小测试步骤
- 风险提醒，比如权限、Token、重复调用、死循环、成本异常
- 是否值得升级到 999 / 1999+ 修复服务的建议

如果你只是想先知道问题出在哪一步，299 比较合适。

## Reply 4: Buyer Wants You To Login

先不建议直接登录，也不要发账号密码。

为了保护你的账号和数据，我们先用脱敏截图、错误文本和样例输入输出做 299 诊断。诊断后如果确实需要进一步修复，再单独确认范围和安全方式。

你可以先把敏感信息打码后发我。

## Reply 5: Buyer Asks If Their Tool Is Supported

目前适合这些方向：

- n8n / Make / Zapier 自动化失败
- Coze / Dify / FastGPT / AI Agent 流程报错
- Webhook / API / JSON / 字段映射问题
- Node.js / Python / CLI 小脚本自动化报错
- GitHub Actions / CI 自动化失败

如果你的问题属于这些范围，可以先发脱敏材料，我判断能不能按 299 诊断。

## Reply 6: Buyer Has No Error Text

如果没有错误文本，也可以先发：

- 失败前最后一个正常节点截图
- 失败后第一个异常节点截图
- 你期望的输出
- 实际输出
- 最近改过什么

但如果完全没有截图、没有日志、没有样例输入输出，就很难做诊断，可能需要你先补材料。

## Reply 7: Buyer Wants Full Fix For 299

299 元对应的是诊断报告，不包含完整修复。

如果诊断后问题很小，我会在报告里写清楚修复方向；如果你需要我继续做小范围修复方案，一般按 999 元起重新确认范围。复杂多节点、多平台、多轮测试的自动化救援，再按 1999+ 单独评估。

先诊断的好处是：不用一开始就把项目做大，先确认问题值不值得继续修。

## Reply 8: Buyer Sends External Link

为了安全，我不直接打开陌生外链。

请把关键内容复制到聊天里，或者发脱敏截图：错误文字、失败节点、期望输出、实际输出。不要发密码、Token、Cookie、付款信息或未脱敏客户数据。

## Reply 9: Buyer Sends Sensitive Data

这部分信息太敏感了，请先撤回或打码。

我不能接收密码、API Key、Token、Cookie、身份证、银行卡、付款截图、钱包信息、未脱敏客户数据、私有仓库或生产后台权限。

你可以只保留错误文字、节点名称、字段名和脱敏样例，我再继续判断。

## Reply 10: Buyer Is A Good Fit

这个问题适合先做 299 元诊断。

我会基于你提供的脱敏材料输出一份诊断报告，重点回答：

- 问题最可能出在哪一步
- 应该优先检查哪些节点
- 可能是提示词、JSON、API、权限、环境变量还是数据格式问题
- 下一步最小测试怎么做
- 是否值得升级到修复服务

如果确认，我就按这个范围做，不需要你提供账号密码。

## Reply 11: Buyer Is Not A Good Fit

这个需求不太适合 299 诊断，因为它缺少可判断的错误材料，或者涉及账号登录、敏感数据、付款/KYC/钱包/平台风控等边界。

如果你愿意，可以先把敏感信息删掉，只发错误文本、失败节点和脱敏样例，我再重新判断。

## Reply 12: After Delivery

诊断报告已经整理完。

你可以先按报告里的“优先修复顺序”和“最小测试步骤”检查。如果你希望继续做小范围修复方案，我可以基于这份报告再确认 999 元或 1999+ 的后续范围。

建议先不要一次性大改，先验证最可能的失败节点。

## 30-Second Chat Flow

1. Buyer says they have a broken automation.
2. Send Reply 1.
3. If they send screenshots only, send Reply 2.
4. If they ask price/scope, send Reply 3.
5. If they ask for login, send Reply 4.
6. If they send enough redacted material, send Reply 10.
7. If they send external links or sensitive data, send Reply 8 or Reply 9.

## When To Quote 299

Quote 299 when:

- the issue is specific;
- the buyer can show the failed step;
- the buyer can describe expected output and actual output;
- diagnosis can be delivered without login;
- no sensitive data or platform-risk action is needed.

Do not quote 299 when the buyer actually wants full development, full repair, long-term maintenance, hidden platform bypass, or account operation.
