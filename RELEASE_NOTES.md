# Release Notes

## v0.4.0

AI Agent Debug Kit now includes both a browser app and a Node CLI.

Highlights:

- zero-dependency browser app
- JSONL, JSON, and plain-text parsing
- Run A/B comparison
- configurable token pricing
- redacted Markdown report export
- local snapshot history
- shared parser/report core
- CLI report generator
- smoke tests
- GitHub Actions check workflow
- release package builder
- release preflight command
- CI release artifact upload
- supported log format documentation
- product preview image
- browser extension prototype
- extension testing notes
- extension manifest validation
- store listing and privacy drafts

Build a local release package:

```bash
npm run build:release
```

The package is created in `dist/`.
