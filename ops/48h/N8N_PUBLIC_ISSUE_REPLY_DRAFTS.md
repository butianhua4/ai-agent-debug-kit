# n8n Public Issue Reply Drafts

Purpose: prepare non-spam, technically useful public replies for visible n8n webhook/API failure discussions. These are not confirmed leads or revenue. They should only be posted manually where platform/community rules allow, and only if the reply adds real diagnostic value.

Primary offer reference: https://butianhua4.github.io/ai-agent-debug-kit/rescue.html

Safety line for every reply: no passwords, API keys, tokens, OAuth approval, payment access, wallets, or private credentials.

## Draft 1 - GitLab trigger creates duplicate webhooks on startup

Source: https://github.com/n8n-io/n8n/issues/10621

Observed pain: restarting self-hosted n8n creates duplicate GitLab webhooks, causing the same event to trigger multiple executions.

Suggested public reply:

```text
This looks like a startup idempotency issue: the trigger registration path should be able to detect an existing GitLab webhook for the same project/event/target URL before creating a new one.

For anyone debugging this operationally before an upstream fix lands, I would capture:

1. n8n version and execution mode
2. workflow ID and trigger node config with secrets redacted
3. the webhook list before shutdown
4. the webhook list immediately after startup
5. whether the target URL/path changes between restarts

A safe mitigation is to add a startup/recovery checklist that compares GitLab webhook URL + event set + project scope and removes exact duplicates, but avoid deleting webhooks that differ by branch/event filters.

I do n8n/webhook failure triage from sanitized logs and screenshots only. I do not need GitLab tokens, n8n credentials, API keys, or private repo access to identify the likely failure path.
```

Recommended next question: Does the duplicate webhook have the exact same URL and event set after restart, or does n8n generate a different target path?

Suggested offer if contacted: `$499 Quick Diagnostic` from sanitized webhook lists/logs; `$1,500 Same-Day Workflow Rescue` if they need a cleanup script and validation runbook.

## Draft 2 - Public API-created webhook only works after manual save

Source: https://github.com/n8n-io/n8n/issues/14267

Observed pain: workflow created/updated through n8n public API has a production webhook that does not respond until someone opens the workflow and manually saves it.

Suggested public reply:

```text
The key thing I would isolate here is whether the API-created workflow is missing a registration/cache refresh step that the editor save path performs.

Useful safe diagnostics:

1. Create workflow via API, then immediately export the workflow JSON.
2. Open/save manually, export again, and diff the two JSON payloads.
3. Compare active state, webhook path, node IDs, trigger settings, and any generated metadata.
4. Check startup/API logs around webhook registration after activate/deactivate.
5. Confirm whether a full n8n restart after API creation registers the production webhook.

If the manual save changes no workflow JSON but fixes production routing, the likely gap is not node config; it is registration/cache lifecycle.

I can help build a reproduction checklist or repair plan from sanitized exports, redacted logs, and fake payloads only. No passwords, API keys, tokens, OAuth approvals, or n8n account access required.
```

Recommended next question: After manual save, does the exported workflow JSON differ from the API-created version?

Suggested offer if contacted: `$499 Quick Diagnostic`; `$1,500 Same-Day Workflow Rescue` if they need a reproducible workaround/repair path.

## Draft 3 - Workflow Webhook Error: Workflow could not be started

Source: https://github.com/n8n-io/n8n/issues/18268

Observed pain: n8n Cloud webhook executions fail with HTTP 500 and `Workflow Webhook Error: Workflow could not be started!`, with an Express proxy/CORS layer in front.

Suggested public reply:

```text
I would split this into two tracks: "does n8n receive the request correctly?" and "can n8n start the workflow once received?"

Safe checks that do not require sharing secrets:

1. Send the same fake payload directly to the n8n webhook URL, bypassing the Express proxy.
2. Send the fake payload through the Express proxy and compare method, path, headers, body size, and content-type.
3. Confirm whether the proxy preserves the raw JSON body and does not double-parse or stringify it.
4. Check whether the workflow starts with a minimal payload but fails with the real payload shape.
5. Inspect redacted n8n execution/error logs for queue/concurrency/startup errors.

If direct-to-n8n works but proxy-to-n8n fails, focus on proxy request forwarding. If both fail, focus on workflow activation/execution state or payload assumptions.

I do webhook/API automation rescue from sanitized logs and fake payloads only. I do not need passwords, API keys, tokens, OAuth approvals, or private credentials.
```

Recommended next question: Does a fake payload work when sent directly to the n8n webhook without the proxy?

Suggested offer if contacted: `$499 Quick Diagnostic`; `$1,500 Same-Day Workflow Rescue` if they need proxy/workflow repair and validation.

## Manual Posting Rules

- Do not DM posters automatically.
- Do not post the same reply repeatedly.
- Do not imply confirmed customer work.
- Keep the reply useful even if the reader never buys.
- If a buyer replies with screenshots/logs, ask for redacted/sanitized versions only.
