# Opire Stale Bounty Filter

Purpose: prevent wasted night-shift cycles on Opire listings that still show available rewards but are closed, already solved, or not cloneable on GitHub. This is not revenue. It is a reusable filter for faster public bounty selection.

## Skip Criteria

- GitHub issue is closed even if Opire says `Status: Open`.
- GitHub issue shows a linked/merged PR or explicit "do not open duplicate PRs".
- Repository returns `Repository not found` on clone.
- Listing is mainly donation/funding for maintainer-owned work rather than a scoped external patch.
- Payout requires wallet/KYC/payment setup before a patch can be evaluated.
- More than 3 active solvers/claimed attempts on a low-payout bounty under `$150`.
- Issue requires private credentials, paid accounts, production data, OAuth approvals, or high-permission tokens.
- Issue or bounty is explicitly reserved for interviews, candidates, or a named solver.
- Issue text says the PR is already finalized, under platform/app review, or asks contributors not to submit more PRs.
- Existing PR search shows multiple active full implementations for the same bounty and the task is not safely splittable.

## Checked Listings

| checked_at | opire_url | github_url | amount | result | reason |
| --- | --- | --- | ---: | --- | --- |
| 2026-05-22T06:40:00+08:00 | https://app.opire.dev/issues/01K6K4YTSWT7XF53GM3KCTBG7S | https://github.com/aueangpanit/electron-template/issues/1 | 100 | skip | Issue visible, but repository clone returned `Repository not found`. |
| 2026-05-22T06:50:00+08:00 | https://app.opire.dev/issues/01HWT26R3S59MS778MAE9786YG | https://github.com/storybookjs/storybook/issues/12641 | 110 | skip | GitHub issue is closed and already has linked submitted PR references. |
| 2026-05-22T06:51:00+08:00 | https://app.opire.dev/issues/01JARC75G44M6EQCJCR1DTBHD6 | https://github.com/formbricks/formbricks/issues/3302 | 60 | skip | GitHub issue is closed with linked PR references. |
| 2026-05-22T07:13:00+08:00 | https://app.opire.dev/issues/01HTN11YX5NYSS7GGB3SHNCJSS | https://github.com/trovu/trovu/issues/329 | 70 | skip | Maintainer requires proof on an actual Android PWA device and explicitly rejects common unverified `window.open()` / `_blank` variants. |
| 2026-05-22T07:14:00+08:00 | Opire home listing for `hexgrad/kokoro` German language funding | https://github.com/hexgrad/kokoro/issues | 1620 | skip-for-now | High reward, but it appears to require TTS language/model/G2P/voice work and audio-quality validation, not a 45-120 minute JS patch. |
| 2026-05-22T07:58:00+08:00 | Algora listing for `archestra-ai/archestra` MCP Apps support | https://github.com/archestra-ai/archestra/issues/1301 | 900 | skip | GitHub issue is closed/completed and already rewarded. |
| 2026-05-22T08:00:00+08:00 | Algora listing for `archestra-ai/archestra` WindMill MCP server | https://github.com/archestra-ai/archestra/issues/3855 | 400 | skip | Open but explicitly labeled reserved for SE interview, so not safe to compete. |
| 2026-05-22T08:01:00+08:00 | Algora listing for `archestra-ai/archestra` MCP args JSON textarea | https://github.com/archestra-ai/archestra/issues/3859 | 100 | skip | Open but explicitly labeled reserved for SE interview, so not safe to compete. |
| 2026-05-22T08:06:00+08:00 | Activepieces MCP piece bounty for Gmail | https://github.com/activepieces/activepieces/issues/8072 | 150 | skip | Issue says the PR is finalized and asks contributors to refrain from additional PRs while app review is pending. |
| 2026-05-22T08:08:00+08:00 | Activepieces MCP piece bounty for Canva | https://github.com/activepieces/activepieces/issues/8135 | 150 | skip | Issue says the PR is finalized and asks contributors to refrain from additional PRs while app review is pending. |
| 2026-05-22T08:10:00+08:00 | Activepieces BuyWhere integration listing | https://github.com/activepieces/activepieces/issues/13083 | 0 | skip | Listing request without a bounty signal or scoped emergency automation patch. |
| 2026-05-22T08:27:00+08:00 | Coolify project-specific members bounty | https://github.com/coollabsio/coolify/issues/6894 | 1000 | skip | Multiple active and historical full implementation PRs already exist, so a late duplicate would have low payout probability. |
| 2026-05-22T08:28:00+08:00 | FinMind webhook event system bounty | https://github.com/rohitdash08/FinMind/issues/77 | 50 | skip-for-now | Local patch exists, but multiple active PRs already claim the bounty; defer unless maintainer signals additional submissions are wanted. |

## Next Higher-Value Search Pattern

Prefer listings where:

- Opire and GitHub both show the issue open.
- Repo is cloneable.
- Payout is at least `$150`, or the patch is unusually fast and relevant to automation proof.
- Issue has 0-1 solvers and no linked active PR.
- Tests can run without paid services or secrets.
