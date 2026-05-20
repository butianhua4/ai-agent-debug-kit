from pathlib import Path

from PIL import Image, ImageDraw, ImageFont
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


def _font(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "C:/Windows/Fonts/arialbd.ttf" if bold else "C:/Windows/Fonts/arial.ttf",
        "C:/Windows/Fonts/segoeuib.ttf" if bold else "C:/Windows/Fonts/segoeui.ttf",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size)
        except OSError:
            pass
    return ImageFont.load_default()


def _rounded(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str = "#d0d5dd") -> None:
    draw.rounded_rectangle(box, radius=18, fill=fill, outline=outline, width=2)


def _centered(draw: ImageDraw.ImageDraw, text: str, y: int, font: ImageFont.ImageFont, fill: str = "#122033") -> None:
    bbox = draw.textbbox((0, 0), text, font=font)
    x = (1280 - (bbox[2] - bbox[0])) // 2
    draw.text((x, y), text, font=font, fill=fill)


def build_automation_rescue_gif() -> None:
    ASSETS.mkdir(exist_ok=True)
    output = ASSETS / "automation-rescue-demo.gif"

    title = _font(52, bold=True)
    subtitle = _font(28)
    label = _font(24, bold=True)
    body = _font(24)
    mono = _font(23)
    small = _font(20)

    frames: list[Image.Image] = []
    scenes = [
        (
            "Your workflow still triggers...",
            "But the CRM step fails after a webhook payload change.",
            "Webhook",
            "JSON mapping",
            "CRM failed",
            "#fef3f2",
        ),
        (
            "Find the broken field path",
            'Before: email = {{$json["email"]}}',
            "Old field",
            "Missing email",
            "High retry risk",
            "#fff7ed",
        ),
        (
            "Correct the mapping safely",
            'After: email = {{$json["lead"]["email"]}}',
            "New field",
            "CRM test passes",
            "Retries disabled",
            "#ecfdf3",
        ),
        (
            "Delivery: a clear repair report",
            "Root cause, risk level, fix sequence, and test checklist.",
            "Report",
            "Safe test plan",
            "Buyer handoff",
            "#eff8ff",
        ),
        (
            "Automation Failure Rescue",
            "n8n / Make / Zapier / Webhook / API / JSON mapping",
            "From $49",
            "No passwords",
            "Redacted data only",
            "#f8fafc",
        ),
    ]

    for heading, sub, left, middle, right, bg in scenes:
        img = Image.new("RGB", (1280, 720), bg)
        draw = ImageDraw.Draw(img)
        draw.rectangle((0, 0, 1280, 92), fill="#122033")
        draw.text((54, 27), "AI Automation Rescue", font=subtitle, fill="#ffffff")
        _centered(draw, heading, 132, title)
        _centered(draw, sub, 204, subtitle, "#475467")

        boxes = [(105, 310, 365, 500), (510, 310, 770, 500), (915, 310, 1175, 500)]
        names = [left, middle, right]
        fills = ["#ffffff", "#ffffff", "#ffffff"]
        for idx, (box, name, fill) in enumerate(zip(boxes, names, fills)):
            _rounded(draw, box, fill)
            draw.text((box[0] + 30, box[1] + 44), name, font=label, fill="#122033")
            if idx < 2:
                draw.line((box[2] + 24, 405, box[2] + 118, 405), fill="#175cd3", width=8)
                draw.polygon(
                    [(box[2] + 118, 405), (box[2] + 96, 391), (box[2] + 96, 419)],
                    fill="#175cd3",
                )

        if "Before:" in sub or "After:" in sub:
            draw.rounded_rectangle((275, 548, 1005, 610), radius=16, fill="#122033")
            draw.text((305, 565), sub, font=mono, fill="#ffffff")
        else:
            draw.text((105, 572), "Fixed-scope diagnosis. Clear report. Safe next test.", font=body, fill="#344054")

        draw.text((54, 664), "Public proof: butianhua4.github.io/ai-agent-debug-kit", font=small, fill="#667085")
        frames.extend([img] * 12)

    frames[0].save(
        output,
        save_all=True,
        append_images=frames[1:],
        duration=120,
        loop=0,
        optimize=True,
    )


if __name__ == "__main__":
    build_automation_rescue_pdf()
    build_automation_rescue_gif()
