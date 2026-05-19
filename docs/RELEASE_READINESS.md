# Release Readiness

## Current Version

`v0.5.0`

## Ready

- Browser app works without a build step.
- CLI supports Markdown and JSON reports.
- CLI supports `--max-errors` and `--max-warnings` gates.
- Browser extension prototype exists.
- Release zip builds locally.
- Release manifest is generated and validated.
- GitHub Actions runs preflight and uploads a zip artifact.
- Buyer guide, privacy draft, store listing draft, and digital product draft exist.

## Preflight Command

```bash
npm run preflight
```

Expected:

- smoke tests pass
- extension validation passes
- release zip builds
- release manifest validation passes

## Operator Can Continue Without User

- product polishing
- docs polishing
- bounty candidate filtering
- test coverage
- release package improvements
- non-sensitive GitHub code pushes

## User Must Confirm

- publishing a GitHub Release
- creating paid product listings
- setting prices on a live marketplace
- binding payout methods
- granting high-permission OAuth
- submitting to Chrome Web Store
- touching private repositories

## Recommended Next Human Action

When available on desktop:

1. Open latest GitHub Actions run.
2. Confirm it is green.
3. If green, approve creating the `v0.5.0` GitHub Release.

