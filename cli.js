#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const {
  parseLogs,
  summarize,
  buildRiskText,
  buildRecommendationText,
  redactSensitiveText,
  collectRiskFlags
} = require("./core");

if (require.main === module) {
  process.exitCode = run(process.argv.slice(2));
}

function run(args) {
  if (args.includes("--help")) {
    printHelp();
    return 0;
  }

  const fileArg = args.find((arg) => !arg.startsWith("--"));
  const inputPrice = readNumberFlag(args, "--input-price", 1.25);
  const outputPrice = readNumberFlag(args, "--output-price", 10);
  const maxErrors = readNumberFlag(args, "--max-errors", null);
  const maxWarnings = readNumberFlag(args, "--max-warnings", null);
  const failOnRisk = readValueFlag(args, "--fail-on-risk", "");
  const redact = !args.includes("--no-redact");
  const json = args.includes("--json");

  const source = fileArg || "stdin";
  const raw = readInput(fileArg);
  const report = generateReport(raw, {
    source: fileArg ? path.resolve(process.cwd(), fileArg) : source,
    pricing: { input: inputPrice, output: outputPrice },
    redact,
    json
  });

  process.stdout.write(report);
  if (maxErrors !== null || maxWarnings !== null || failOnRisk) {
    const { summary } = analyze(raw, { input: inputPrice, output: outputPrice });
    if (maxErrors !== null && summary.errorCount > maxErrors) {
      process.stderr.write(`agent-debug-kit: error threshold exceeded (${summary.errorCount} > ${maxErrors})\n`);
      return 2;
    }
    if (maxWarnings !== null && summary.warningCount > maxWarnings) {
      process.stderr.write(`agent-debug-kit: warning threshold exceeded (${summary.warningCount} > ${maxWarnings})\n`);
      return 3;
    }
    const failedRisks = matchRiskFailures(raw, summary, failOnRisk);
    if (failedRisks.length > 0) {
      process.stderr.write(`agent-debug-kit: risk gate failed (${failedRisks.map((flag) => flag.id).join(", ")})\n`);
      return 4;
    }
  }
  return 0;
}

function readInput(fileArg) {
  if (fileArg) {
    return fs.readFileSync(path.resolve(process.cwd(), fileArg), "utf8");
  }

  try {
    return fs.readFileSync(0, "utf8");
  } catch {
    return "";
  }
}

function analyze(raw, pricing = { input: 1.25, output: 10 }) {
  const events = parseLogs(raw);
  const summary = summarize(events, pricing);
  return { events, summary };
}

function generateReport(raw, options = {}) {
  const { events, summary } = analyze(raw, options.pricing || { input: 1.25, output: 10 });
  if (options.json) {
    return `${JSON.stringify(buildJsonReport(events, summary, options.source || "stdin"), null, 2)}\n`;
  }
  const report = buildReport(events, summary, options.source || "stdin");
  return options.redact === false ? report : redactSensitiveText(report);
}

function printHelp() {
  process.stdout.write(`AI Agent Debug Kit CLI

Usage:
  node cli.js [log-file] [--input-price 1.25] [--output-price 10] [--max-errors 0] [--max-warnings 0] [--fail-on-risk all] [--no-redact] [--json]

Example:
  node cli.js sample-agent-log.jsonl > report.md
  node cli.js sample-agent-log.jsonl --fail-on-risk secrets,permission
  type sample-agent-log.jsonl | node cli.js --json
`);
}

function readNumberFlag(args, name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  const value = Number(args[index + 1]);
  return Number.isFinite(value) ? value : fallback;
}

function readValueFlag(args, name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  return args[index + 1] && !args[index + 1].startsWith("--") ? args[index + 1] : "all";
}

function matchRiskFailures(raw, summary, riskList) {
  if (!riskList) return [];
  const requested = new Set(String(riskList).split(",").map((item) => item.trim().toLowerCase()).filter(Boolean));
  if (requested.size === 0) return [];

  const flags = collectRiskFlags(parseLogs(raw), summary);
  if (requested.has("all")) return flags;
  return flags.filter((flag) => requested.has(flag.id));
}

function buildReport(events, summary, source) {
  const toolRows = Array.from(summary.tools.entries())
    .map(([name, data]) => `| ${name} | ${data.count} | ${data.errors} | ${(data.durationMs / 1000).toFixed(2)}s |`)
    .join("\n") || "| None | 0 | 0 | 0s |";

  const firstErrors = events
    .filter((event) => event.level === "error")
    .slice(0, 5)
    .map((event) => `- ${event.tool || event.event}: ${event.message}`)
    .join("\n") || "- None";
  const repeatedRows = summary.repeatedMessages
    .slice(0, 10)
    .map((item) => `| ${item.count} | ${item.message} |`)
    .join("\n") || "| 0 | None |";

  return `# AI Agent Debug Report

Generated: ${new Date().toISOString()}
Source: ${source}

## Summary

- Total events: ${summary.count}
- Tool calls: ${summary.toolCallCount}
- Errors: ${summary.errorCount}
- Warnings: ${summary.warningCount}
- Input tokens: ${summary.inputTokens}
- Output tokens: ${summary.outputTokens}
- Estimated cost: $${summary.estimatedCost.toFixed(4)}

## Tool Breakdown

| Tool | Calls | Errors | Duration |
| --- | ---: | ---: | ---: |
${toolRows}

## First Errors

${firstErrors}

## Risk Flags

${buildRiskText(events, summary)}

## Repeated Patterns

| Count | Message Pattern |
| ---: | --- |
${repeatedRows}

## Recommendation

${buildRecommendationText(summary)}
`;
}

function buildJsonReport(events, summary, source) {
  return {
    generatedAt: new Date().toISOString(),
    source,
    summary: {
      totalEvents: summary.count,
      toolCalls: summary.toolCallCount,
      errors: summary.errorCount,
      warnings: summary.warningCount,
      inputTokens: summary.inputTokens,
      outputTokens: summary.outputTokens,
      estimatedCost: Number(summary.estimatedCost.toFixed(6))
    },
    tools: Array.from(summary.tools.entries()).map(([name, data]) => ({
      name,
      calls: data.count,
      errors: data.errors,
      durationMs: data.durationMs
    })),
    repeatedMessages: summary.repeatedMessages,
    firstErrors: events
      .filter((event) => event.level === "error")
      .slice(0, 5)
      .map((event) => ({
        event: event.event,
        tool: event.tool,
        message: event.message
      })),
    riskFlags: collectRiskFlags(events, summary),
    recommendation: buildRecommendationText(summary)
  };
}

module.exports = {
  analyze,
  generateReport,
  readInput,
  run,
  matchRiskFailures,
  buildJsonReport
};
