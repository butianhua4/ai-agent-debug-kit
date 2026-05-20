# Chinese 299 / 999 / 1999+ Quote Decision Matrix

Use this matrix after a buyer sends redacted materials for the RMB 299 AI automation diagnosis offer. The goal is to quote quickly without underpricing full repair work or accepting unsafe requests.

Do not handle passwords, API keys, tokens, cookies, KYC, tax, wallet, payment, private repositories, production admin access, or off-platform bypass requests.

## Fast Decision

| Buyer Material | Best Quote | Why |
| --- | --- | --- |
| One clear error screenshot, one failed step, expected vs actual output is known | 299 diagnosis | The task is concrete and can be diagnosed without login. |
| Error text plus workflow screenshot, but root cause is unclear | 299 diagnosis | The buyer needs failure mapping before repair. |
| One workflow, up to 8 visible steps, one known failing API/Webhook/JSON mapping | 999 scoped repair plan | It likely needs a fix plan or small code/config correction beyond diagnosis. |
| Multiple tools, multiple workflows, repeated failures, retry loops, or cost spikes | 1999+ rescue assessment | The scope is multi-node and needs staged investigation. |
| Buyer asks for full build, full automation, or long-term maintenance | Custom quote, not 299 | This is development, not diagnosis. |
| Buyer wants account login, password, API Key, Token, Cookie, wallet, KYC, payment handling | Refuse or re-scope | Unsafe boundary. Ask for redacted evidence only. |
| Buyer only sends an external link | Do not quote yet | Ask them to paste screenshots/text inside chat. |
| Buyer cannot provide any error, screenshot, log, expected output, or actual output | Do not quote yet | Diagnosis needs evidence. |

## 299 Diagnosis Criteria

Quote 299 when all of these are true:

- The buyer has a specific failure.
- There is at least one screenshot, error text, or log snippet.
- Expected output and actual output can be described.
- No account login is required.
- No private credentials or private customer data are required.
- The output can be a written diagnosis report.

### 299 Reply

这个适合先做 299 元诊断。你提供的材料已经足够我判断失败节点和可能原因。我会交付一份一页诊断报告：故障现象、可能原因排序、失败节点定位、优先修复顺序、最小测试步骤和风险提醒。这个范围不需要账号密码，也不需要 API Key。

## 999 Scoped Repair Plan Criteria

Quote 999 when one or more are true:

- The buyer wants a concrete repair plan, not just diagnosis.
- The issue is isolated to one workflow, scenario, zap, script, or API path.
- The workflow has roughly 2-8 visible steps.
- The fix likely involves JSON mapping, Webhook payload structure, prompt/output schema, environment variable naming, retry settings, or a small script change.
- The buyer can provide enough redacted material to produce a patch plan.

### 999 Reply

这个问题已经超过单纯诊断，但还属于小范围修复方案。建议按 999 元做：我会基于脱敏材料输出具体修复路径、字段/节点调整建议、测试步骤和回滚注意事项。如果你只想先定位问题，也可以先做 299 诊断。

## 1999+ Rescue Criteria

Quote 1999+ when one or more are true:

- Multiple platforms are involved.
- Multiple workflows or agents are failing.
- There are repeated retries, duplicate sends, cost spikes, or unstable AI output.
- The buyer wants an end-to-end rescue plan.
- The issue may require staged investigation and multiple validation rounds.
- The buyer expects a production-ready handoff document.

### 1999+ Reply

这个已经不是单点诊断，更像自动化链路救援。建议从 1999 元以上重新确认范围：先列出涉及的平台、流程数量、失败节点、期望恢复结果和时间要求。我会先给你一个分阶段范围，不会默认加价或要求你直接给账号。

## Refuse Or Re-Scope

Refuse or re-scope when:

- The buyer asks for password/API Key/Token/Cookie.
- The buyer asks you to operate payment, KYC, tax, wallet, or identity verification.
- The buyer asks to bypass platform rules, risk control, or security checks.
- The buyer sends unredacted private customer data.
- The buyer wants guaranteed results without enough evidence.
- The buyer sends only a suspicious external link.

### Refusal Reply

这个范围我不能直接接，因为涉及账号、密钥、付款、KYC、钱包、平台风控或未脱敏数据。你可以把敏感信息删掉，只发错误文本、失败节点、期望输出和实际输出。我再判断能否做 299 诊断。

## Upsell Without Pressure

Use this after a 299 diagnosis finds a clear repair path:

诊断结果已经比较明确。如果你自己能改，可以先按报告里的顺序测试；如果你希望继续做小范围修复方案，可以升级到 999，我会把修复步骤、字段/节点调整、测试清单和回滚提醒写清楚。复杂多平台链路再单独评估 1999+。

## Do Not Discount Below 299

Do not discount below 299 unless the buyer is only asking for a very small pre-check and it creates a strong public proof opportunity. The 299 offer already includes risk review, report structure, and safe scoping.

## Quote Checklist Before Accepting

Before quoting, confirm:

- [ ] Is there a concrete failure?
- [ ] Did the buyer provide evidence?
- [ ] Are expected and actual outputs clear?
- [ ] Can this be handled without login?
- [ ] Are all materials redacted?
- [ ] Is the buyer asking for diagnosis, repair plan, or full development?
- [ ] Does the request avoid payment/KYC/wallet/platform-bypass issues?

If any safety answer is unclear, ask for clarification before quoting.
