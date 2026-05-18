const input = document.querySelector("#logInput");
const eventsNode = document.querySelector("#events");
const toolsNode = document.querySelector("#tools");
const errorsNode = document.querySelector("#errors");
const risksNode = document.querySelector("#risks");
const loadDemo = document.querySelector("#loadDemo");

const demo = [
  { level: "info", event: "run_started", prompt_tokens: 1840 },
  { level: "info", event: "tool_call", tool: "web.search", duration_ms: 1260, output_tokens: 580 },
  { level: "warn", event: "tool_call", tool: "shell.exec", duration_ms: 4200, output_tokens: 1800 },
  { level: "error", event: "tool_result", tool: "shell.exec", message: "tests failed" }
].map((item) => JSON.stringify(item)).join("\n");

function render() {
  if (!input.value.trim()) {
    eventsNode.textContent = "0";
    toolsNode.textContent = "0";
    errorsNode.textContent = "0";
    risksNode.innerHTML = "";
    return;
  }

  const events = AgentDebugCore.parseLogs(input.value);
  const summary = AgentDebugCore.summarize(events);
  eventsNode.textContent = String(summary.count);
  toolsNode.textContent = String(summary.toolCallCount);
  errorsNode.textContent = String(summary.errorCount);
  risksNode.innerHTML = "";

  AgentDebugCore.buildRiskText(events, summary).split("\n").forEach((risk) => {
    const item = document.createElement("li");
    item.textContent = risk.replace(/^- /, "");
    risksNode.appendChild(item);
  });
}

loadDemo.addEventListener("click", () => {
  input.value = demo;
  render();
});

input.addEventListener("input", render);
render();
