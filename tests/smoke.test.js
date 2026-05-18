const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { generateReport, run } = require("../cli");
const { parseLogs, summarize } = require("../core");

const root = path.resolve(__dirname, "..");
const sample = fs.readFileSync(path.join(root, "sample-agent-log.jsonl"), "utf8");

const report = generateReport(sample, { source: "sample-agent-log.jsonl" });

assert.match(report, /AI Agent Debug Report/);
assert.match(report, /Total events: 7/);
assert.match(report, /Tool calls: 5/);
assert.match(report, /Errors: 1/);
assert.match(report, /shell\.exec/);

const arrayEvents = parseLogs('[{"level":"info","event":"run_started"},{"level":"warn","message":"retry timeout","tool":"search"}]');
const arraySummary = summarize(arrayEvents, { input: 0, output: 0 });
assert.equal(arraySummary.count, 2);
assert.equal(arraySummary.warningCount, 1);
assert.equal(arraySummary.toolCallCount, 1);

const prettyJsonEvents = parseLogs(`{
  "events": [
    { "level": "info", "event": "run_started" },
    { "level": "error", "tool": "browser", "message": "page failed" }
  ]
}`);
const prettySummary = summarize(prettyJsonEvents, { input: 0, output: 0 });
assert.equal(prettySummary.count, 2);
assert.equal(prettySummary.errorCount, 1);
assert.equal(prettySummary.toolCallCount, 1);

const plainEvents = parseLogs("tool=shell npm test failed after 4.2s\nwarning: retry timeout from browser");
const plainSummary = summarize(plainEvents, { input: 0, output: 0 });
assert.equal(plainSummary.count, 2);
assert.equal(plainSummary.errorCount, 1);
assert.equal(plainSummary.warningCount, 1);
assert.equal(plainSummary.toolCallCount, 2);
assert.equal(plainEvents[0].durationMs, 4200);

const secretLog = '{"level":"error","event":"tool_result","message":"token: abcdefghijklmnop user test@example.com sk-testsecret123456"}\n';
const redacted = generateReport(secretLog, { source: "secret.jsonl" });

assert.doesNotMatch(redacted, /abcdefghijklmnop/);
assert.doesNotMatch(redacted, /test@example\.com/);
assert.doesNotMatch(redacted, /sk-testsecret123456/);
assert.match(redacted, /\[REDACTED\]/);
assert.match(redacted, /\[REDACTED_EMAIL\]/);
assert.match(redacted, /\[REDACTED_API_KEY\]/);

const unredacted = generateReport(secretLog, { source: "secret.jsonl", redact: false });

assert.match(unredacted, /abcdefghijklmnop/);
assert.match(unredacted, /test@example\.com/);

const jsonReport = JSON.parse(generateReport(sample, { source: "sample-agent-log.jsonl", json: true }));
assert.equal(jsonReport.summary.totalEvents, 7);
assert.equal(jsonReport.summary.toolCalls, 5);
assert.equal(jsonReport.summary.errors, 1);
assert.ok(jsonReport.tools.some((tool) => tool.name === "shell.exec"));

const originalStdoutWrite = process.stdout.write;
const originalStderrWrite = process.stderr.write;
process.stdout.write = () => true;
process.stderr.write = () => true;
try {
  assert.equal(run(["sample-agent-log.jsonl", "--max-errors", "1"]), 0);
  assert.equal(run(["sample-agent-log.jsonl", "--max-errors", "0"]), 2);
} finally {
  process.stdout.write = originalStdoutWrite;
  process.stderr.write = originalStderrWrite;
}

console.log("Smoke tests passed");
