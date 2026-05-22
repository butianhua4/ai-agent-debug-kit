import fs from "node:fs/promises";
import path from "node:path";
import { FileBlob, SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const sourcePath = "C:/Users/33065/Desktop/leads_10_qualified_JARVIS.xlsx";
const repoRoot = path.resolve(import.meta.dirname, "..");
const outDir = path.join(repoRoot, "ops", "48h", "deliverables");
await fs.mkdir(outDir, { recursive: true });

const input = await FileBlob.load(sourcePath);
const sourceWb = await SpreadsheetFile.importXlsx(input);
const sourceInspect = await sourceWb.inspect({
  kind: "table",
  sheetId: "10条合格线索",
  range: "A1:I11",
  tableMaxRows: 11,
  tableMaxCols: 9,
  tableMaxCellChars: 300,
  maxChars: 24000,
});

const valuesMatch = sourceInspect.ndjson.match(/"values":(\[\[.*?\]\])/s);
if (!valuesMatch) throw new Error("Could not parse source leads.");
const sourceValues = JSON.parse(valuesMatch[1]);
const rows = sourceValues.slice(1);

const contactPageByCompany = {
  "OnBoard": "Official site has Talk to Sales / Schedule Demo path: https://www.onboardmeetings.com/",
  "Seamless AI": "Official site lead/contact forms: https://seamless.ai/",
  "Beautiful.ai": "Official site Contact Sales path: https://www.beautiful.ai/",
  "Liatrio": "Official site contact path: https://www.liatrio.com/",
  "ScaleOps": "Public team/contact detail: https://www.scaleops.co/our-team",
  "FixOps": "Official site contact path: https://fixops.io/",
  "Prodigitas": "Agency/partner page: https://www.prodigitas.com/agencies",
  "MarkeStac": "White-label HubSpot agency page: https://www.markestac.com/white-label-hubspot-agency",
  "Meticulosity": "Agency-to-agency page: https://meticulosity.com/agencies",
  "Vested Marketing": "HubSpot partner page: https://www.vested.marketing/hubspot-partner",
};

const serviceFit = (leadType) => {
  const type = String(leadType || "");
  if (type.includes("招聘")) {
    return "CRM dashboards + AI/workflow automation + cloud/API setup";
  }
  if (type.includes("分包")) {
    return "White-label CRM dashboard, landing page, web tool, and workflow delivery support";
  }
  return "CRM dashboards, web tools, landing pages, maintenance, and workflow builds";
};

const qualityReason = (leadType) => {
  const type = String(leadType || "");
  if (type.includes("招聘")) {
    return "Public hiring signal means budget and active operational pain; pitch outsourced delivery as faster than recruiting.";
  }
  if (type.includes("分包")) {
    return "Already sells CRM/HubSpot/RevOps services, so they may buy white-label delivery capacity instead of a cold generic service.";
  }
  return "Public business signal matches the buyer's services and has a visible contact path.";
};

const firstMessage = (company, leadType) => {
  const type = String(leadType || "");
  if (type.includes("招聘")) {
    return `Reference the public GTM/RevOps automation hiring signal and offer a small CRM/workflow prototype or dashboard cleanup sprint.`;
  }
  if (type.includes("分包")) {
    return `Offer white-label support for overflow HubSpot/CRM dashboard, landing page, and workflow implementation work.`;
  }
  return `Reference the public trigger and offer a low-risk prototype tied to their current operations gap.`;
};

const typeLabel = (leadType) => {
  const type = String(leadType || "");
  if (type.includes("招聘")) return "Hiring lead with budget signal";
  if (type.includes("分包")) return "White-label / subcontract partner";
  return "Qualified public-source prospect";
};

const formatted = rows.map((row) => {
  const [company, email, country, website, problem, whyNeed, priority, sourceUrl, leadType] = row;
  const officialContact = contactPageByCompany[company] || website;
  const contactDetails = `Email: ${email}\nContact / verification path: ${officialContact}`;
  return [
    company,
    contactDetails,
    country,
    website,
    problem,
    serviceFit(leadType),
    whyNeed,
    sourceUrl,
    typeLabel(leadType),
    qualityReason(leadType),
    firstMessage(company, leadType),
    Number(priority) || priority,
  ];
});

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Buyer Ready Leads");
const headers = [
  "Company Name",
  "Contact Details - Clearly Visible",
  "Country",
  "Website",
  "Problem Noticed",
  "Yash Service Fit",
  "Why They May Need The Service",
  "Public Verification Source",
  "Lead Type",
  "Why This Is A Quality Lead",
  "Recommended First Message Angle",
  "Priority",
];

sheet.getRange("A1:L1").values = [headers];
sheet.getRangeByIndexes(1, 0, formatted.length, headers.length).values = formatted;

sheet.getRange("A1:L1").format = {
  fill: "#0F172A",
  font: { bold: true, color: "#FFFFFF" },
  wrapText: true,
  horizontalAlignment: "center",
  verticalAlignment: "middle",
};
sheet.getRange("A2:L11").format = {
  wrapText: true,
  verticalAlignment: "top",
};
sheet.getRange("A:A").format.columnWidthPx = 145;
sheet.getRange("B:B").format.columnWidthPx = 360;
sheet.getRange("C:C").format.columnWidthPx = 115;
sheet.getRange("D:D").format.columnWidthPx = 210;
sheet.getRange("E:G").format.columnWidthPx = 285;
sheet.getRange("H:H").format.columnWidthPx = 320;
sheet.getRange("I:I").format.columnWidthPx = 185;
sheet.getRange("J:K").format.columnWidthPx = 330;
sheet.getRange("L:L").format.columnWidthPx = 80;
sheet.getRange("B2:B11").format = { fill: "#FEF3C7", wrapText: true, verticalAlignment: "top" };
sheet.getRange("L2:L11").format.numberFormat = "0";
sheet.getRange("A1:L11").format.autofitRows();
sheet.freezePanes.freezeRows(1);
sheet.tables.add("A1:L11", true, "BuyerReadyLeads").style = "TableStyleMedium9";

const notes = workbook.worksheets.add("Buyer Notes");
notes.getRange("A1:B9").values = [
  ["What changed", "Contact details are now in column B and highlighted. Each row has email plus an official public contact/verification path."],
  ["Fit to buyer portfolio", "Rows are mapped to CRM dashboards, web tools, premium sites, landing pages, maintenance, cloud setup, and AI/workflow builds."],
  ["Authenticity", "Every row includes a public verification source URL and a visible contact/verification path."],
  ["Lead quality logic", "Hiring rows show budget/urgency. White-label rows show likely subcontract capacity need."],
  ["Safety", "Public-source only. No private scraping, no login-only data, no API keys, no tokens, no off-platform payment/contact."],
  ["Email caution", "Use public business emails/contact paths only; verify before outreach because public pages can change."],
  ["Not included", "No private personal emails, no scraped databases, no paid lead tools."],
  ["Revenue status", "Sample only; no award, no milestone, no payment yet."],
  ["Prepared from", sourcePath],
];
notes.getRange("A1:B9").format = { wrapText: true, verticalAlignment: "top" };
notes.getRange("A:A").format = { font: { bold: true }, fill: "#DBEAFE" };
notes.getRange("A:A").format.columnWidthPx = 170;
notes.getRange("B:B").format.columnWidthPx = 760;
notes.getRange("A1:B9").format.autofitRows();

const preview = await workbook.render({
  sheetName: "Buyer Ready Leads",
  range: "A1:L11",
  scale: 1,
  format: "png",
});
await fs.writeFile(
  path.join(outDir, "leads_10_buyer_ready_yashbank_preview.png"),
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
const outPath = path.join(outDir, "leads_10_buyer_ready_yashbank.xlsx");
await xlsx.save(outPath);
console.log(outPath);
