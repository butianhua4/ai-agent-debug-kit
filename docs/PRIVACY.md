# Privacy Policy Draft

Last updated: 2026-05-18

AI Agent Debug Kit is a local-first developer tool for inspecting AI agent logs.

## Data Processing

The browser app and extension process pasted logs locally in the user's browser.

The CLI processes local files on the user's machine.

## Data Collection

AI Agent Debug Kit does not operate a backend service and does not collect, transmit, sell, or share user logs.

## Local Storage

The web app can save snapshots in browser `localStorage` when the user clicks `Save Snapshot`.

Saved snapshots remain in the user's browser until the user deletes them or clears browser storage.

## Sensitive Data

Agent logs may contain API keys, tokens, personal information, private repository names, or customer data.

Users should review and redact logs before sharing reports. Exported reports include optional redaction for common API-key, token, secret, password, and email patterns, but automated redaction is not guaranteed to catch every sensitive value.

## Browser Extension Permissions

The current extension prototype requests no browser permissions.

## Contact

For issues, open a GitHub issue:

https://github.com/butianhua4/ai-agent-debug-kit/issues

