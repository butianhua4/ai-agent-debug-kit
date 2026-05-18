#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");
const {
  parseLogs,
  summarize,
  buildRiskText,
  buildRecommendationText,
  redactSensitiveText
} = require("./core");

if (require.main === module) {
  process.exitCode = run(process.argv.slice(2));
}

function run(args) {
  if (args.includes("--help") || args.length === 0) {
    printHelp();
    return 0;
  }

  const fileArg = args.find((arg) => !arg.startsWith("--"));
  const inputPrice = readNumberFlag(args, "--input-price", 1.25);
  const outputPrice = readNumberFlag(args, "--output-price", 10);
  const maxErrors = readNumberFlag(args, "--max-errors", null);
  const redact = !args.includes("--no-redact");
  const json = args.includes("--json");

  if (!fileArg) {
    console.error("Missing log file path.");
    printHelp();
    return 1;
  }

  const filePath = path.resolve(process.cwd(), fileArg);
  const raw = fs.readFileSync(filePath, "utf8");
  const report = generateReport(raw, {
    source: filePath,
    pricing: { input: inputPrice, output: outputPrice },
    redact,
    json
  });

  process.stdout.write(report);
  if (maxErrors !== null) {
    const { summary } = analyze(raw, { input: inputPrice, output: outputPrice });
    return summary.errorCount > maxErrors ? 2 : 0;
  }
  return 0;
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
  node cli.js <log-file> [--input-price 1.25] [--output-price 10] [--max-errors 0] [--no-redact] [--json]

Example:
  node cli.js sample-agent-log.jsonl > report.md
`);
}

function readNumberFlag(args, name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  const value = Number(args[index + 1]);
  return Number.isFinite(value) ? value : fallback;
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
    riskFlags: buildRiskText(events, summary).split("\n").map((line) => line.replace(/^- /, "")),
    recommendation: buildRecommendationText(summary)
  };
}

module.exports = {
  analyze,
  generateReport,
  run,
  buildJsonReport
};
