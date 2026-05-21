# User Action Required

Only the user should handle the items below. Codex must not perform payment, KYC, tax, payout, wallet, subscription, OAuth, or high-permission authorization actions.

## Current blockers

- None requiring immediate action for the ops board itself.

## Standing blockers

- Fiverr custom offers must be confirmed by the user before sending unless the user explicitly authorizes a specific platform-safe draft.
- Upwork proposals must remain drafts unless the user provides approved API/platform workflow and confirms submission.
- Any Algora/GitHub payout setup, tax form, KYC, or payment profile setup is USER_ACTION_REQUIRED.
- Any community post that requires the user's personal account context should be posted or confirmed by the user.
- If desired, the user must fork/open an upstream PR for `567-labs/instructor-js#8` using `ops/48h/patches/0001-Add-cookbook-pages-for-existing-examples.patch`, because the current connector has pull-only access to that public repo.
