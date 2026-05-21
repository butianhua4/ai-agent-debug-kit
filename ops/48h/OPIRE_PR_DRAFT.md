# Opire Frontend PR Draft

Prepared: 2026-05-22 06:07 +08:00

Target repository: https://github.com/Opire/frontend

Target issue: https://github.com/Opire/frontend/issues/39

Patch artifact: `ops/48h/patches/opire-frontend-reward-sort-filter.patch`

Confirmed revenue: `$0`. This is a public proof / community exposure patch, not a confirmed bounty award.

## PR title

Add reward sorting filters

## PR body

```markdown
## Summary

Adds additional reward filtering/sorting options requested in #39:

- reward amount: highest first
- reward amount: lowest first
- creation date: newest first
- creation date: oldest first

The filter state is reflected in URL params so the selected ordering is shareable and preserved across pagination.

## Safety / scope

- No auth, payout, wallet, KYC, or private credential handling.
- UI-only filter controls plus request/query propagation.
- Does not change reward creation, claiming, payment, or payout behavior.

## Validation

Patch prepared from the current public files:

- `app/home/_components/Filters/Filters.tsx`
- `app/home/_utils/buildEndpointWithSearchAndPagination.ts`
- `app/home/page.tsx`
- `app/home/view.tsx`

I also ran the local commercial repo preflight for the patch artifact record:

```text
npm run preflight
Smoke tests passed
Extension validation passed
Release validation passed
```

Closes #39
```

## Manual submit steps if using browser

1. Fork `Opire/frontend` to `butianhua4/frontend`.
2. Create a branch named `add-reward-sort-filters`.
3. Apply `ops/48h/patches/opire-frontend-reward-sort-filter.patch`.
4. Run the upstream checks if dependencies install cleanly:
   - `pnpm install`
   - `pnpm lint`
   - `pnpm typecheck`
5. Open PR from `butianhua4:add-reward-sort-filters` to `Opire/frontend:main`.
6. Use the PR title/body above.

## Risk notes

- This patch assumes the backend endpoint can accept `sortBy` and `sortDirection`. If backend sorting is not implemented, the local UI sort in `HomeView` still improves the current loaded page, but maintainers may ask for backend support for global pagination-correct ordering.
- If maintainers prefer a dropdown instead of segmented buttons, convert `RewardSortFilter` to a menu while keeping the same URL params.
