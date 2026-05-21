# User Action Required

Only the user should handle the items below. Codex must not perform payment, KYC, tax, payout, wallet, subscription, OAuth, or high-permission authorization actions.

## Current blockers

- Platform accounts/APIs are required before Codex can submit bids, accept jobs, or post community replies automatically. Current automatic work can continue on public repos, public issue research, patches, validation, and proposal/post drafts.
- Freelancer/Upwork/Algora/Reddit/n8n community posting is account-gated unless the user provides a compliant authenticated workflow. Codex must not invent account access or claim messages were sent.
- In-app browser GitHub access is now available for the logged-in user session and was used only for the public Claude Builders bounty workflow. Fiverr/Freelancer/community posting remains account/rule-gated unless the user explicitly authorizes a specific safe action.

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

- Action completed: Codex used the user-authenticated in-app browser session to comment `/opire try`, reuse the public fork, apply `ops/48h/patches/claude-builders-block-destructive-bash-hook.patch`, push `butianhua4:add-destructive-bash-hook`, and open upstream PR https://github.com/claude-builders-bounty/claude-builders-bounty/pull/1904.
- Suggested PR title: `Add destructive Bash command PreToolUse hook`
- Why user action may still be required: any Opire award acceptance, payout profile, KYC, tax, wallet, or payment step is user-only.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.
- Automation attempt result: upstream PR submitted; no award, no merge, no confirmed revenue yet.

## 2026-05-22T01:45:00+08:00 - Submitted bounty PR: Claude Builders PR review agent

- Action completed: Codex used the user-authenticated in-app browser session to comment `/opire try`, fork the public repo, apply `ops/48h/patches/claude-builders-pr-review-agent.patch`, push `butianhua4:add-pr-review-agent`, and open upstream PR https://github.com/claude-builders-bounty/claude-builders-bounty/pull/1903.
- Suggested PR title: `Add public PR review agent CLI`
- Why user action may still be required: any Opire award acceptance, payout profile, KYC, tax, wallet, or payment step is user-only.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.
- Automation attempt result: upstream PR submitted; no award, no merge, no confirmed revenue yet.

## 2026-05-22T02:45:00+08:00 - Manual PR required: Claude Builders changelog generator

- Action required: if issue #1 is still available, comment `/opire try` on https://github.com/claude-builders-bounty/claude-builders-bounty/issues/1 and open a PR from `butianhua4:add-generate-changelog-skill` into `claude-builders-bounty:main`.
- Suggested PR title: `Add structured changelog generator`
- Suggested PR body: `summary: adds a portable Python changelog generator that reads git commits since the latest tag and writes a categorized CHANGELOG.md. validation: generated changelog output from butianhua4/ai-agent-debug-kit and ran git diff check. closes #1`
- Why user action is required: GitHub browser actions are currently blocked by browser security policy, and the GitHub app returned `403 Resource not accessible by integration` for PR creation.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.
