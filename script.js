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
const reportTitle = document.querySelector("#reportTitle");
const pricingPreset = document.querySelector("#pricingPreset");
const inputPrice = document.querySelector("#inputPrice");
const outputPrice = document.querySelector("#outputPrice");
const redactReport = document.querySelector("#redactReport");
const timeline = document.querySelector("#timeline");
const riskFlags = document.querySelector("#riskFlags");
const toolBreakdown = document.querySelector("#toolBreakdown");
const recommendations = document.querySelector("#recommendations");
const comparePanel = document.querySelector("#comparePanel");
const comparison = document.querySelector("#comparison");
const sampleSelect = document.querySelector("#sampleSelect");
const loadSample = document.querySelector("#loadSample");
const fileInput = document.querySelector("#fileInput");
const saveSnapshot = document.querySelector("#saveSnapshot");
const exportReport = document.querySelector("#exportReport");
const historyList = document.querySelector("#historyList");
const logFields = document.querySelector(".log-fields");
const inputPane = document.querySelector(".input-pane");

let isCompareMode = false;
const HISTORY_KEY = "aiAgentDebugKit.history.v1";
const PRICING_PRESETS = {
  custom: null,
  gpt5: { input: 1.25, output: 10 },
  mini: { input: 0.25, output: 2 },
  local: { input: 0, output: 0 }
};

const SAMPLE_SCENARIOS = {
  healthy: [
    { ts: "2026-05-18T09:10:00.000Z", level: "info", event: "run_started", model: "gpt-5", prompt_tokens: 1420 },
    { ts: "2026-05-18T09:10:03.200Z", level: "info", event: "tool_call", tool: "web.search", duration_ms: 960, input_tokens: 260, output_tokens: 420 },
    { ts: "2026-05-18T09:10:07.800Z", level: "info", event: "tool_call", tool: "shell.exec", duration_ms: 2200, command: "npm test", output_tokens: 620 },
    { ts: "2026-05-18T09:10:11.000Z", level: "info", event: "run_completed", output_tokens: 880 }
  ],
  toolFailure: [
  { ts: "2026-05-18T09:10:00.000Z", level: "info", event: "run_started", model: "gpt-5", prompt_tokens: 1840 },
  { ts: "2026-05-18T09:10:03.200Z", level: "info", event: "tool_call", tool: "web.search", duration_ms: 1260, input_tokens: 340, output_tokens: 580 },
  { ts: "2026-05-18T09:10:07.800Z", level: "warn", event: "tool_call", tool: "shell.exec", duration_ms: 4200, command: "npm test", output_tokens: 1800 },
  { ts: "2026-05-18T09:10:13.100Z", level: "error", event: "tool_result", tool: "shell.exec", duration_ms: 4200, message: "2 tests failed: parser handles empty JSONL" },
  { ts: "2026-05-18T09:10:19.000Z", level: "info", event: "tool_call", tool: "apply_patch", duration_ms: 890, files: ["src/parser.ts"] },
  { ts: "2026-05-18T09:10:23.600Z", level: "info", event: "tool_call", tool: "shell.exec", duration_ms: 3160, command: "npm test", output_tokens: 940 },
  { ts: "2026-05-18T09:10:30.000Z", level: "info", event: "run_completed", output_tokens: 1220 }
  ],
  costSpike: [
    { ts: "2026-05-18T10:00:00.000Z", level: "info", event: "run_started", model: "gpt-5", prompt_tokens: 42000 },
    { ts: "2026-05-18T10:00:12.000Z", level: "info", event: "tool_call", tool: "retrieval.search", duration_ms: 3200, input_tokens: 11800, output_tokens: 9200 },
    { ts: "2026-05-18T10:00:28.000Z", level: "warn", event: "tool_call", tool: "llm.summarize", duration_ms: 12000, message: "Large context window used twice", input_tokens: 38000, output_tokens: 14000 },
    { ts: "2026-05-18T10:00:43.000Z", level: "info", event: "run_completed", output_tokens: 8800 }
  ],
  permission: [
    { ts: "2026-05-18T11:00:00.000Z", level: "info", event: "run_started", model: "gpt-5-mini", prompt_tokens: 900 },
    { ts: "2026-05-18T11:00:04.000Z", level: "warn", event: "tool_call", tool: "github.api", duration_ms: 850, message: "Permission denied while reading repository metadata" },
    { ts: "2026-05-18T11:00:05.000Z", level: "error", event: "tool_result", tool: "github.api", message: "Unauthorized: missing repo scope" },
    { ts: "2026-05-18T11:00:09.000Z", level: "info", event: "run_completed", output_tokens: 560 }
  ]
};

const {
  parseLogs,
  summarize: summarizeEvents,
  buildRiskText,
  buildRecommendationText,
  redactSensitiveText
} = window.AgentDebugCore;

function summarize(events, pricing = getPricing()) {
  return summarizeEvents(events, pricing);
}

function getPricing() {
  return {
    input: Number(inputPrice.value || 0),
    output: Number(outputPrice.value || 0)
  };
}

function applyPricingPreset() {
  const preset = PRICING_PRESETS[pricingPreset.value];
  if (!preset) return;
  inputPrice.value = preset.input;
  outputPrice.value = preset.output;
  render();
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
  renderHistory();
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
  renderHistory();
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
  if (summary.repeatedMessages.length > 0) items.push(["warn", "Repeated messages detected. Inspect the timeline for retry loops or stuck tool calls."]);
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
  const repeatedRows = summary.repeatedMessages
    .slice(0, 10)
    .map((item) => `| ${item.count} | ${item.message} |`)
    .join("\n") || "| 0 | None |";

  const riskText = buildRiskText(events, summary);
  const recommendationText = buildRecommendationText(summary);

  const title = sanitizeReportText(reportTitle.value.trim() || "AI Agent Debug Report");

  return `# ${title}

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

## Risk Flags

${riskText}

## Repeated Patterns

| Count | Message Pattern |
| ---: | --- |
${repeatedRows}

## Recommendation

${recommendationText}

Redact secrets before sharing logs, and attach this report to the related PR, incident, or evaluation run.
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
  const report = redactReport.checked ? redactSensitiveText(buildReport()) : buildReport();
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

function sanitizeReportText(text) {
  return text.replace(/[<>]/g, "").slice(0, 120);
}

function loadHistory() {
  try {
    const parsed = JSON.parse(localStorage.getItem(HISTORY_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function saveHistory(items) {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(items.slice(0, 8)));
}

function saveCurrentSnapshot() {
  if (!logInput.value.trim()) return;
  const events = parseLogs(logInput.value);
  const summary = summarize(events);
  const items = loadHistory();
  items.unshift({
    id: crypto.randomUUID ? crypto.randomUUID() : String(Date.now()),
    createdAt: new Date().toISOString(),
    mode: isCompareMode ? "compare" : "single",
    logA: logInput.value,
    logB: compareInput.value,
    pricing: getPricing(),
    summary: {
      count: summary.count,
      toolCallCount: summary.toolCallCount,
      errorCount: summary.errorCount,
      estimatedCost: summary.estimatedCost
    }
  });
  saveHistory(items);
  renderHistory();
}

function renderHistory() {
  const items = loadHistory();
  historyList.innerHTML = "";
  if (items.length === 0) {
    historyList.innerHTML = '<p class="empty">No saved snapshots yet.</p>';
    return;
  }

  for (const item of items) {
    const wrapper = document.createElement("div");
    wrapper.className = "history-item";
    const date = new Date(item.createdAt).toLocaleString();
    wrapper.innerHTML = `<div><strong>${escapeHtml(date)}</strong><span>${item.mode} · ${item.summary.count} events · ${item.summary.errorCount} errors · $${Number(item.summary.estimatedCost).toFixed(4)}</span></div>`;

    const actions = document.createElement("div");
    actions.className = "history-actions";
    const restore = document.createElement("button");
    restore.type = "button";
    restore.textContent = "Restore";
    restore.addEventListener("click", () => restoreSnapshot(item.id));
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Delete";
    remove.addEventListener("click", () => deleteSnapshot(item.id));
    actions.append(restore, remove);
    wrapper.appendChild(actions);
    historyList.appendChild(wrapper);
  }
}

function restoreSnapshot(id) {
  const item = loadHistory().find((entry) => entry.id === id);
  if (!item) return;
  logInput.value = item.logA || "";
  compareInput.value = item.logB || "";
  inputPrice.value = item.pricing?.input ?? inputPrice.value;
  outputPrice.value = item.pricing?.output ?? outputPrice.value;
  pricingPreset.value = "custom";
  setMode(item.mode === "compare");
}

function deleteSnapshot(id) {
  saveHistory(loadHistory().filter((entry) => entry.id !== id));
  renderHistory();
}

async function importFile(file) {
  if (!file) return;
  logInput.value = await file.text();
  render();
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
  const sample = SAMPLE_SCENARIOS[sampleSelect.value] || SAMPLE_SCENARIOS.healthy;
  const sampleLog = sample.map((item) => JSON.stringify(item)).join("\n");
  logInput.value = sampleLog;
  if (isCompareMode) {
    compareInput.value = sampleLog.replace('"level":"error"', '"level":"info"').replace('"output_tokens":1800', '"output_tokens":800');
  }
  render();
});

saveSnapshot.addEventListener("click", saveCurrentSnapshot);
exportReport.addEventListener("click", downloadReport);
fileInput.addEventListener("change", () => importFile(fileInput.files[0]));
logInput.addEventListener("input", render);
compareInput.addEventListener("input", render);
inputPrice.addEventListener("input", render);
outputPrice.addEventListener("input", render);
pricingPreset.addEventListener("change", applyPricingPreset);
reportTitle.addEventListener("input", render);
singleMode.addEventListener("click", () => setMode(false));
compareMode.addEventListener("click", () => setMode(true));
inputPane.addEventListener("dragover", (event) => {
  event.preventDefault();
  inputPane.classList.add("drag-over");
});
inputPane.addEventListener("dragleave", () => {
  inputPane.classList.remove("drag-over");
});
inputPane.addEventListener("drop", (event) => {
  event.preventDefault();
  inputPane.classList.remove("drag-over");
  importFile(event.dataTransfer.files[0]);
});

function setMode(nextCompareMode) {
  isCompareMode = nextCompareMode;
  singleMode.classList.toggle("active", !isCompareMode);
  compareMode.classList.toggle("active", isCompareMode);
  compareField.classList.toggle("hidden", !isCompareMode);
  logFields.classList.toggle("compare", isCompareMode);
  render();
}

render();
