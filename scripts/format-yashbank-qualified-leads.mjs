import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const sourcePath = "C:/Users/33065/Desktop/leads_10_qualified_JARVIS.xlsx";
const repoRoot = path.resolve(import.meta.dirname, "..");
const outDir = path.join(repoRoot, "ops", "48h", "deliverables");
await fs.mkdir(outDir, { recursive: true });

const input = await FileBlob.load(sourcePath);
const sourceWb = await SpreadsheetFile.importXlsx(input);
const inspect = await sourceWb.inspect({
  kind: "table",
  sheetId: "10条合格线索",
  range: "A1:I11",
  tableMaxRows: 11,
  tableMaxCols: 9,
  tableMaxCellChars: 240,
  maxChars: 20000,
});

const match = inspect.ndjson.match(/"values":(\[\[.*?\]\])/s);
if (!match) throw new Error("Could not read source lead table values.");
const sourceRows = JSON.parse(match[1]);
const dataRows = sourceRows.slice(1);

const headers = [
  "Company Name",
  "Contact Details",
  "Country",
  "Website",
  "Problem Noticed",
  "Why This Fits My Services",
  "Priority Score",
  "Verification Source",
  "Lead Type",
  "Recommended First Message Angle",
];

const leadTypeMap = (value) => {
  const raw = String(value || "");
  if (raw.includes("招聘")) return "Hiring / active budget signal";
  if (raw.includes("分包")) return "White-label / subcontract partner";
  return raw.replace(/[^\x20-\x7E]/g, "").trim() || "Qualified public-source lead";
};

const messageAngle = (company, type, problem) => {
  if (type.toLowerCase().includes("hiring")) {
    return `Mention the public hiring signal and offer a small outsourced workflow or CRM dashboard prototype as a faster alternative to waiting for a full-time hire.`;
  }
  if (type.toLowerCase().includes("white-label")) {
    return `Position as white-label delivery support for CRM dashboards, landing pages, workflow automation, and overflow implementation work.`;
  }
  return `Reference the public problem signal and offer a small, low-risk diagnostic or prototype.`;
};

const formattedRows = dataRows.map((row) => {
  const [
    company,
    email,
    country,
    website,
    problem,
    fit,
    priority,
    source,
    type,
  ] = row;
  const cleanType = leadTypeMap(type);
  return [
    company,
    email,
    country,
    website,
    problem,
    fit,
    Number(priority) || priority,
    source,
    cleanType,
    messageAngle(company, cleanType, problem),
  ];
});

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Qualified Leads");
sheet.getRange("A1:J1").values = [headers];
sheet.getRangeByIndexes(1, 0, formattedRows.length, headers.length).values = formattedRows;

sheet.getRange("A1:J1").format = {
  fill: "#111827",
  font: { bold: true, color: "#FFFFFF" },
  wrapText: true,
  horizontalAlignment: "center",
  verticalAlignment: "middle",
};
sheet.getRange("A2:J11").format = {
  wrapText: true,
  verticalAlignment: "top",
};
sheet.getRange("A:A").format.columnWidthPx = 150;
sheet.getRange("B:B").format.columnWidthPx = 240;
sheet.getRange("C:C").format.columnWidthPx = 125;
sheet.getRange("D:D").format.columnWidthPx = 220;
sheet.getRange("E:F").format.columnWidthPx = 310;
sheet.getRange("G:G").format.columnWidthPx = 95;
sheet.getRange("H:H").format.columnWidthPx = 310;
sheet.getRange("I:I").format.columnWidthPx = 190;
sheet.getRange("J:J").format.columnWidthPx = 330;
sheet.getRange("G2:G11").format.numberFormat = "0";
sheet.getRange("A1:J11").format.autofitRows();
sheet.freezePanes.freezeRows(1);
sheet.tables.add("A1:J11", true, "QualifiedLeads").style = "TableStyleMedium4";

const notes = workbook.worksheets.add("Source Notes");
notes.getRange("A1:B10").values = [
  ["Purpose", "Trial lead sample reformatted for buyer review. Contact details are visible in column B."],
  ["Buyer requirement", "Company name, contact details, country, website, problem noticed, why the service fits, and public verification source."],
  ["Services matched", "CRM dashboards, web tools, premium websites, landing pages, portfolio websites, maintenance, cloud setup, AI/workflow builds."],
  ["Source policy", "Public-source only. No private scraping, no login-only sources, no paid data tools, no credentials, no off-platform payment/contact."],
  ["Contact policy", "Use only public business contact emails, company contact forms, or official public pages."],
  ["Lead mix", "Hiring/budget-signal leads plus white-label/subcontract partner leads."],
  ["Risk note", "Before paid batch delivery, verify each email/source is still live because public pages can change."],
  ["Revenue status", "Sample only. Not a paid order, not an award, not confirmed revenue."],
  ["Prepared from", sourcePath],
  ["Prepared on", "2026-05-22"],
];
notes.getRange("A1:B10").format = { wrapText: true, verticalAlignment: "top" };
notes.getRange("A:A").format = { font: { bold: true }, fill: "#DBEAFE" };
notes.getRange("A:A").format.columnWidthPx = 180;
notes.getRange("B:B").format.columnWidthPx = 720;
notes.getRange("A1:B10").format.autofitRows();

const preview = await workbook.render({
  sheetName: "Qualified Leads",
  range: "A1:J11",
  scale: 1,
  format: "png",
});
await fs.writeFile(
  path.join(outDir, "leads_10_qualified_yashbank_formatted_preview.png"),
  new Uint8Array(await preview.arrayBuffer()),
);

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "formula error scan",
});
console.log(errors.ndjson || "no formula errors");

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
const outPath = path.join(outDir, "leads_10_qualified_yashbank_formatted.xlsx");
await xlsx.save(outPath);
console.log(outPath);
