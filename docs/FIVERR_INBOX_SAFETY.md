# Fiverr Inbox Safety

Rules and templates for handling Fiverr buyer messages for `aibuildflow`.

## Default Rules

- Keep all communication inside Fiverr.
- Keep all payment inside Fiverr.
- Do not open external links from new or unverified buyers.
- Do not download unknown executables, archives, or browser extensions.
- Do not share email, phone, WhatsApp, Telegram, Discord, passwords, API keys, cookies, or verification codes.
- Do not accept "confirm this order" claims unless the order is visible in Fiverr Orders.
- Do not start work until the buyer either places an order or the scope is clear enough to create a Fiverr custom offer.

## High-Risk Message Patterns

Treat these as likely spam or phishing:

- "I completed, confirm this" plus an external link.
- Requests to verify an order through a non-Fiverr website.
- Requests to add WhatsApp, Telegram, Discord, Skype, or email.
- Claims that Fiverr payment failed and a different payment page must be used.
- Links with misspelled domains, file-sharing links, shortened links, or unrelated demo pages.
- Requests for login cookies, session files, wallet addresses, payment cards, or bank data.

## Safe First Reply

```text
Hi, please keep all details, files, and payments inside Fiverr. If you need this service, please place an order or send the requirements here in this chat. I cannot open external links for safety reasons.
```

## If The Buyer Sends Requirements In Chat

```text
Thanks. I can review this if we keep the scope tight and work from redacted logs or sample files. Please send the workflow goal, sample input, expected output, and the exact error message here in Fiverr. Do not send passwords, API keys, tokens, payment data, or private customer data.
```

## If The Buyer Insists On External Links

```text
For account safety and Fiverr policy, I cannot open external links or move communication outside Fiverr. Please paste the relevant non-sensitive details here or attach safe text files through Fiverr.
```

## If The Buyer Mentions Payment Outside Fiverr

```text
I can only accept orders and payments through Fiverr. Please place the order or request a custom offer here on Fiverr.
```

## When To Create A Custom Offer

Create a Fiverr custom offer only when:

- the buyer's workflow goal is clear
- the deliverable fits one of the existing packages
- no secrets or production access are required
- the buyer accepts Fiverr-only payment
- the delivery date and revision count are clear

## When To Stop And Ask The Owner

Stop before:

- accepting an order
- creating a custom offer above USD 300
- requesting or handling private repository access
- binding payout or payment methods
- entering tax, identity, banking, or legal information
- handling any sensitive personal or customer data
