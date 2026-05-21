# Fast Public Bounty Screen - 2026-05-21

Purpose: find public, low-risk paid issues that can create fast revenue or a reusable proof asset without touching private repos, wallets, KYC, payout settings, buyer external links, or off-platform payment.

## Screening Rules

- Public issue and public code only.
- JavaScript, TypeScript, Node.js, CI, docs, or AI automation preferred.
- No wallet, crypto, private credentials, OAuth setup, or paid tool requirement.
- Can produce a useful patch, proof note, or rejection decision in 30-120 minutes.
- Do not start work if the issue is closed, already solved, or requires platform login to claim before analysis.
- Do not submit a claim or PR without owner approval if account permissions, payout, or identity setup appears.

## Sources Checked

- Opire public bounty pages.
- Algora public bounty snippets and docs.
- Public GitHub issue pages linked from bounty pages.
- General GitHub bounty search results.

## Best Immediate Candidate

### 1. aueangpanit/electron-template#1

- Link: https://github.com/aueangpanit/electron-template/issues/1
- Bounty page: https://app.opire.dev/issues/01K6K4YTSWT7XF53GM3KCTBG7S
- Listed reward: USD 100.
- Tech: TypeScript / Electron.
- Status observed: GitHub issue open; Opire shows one available reward and two solvers trying.
- Requirement: macOS tray icon should stay template-like for theme adaptation while also showing an orange dot indicator.
- Why it is attractive: small, visual, scoped, and likely fixable by changing tray icon generation/composition rather than touching business logic.
- Main risk: must validate on macOS; this Windows workspace may not be enough for final visual proof. Existing solvers may already be working.
- Fastest next action: inspect repo implementation and determine whether a generated native image with a separate orange dot layer can be patched and tested without macOS-only APIs.
- Decision: candidate, but only proceed if repo setup is lightweight and a code-level patch can be produced quickly.

## Secondary Candidates

### 2. storybookjs/storybook issue: Problem with storybook-controls of type "select"

- Bounty source: Opire list showed USD 110 and TypeScript.
- Initial signal: one solver listed, but issue details still need direct confirmation.
- Risk: large monorepo and likely higher setup cost.
- Decision: keep as backup, not first sprint target.

### 3. formbricks/formbricks#3302

- Link: https://github.com/formbricks/formbricks/issues/3302
- Bounty page: https://app.opire.dev/issues/01JARC75G44M6EQCJCR1DTBHD6
- Listed reward: USD 60 split into three USD 20 rewards.
- Tech: TypeScript.
- Status observed: GitHub issue is closed even though Opire still lists available rewards.
- Decision: reject for fast revenue. Closed issue means high risk of wasted effort.

### 4. bogeeee/restfuncs#6

- Link: https://github.com/bogeeee/restfuncs/issues/6
- Bounty page: https://app.opire.dev/issues/01HWAKVG8489QKN1NEGQA2RJC4
- Listed reward: USD 50.
- Tech: TypeScript, security.
- Status observed: GitHub issue is closed.
- Decision: reject for fast revenue.

## Immediate Revenue Plan

1. Attempt the Electron tray icon candidate only if cloning and static inspection show a compact code path.
2. If it needs macOS visual QA or heavy setup, stop before sinking time and turn the analysis into a Fiverr/GitHub proof note: "I can triage small Electron tray/menu/status bugs and produce scoped fixes."
3. Keep searching Opire/Algora for TypeScript issues with:
   - open GitHub status,
   - zero or one solver,
   - USD 50-200 reward,
   - compact repo setup,
   - no browser auth, wallet, or private data.

## Buyer-Facing Angle From This Screen

Use this as a service hook:

```text
I can rapidly triage small JavaScript/TypeScript automation or desktop-app bugs and tell you whether they are fixable in a same-day patch. You get a scoped diagnosis, risk notes, and a patch plan before any larger implementation.
```

MONEY_SCORE: +20 for a reusable public opportunity screen and +10 for identifying one actionable public bounty candidate.
