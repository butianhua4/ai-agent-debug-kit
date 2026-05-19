# GitHub Release Draft

Do not publish a release until the user confirms.

## Tag

`v0.5.0`

## Title

AI Agent Debug Kit v0.5.0

## Asset

Upload:

`dist/ai-agent-debug-kit.zip`

The same zip is also uploaded by GitHub Actions as the `ai-agent-debug-kit` artifact.

## Release Notes

AI Agent Debug Kit v0.5.0 packages the project as a local-first AI agent log debugging tool.

### Highlights

- Browser app for inspecting JSONL, JSON, pretty JSON, wrapped arrays, and plain-text logs
- Run A/B comparison
- File import and drag-and-drop loading
- Local snapshot history
- Redacted Markdown report export
- Repeated message and retry-loop detection
- CLI Markdown report output
- CLI JSON report output
- CLI CI gates with `--max-errors` and `--max-warnings`
- Manifest V3 browser extension prototype
- Release package builder
- Release package manifest and validation
- GitHub Actions checks and artifact upload

### Verification

```bash
npm run preflight
```

Expected:

- smoke tests pass
- extension validation passes
- release zip builds
- release manifest validation passes

### Links

- Demo: https://butianhua4.github.io/ai-agent-debug-kit/
- Repo: https://github.com/butianhua4/ai-agent-debug-kit
- CI usage: `docs/CI_USAGE.md`
- Buyer guide: `BUYER_GUIDE.md`
- Privacy draft: `docs/PRIVACY.md`

## Publish Steps

1. Run `npm run preflight`.
2. Open GitHub Releases.
3. Create new release.
4. Tag: `v0.5.0`.
5. Title: `AI Agent Debug Kit v0.5.0`.
6. Paste release notes above.
7. Upload `dist/ai-agent-debug-kit.zip`.
8. Publish only after user confirms.
