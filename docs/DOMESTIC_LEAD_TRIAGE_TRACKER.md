# Domestic Lead Triage Tracker

Use this tracker for Chinese-platform leads from Xiaohongshu, Xianyu, WeChat, Zhihu, Juejin, Bilibili, or private communities.

Do not store passwords, API keys, OAuth tokens, identity data, tax data, payment data, wallet data, or private customer records in this tracker.

## Lead Table

| Date | Platform | Lead Alias | Problem Type | Failed Platform | Error Provided | Sensitive Data Risk | Fit Score | Suggested Package | Next Reply | Status |
| --- | --- | --- | --- | --- | --- | --- | ---: | --- | --- | --- |
| 2026-05-21 | Example | demo-lead-001 | webhook JSON mapping | n8n | yes | low | 8 | 299 diagnosis | ask for failed step and redacted screenshot | draft |

## Fit Score

Score each lead from 0 to 10.

Add points:

- +2: clear platform named, such as n8n, Make, Zapier, Pipedream, Node.js.
- +2: exact error text is available.
- +2: failed step is known.
- +1: expected output is clear.
- +1: actual output is clear.
- +1: buyer accepts redaction and no-password boundary.
- +1: buyer has urgency or business impact.

Subtract points:

- -3: asks for password sharing as the first step.
- -3: involves payout, KYC, tax, wallet, or identity verification.
- -3: asks for scraping private systems or bypassing access controls.
- -2: cannot describe expected output.
- -2: refuses to redact secrets.
- -1: only asks for vague "make me an automation" with no workflow context.

## Package Mapping

| Fit Score | Suggested Action |
| ---: | --- |
| 0-3 | Reject or ask one clarifying question only |
| 4-5 | Ask for more details before quoting |
| 6-7 | Quote 299 RMB diagnosis |
| 8-9 | Quote 999 RMB rescue report |
| 10 | Quote 1999+ RMB urgent rescue |

## First Reply

可以，我先不碰你的账号，也不需要密码。你把下面 6 个信息发我：

1. 用的平台：n8n / Make / Zapier / Pipedream / 自建脚本 / 其他
2. 失败的是哪一步
3. 完整错误文本
4. 最近改过什么
5. 你期望输出什么
6. 实际输出什么

如果有截图或 workflow 导出，请先删除 API Key、Token、密码和客户隐私。我会先判断是否适合固定范围诊断，再确认报价。

## Quote Replies

### 299 RMB Diagnosis

这个问题适合先做一个入门诊断，价格 299 元。交付一页诊断报告：可能原因、失败节点/字段、安全测试清单和下一步修复建议。默认不需要账号密码。

### 999 RMB Rescue Report

这个问题涉及完整流程，建议做标准救援报告，价格 999 元。交付流程失败地图、根因分析、字段/JSON 映射修复建议、重复发送/重试风险提示和 Before/After 测试清单。

### 1999+ RMB Urgent Rescue

如果这个流程正在影响线索、CRM、内容生产或业务运行，可以走加急救援，1999 元起。交付优先诊断、风险地图、修复顺序、备用路径、监控清单和团队交接报告。

## Reject Reply

这个需求目前不适合我接，因为涉及账号敏感权限/支付/KYC/钱包/身份/未脱敏客户数据。建议你先在平台官方支持或内部有权限的人那里处理，我这边不能接触这些信息。

## Status Values

- `draft`: lead captured, not replied.
- `qualified`: enough detail to quote.
- `quoted`: quote sent.
- `waiting`: waiting for buyer input.
- `rejected`: unsafe or poor fit.
- `won`: paid order confirmed.
- `lost`: no response or declined.

## Safe Storage Rule

Store only:

- platform name
- problem category
- redacted error text
- quote level
- next action

Never store:

- buyer real identity documents
- passwords
- API keys
- OAuth tokens
- payment details
- tax information
- wallet keys
- private customer data

