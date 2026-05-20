# Portfolio Case: Automation Failure Rescue

This is a sample demo case for the n8n / Make / Zapier Automation Failure Rescue offer. It is not a private client claim.

## Scenario

A lead-capture automation receives a webhook payload, enriches the lead with an AI step, and sends the result into a CRM. The workflow began failing after a form update changed the payload shape.

## Buyer Symptom

The buyer sees this kind of issue:

- The workflow still triggers.
- The CRM step fails.
- Some leads are skipped.
- Retrying the workflow creates duplicate messages.
- The buyer is not sure whether the problem is webhook data, JSON mapping, or the AI step.

## Before

The broken payload:

```json
{
  "event": "lead.created",
  "lead": {
    "name": "Alex Demo",
    "email": "alex@example.com",
    "company": {
      "name": "Demo Co"
    }
  },
  "metadata": {
    "source": "landing-page"
  }
}
```

The workflow still maps the old field:

```text
email = {{$json["email"]}}
company = {{$json["company"]}}
```

Result:

```text
CRM request failed: missing required field email
Retry count: 3
Duplicate notification risk: high
```

## Diagnosis

The form changed from flat fields to nested fields:

- Old email path: `email`
- New email path: `lead.email`
- Old company path: `company`
- New company path: `lead.company.name`

The workflow trigger is healthy. The failure is in the JSON mapping before the CRM step.

## After

Corrected field mapping:

```text
email = {{$json["lead"]["email"]}}
company = {{$json["lead"]["company"]["name"]}}
source = {{$json["metadata"]["source"]}}
```

Safe retry plan:

1. Disable automatic retries while testing.
2. Run one redacted sample payload.
3. Confirm CRM receives `email`, `company`, and `source`.
4. Re-enable retries only after duplicate notification settings are checked.
5. Add a guard condition: stop if `lead.email` is empty.

## Deliverable Shape

The buyer receives:

- A failure map.
- The exact broken field mapping.
- The corrected mapping.
- Duplicate-send risk notes.
- A safe test plan.
- A handoff report that can be given to an operator or developer.

## Why This Sells

This demo shows the service outcome in plain buyer language: fewer failed leads, fewer duplicate sends, and a clear repair path without asking for passwords or API secrets.

