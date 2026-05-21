# Chinese Daily Lead Review Checklist

Use this checklist once or twice per day after posting the 299 RMB AI automation diagnosis offer on Xianyu, Xiaohongshu, WeChat groups, Zhihu, Juejin, Bilibili, or private communities.

Do not store passwords, API keys, tokens, cookies, identity data, payment data, wallet data, tax data, or private customer records. Do not open buyer external links.

## 10-Minute Review Loop

1. Check new comments and DMs from each active post.
2. Copy only safe summary fields into the lead tracker.
3. Score each lead from 0 to 10.
4. Send the correct reply stage from `docs/CHINESE_299_24H_FOLLOW_UP_CADENCE.md`.
5. Route qualified leads into 299 / 999 / 1999+ / decline.
6. Mark the next follow-up time.
7. Stop following weak or unsafe leads.
8. Count how many leads moved closer to paid diagnosis.

## Platform Check Order

1. Xianyu: comments, DMs, favorites with questions.
2. Xiaohongshu: comments, private messages, saves with comments.
3. WeChat/private groups: direct replies and private chats.
4. Zhihu/Juejin/Bilibili: comments that describe a real failure.
5. Fiverr: Inbox and Orders, only inside Fiverr.

## Lead Review Table

| Field | What to write |
| --- | --- |
| Lead alias | Short nickname, not real identity |
| Platform | Xianyu / Xiaohongshu / WeChat / Zhihu / Juejin / Fiverr |
| Problem | One-line failure summary |
| Tool | n8n / Make / Zapier / Coze / Dify / API / Node / Python / CI / other |
| Material state | none / screenshot / log / enough |
| Risk flags | secrets / login / payment / wallet / privacy / none |
| Fit score | 0-10 |
| Package | 299 / 999 / 1999+ / decline / ask more |
| Reply stage | 0min / 2h / 12h / 24h / stopped |
| Next action | exact next reply or owner confirmation |

## Fit Score Quick Rules

Add points:

- +2: buyer names the tool or platform.
- +2: buyer provides exact error text or screenshot.
- +2: failed step is clear.
- +1: expected result is clear.
- +1: actual result is clear.
- +1: buyer accepts redaction and no-login boundary.
- +1: buyer has urgency or business impact.

Subtract points:

- -3: asks for login, password, token, cookie, or API key sharing.
- -3: involves payout, KYC, tax, wallet, identity, or payment access.
- -3: asks to bypass access controls or scrape private systems.
- -2: refuses to redact sensitive data.
- -2: cannot explain expected result.
- -1: only asks for a vague full build with no workflow context.

## Daily Decision Rules

- Fit 0-3: decline or ask one clarifying question, then stop.
- Fit 4-5: ask for one missing screenshot/log item.
- Fit 6-7: quote 299 diagnosis.
- Fit 8-9: quote 299 first, mention 999 repair plan after diagnosis.
- Fit 10: quote 299 first only if safe; otherwise re-scope to 1999+.

## 299 Quote Trigger

Use when the buyer has enough redacted material and the failure is narrow.

```text
这个适合先做 299 诊断。我会根据你发的脱敏截图/日志交付一页诊断报告：失败点、可能原因、修复顺序和安全测试清单。

不需要账号密码、API Key、Token、Cookie，也不登录你的后台。确认后我就按 299 诊断范围处理。
```

## Ask-More Trigger

Use when the buyer is interested but material is not enough.

```text
现在还差一点材料才能判断。请补一张失败节点截图，或者一段脱敏后的错误文本。不要发密码、Key、Token、Cookie 或客户隐私。
```

## Decline Trigger

Use when the lead is unsafe or outside scope.

```text
这个需求涉及账号高权限、密钥、付款、钱包、身份/KYC、客户隐私或未脱敏数据，我这边不能接。建议你先在官方后台或内部有权限的人那里处理。
```

## End-Of-Day Metrics

Record these numbers at the end of the day:

```text
Posts checked:
New comments:
New DMs:
Safe leads:
299 quotes sent:
999 upgrade candidates:
1999+ re-scope candidates:
Unsafe leads stopped:
Follow-ups scheduled:
Paid orders confirmed:
```

## Next-Day Action

- If there are safe leads: follow up from the correct stage.
- If there are zero leads: repost one platform with a different title.
- If there are many weak leads: make the image caption clearer about required materials.
- If buyers ask the same question repeatedly: add it to the first reply or listing FAQ.
- If a buyer pays: move to `docs/CHINESE_299_PAID_ORDER_HANDOFF.md`.
