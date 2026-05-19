# Demo Script

Use this script to create screenshots, a short GIF, or a 30-second launch video for AI Agent Debug Kit.

## Screenshot Set

Capture these five states:

1. Empty app with the headline and action buttons visible.
2. `Tool Failure` demo loaded with summary cards visible.
3. Risk flags and recommendations visible.
4. Run A/B comparison visible.
5. Export controls visible: Copy Markdown, Export Markdown, Copy JSON, Export JSON.

Recommended filename pattern:

- `demo-01-empty.png`
- `demo-02-summary.png`
- `demo-03-risk-flags.png`
- `demo-04-compare.png`
- `demo-05-export-actions.png`

## 30-Second Video

### 0-5s

Open the demo page and show the headline:

`Inspect agent logs before they become production incidents.`

### 5-10s

Select `Tool Failure` and click `Load Demo`.

Show:

- Total Events
- Tool Calls
- Errors
- Estimated Cost

### 10-17s

Scroll or frame the risk flags and recommendations.

Narration:

`The tool finds the first failure, repeated patterns, token cost, and risky log content.`

### 17-24s

Switch to `Compare`, load demo again, and show Run A/B comparison.

Narration:

`Compare two agent attempts before deciding which run is healthier.`

### 24-30s

Click `Copy Markdown`, then `Export JSON`.

Narration:

`Copy a report into a PR or export JSON for automation. No backend, no account, no setup.`

## Short GIF

Keep the GIF under 12 seconds:

1. Click `Load Demo`.
2. Show summary and risk flags.
3. Click `Copy Markdown`.
4. Click `Export JSON`.

## Launch Caption

```text
AI Agent Debug Kit turns noisy AI agent logs into readable reports.

Paste JSONL, JSON, or plain text. Get tool-call metrics, cost estimates, risk flags, repeated-pattern detection, Run A/B comparison, and Markdown/JSON reports.

Demo: https://butianhua4.github.io/ai-agent-debug-kit/
Repo: https://github.com/butianhua4/ai-agent-debug-kit
```

## Privacy Reminder

Use demo logs or redacted logs only. Do not record private repositories, API keys, customer data, or payout/account pages.
