const logInput = document.querySelector("#logInput");
const compareInput = document.querySelector("#compareInput");
const compareField = document.querySelector("#compareField");
const singleMode = document.querySelector("#singleMode");
const compareMode = document.querySelector("#compareMode");
const lineCount = document.querySelector("#lineCount");
const parseState = document.querySelector("#parseState");
const totalEvents = document.querySelector("#totalEvents");
const toolCalls = document.querySelector("#toolCalls");
const errors = document.querySelector("#errors");
const cost = document.querySelector("#cost");
const inputPrice = document.querySelector("#inputPrice");
const outputPrice = document.querySelector("#outputPrice");
const timeline = document.querySelector("#timeline");
const riskFlags = document.querySelector("#riskFlags");
const toolBreakdown = document.querySelector("#toolBreakdown");
const recommendations = document.querySelector("#recommendations");
const comparePanel = document.querySelector("#comparePanel");
const comparison = document.querySelector("#comparison");
const loadSample = document.querySelector("#loadSample");
const exportReport = document.querySelector("#exportReport");
const logFields = document.querySelector(".log-fields");

let isCompareMode = false;

const SAMPLE_LOG = [
  { ts: "2026-05-18T09:10:00.000Z", level: "info", event: "run_started", model: "gpt-5", prompt_tokens: 1840 },
  { ts: "2026-05-18T09:10:03.200Z", level: "info", event: "tool_call", tool: "web.search", duration_ms: 1260, input_tokens: 340, output_tokens: 580 },
  { ts: "2026-05-18T09:10:07.800Z", level: "warn", event: "tool_call", tool: "shell.exec", duration_ms: 4200, command: "npm test", output_tokens: 1800 },
  { ts: "2026-05-18T09:10:13.100Z", level: "error", event: "tool_result", tool: "shell.exec", duration_ms: 4200, message: "2 tests failed: parser handles empty JSONL" },
  { ts: "2026-05-18T09:10:19.000Z", level: "info", event: "tool_call", tool: "apply_patch", duration_ms: 890, files: ["src/parser.ts"] },
  { ts: "2026-05-18T09:10:23.600Z", level: "info", event: "tool_call", tool: "shell.exec", duration_ms: 3160, command: "npm test", output_tokens: 940 },
  { ts: "2026-05-18T09:10:30.000Z", level: "info", event: "run_completed", output_tokens: 1220 }
].map((item) => JSON.stringify(item)).join("\n");

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
  const ts = entry.ts || entry.time || entry.timestamp || entry.created_at || "";
  const inputTokens = Number(entry.input_tokens || entry.prompt_tokens || 0);
  const outputTokens = Number(entry.output_tokens || entry.completion_tokens || 0);

  return {
    raw,
    ts,
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
    ts: "",
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

function summarize(events, pricing = getPricing()) {
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
    estimatedCost: estimateCost(inputTokens, outputTokens, pricing),
    tools
  };
}

function getPricing() {
  return {
    input: Number(inputPrice.value || 0),
    output: Number(outputPrice.value || 0)
  };
}

function estimateCost(inputTokens, outputTokens, pricing) {
  return (inputTokens / 1_000_000) * pricing.input + (outputTokens / 1_000_000) * pricing.output;
}

function render() {
  const raw = logInput.value;
  const rawCompare = compareInput.value;
  const linesA = raw ? raw.split(/\r?\n/).length : 0;
  const linesB = rawCompare ? rawCompare.split(/\r?\n/).length : 0;
  lineCount.textContent = isCompareMode ? `${linesA} / ${linesB} lines` : `${linesA} line${linesA === 1 ? "" : "s"}`;

  if (!raw.trim()) {
    updateEmpty();
    return;
  }

  const events = parseLogs(raw);
  const summary = summarize(events);
  const compareEvents = isCompareMode && rawCompare.trim() ? parseLogs(rawCompare) : [];
  const compareSummary = compareEvents.length ? summarize(compareEvents) : null;
  parseState.textContent = `${events.length} parsed events`;
  totalEvents.textContent = String(summary.count);
  toolCalls.textContent = String(summary.toolCallCount);
  errors.textContent = String(summary.errorCount);
  cost.textContent = `$${summary.estimatedCost.toFixed(4)}`;

  renderTimeline(events);
  renderRisks(events, summary);
  renderTools(summary.tools);
  renderRecommendations(summary);
  renderComparison(summary, compareSummary);
}

function updateEmpty() {
  parseState.textContent = "Waiting for input";
  totalEvents.textContent = "0";
  toolCalls.textContent = "0";
  errors.textContent = "0";
  cost.textContent = "$0.0000";
  timeline.innerHTML = "";
  riskFlags.innerHTML = "";
  toolBreakdown.innerHTML = "";
  recommendations.innerHTML = "";
  comparison.innerHTML = "";
  comparePanel.classList.toggle("hidden", !isCompareMode);
}

function renderTimeline(events) {
  timeline.innerHTML = "";
  events.slice(0, 12).forEach((event) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${escapeHtml(event.event)}</b> ${escapeHtml(event.tool || event.level)} ${escapeHtml(shorten(event.message, 90))}`;
    timeline.appendChild(li);
  });
}

function renderRisks(events, summary) {
  const flags = [];
  if (summary.errorCount > 0) flags.push(["bad", `${summary.errorCount} error event(s) need review before shipping.`]);
  if (summary.warningCount > 0) flags.push(["warn", `${summary.warningCount} warning event(s) may indicate retries, limits, or flaky tools.`]);
  if (summary.estimatedCost > 0.1) flags.push(["warn", "Token cost is high for a single run. Consider caching or shorter context."]);
  if (events.some((event) => /password|secret|api[_-]?key|token/i.test(event.raw))) {
    flags.push(["bad", "Potential secret detected in logs. Redact before sharing."]);
  }
  if (events.some((event) => /permission|denied|unauthorized/i.test(event.raw))) {
    flags.push(["warn", "Permission-related text detected. Check auth and sandbox boundaries."]);
  }
  if (flags.length === 0) flags.push(["good", "No obvious risk flags detected."]);

  renderFlagList(riskFlags, flags);
}

function renderTools(tools) {
  const rows = Array.from(tools.entries()).sort((a, b) => b[1].count - a[1].count);
  toolBreakdown.innerHTML = '<div class="row header"><span>Tool</span><span>Calls</span><span>Errors</span></div>';
  if (rows.length === 0) {
    toolBreakdown.innerHTML += '<div class="row"><span>No tool calls found</span><span>0</span><span>0</span></div>';
    return;
  }
  for (const [name, data] of rows) {
    const row = document.createElement("div");
    row.className = "row";
    row.innerHTML = `<span>${escapeHtml(name)}</span><span>${data.count}</span><span>${data.errors}</span>`;
    toolBreakdown.appendChild(row);
  }
}

function renderRecommendations(summary) {
  const items = [];
  if (summary.errorCount > 0) items.push(["bad", "Start with the first failing tool result; later failures may be downstream noise."]);
  if (summary.toolCallCount > 6) items.push(["warn", "Long tool chains are harder to debug. Add checkpoints after state-changing calls."]);
  if (summary.inputTokens > 8000) items.push(["warn", "Trim repeated context and move stable instructions into a reusable config."]);
  if (summary.toolCallCount === 0) items.push(["warn", "No tool calls detected. Use structured JSONL logs for better diagnostics."]);
  if (items.length === 0) items.push(["good", "Run shape looks healthy. Export a report and attach it to the incident or PR."]);
  renderFlagList(recommendations, items);
}

function renderComparison(summaryA, summaryB) {
  comparePanel.classList.toggle("hidden", !isCompareMode);
  if (!isCompareMode) return;

  comparison.innerHTML = "";
  if (!summaryB) {
    comparison.innerHTML = '<p class="empty">Paste Run B to compare metrics.</p>';
    return;
  }

  const rows = [
    ["Events", summaryA.count, summaryB.count],
    ["Tool Calls", summaryA.toolCallCount, summaryB.toolCallCount],
    ["Errors", summaryA.errorCount, summaryB.errorCount],
    ["Input Tokens", summaryA.inputTokens, summaryB.inputTokens],
    ["Output Tokens", summaryA.outputTokens, summaryB.outputTokens],
    ["Cost", summaryA.estimatedCost, summaryB.estimatedCost, true]
  ];

  comparison.innerHTML = '<div class="compare-row header"><span>Metric</span><span>Run A</span><span>Run B</span><span>Delta</span></div>';
  for (const [label, a, b, money] of rows) {
    const delta = b - a;
    const row = document.createElement("div");
    row.className = "compare-row";
    row.innerHTML = `<span>${label}</span><span>${formatMetric(a, money)}</span><span>${formatMetric(b, money)}</span><span class="${delta > 0 ? "delta-up" : delta < 0 ? "delta-down" : ""}">${formatDelta(delta, money)}</span>`;
    comparison.appendChild(row);
  }
}

function formatMetric(value, money = false) {
  return money ? `$${Number(value).toFixed(4)}` : String(value);
}

function formatDelta(value, money = false) {
  const prefix = value > 0 ? "+" : "";
  return money ? `${prefix}$${Number(value).toFixed(4)}` : `${prefix}${value}`;
}

function renderFlagList(node, items) {
  node.innerHTML = "";
  for (const [className, text] of items) {
    const li = document.createElement("li");
    li.className = className;
    li.textContent = text;
    node.appendChild(li);
  }
}

function buildReport() {
  const events = parseLogs(logInput.value);
  const summary = summarize(events);
  const compareEvents = isCompareMode && compareInput.value.trim() ? parseLogs(compareInput.value) : [];
  const compareSummary = compareEvents.length ? summarize(compareEvents) : null;
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

## Recommendation

Review the earliest failing event, redact secrets before sharing logs, and attach this report to the related PR, incident, or evaluation run.
${compareSummary ? `
## Run Comparison

| Metric | Run A | Run B | Delta |
| --- | ---: | ---: | ---: |
| Events | ${summary.count} | ${compareSummary.count} | ${compareSummary.count - summary.count} |
| Tool Calls | ${summary.toolCallCount} | ${compareSummary.toolCallCount} | ${compareSummary.toolCallCount - summary.toolCallCount} |
| Errors | ${summary.errorCount} | ${compareSummary.errorCount} | ${compareSummary.errorCount - summary.errorCount} |
| Cost | $${summary.estimatedCost.toFixed(4)} | $${compareSummary.estimatedCost.toFixed(4)} | $${(compareSummary.estimatedCost - summary.estimatedCost).toFixed(4)} |
` : ""}
`;
}

function downloadReport() {
  const report = buildReport();
  const blob = new Blob([report], { type: "text/markdown" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "agent-debug-report.md";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function shorten(text, max) {
  const value = String(text || "");
  return value.length > max ? `${value.slice(0, max - 1)}…` : value;
}

loadSample.addEventListener("click", () => {
  logInput.value = SAMPLE_LOG;
  if (isCompareMode) {
    compareInput.value = SAMPLE_LOG.replace('"level":"error"', '"level":"info"').replace('"output_tokens":1800', '"output_tokens":800');
  }
  render();
});

exportReport.addEventListener("click", downloadReport);
logInput.addEventListener("input", render);
compareInput.addEventListener("input", render);
inputPrice.addEventListener("input", render);
outputPrice.addEventListener("input", render);
singleMode.addEventListener("click", () => setMode(false));
compareMode.addEventListener("click", () => setMode(true));

function setMode(nextCompareMode) {
  isCompareMode = nextCompareMode;
  singleMode.classList.toggle("active", !isCompareMode);
  compareMode.classList.toggle("active", isCompareMode);
  compareField.classList.toggle("hidden", !isCompareMode);
  logFields.classList.toggle("compare", isCompareMode);
  render();
}

render();
