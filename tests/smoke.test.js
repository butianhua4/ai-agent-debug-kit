const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");
const { generateReport } = require("../cli");
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

console.log("Smoke tests passed");
