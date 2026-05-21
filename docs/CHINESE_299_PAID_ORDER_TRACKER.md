# Chinese 299 Paid Order Tracker

Use this tracker when a 299 RMB diagnosis order is paid or close to payment. It keeps the operator focused on delivery status, safety checks, and upgrade routing without storing sensitive data.

CSV template:

- `docs/examples/chinese-299-paid-order-tracker.csv`

## What This Tracker Is For

- Confirm whether a real order exists.
- Track the 30-minute diagnosis window.
- Record whether the buyer provided enough redacted material.
- Mark safety blocks before work starts.
- Route completed reports into 999 / 1999+ follow-up offers when justified.

## What Never Goes Into The Tracker

Do not store:

- Passwords.
- API keys.
- Tokens.
- Cookies.
- OAuth codes.
- Payment details.
- Wallet addresses or wallet actions.
- KYC, ID, tax, payout, or bank information.
- Private customer data.
- Buyer external links.
- Raw production logs that contain secrets.

If the buyer sends sensitive material, mark `risk_flags` as `secrets_sent`, stop work, and ask for a redacted version.

## Column Guide

| Column | Meaning |
| --- | --- |
| `order_id` | Internal order label or platform order ID. Use platform-safe identifiers only. |
| `buyer_alias` | Buyer nickname or anonymized label. |
| `platform` | Fiverr, Xianyu, WeChat, Xiaohongshu, private group, or other. |
| `package` | Usually `299 diagnosis`; can be `999 repair plan` after upgrade. |
| `status` | `paid_active`, `waiting_payment_confirmation`, `missing_materials`, `in_progress`, `delivered`, `follow_up`, `blocked`, or `closed`. |
| `start_time` | When the diagnosis clock starts. |
| `deadline` | Target delivery time. |
| `material_status` | `complete`, `missing error text`, `missing expected output`, `unsafe`, or `unclear`. |
| `risk_flags` | `none`, `external_link`, `secrets_sent`, `login_required`, `payment_not_confirmed`, `production_risk`, `private_data`, or `other`. |
| `diagnosis_report_path` | Local report path, if created. |
| `upgrade_route` | `none`, `999 repair plan`, `1999 rescue`, `decline`, or `waiting`. |
| `next_follow_up` | Next platform-safe follow-up time. |
| `owner_confirmation_needed` | `yes` or `no`. Use `yes` for payment, KYC, payout, credentials, external links, or high-risk scope. |
| `notes` | Short operational note. Never paste secrets or private data. |

## Status Flow

Use this flow:

1. `waiting_payment_confirmation`
2. `paid_active`
3. `missing_materials` or `in_progress`
4. `delivered`
5. `follow_up`
6. `closed`

Switch to `blocked` if:

- Payment is not confirmed.
- Buyer asks to leave the platform.
- Buyer sends unsafe data.
- Buyer requires login or credentials.
- Scope expands beyond diagnosis.

## Safe First Row Template

```csv
order_id,buyer_alias,platform,package,status,start_time,deadline,material_status,risk_flags,diagnosis_report_path,upgrade_route,next_follow_up,owner_confirmation_needed,notes
ORDER-001,buyer-a,Fiverr,299 diagnosis,paid_active,YYYY-MM-DD HH:MM,YYYY-MM-DD HH:MM,complete,none,docs/orders/ORDER-001-diagnosis.md,waiting,YYYY-MM-DD HH:MM,no,"Platform-internal order only. No secrets stored."
```

## Related Files

- `docs/CHINESE_299_PAID_ORDER_LAUNCH_CHECKLIST.md`
- `docs/CHINESE_299_PAID_ORDER_HANDOFF.md`
- `docs/CHINESE_299_30_MIN_DELIVERY_CHECKLIST.md`
- `docs/examples/chinese-299-diagnosis-report-template.md`
- `docs/CHINESE_999_UPGRADE_REPLY_PACK.md`
