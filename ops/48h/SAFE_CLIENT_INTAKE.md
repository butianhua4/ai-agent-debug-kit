# Safe Client Intake

Use this intake form when a buyer asks for help with a broken automation. It is designed to avoid collecting secrets or sensitive credentials.

## Client intake form

1. Tool/platform used
   - n8n / Make / Zapier / Pipedream / OpenAI API / Claude API / Twilio / WhatsApp / other:

2. Expected behavior
   - What should the workflow do when it works correctly?

3. Actual behavior
   - What happens now?
   - Does it fail completely, produce wrong data, skip a step, or run too slowly?

4. Sanitized error screenshot/log
   - Attach screenshots or logs with secrets removed.
   - Remove passwords, API keys, tokens, cookies, private URLs, customer PII, and payment data.

5. Workflow structure
   - List the main trigger and major steps.
   - If possible, attach a credential-free workflow export or diagram.

6. Last time it worked
   - When did it last run correctly?
   - What changed since then? New API version, prompt change, field mapping, app update, credential refresh, webhook payload change?

7. Business impact
   - What does this failure block?
   - Revenue, customer support, lead capture, reporting, sales ops, internal operations?

8. Deadline
   - When do you need a diagnosis?
   - When do you need a fix?

9. What access they can safely provide
   - Sanitized workflow export.
   - Redacted execution logs.
   - Screenshots with secrets removed.
   - Temporary screen share controlled by the client, if platform rules allow.
   - Test payloads with fake or anonymized data.

## Do not provide

- Passwords.
- API keys.
- Tokens.
- Cookies.
- Wallet access.
- Payment access.
- KYC documents.
- Tax information.
- Private customer data.
- Production credentials.

## Safety note for reply

Please remove or blur any secret values before sending logs or screenshots. I can usually diagnose webhook, JSON mapping, API response, prompt/output, and node-routing issues from redacted evidence.

