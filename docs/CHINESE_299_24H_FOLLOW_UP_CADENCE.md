# Chinese 299 24H Follow-Up Cadence

Use this cadence after a buyer comments, sends a DM, favorites a listing, or asks "can you look at this?" for the 299 RMB AI automation diagnosis offer.

Do not spam. Do not send more than the platform allows. Do not open buyer external links. Do not ask for passwords, API keys, tokens, cookies, payment access, wallet access, private customer data, or production admin access.

## Goal

Move a vague lead into one of four safe outcomes:

- 299 RMB diagnosis quote
- 999 RMB repair-plan quote after diagnosis
- 1999+ re-scope for complex or production-risk cases
- decline because the request needs secrets, login, payment, wallet, privacy access, or unsafe work

## 0-Minute Reply

Use when the buyer first comments or DMs.

```text
可以先判断一下是否适合 299 诊断。请不要发密码、API Key、Token、Cookie、客户隐私、付款后台或钱包信息。

你可以发这 4 类脱敏材料：
1. 报错截图
2. 最近一次失败日志
3. 流程/节点截图
4. 你希望它原本完成什么

我先看范围，适合的话再做 299 元诊断报告。
```

## 2-Hour Follow-Up

Use only if the buyer showed interest but did not send usable material.

```text
补充一下，299 诊断不是直接改你的账号，而是先看脱敏日志和截图，交付一页诊断报告：失败点、可能原因、建议修复顺序和安全测试清单。

如果你现在不方便整理，先发一张报错截图也可以，我先判断是不是适合诊断。
```

## 12-Hour Follow-Up

Use when the buyer sent partial material but not enough to quote or diagnose.

```text
我目前还差一点信息才能判断范围。最少需要：
1. 报错截图或错误文本
2. 失败前后两个节点的截图
3. 一条脱敏后的输入/输出样例
4. 你希望最终得到什么结果

这些够了之后，我就能判断是 299 诊断、999 修复方案，还是需要更大范围的排查。
```

## 24-Hour Follow-Up

Use once only. If there is still no reply, stop following up.

```text
我先不打扰你了。这个问题后面如果还需要排查，可以直接发脱敏报错截图和日志。

记得不要发密码、密钥、Token、Cookie、付款后台、钱包或客户隐私。我只根据脱敏材料判断是否适合 299 诊断。
```

## If Buyer Asks "Can You Just Fix It?"

```text
可以修，但我不建议一上来直接改。自动化失败最好先做一次 299 诊断，确认失败点和风险，再决定是否升级到 999 修复方案。

这样可以避免改错节点、误伤生产流程，或者把一个小问题做成大返工。
```

## If Buyer Says "Too Expensive"

```text
可以理解。299 主要买的是定位失败点和修复顺序，不是简单看一眼。

如果你只想先判断能不能做，可以先发一张脱敏报错截图，我先看是不是适合诊断。不适合我会直接说，不会硬推。
```

## If Buyer Sends Secrets

```text
这个里面有敏感信息，我不能接收或继续基于它处理。建议你先撤回/打码；如果已经发出了真实密钥或 Token，最好去对应平台轮换一下。

你可以重新发脱敏版本，只保留错误信息、节点名称、字段结构和失败现象。
```

## If Buyer Wants Login

```text
我不能代登录你的账号，也不能接收账号密码、Cookie、Token 或高权限入口。

可以继续用脱敏截图、失败日志和流程截图做诊断。诊断报告会告诉你优先检查哪里、怎么安全测试、是否需要后续修复方案。
```

## If Buyer Has Production Risk

```text
这个看起来不只是单点报错，可能涉及生产流程、多个系统或真实用户数据。299 诊断可以先定位问题，但不包含直接生产修复。

如果你要完整修复方案，需要先做诊断，再根据范围升级到 999 修复计划或 1999+ 复杂排查。
```

## Follow-Up Stop Rules

Stop following up when:

- The buyer does not reply after the 24-hour message.
- The buyer repeatedly asks for login, secrets, wallet, payment, or private data handling.
- The buyer asks to move the deal outside the platform in a risky way.
- The buyer wants a guaranteed fix before diagnosis.
- The buyer refuses to provide redacted screenshots or logs.

## Lead Log Fields

Copy this into `docs/DOMESTIC_LEAD_TRIAGE_TRACKER.md` or the CSV tracker.

```text
Lead ID:
Platform:
First contact time:
Source post:
Buyer problem:
Material received: none / partial / enough
Risk flags:
Current reply stage: 0min / 2h / 12h / 24h / stopped
Recommended package: 299 / 999 / 1999+ / decline
Next action:
```
