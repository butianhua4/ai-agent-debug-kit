# FinMind Webhook Event System PR Draft

Target issue: https://github.com/rohitdash08/FinMind/issues/77

Reward: `$50` listed on the public GitHub issue. This is not confirmed revenue until the PR is accepted/awarded and payout is confirmed.

## PR title

Add signed webhook delivery for expense and bill events

## PR body

### Summary

- Added user-scoped webhook endpoints with optional event filtering.
- Added HMAC-SHA256 signed deliveries for expense and bill lifecycle events.
- Added delivery persistence with status, attempt count, HTTP status/error, retry schedule, and manual retry endpoint.
- Added supported event documentation through `/webhooks/events` and database schema entries for endpoints/deliveries.
- Added tests for signed expense delivery, failed delivery retry, and unsupported event validation.

### Events covered

- `expense.created`
- `expense.updated`
- `expense.deleted`
- `bill.created`
- `bill.paid`

### Verification

- `black --check app tests` passed.
- `flake8 app tests` passed.
- `pytest tests/test_webhooks.py tests/test_expenses.py tests/test_bills.py` could not complete in the local sandbox because the existing test auth flow tries to connect to Redis at `redis:6379` during login. This failure also affects existing expense/bill tests before webhook assertions run. The implementation was still formatted and linted successfully.

### Patch artifact

`ops/48h/patches/finmind-webhook-event-system-bounty-77.patch`

