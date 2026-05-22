# User Action Required

Only the user should handle the items below. Codex must not perform payment, KYC, tax, payout, wallet, subscription, OAuth, or high-permission authorization actions.

## Current blockers

- 2026-05-22T12:51:00+08:00 - Freelancer bidding is blocked by the platform's profile completion flow. It requires user-only personal/compliance fields including address and date of birth, plus hourly rate/profile details, before bids can be submitted. Codex selected relevant skills but must not invent or enter personal legal/compliance data. After the user saves this profile step, Codex can continue with safe platform-internal proposals.
- 2026-05-22T13:06:00+08:00 - A safe profile-completion helper is available at `ops/48h/FREELANCER_PROFILE_COMPLETION.md`. User should paste the public headline/summary/rate if desired, then personally complete address/date-of-birth/email verification. Codex must not add funds or complete KYC/payment/payout fields.
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

## 2026-05-22T02:45:00+08:00 - Submitted bounty PR: Claude Builders changelog generator

- Action completed: PR https://github.com/claude-builders-bounty/claude-builders-bounty/pull/1905 is open from `butianhua4:add-generate-changelog-skill`.
- Why user action may still be required: any Opire award acceptance, payout profile, KYC, tax, wallet, or payment step is user-only.
- Automation attempt result: upstream PR submitted; no award, no merge, no confirmed revenue yet.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.

## 2026-05-22T03:00:00+08:00 - Submitted bounty PR: Claude Builders Next.js SQLite CLAUDE.md

- Action completed: PR https://github.com/claude-builders-bounty/claude-builders-bounty/pull/1906 is open from `butianhua4:add-nextjs-sqlite-claude-template`.
- Why user action may still be required: any Opire award acceptance, payout profile, KYC, tax, wallet, or payment step is user-only.
- Automation attempt result: upstream PR submitted; no award, no merge, no confirmed revenue yet.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.

## 2026-05-22T06:40:00+08:00 - Optional low-payout bounty PR: FinMind webhook event system

- Action available: apply `ops/48h/patches/finmind-webhook-event-system-bounty-77.patch` to a fork of `rohitdash08/FinMind` and open a PR for https://github.com/rohitdash08/FinMind/issues/77.
- Suggested PR title/body: `ops/48h/FINMIND_WEBHOOK_PR_DRAFT.md`.
- Why user action may be required: this repo has no existing fork/PR workflow set up in the current browser session, and the payout is only `$50`, so submitting should be weighed against higher-value leads.
- Verification note: formatting and lint passed; local pytest is blocked by the repo's existing Redis dependency at auth login.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.

## 2026-05-22T07:30:00+08:00 - Submitted bounty PR: TypeORM Postgres varchar length

- Action completed: Codex created the public fork `https://github.com/butianhua4/typeorm`, pushed branch `opire-3357-postgres-varchar-length`, and opened upstream PR https://github.com/typeorm/typeorm/pull/12532 for issue https://github.com/typeorm/typeorm/issues/3357.
- Why user action may still be required: any Opire award acceptance, payout profile, KYC, tax, wallet, or payment step is user-only.
- Verification note: `corepack pnpm install --frozen-lockfile` passed and `corepack pnpm run compile` passed. Targeted DB test is blocked locally by missing `ormconfig.json` / Postgres test DB.
- Automation attempt result: upstream PR submitted; no award, no merge, no confirmed revenue yet.
- Safety boundary: no passwords, tokens, payment, KYC, OAuth, or private repository access should be shared with Codex.
