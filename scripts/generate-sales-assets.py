from pathlib import Path

from reportlab.lib import colors
from reportlab.lib.pagesizes import letter
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import inch
from reportlab.platypus import (
    Paragraph,
    SimpleDocTemplate,
    Spacer,
    Table,
    TableStyle,
)


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "assets"


def build_automation_rescue_pdf() -> None:
    ASSETS.mkdir(exist_ok=True)
    output = ASSETS / "automation-rescue-one-pager.pdf"

    doc = SimpleDocTemplate(
        str(output),
        pagesize=letter,
        rightMargin=0.55 * inch,
        leftMargin=0.55 * inch,
        topMargin=0.5 * inch,
        bottomMargin=0.5 * inch,
        title="Automation Failure Rescue One-Pager",
    )

    styles = getSampleStyleSheet()
    styles.add(
        ParagraphStyle(
            name="Hero",
            parent=styles["Title"],
            fontSize=24,
            leading=28,
            textColor=colors.HexColor("#122033"),
            spaceAfter=10,
        )
    )
    styles.add(
        ParagraphStyle(
            name="Section",
            parent=styles["Heading2"],
            fontSize=13,
            leading=16,
            textColor=colors.HexColor("#175CD3"),
            spaceBefore=10,
            spaceAfter=5,
        )
    )
    styles.add(
        ParagraphStyle(
            name="BodySmall",
            parent=styles["BodyText"],
            fontSize=9.5,
            leading=12.5,
            textColor=colors.HexColor("#344054"),
        )
    )
    styles.add(
        ParagraphStyle(
            name="Callout",
            parent=styles["BodyText"],
            fontSize=11,
            leading=14,
            textColor=colors.HexColor("#101828"),
            backColor=colors.HexColor("#F2F4F7"),
            borderPadding=8,
            spaceAfter=8,
        )
    )

    story = [
        Paragraph("Automation Failure Rescue", styles["Hero"]),
        Paragraph(
            "For n8n, Make, Zapier, webhook, API, JSON mapping, retry-loop, and AI automation failures.",
            styles["Callout"],
        ),
        Paragraph("What I Diagnose", styles["Section"]),
        Paragraph(
            "Broken webhook payloads, missing required CRM fields, failed HTTP/API calls, changed JSON paths, duplicate sends, retry loops, and AI workflow cost spikes.",
            styles["BodySmall"],
        ),
        Spacer(1, 8),
    ]

    package_rows = [
        ["Package", "Best For", "Delivery", "Price"],
        ["Starter", "One failed step, webhook, API call, or JSON mapping", "1 day", "$49"],
        ["Standard", "One workflow/scenario/zap up to 8 steps", "2 days", "$199"],
        ["Premium", "Urgent lead, CRM, content, or AI automation failure", "1-2 days", "$399"],
    ]
    package_table = Table(package_rows, colWidths=[1.0 * inch, 3.5 * inch, 1.0 * inch, 0.8 * inch])
    package_table.setStyle(
        TableStyle(
            [
                ("BACKGROUND", (0, 0), (-1, 0), colors.HexColor("#122033")),
                ("TEXTCOLOR", (0, 0), (-1, 0), colors.white),
                ("FONTNAME", (0, 0), (-1, 0), "Helvetica-Bold"),
                ("FONTSIZE", (0, 0), (-1, -1), 8.5),
                ("GRID", (0, 0), (-1, -1), 0.5, colors.HexColor("#D0D5DD")),
                ("VALIGN", (0, 0), (-1, -1), "TOP"),
                ("BACKGROUND", (0, 1), (-1, -1), colors.HexColor("#F8FAFC")),
                ("ROWBACKGROUNDS", (0, 1), (-1, -1), [colors.white, colors.HexColor("#F8FAFC")]),
            ]
        )
    )
    story.extend([package_table, Spacer(1, 10)])

    story.extend(
        [
            Paragraph("Sample Before / After", styles["Section"]),
            Paragraph(
                "<b>Before:</b> CRM fails with missing email because the workflow still maps <font name='Courier'>email = {{$json[\"email\"]}}</font> after the payload changed.",
                styles["BodySmall"],
            ),
            Paragraph(
                "<b>After:</b> corrected mapping uses <font name='Courier'>email = {{$json[\"lead\"][\"email\"]}}</font>, then runs one redacted test payload before retries are re-enabled.",
                styles["BodySmall"],
            ),
            Paragraph("Safe Buyer Inputs", styles["Section"]),
            Paragraph(
                "Platform name, failed step, exact error text, recent change, expected output, actual output, and redacted screenshots or exported workflow JSON.",
                styles["BodySmall"],
            ),
            Paragraph("Safety Boundary", styles["Section"]),
            Paragraph(
                "Do not send passwords, API keys, OAuth tokens, payment data, identity documents, private customer data, or off-platform payment instructions.",
                styles["BodySmall"],
            ),
            Spacer(1, 8),
            Paragraph(
                "Public proof: https://butianhua4.github.io/ai-agent-debug-kit/",
                styles["BodySmall"],
            ),
            Paragraph(
                "Fiverr: https://www.fiverr.com/aibuildflow",
                styles["BodySmall"],
            ),
        ]
    )

    doc.build(story)


if __name__ == "__main__":
    build_automation_rescue_pdf()
