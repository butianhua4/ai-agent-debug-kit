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

## Checked Listings

| checked_at | opire_url | github_url | amount | result | reason |
| --- | --- | --- | ---: | --- | --- |
| 2026-05-22T06:40:00+08:00 | https://app.opire.dev/issues/01K6K4YTSWT7XF53GM3KCTBG7S | https://github.com/aueangpanit/electron-template/issues/1 | 100 | skip | Issue visible, but repository clone returned `Repository not found`. |
| 2026-05-22T06:50:00+08:00 | https://app.opire.dev/issues/01HWT26R3S59MS778MAE9786YG | https://github.com/storybookjs/storybook/issues/12641 | 110 | skip | GitHub issue is closed and already has linked submitted PR references. |
| 2026-05-22T06:51:00+08:00 | https://app.opire.dev/issues/01JARC75G44M6EQCJCR1DTBHD6 | https://github.com/formbricks/formbricks/issues/3302 | 60 | skip | GitHub issue is closed with linked PR references. |
| 2026-05-22T07:13:00+08:00 | https://app.opire.dev/issues/01HTN11YX5NYSS7GGB3SHNCJSS | https://github.com/trovu/trovu/issues/329 | 70 | skip | Maintainer requires proof on an actual Android PWA device and explicitly rejects common unverified `window.open()` / `_blank` variants. |
| 2026-05-22T07:14:00+08:00 | Opire home listing for `hexgrad/kokoro` German language funding | https://github.com/hexgrad/kokoro/issues | 1620 | skip-for-now | High reward, but it appears to require TTS language/model/G2P/voice work and audio-quality validation, not a 45-120 minute JS patch. |

## Next Higher-Value Search Pattern

Prefer listings where:

- Opire and GitHub both show the issue open.
- Repo is cloneable.
- Payout is at least `$150`, or the patch is unusually fast and relevant to automation proof.
- Issue has 0-1 solvers and no linked active PR.
- Tests can run without paid services or secrets.
