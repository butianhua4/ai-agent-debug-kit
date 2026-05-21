# User Action Required

Only the user should handle the items below. Codex must not perform payment, KYC, tax, payout, wallet, subscription, OAuth, or high-permission authorization actions.

## Current blockers

- Platform accounts/APIs are required before Codex can submit bids, accept jobs, or post community replies automatically. Current automatic work can continue on public repos, public issue research, patches, validation, and proposal/post drafts.
- Freelancer/Upwork/Algora/Reddit/n8n community posting is account-gated unless the user provides a compliant authenticated workflow. Codex must not invent account access or claim messages were sent.
- This run did not expose an in-app browser automation tool after tool search, so Fiverr/Freelancer page clicking is currently blocked from Codex. Public repo work and public-web research can continue automatically.

## Standing blockers

- Fiverr custom offers must be confirmed by the user before sending unless the user explicitly authorizes a specific platform-safe draft.
- Upwork proposals must remain drafts unless the user provides approved API/platform workflow and confirms submission.
- Any Algora/GitHub payout setup, tax form, KYC, or payment profile setup is USER_ACTION_REQUIRED.
- Any community post that requires the user's personal account context should be posted or confirmed by the user.
- If desired, the user must fork/open an upstream PR for `567-labs/instructor-js#8` using `ops/48h/patches/0001-Add-cookbook-pages-for-existing-examples.patch`, because the current connector has pull-only access to that public repo.

## 2026-05-22T00:30:00+08:00 - Optional upstream PR: OpenClaw skill docs

- Action: If desired, fork `openclaw/openclaw`, apply `ops/48h/patches/openclaw-skill-description-trigger-quality.patch`, and open a PR.
- Suggested PR title: `Document skill description and trigger quality guidance`
- Why user action is required: the current GitHub connector has no write permission to this public upstream repository.
- Safety boundary: no credentials, tokens, payment, KYC, or private repository access required.

## 2026-05-22T01:10:00+08:00 - Optional upstream PR: actions/typescript-action release docs

- Action: If desired, fork `actions/typescript-action`, apply `ops/48h/patches/actions-typescript-action-release-version-check-readme.patch`, and open a PR.
- Suggested PR title: `Document package version checks before release`
- Why user action is required: the current GitHub connector has no write permission to this public upstream repository.
- Safety boundary: no credentials, tokens, payment, KYC, or private repository access required.

## 2026-05-22T00:50:00+08:00 - Optional upstream PR: Firecrawl JS SDK search fields

- Action: If desired, fork `firecrawl/firecrawl`, apply `ops/48h/patches/firecrawl-js-sdk-search-country-enterprise.patch`, and open a PR for issue #3437.
- Suggested PR title: `Forward documented v2 search country and enterprise fields in JS SDK`
- Why user action is required: the current GitHub connector has no write permission to this public upstream repository.
- Safety boundary: no credentials, tokens, payment, KYC, OAuth, or private repository access required.

## 2026-05-22T01:10:00+08:00 - Optional bounty claim: Claude Builders destructive Bash hook

- Action: If desired and still available, comment `/opire try` on `claude-builders-bounty/claude-builders-bounty#3`, apply `ops/48h/patches/claude-builders-block-destructive-bash-hook.patch`, and open a PR.
- Suggested PR title: `Add destructive Bash command PreToolUse hook`
- Why user action is required: claiming/submitting the bounty requires the user's GitHub/Opire account and compliance with that bounty's rules.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.

## 2026-05-22T01:45:00+08:00 - Optional bounty claim: Claude Builders PR review agent

- Action: If desired and still available, comment `/opire try` on `claude-builders-bounty/claude-builders-bounty#4`, apply `ops/48h/patches/claude-builders-pr-review-agent.patch`, and open a PR.
- Suggested PR title: `Add public PR review agent CLI`
- Why user action is required: claiming/submitting the bounty requires the user's GitHub/Opire account and compliance with that bounty's rules.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.
