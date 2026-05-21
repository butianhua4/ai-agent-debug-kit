# TypeORM bounty #3357 PR draft

## Target

- Opire: https://app.opire.dev/issues/01HWJNZ5HQMVG2TCW6XHQQJ3QT
- GitHub issue: https://github.com/typeorm/typeorm/issues/3357
- Reward shown during scan: `$120.00`
- Repo: https://github.com/typeorm/typeorm

## PR title

fix(postgres): alter varchar length without dropping column

## PR body

Fixes #3357.

Postgres `changeColumn` previously treated a column length change the same way as a type change, so changing `varchar(50)` to `varchar(51)` generated a drop/add sequence. That can lose data and can also fail when existing rows are present.

This patch keeps destructive recreation for real type/array/generated-column changes, but lets length-only changes flow through the existing `ALTER COLUMN ... TYPE ...` path. The regression coverage extends the existing varchar length synchronization test to insert a row before changing the length and assert that the row survives synchronization.

Validation:

- Patch prepared locally against `typeorm/typeorm` main.
- `corepack pnpm install --frozen-lockfile` passed after enabling Corepack's pnpm cache.
- `corepack pnpm run compile` passed.
- `corepack pnpm run test:fast -- --grep "#1733"` could not reach the targeted test because the TypeORM test harness requires an `ormconfig.json` database configuration in the repo root. No Postgres test database was configured in this workspace.
- No secrets, credentials, payment, KYC, or private access were used.

## Patch path

`ops/48h/patches/typeorm-postgres-varchar-length-bounty-3357.patch`

## Risk notes

- This is deliberately scoped to Postgres because issue #3357 and the reproduced code path are Postgres-specific.
- Narrowing a varchar length can still fail if existing data exceeds the new limit, but it will fail safely instead of silently dropping/recreating the column.
- Full upstream validation needs a TypeORM `ormconfig.json` and a Postgres test database.
