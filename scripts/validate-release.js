const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const packageDir = path.join(root, "dist", "ai-agent-debug-kit");
const zipPath = path.join(root, "dist", "ai-agent-debug-kit.zip");
const manifestPath = path.join(packageDir, "PACKAGE_MANIFEST.json");

assert.ok(fs.existsSync(packageDir), "release package folder is missing");
assert.ok(fs.existsSync(zipPath), "release zip is missing");
assert.ok(fs.statSync(zipPath).size > 1000, "release zip is unexpectedly small");
assert.ok(fs.existsSync(manifestPath), "package manifest is missing");

const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
assert.equal(manifest.name, "ai-agent-debug-kit");
assert.equal(manifest.version, "0.5.0");
assert.ok(manifest.files.includes("index.html"));
assert.ok(manifest.files.includes("SUPPORT.md"));
assert.ok(manifest.files.includes("robots.txt"));
assert.ok(manifest.files.includes("sitemap.xml"));
assert.ok(manifest.files.includes("extension/popup.html"));
assert.ok(manifest.files.includes("extension/core.js"));
assert.ok(manifest.files.includes("assets/product-preview.svg"));
assert.ok(manifest.files.includes("docs/CLI_REFERENCE.md"));
assert.ok(manifest.files.includes("docs/CLIENT_DELIVERY_TEMPLATE.md"));
assert.ok(manifest.files.includes("docs/CLIENT_INTAKE_FORM.md"));
assert.ok(manifest.files.includes("docs/DEMO_SCRIPT.md"));
assert.ok(manifest.files.includes("docs/LAUNCH_STATUS.md"));
assert.ok(manifest.files.includes("docs/MICRO_PRODUCT_PACKS.md"));
assert.ok(manifest.files.includes("docs/PLATFORM_SETUP.md"));
assert.ok(manifest.files.includes("docs/PRODUCT_PAGE.md"));
assert.ok(manifest.files.includes("docs/SERVICE_OFFERS.md"));
assert.ok(manifest.files.includes("docs/examples/agent-risk-gate.yml"));
assert.ok(manifest.files.includes("docs/examples/sample-report.md"));
assert.ok(manifest.files.includes("docs/examples/sample-report.json"));

console.log("Release validation passed");
