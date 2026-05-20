# Micro Product Packs

Small, productized offers built around AI Agent Debug Kit.

These packs are designed for fast freelance delivery, public portfolio proof, and future digital-product listings. Do not publish paid listings or collect payment outside approved platforms without user approval.

## Pack 1: Agent Log Health Check

### Positioning

A one-time audit for failed AI agent runs.

### Buyer Problem

The buyer has an AI agent, workflow, or automation run that failed, looped, called the wrong tool, produced malformed JSON, or became too expensive.

### Input

- Redacted JSONL, JSON, or plain-text logs
- Expected result
- Short description of the tool or framework
- Any visible error message

### Output

- Markdown debug report
- JSON summary
- Error and warning count
- Tool-call breakdown
- Repeated-loop and repeated-message flags
- Cost estimate when token data is present
- Top suspected causes
- Next-step recommendation

### Suggested Price

- Fiverr Basic: USD 90
- Direct/platform fixed scope: USD 79-129

### Delivery Time

24-48 hours after the buyer sends usable redacted logs.

## Pack 2: Agent Workflow Fix Scope

### Positioning

A scoped fix plan for one broken AI automation flow.

### Buyer Problem

The buyer does not only need a report. They need a practical fix scope for one workflow, script, CI job, or agent step.

### Input

- Redacted logs
- Minimal reproduction steps
- Expected output
- Public repository or isolated file bundle when code review is needed

### Output

- Root-cause report
- Minimal fix plan
- Patch guidance or small patch when scope allows
- Verification checklist
- Safe handoff notes

### Suggested Price

- Fiverr Standard: USD 150-250
- Platform custom offer: USD 149-299

### Delivery Time

2-4 days depending on reproduction quality.

## Pack 3: CI Agent Risk Gate

### Positioning

A GitHub Actions quality gate that fails when agent logs contain too many errors, warnings, or risk flags.

### Buyer Problem

The buyer wants to prevent broken AI agent runs from silently passing CI.

### Input

- Target CI platform, preferably GitHub Actions
- Sample redacted log
- Threshold preference, or permission to use defaults
- Expected pass/fail behavior

### Output

- Copyable CI workflow
- CLI command
- Threshold explanation
- Sample pass/fail report
- Integration notes

### Suggested Price

- Fiverr CI gig Basic: USD 100
- Standard customization: USD 220
- Premium with verification docs: USD 450

### Delivery Time

2-7 days.

## Pack 4: Lightweight Automation Script

### Positioning

A small Node.js automation script for repetitive AI workflow tasks.

### Buyer Problem

The buyer manually moves data between files, prompts, logs, reports, or APIs.

### Input

- One clear input example
- One clear output example
- Constraints such as local-only, no API, or API allowed
- Success criteria

### Output

- Node.js script or CLI
- README usage instructions
- Example input/output
- Basic smoke test or manual verification notes

### Suggested Price

- Basic: USD 120
- Standard: USD 250
- Premium: USD 500

### Delivery Time

2-7 days.

## Fast Qualification Rules

Accept when:

- The buyer can provide redacted logs or a public/minimal reproduction.
- The scope is one workflow, one script, one report, or one CI gate.
- The work can be verified locally or with safe sample data.

Rescope when:

- The buyer asks to fix a whole product.
- The buyer cannot describe expected output.
- The buyer requires paid API usage but provides no test quota.

Reject when:

- The buyer asks for passwords, API keys, tokens, spam, scraping abuse, malware, or payment outside the platform.
- The buyer requires private repo access without explicit approval.
- The buyer only sends an external link before a real order exists.

## Default Buyer Message

```text
Thanks. I can help if we keep the scope clear and safe. Please send:

1. The workflow goal
2. A redacted sample log or input file
3. The expected output
4. The exact error or suspicious behavior
5. Whether you need a report only, a scoped fix plan, or a small code/CI change

Please remove passwords, API keys, tokens, and private customer data before sending.
```
