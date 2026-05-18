const assert = require("node:assert");
const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const extensionDir = path.join(root, "extension");
const manifestPath = path.join(extensionDir, "manifest.json");
const manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));

assert.equal(manifest.manifest_version, 3, "extension must use Manifest V3");
assert.equal(manifest.name, "AI Agent Debug Kit");
assert.equal(manifest.action.default_popup, "popup.html");
assert.equal(manifest.action.default_icon, "icon.svg");
assert.deepEqual(manifest.permissions, [], "extension should not request permissions yet");

[
  "popup.html",
  "popup.css",
  "popup.js",
  "icon.svg"
].forEach((file) => {
  assert.ok(fs.existsSync(path.join(extensionDir, file)), `missing extension/${file}`);
});

const popupHtml = fs.readFileSync(path.join(extensionDir, "popup.html"), "utf8");
assert.match(popupHtml, /core\.js/, "popup must load core.js from packaged extension folder");
assert.doesNotMatch(popupHtml, /\.\.\//, "popup must not reference files outside extension package");

console.log("Extension validation passed");
