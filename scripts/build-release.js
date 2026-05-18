const fs = require("node:fs");
const path = require("node:path");
const { execFileSync } = require("node:child_process");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const packageDir = path.join(dist, "ai-agent-debug-kit");
const zipPath = path.join(dist, "ai-agent-debug-kit.zip");

const files = [
  "index.html",
  "styles.css",
  "core.js",
  "script.js",
  "cli.js",
  "sample-agent-log.jsonl",
  "README.md",
  "LICENSE",
  "SECURITY.md",
  "ROADMAP.md",
  "LAUNCH.md",
  "LISTING.md"
];

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(packageDir, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  const target = path.join(packageDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

fs.writeFileSync(
  path.join(packageDir, "START_HERE.txt"),
  `AI Agent Debug Kit

Open index.html in a browser to use the web app.

Run the CLI:

  node cli.js sample-agent-log.jsonl > report.md

Demo:
  https://butianhua4.github.io/ai-agent-debug-kit/

Repository:
  https://github.com/butianhua4/ai-agent-debug-kit
`
);

try {
  execFileSync("powershell", [
    "-NoProfile",
    "-Command",
    `Compress-Archive -Path '${packageDir}\\*' -DestinationPath '${zipPath}' -Force`
  ], { stdio: "inherit" });
} catch (error) {
  console.warn("Zip creation skipped. Release folder is still ready:", packageDir);
}

console.log(`Release package ready: ${packageDir}`);
if (fs.existsSync(zipPath)) {
  console.log(`Release zip ready: ${zipPath}`);
}
