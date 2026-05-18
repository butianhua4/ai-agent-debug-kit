const fs = require("node:fs");
const path = require("node:path");
const zlib = require("node:zlib");

const root = path.resolve(__dirname, "..");
const dist = path.join(root, "dist");
const packageDir = path.join(dist, "ai-agent-debug-kit");
const zipPath = path.join(dist, "ai-agent-debug-kit.zip");
const CRC_TABLE = Array.from({ length: 256 }, (_, index) => {
  let value = index;
  for (let bit = 0; bit < 8; bit += 1) {
    value = value & 1 ? 0xedb88320 ^ (value >>> 1) : value >>> 1;
  }
  return value >>> 0;
});

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
const packageJson = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));

fs.rmSync(dist, { recursive: true, force: true });
fs.mkdirSync(packageDir, { recursive: true });

for (const file of files) {
  const source = path.join(root, file);
  const target = path.join(packageDir, file);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.copyFileSync(source, target);
}

copyDirectory(path.join(root, "extension"), path.join(packageDir, "extension"));
fs.copyFileSync(path.join(root, "core.js"), path.join(packageDir, "extension", "core.js"));
fs.copyFileSync(path.join(root, "assets", "icon.svg"), path.join(packageDir, "extension", "icon.svg"));

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

fs.writeFileSync(
  path.join(packageDir, "PACKAGE_MANIFEST.json"),
  `${JSON.stringify({
    name: packageJson.name,
    version: packageJson.version,
    builtAt: new Date().toISOString(),
    homepage: "https://butianhua4.github.io/ai-agent-debug-kit/",
    repository: "https://github.com/butianhua4/ai-agent-debug-kit",
    files: listFiles(packageDir).map((filePath) => path.relative(packageDir, filePath).replaceAll(path.sep, "/")).sort()
  }, null, 2)}\n`
);

createZipFromDirectory(packageDir, zipPath);

console.log(`Release package ready: ${packageDir}`);
if (fs.existsSync(zipPath)) {
  console.log(`Release zip ready: ${zipPath}`);
}

function copyDirectory(source, target) {
  fs.mkdirSync(target, { recursive: true });
  for (const entry of fs.readdirSync(source, { withFileTypes: true })) {
    const sourcePath = path.join(source, entry.name);
    const targetPath = path.join(target, entry.name);
    if (entry.isDirectory()) {
      copyDirectory(sourcePath, targetPath);
    } else {
      fs.copyFileSync(sourcePath, targetPath);
    }
  }
}

function createZipFromDirectory(sourceDir, targetZip) {
  const entries = listFiles(sourceDir).map((filePath) => {
    const relativePath = path.relative(sourceDir, filePath).replaceAll(path.sep, "/");
    const data = fs.readFileSync(filePath);
    const compressed = zlib.deflateRawSync(data);
    const crc = crc32(data);
    return {
      relativePath,
      data,
      compressed,
      crc,
      offset: 0
    };
  });

  const localParts = [];
  let offset = 0;

  for (const entry of entries) {
    const name = Buffer.from(entry.relativePath);
    const header = Buffer.alloc(30);
    entry.offset = offset;
    header.writeUInt32LE(0x04034b50, 0);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(0, 6);
    header.writeUInt16LE(8, 8);
    header.writeUInt16LE(0, 10);
    header.writeUInt16LE(0, 12);
    header.writeUInt32LE(entry.crc, 14);
    header.writeUInt32LE(entry.compressed.length, 18);
    header.writeUInt32LE(entry.data.length, 22);
    header.writeUInt16LE(name.length, 26);
    header.writeUInt16LE(0, 28);
    localParts.push(header, name, entry.compressed);
    offset += header.length + name.length + entry.compressed.length;
  }

  const centralParts = [];
  let centralSize = 0;

  for (const entry of entries) {
    const name = Buffer.from(entry.relativePath);
    const header = Buffer.alloc(46);
    header.writeUInt32LE(0x02014b50, 0);
    header.writeUInt16LE(20, 4);
    header.writeUInt16LE(20, 6);
    header.writeUInt16LE(0, 8);
    header.writeUInt16LE(8, 10);
    header.writeUInt16LE(0, 12);
    header.writeUInt16LE(0, 14);
    header.writeUInt32LE(entry.crc, 16);
    header.writeUInt32LE(entry.compressed.length, 20);
    header.writeUInt32LE(entry.data.length, 24);
    header.writeUInt16LE(name.length, 28);
    header.writeUInt16LE(0, 30);
    header.writeUInt16LE(0, 32);
    header.writeUInt16LE(0, 34);
    header.writeUInt16LE(0, 36);
    header.writeUInt32LE(0, 38);
    header.writeUInt32LE(entry.offset, 42);
    centralParts.push(header, name);
    centralSize += header.length + name.length;
  }

  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(0, 4);
  end.writeUInt16LE(0, 6);
  end.writeUInt16LE(entries.length, 8);
  end.writeUInt16LE(entries.length, 10);
  end.writeUInt32LE(centralSize, 12);
  end.writeUInt32LE(offset, 16);
  end.writeUInt16LE(0, 20);

  fs.writeFileSync(targetZip, Buffer.concat([...localParts, ...centralParts, end]));
}

function listFiles(directory) {
  const files = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...listFiles(entryPath));
    } else {
      files.push(entryPath);
    }
  }
  return files;
}

function crc32(buffer) {
  let crc = 0xffffffff;
  for (const byte of buffer) {
    crc = (crc >>> 8) ^ CRC_TABLE[(crc ^ byte) & 0xff];
  }
  return (crc ^ 0xffffffff) >>> 0;
}
