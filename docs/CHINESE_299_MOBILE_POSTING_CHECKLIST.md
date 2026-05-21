# Chinese 299 Mobile Posting Checklist

This is the phone-side execution card for publishing the 299 RMB AI automation diagnosis offer.

Owner approval is required before posting from any personal account. Do not publish, reply, or collect buyer materials in a way that asks for passwords, API keys, tokens, cookies, payment access, wallet access, private customer data, or production admin access.

## 10-Minute Posting Flow

1. Open the platform draft page.
2. Upload the eight images in this exact order:
   - `assets/domestic-299-diagnosis-cover.png`
   - `assets/domestic-299-summary-card.png`
   - `assets/domestic-299-diagnosis-proof.png`
   - `assets/domestic-299-price-ladder.png`
   - `assets/domestic-999-repair-plan-proof.png`
   - `assets/domestic-299-what-to-send.png`
   - `assets/domestic-299-do-not-send.png`
   - `assets/domestic-299-diagnosis-one-pager.png`
3. Pick one title from `docs/CHINESE_299_EIGHT_IMAGE_POSTING_CAPTION.md`.
4. Paste the matching body copy for Xianyu, Xiaohongshu, or WeChat/private groups.
5. Keep the first offer as 299 RMB diagnosis.
6. Mention 999 RMB repair plan only as an optional follow-up after diagnosis.
7. Add a short comment hook if the platform supports comments.
8. Save the post URL or screenshot into the daily operating notes.
9. When a buyer replies, use the buyer intake reply before quoting.
10. Log every inquiry in `docs/DOMESTIC_LEAD_TRIAGE_TRACKER.md`.

## Xianyu Fast Version

Title:

```text
AI自动化流程报错诊断 299元 看日志定位问题
```

Body:

```text
你的 AI 自动化、Agent、n8n、Make、Zapier、Coze、Dify、FastGPT、Webhook、JSON、API、Node.js、Python、GitHub Actions 如果经常跑失败，可以先做一次 299 元诊断。

我不直接登录你的账号，也不接收密码、API Key、Token、Cookie、钱包、付款后台、客户隐私数据。你只需要发脱敏后的报错截图、运行日志、流程截图和你想达到的结果。

299 元交付：一页故障诊断报告、失败点定位、可能原因排序、建议修复顺序、安全测试清单、是否适合升级到 999 修复方案。

如果你不确定能不能诊断，可以先发一张脱敏报错截图，我先判断是否适合 299 诊断。
```

First reply:

```text
可以先发脱敏材料，我看一下是否适合 299 诊断。请不要发密码、API Key、Token、Cookie、客户隐私、付款后台或钱包信息。

建议发：报错截图、最近一次失败日志、流程/节点截图、你原本希望它完成什么。
```

## Xiaohongshu Fast Version

Title:

```text
AI自动化总是跑失败，先别急着重做
```

Body:

```text
很多 AI 自动化不是“不會做”，而是失败点没有被定位清楚。

比如 n8n / Make / Zapier 跑到一半断了，Coze / Dify / FastGPT 调工具失败，Webhook 收不到数据，JSON 字段对不上，API 返回 401 / 403 / 429 / 500，GitHub Actions 一直红。

我现在做一个轻量诊断：299 元，看脱敏日志和截图，交付一页诊断报告：失败点、可能原因、先改哪一步、哪些风险不能碰、是否需要升级到 999 修复方案。

不登录账号，不收密码、密钥、Token、Cookie，不碰付款后台、钱包、客户隐私和高权限系统。
```

Comment hook:

```text
自动化跑失败先别重做，先定位失败点。可以发脱敏截图，我判断是否适合 299 诊断。
```

## WeChat / Group Fast Version

```text
最近接 299 元 AI 自动化故障诊断。

范围：n8n、Make、Zapier、Coze、Dify、FastGPT、AI Agent、Webhook、JSON、API、Node.js、Python、GitHub Actions。

你发脱敏报错截图、失败日志、流程截图和目标结果，我交付一页诊断报告：失败点、可能原因、修复顺序、安全测试清单。

不登录账号，不收密码、API Key、Token、Cookie，不碰付款、钱包、客户隐私和生产高权限后台。复杂修复会单独报价，先诊断不乱承诺。
```

## Reply Rules

- If the buyer sends a normal failure screenshot: ask for redacted logs and flow screenshots.
- If the buyer asks for guaranteed repair: reply that diagnosis identifies likely causes and next repair path, but does not guarantee production repair.
- If the buyer asks for direct login: refuse and ask for redacted screenshots/logs instead.
- If the buyer sends secrets: stop, ask them to revoke/rotate the secret, and request redacted material.
- If the buyer has many systems or production risk: route to 1999+ re-scope.

## Daily Tracking Fields

Track each post or inquiry with these fields:

```text
Date:
Platform:
Post title:
Post URL or screenshot:
Images uploaded: yes/no
Inquiry count:
Qualified leads:
299 quote sent:
999 upgrade suggested:
Unsafe requests:
Next follow-up:
```

## Stop Conditions

Stop and ask the owner before:

- Posting from a personal account.
- Replying to a real buyer with price or promise changes.
- Accepting any paid order.
- Touching payout, KYC, tax, payment, wallet, subscription, OAuth, or high-permission authorization.
- Opening buyer external links.
