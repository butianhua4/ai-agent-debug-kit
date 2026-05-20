# Client Intake Form

Use this form before accepting or scoping paid AI agent debugging, automation, or CI gate work.

The buyer can answer directly in Fiverr, GitHub Issues, Upwork, or another approved platform. Keep all communication and payment inside the platform where the order was placed.

## Short Version

```text
Please send:

1. What should the workflow do?
2. What happened instead?
3. What tool/framework produced the log?
4. A redacted sample log or input file
5. The expected output
6. Whether you need a report, fix plan, code patch, or CI gate

Please remove passwords, API keys, tokens, cookies, private customer data, and payment data before sending.
```

## Full Intake

### 1. Workflow Goal

What should the agent, script, or automation do when it succeeds?

### 2. Current Failure

What is failing?

- error message
- wrong output
- repeated loop
- tool call failure
- malformed JSON
- CI failure
- high cost
- permission problem
- other

### 3. Environment

Which tool or framework is involved?

- Claude Code
- Cursor
- LangChain
- OpenAI API
- GitHub Actions
- n8n
- Zapier
- Make
- Node.js script
- Python script
- other

### 4. Safe Sample

Send a redacted sample only.

Remove:

- API keys
- passwords
- cookies
- bearer tokens
- private customer data
- payment data
- internal URLs if they reveal secrets

### 5. Expected Output

Share one example of what the output should look like.

### 6. Deliverable Type

Choose one:

- Debug report only
- Fix plan
- Small code patch
- CI gate
- Custom script
- Custom dashboard

### 7. Success Criteria

How will we know the work is complete?

Examples:

- report identifies the top causes
- CLI command exits with the expected status
- sample log produces a clean Markdown report
- CI fails when error count is above threshold
- script converts input file into expected output

## Operator Decision Tree

### Report Only

Use the debug report gig when the buyer can send redacted logs and only needs diagnosis.

### Fix Plan

Use the standard debugging package when the buyer needs root cause and recommended changes, but no repository access is required.

### Code Patch

Only accept if:

- the code is public, or the user explicitly approves access
- the scope is one bounded bug or script
- no production credentials are required

### CI Gate

Use the CI risk gate gig when the buyer wants automated pass/fail behavior.

### Decline

Decline or rescope if the buyer requires:

- platform bypassing
- spam automation
- scraping abuse
- malware
- credential handling
- live payment or payout setup
- private repo access without approval
