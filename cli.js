#!/usr/bin/env node

const fs = require("node:fs");
const path = require("node:path");

const args = process.argv.slice(2);

if (args.includes("--help") || args.length === 0) {
  printHelp();
  process.exit(0);
}

const fileArg = args.find((arg) => !arg.startsWith("--"));
const inputPrice = readNumberFlag("--input-price", 1.25);
const outputPrice = readNumberFlag("--output-price", 10);
const redact = !args.includes("--no-redact");

if (!fileArg) {
  console.error("Missing log file path.");
  printHelp();
  process.exit(1);
}

const filePath = path.resolve(process.cwd(), fileArg);
const raw = fs.readFileSync(filePath, "utf8");
const events = parseLogs(raw);
const summary = summarize(events, { input: inputPrice, output: outputPrice });
const report = buildReport(events, summary, filePath);

process.stdout.write(redact ? redactSensitiveText(report) : report);

function printHelp() {
  process.stdout.write(`AI Agent Debug Kit CLI

Usage:
  node cli.js <log-file> [--input-price 1.25] [--output-price 10] [--no-redact]

Example:
  node cli.js sample-agent-log.jsonl > report.md
`);
}

function readNumberFlag(name, fallback) {
  const index = args.indexOf(name);
  if (index === -1) return fallback;
  const value = Number(args[index + 1]);
  return Number.isFinite(value) ? value : fallback;
}

function parseLogs(raw) {
  const lines = raw.split(/\r?\n/).filter((line) => line.trim().length > 0);
  const events = [];

  for (const line of lines) {
    const trimmed = line.trim();
    try {
      const parsed = JSON.parse(trimmed);
      if (Array.isArray(parsed)) {
        parsed.forEach((entry) => events.push(normalizeEvent(entry, trimmed)));
      } else {
        events.push(normalizeEvent(parsed, trimmed));
      }
    } catch {
      events.push(normalizePlainText(trimmed));
    }
  }

  return events;
}

function normalizeEvent(entry, raw) {
  const message = entry.message || entry.msg || entry.content || entry.error || "";
  const level = (entry.level || entry.severity || inferLevel(message)).toLowerCase();
  const tool = entry.tool || entry.tool_name || entry.name || inferTool(message);
  const inputTokens = Number(entry.input_tokens || entry.prompt_tokens || 0);
  const outputTokens = Number(entry.output_tokens || entry.completion_tokens || 0);

  return {
    raw,
    level,
    event: entry.event || entry.type || (tool ? "tool_call" : "log"),
    tool,
    durationMs: Number(entry.duration_ms || entry.latency_ms || entry.elapsed_ms || 0),
    message: String(message || entry.command || entry.event || entry.type || "event"),
    inputTokens,
    outputTokens
  };
}

function normalizePlainText(line) {
  return {
    raw: line,
    level: inferLevel(line),
    event: inferTool(line) ? "tool_call" : "log",
    tool: inferTool(line),
    durationMs: inferDuration(line),
    message: line,
    inputTokens: 0,
    outputTokens: 0
  };
}

function inferLevel(text) {
  const lower = String(text).toLowerCase();
  if (/(error|failed|exception|traceback|fatal)/.test(lower)) return "error";
  if (/(warn|retry|timeout|rate limit|permission)/.test(lower)) return "warn";
  return "info";
}

function inferTool(text) {
  const lower = String(text).toLowerCase();
  const match = lower.match(/tool[:=]\s*([a-z0-9_.-]+)/);
  if (match) return match[1];
  if (lower.includes("shell") || lower.includes("npm ") || lower.includes("pytest")) return "shell";
  if (lower.includes("browser") || lower.includes("page.goto")) return "browser";
  if (lower.includes("patch") || lower.includes("diff")) return "patch";
  if (lower.includes("search")) return "search";
  return "";
}

function inferDuration(text) {
  const match = String(text).match(/(\d+(?:\.\d+)?)\s*(ms|s)\b/i);
  if (!match) return 0;
  const value = Number(match[1]);
  return match[2].toLowerCase() === "s" ? value * 1000 : value;
}

function summarize(events, pricing) {
  const tools = new Map();
  let errorCount = 0;
  let warningCount = 0;
  let inputTokens = 0;
  let outputTokens = 0;

  for (const event of events) {
    if (event.level === "error") errorCount += 1;
    if (event.level === "warn") warningCount += 1;
    inputTokens += event.inputTokens;
    outputTokens += event.outputTokens;

    if (event.tool) {
      const current = tools.get(event.tool) || { count: 0, durationMs: 0, errors: 0 };
      current.count += 1;
      current.durationMs += event.durationMs;
      if (event.level === "error") current.errors += 1;
      tools.set(event.tool, current);
    }
  }

  return {
    count: events.length,
    toolCallCount: Array.from(tools.values()).reduce((sum, item) => sum + item.count, 0),
    errorCount,
    warningCount,
    inputTokens,
    outputTokens,
    estimatedCost: (inputTokens / 1_000_000) * pricing.input + (outputTokens / 1_000_000) * pricing.output,
    tools
  };
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

function buildRiskText(events, summary) {
  const flags = [];
  if (summary.errorCount > 0) flags.push(`- ${summary.errorCount} error event(s) need review before shipping.`);
  if (summary.warningCount > 0) flags.push(`- ${summary.warningCount} warning event(s) may indicate retries, limits, or flaky tools.`);
  if (summary.estimatedCost > 0.1) flags.push("- Token cost is high for a single run. Consider caching or shorter context.");
  if (events.some((event) => /password|secret|api[_-]?key|token/i.test(event.raw))) flags.push("- Potential secret detected in logs. Redact before sharing.");
  if (events.some((event) => /permission|denied|unauthorized/i.test(event.raw))) flags.push("- Permission-related text detected. Check auth and sandbox boundaries.");
  return flags.join("\n") || "- No obvious risk flags detected.";
}

function buildRecommendationText(summary) {
  if (summary.errorCount > 0) return "Start with the first failing tool result; later failures may be downstream noise.";
  if (summary.toolCallCount > 6) return "Long tool chains are harder to debug. Add checkpoints after state-changing calls.";
  if (summary.inputTokens > 8000) return "Trim repeated context and move stable instructions into a reusable config.";
  if (summary.toolCallCount === 0) return "No tool calls detected. Use structured JSONL logs for better diagnostics.";
  return "Run shape looks healthy. Export this report and attach it to the related work item.";
}

function redactSensitiveText(text) {
  return text
    .replace(/(api[_-]?key|token|secret|password)(\s*[:=]\s*["']?)([a-z0-9._\-]{8,})/gi, "$1$2[REDACTED]")
    .replace(/(sk-[a-zA-Z0-9_\-]{12,})/g, "[REDACTED_API_KEY]")
    .replace(/([a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+)/g, "[REDACTED_EMAIL]");
}
