from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import Paragraph, SimpleDocTemplate, Spacer, Table, TableStyle


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"


def build_ci_risk_gate_pdf() -> None:
    ASSETS.mkdir(exist_ok=True)
    output = ASSETS / "ci-risk-gate-one-pager.pdf"

    doc = SimpleDocTemplate(
        str(output),
        pagesize=letter,
        rightMargin=0.55 * inch,
        leftMargin=0.55 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch,
        title="CI Risk Gate One-Pager",
    )

    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Hero",
            parent=styles["Title"],
            fontSize=23,
            leading=27,
            textColor=colors.HexColor("#101828"),
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontSize=12.5,
            leading=15,
            textColor=colors.HexColor("#175CD3"),
            spaceBefore=9,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BodySmall",
            parent=styles["BodyText"],
            fontSize=9.2,
            leading=12,
            textColor=colors.HexColor("#344054"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="Callout",
            parent=styles["BodyText"],
            fontSize=10.5,
            leading=13.5,
            textColor=colors.HexColor("#101828"),
            backColor=colors.HexColor("#EEF4FF"),
            borderPadding=8,
            spaceAfter=8,
        )
    )
    styles.add(
        ParagraphStyle(
            name="CodeBlock",
            parent=styles["BodyText"],
            fontName="Courier",
            fontSize=8,
            leading=10,
            textColor=colors.HexColor("#101828"),
            backColor=colors.HexColor("#F2F4F7"),
            borderPadding=6,
        )
    )

    package_rows = [
        ["Package", "Deliverable", "Best For"],
        ["Starter", "Workflow draft + threshold advice", "Quick warning gate"],
        ["Standard", "Working gate + sample report", "Block risky logs before merge"],
        ["Premium", "Tuned gate + handoff notes", "Release readiness workflow"],
    ]
    package_table = Table(package_rows, colWidths=[0.9 * inch, 2.65 * inch, 2.65 * inch])
    package_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#101828")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#D0D5DD")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F8FAFC")]),
            ]
        )
    )

    story = [
        Paragraph("AI Agent CI Risk Gate", styles["Hero"]),
        Paragraph(
            "A lightweight pre-merge gate for risky AI agent logs, repeated tool failures, retry loops, and cost spikes.",
            styles["Callout"],
        ),
        Paragraph("What It Checks", styles["Section"]),
        Paragraph(
            "Repeated tool-call failures, secret-looking strings, timeout clusters, retry loops, high-risk failure density, and configurable score thresholds.",
            styles["BodySmall"],
        ),
        Paragraph("What The Buyer Sends", styles["Section"]),
        Paragraph(
            "Redacted repository structure, one redacted sample log or report, CI provider, desired threshold, and paths to ignore. No passwords, tokens, cookies, payout data, ID documents, or private customer data.",
            styles["BodySmall"],
        ),
        Paragraph("Deliverables", styles["Section"]),
        package_table,
        Spacer(1, 8),
        Paragraph("Example GitHub Actions Step", styles["Section"]),
        Paragraph(
            "node cli.js --input ./logs/agent-run.jsonl --fail-on high --format markdown &gt; ai-risk-report.md",
            styles["CodeBlock"],
        ),
        Paragraph("Public Proof", styles["Section"]),
        Paragraph(
            "Demo: https://butianhua4.github.io/ai-agent-debug-kit/<br/>Repository: https://github.com/butianhua4/ai-agent-debug-kit<br/>Fiverr: https://www.fiverr.com/aibuildflow",
            styles["BodySmall"],
        ),
        Paragraph("Safety Boundary", styles["Section"]),
        Paragraph(
            "This is a lightweight risk signal, not a full security audit. It does not require access to private production systems.",
            styles["BodySmall"],
        ),
    ]

    doc.build(story)
    print(f"Built {output}")


if __name__ == "__main__":
    build_ci_risk_gate_pdf()
