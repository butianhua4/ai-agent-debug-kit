import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const repoRoot = path.resolve(import.meta.dirname, "..");
const outDir = path.join(repoRoot, "ops", "48h", "deliverables");
await fs.mkdir(outDir, { recursive: true });

const rows = [
  {
    company: "IBM WebMethods API Automation buyer",
    contact: "Freelancer project page: https://www.freelancer.com/projects/api-developmet/IBM-WebMethods-API-Automation/details",
    country: "Platform lead - verify buyer profile before bidding",
    service: "API automation, cloud setup, workflow maintenance",
    problem: "Buyer explicitly posted an API automation project around IBM WebMethods and integration work.",
    fit: "Matches Yash portfolio items around web tools, cloud setup, API/workflow builds, and maintenance.",
    budget: "Paid project signal; budget visible on Freelancer project page",
    outreach: "Lead with API/integration audit, then propose a small fixed-scope automation rescue or implementation sprint.",
    priority: 9,
    source: "Public Freelancer project post",
  },
  {
    company: "Power Automate Email Classifier Flow buyer",
    contact: "Freelancer project page: https://www.freelancer.com/projects/power-automate/Power-Automate-Email-Classifier-Flow/details",
    country: "Platform lead - verify buyer profile before bidding",
    service: "AI/workflow build, email automation, business process tool",
    problem: "Buyer needs an email classifier flow, which suggests manual inbox routing and automation gaps.",
    fit: "Direct fit for AI/workflow-related builds and internal web tools.",
    budget: "Paid project signal; automation-specific demand",
    outreach: "Offer a quick flow map, test cases, and handoff docs with no mailbox password required.",
    priority: 9,
    source: "Public Freelancer project post",
  },
  {
    company: "Email Quote Outlook Automation buyer",
    contact: "Freelancer project page: https://www.freelancer.com/projects/ai-development/Email-Quote-Outlook-Automation/details",
    country: "Platform lead - verify buyer profile before bidding",
    service: "Outlook automation, AI workflow, quote generation",
    problem: "Buyer wants email-to-quote automation, likely replacing manual quoting and follow-up work.",
    fit: "Strong fit for AI/workflow builds, CRM dashboard follow-up, and web tool delivery.",
    budget: "Paid project signal; business automation ROI is clear",
    outreach: "Ask for sanitized sample email formats and desired quote fields; propose staged delivery.",
    priority: 9,
    source: "Public Freelancer project post",
  },
  {
    company: "WordPress Amrod API Integration buyer",
    contact: "Freelancer project page: https://www.freelancer.com/projects/api-integration/WordPress-Developer-for-Amrod-API/details",
    country: "Platform lead - verify buyer profile before bidding",
    service: "Premium website, API integration, maintenance",
    problem: "Buyer needs WordPress connected to an external product/API provider, which creates integration and maintenance risk.",
    fit: "Direct fit for premium websites, web tools, cloud/API setup, and ongoing maintenance.",
    budget: "Paid project signal; API integration buyer",
    outreach: "Offer a fixed first milestone: inspect API docs, map product fields, build one verified sync path.",
    priority: 8,
    source: "Public Freelancer project post",
  },
  {
    company: "Ongoing Zapier Automation Management buyer",
    contact: "Freelancer project page: https://www.freelancer.com/projects/zapier/ongoing-zapier-automation-management",
    country: "Platform lead - verify buyer profile before bidding",
    service: "Zapier automation, workflow maintenance, CRM routing",
    problem: "The project title indicates recurring automation management rather than a one-off task.",
    fit: "Matches workflow maintenance, AI/workflow builds, and CRM operations support.",
    budget: "Ongoing management signal; potential recurring revenue",
    outreach: "Position as a monthly workflow health check plus bug-fix retainer.",
    priority: 8,
    source: "Public Freelancer project post",
  },
  {
    company: "Construction Expense & Ledger Platform buyer",
    contact: "Freelancer search/project card: search title on Freelancer: Construction Expense & Ledger Platform",
    country: "Platform lead - verify buyer profile before bidding",
    service: "Custom web tool, dashboards, mobile/web app, cost control",
    problem: "Buyer is building a unified cost-control and ledger platform across web and mobile.",
    fit: "Strong fit for web tools, dashboards, premium app UI, and cloud setup support.",
    budget: "Visible card budget: 37,500-75,000 INR",
    outreach: "Lead with a simple dashboard/module prototype offer and staged delivery.",
    priority: 8,
    source: "Public Freelancer project card observed in search results",
  },
  {
    company: "ScaleOps",
    contact: "Public contact: nelly@scaleops.co / https://www.scaleops.co/",
    country: "Israel / global",
    service: "White-label CRM dashboard, landing page, workflow build support",
    problem: "Public site sells RevOps, HubSpot, Salesforce, Make, Zapier and custom API implementation.",
    fit: "Potential subcontract/partner lead for Yash's CRM dashboards, web tools, cloud setup, and workflow builds.",
    budget: "Agency/service provider with paid RevOps delivery model",
    outreach: "Pitch white-label frontend/dashboard support for overflow client work, not generic lead-gen.",
    priority: 7,
    source: "Public website text and contact details",
  },
  {
    company: "RevOps Connect",
    contact: "Contact/demo path: https://www.revopsconnect.io/",
    country: "US / remote",
    service: "HubSpot integration, custom backend, dashboard UI",
    problem: "Public site positions managed HubSpot integrations, webhooks, retry logic, and monitoring.",
    fit: "Potential partner/subcontract lead for dashboards, support portals, landing pages, and implementation overflow.",
    budget: "Public pricing signal around annual integration subscriptions",
    outreach: "Pitch small UI/dashboard or landing-page support around integration proposal workflows.",
    priority: 7,
    source: "Public website/pricing/contact page",
  },
  {
    company: "FixOps",
    contact: "Book/contact path: https://fixops.io/",
    country: "US",
    service: "HubSpot audit UI, AI workflow, dashboard/reporting support",
    problem: "Public site focuses on broken HubSpot workflows, ghost seats, audit dashboards, and AI readiness.",
    fit: "Potential partner lead for CRM dashboard/report UX, workflow rebuild support, and landing page optimization.",
    budget: "Public SaaS pricing and 'Fix It For Me' service signal",
    outreach: "Pitch a narrow audit-report UI or workflow-fix delivery support offer.",
    priority: 7,
    source: "Public website/contact path",
  },
  {
    company: "RevOps One",
    contact: "Schedule/contact path: https://www.revopsone.co/",
    country: "US / remote",
    service: "CRM audit, RevOps automation, landing page/portfolio support",
    problem: "Public site lists HubSpot, Salesforce, Apollo, Zapier, Make, ChatGPT and CRM management services.",
    fit: "Potential subcontract lead for CRM dashboards, workflow prototypes, web tools, and cloud setup.",
    budget: "Consulting/service business with clear B2B RevOps offer",
    outreach: "Pitch as reliable implementation support for overflow RevOps and workflow build tasks.",
    priority: 7,
    source: "Public website/contact path",
  },
];

const workbook = Workbook.create();
const sheet = workbook.worksheets.add("Corrected Sample");
const headers = [
  "Company / Buyer",
  "Direct Contact Detail",
  "Country",
  "Best-Fit Service",
  "Problem Noticed",
  "Why It Fits Yash Portfolio",
  "Budget Signal",
  "Recommended Outreach Angle",
  "Priority Score",
  "Public Source",
];

sheet.getRange("A1:J1").values = [headers];
sheet.getRangeByIndexes(1, 0, rows.length, headers.length).values = rows.map((r) => [
  r.company,
  r.contact,
  r.country,
  r.service,
  r.problem,
  r.fit,
  r.budget,
  r.outreach,
  r.priority,
  r.source,
]);

sheet.getRange("A1:J1").format = {
  fill: "#0F766E",
  font: { bold: true, color: "#FFFFFF" },
  wrapText: true,
};
sheet.getRange("A2:J11").format = {
  wrapText: true,
  verticalAlignment: "top",
};
sheet.getRange("I2:I11").format.numberFormat = "0";
sheet.getRange("A:J").format.columnWidthPx = 170;
sheet.getRange("B:B").format.columnWidthPx = 330;
sheet.getRange("E:H").format.columnWidthPx = 280;
sheet.getRange("A1:J11").format.autofitRows();
sheet.freezePanes.freezeRows(1);
sheet.tables.add("A1:J11", true, "CorrectedLeadSample").style = "TableStyleMedium2";

const notes = workbook.worksheets.add("Notes");
notes.getRange("A1:B7").values = [
  ["Purpose", "Corrected sample after buyer feedback: includes direct public contact path, clearer details, portfolio fit, and priority."],
  ["Safety", "Public-source only. No private scraping, no passwords, no API keys, no off-platform payment/contact."],
  ["Lead mix", "Active public platform opportunities plus partner/subcontract prospects that match CRM/web/workflow services."],
  ["How to use", "For platform leads, contact only through the platform project page. For company leads, use public contact forms/emails only."],
  ["Buyer feedback addressed", "Added contact detail, problem noticed, service fit, budget signal, and recommended outreach angle."],
  ["Current status", "Sample only. Not a paid order or confirmed revenue."],
  ["Next step", "Ask buyer if this corrected direction matches the expected quality before producing a full 50-lead batch."],
];
notes.getRange("A1:B7").format = { wrapText: true, verticalAlignment: "top" };
notes.getRange("A:A").format = { font: { bold: true }, fill: "#E0F2FE" };
notes.getRange("A:B").format.columnWidthPx = 320;
notes.getRange("A1:B7").format.autofitRows();

const csvPath = path.join(outDir, "yashbank_corrected_leads_sample_v2.csv");
const csv = [headers, ...rows.map((r) => [
  r.company,
  r.contact,
  r.country,
  r.service,
  r.problem,
  r.fit,
  r.budget,
  r.outreach,
  r.priority,
  r.source,
])].map((row) => row.map((cell) => `"${String(cell).replaceAll('"', '""')}"`).join(",")).join("\n");
await fs.writeFile(csvPath, csv, "utf8");

const preview = await workbook.render({ sheetName: "Corrected Sample", range: "A1:J11", scale: 1, format: "png" });
await fs.writeFile(path.join(outDir, "yashbank_corrected_leads_sample_v2_preview.png"), new Uint8Array(await preview.arrayBuffer()));

const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 50 },
  summary: "formula error scan",
});
console.log(errors.ndjson || "no formula errors");

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
const xlsxPath = path.join(outDir, "yashbank_corrected_leads_sample_v2.xlsx");
await xlsx.save(xlsxPath);
console.log(xlsxPath);
