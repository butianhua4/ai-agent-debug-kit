#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

function usage() {
  console.error("Usage: node scripts/render-aeo-report.js <report.json>");
  process.exit(1);
}

const inputPath = process.argv[2];
if (!inputPath) usage();

const resolved = path.resolve(inputPath);
const report = JSON.parse(fs.readFileSync(resolved, "utf8"));

function text(value, fallback = "") {
  if (Array.isArray(value)) return value.filter(Boolean).join(", ");
  return value === undefined || value === null || value === "" ? fallback : String(value);
}

function list(items) {
  if (!Array.isArray(items) || items.length === 0) return "- None provided";
  return items.map((item) => `- ${text(item)}`).join("\n");
}

function answerRows(items) {
  if (!Array.isArray(items) || items.length === 0) return "| Question | Answerable | Recommendation |\n| --- | --- | --- |\n";
  const rows = items.map((item) => {
    const answerable = item.answerable ? "Yes" : "No";
    return `| ${text(item.question)} | ${answerable} | ${text(item.recommendation)} |`;
  });
  return ["| Question | Answerable | Recommendation |", "| --- | --- | --- |", ...rows].join("\n");
}

function faq(items) {
  if (!Array.isArray(items) || items.length === 0) return "- None provided";
  return items.map((item, index) => {
    if (typeof item === "string") return `${index + 1}. ${item}`;
    return `${index + 1}. ${text(item.question || item.q)}\n   ${text(item.answer || item.a)}`;
  }).join("\n");
}

const page = report.page || {};
const positioning = report.current_positioning || {};
const rewrite = report.recommended_rewrite || {};
const structured = report.structured_data_suggestions || {};

const markdown = `# AEO Readiness Report

## Page

- URL: ${text(page.url)}
- Target buyer: ${text(page.target_buyer)}
- Target action: ${text(page.target_action)}
- Target keywords: ${text(page.target_keywords, "None provided")}

## Current Positioning

${text(positioning.summary, "No summary provided.")}

- Clarity score: ${text(positioning.clarity_score, "n/a")}
- Trust score: ${text(positioning.trust_score, "n/a")}
- Action score: ${text(positioning.action_score, "n/a")}

## Answer Engine Questions

${answerRows(report.answer_engine_questions)}

## Missing Signals

${list(report.missing_signals)}

## Recommended Rewrite

### One-Sentence Offer

${text(rewrite.one_sentence_offer, "Not provided.")}

### Page Title

${text(rewrite.page_title, "Not provided.")}

### Meta Description

${text(rewrite.meta_description, "Not provided.")}

### CTA

${text(rewrite.cta, "Not provided.")}

## FAQ Draft

${faq(report.faq_draft)}

## Structured Data Suggestions

- Name: ${text(structured.name)}
- Category: ${text(structured.category)}
- Description: ${text(structured.description)}
- Audience: ${text(structured.audience)}
- Offer: ${text(structured.offer)}
- Proof: ${text(structured.proof)}
- URL: ${text(structured.url)}

## Next Actions

${list(report.next_actions)}

## Scope Boundaries

${list(report.scope_boundaries)}
`;

process.stdout.write(markdown);
