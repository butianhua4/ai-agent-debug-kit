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


def _cfont(size: int, bold: bool = False) -> ImageFont.FreeTypeFont | ImageFont.ImageFont:
    candidates = [
        "C:/Windows/Fonts/msyhbd.ttc" if bold else "C:/Windows/Fonts/msyh.ttc",
        "C:/Windows/Fonts/simhei.ttf",
        "C:/Windows/Fonts/simsun.ttc",
    ]
    for candidate in candidates:
        try:
            return ImageFont.truetype(candidate, size)
        except OSError:
            pass
    return _font(size, bold)


def _rounded(draw: ImageDraw.ImageDraw, box: tuple[int, int, int, int], fill: str, outline: str = "#d0d5dd") -> None:
    draw.rounded_rectangle(box, radius=18, fill=fill, outline=outline, width=2)


def _centered(draw: ImageDraw.ImageDraw, text: str, y: int, font: ImageFont.ImageFont, fill: str = "#122033") -> None:
    bbox = draw.textbbox((0, 0), text, font=font)
    x = (1280 - (bbox[2] - bbox[0])) // 2
    draw.text((x, y), text, font=font, fill=fill)


def _wrap_text(draw: ImageDraw.ImageDraw, text: str, font: ImageFont.ImageFont, max_width: int) -> list[str]:
    lines: list[str] = []
    current = ""
    for char in text:
        candidate = current + char
        bbox = draw.textbbox((0, 0), candidate, font=font)
        if bbox[2] - bbox[0] <= max_width or not current:
            current = candidate
        else:
            lines.append(current)
            current = char
    if current:
        lines.append(current)
    return lines


def _draw_wrapped(
    draw: ImageDraw.ImageDraw,
    text: str,
    x: int,
    y: int,
    font: ImageFont.ImageFont,
    fill: str,
    max_width: int,
    line_height: int,
) -> int:
    for line in _wrap_text(draw, text, font, max_width):
        draw.text((x, y), line, font=font, fill=fill)
        y += line_height
    return y


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


def build_chinese_diagnosis_one_pager_png() -> None:
    ASSETS.mkdir(exist_ok=True)
    output = ASSETS / "domestic-299-diagnosis-one-pager.png"

    img = Image.new("RGB", (1080, 2160), "#f5f7fb")
    draw = ImageDraw.Draw(img)

    title = _cfont(56, bold=True)
    h2 = _cfont(32, bold=True)
    body = _cfont(26)
    body_bold = _cfont(26, bold=True)
    small = _cfont(22)
    small_bold = _cfont(22, bold=True)

    draw.rounded_rectangle((54, 54, 1026, 280), radius=34, fill="#111827")
    draw.text((96, 92), "299 元 AI 自动化故障诊断", font=title, fill="#ffffff")
    draw.text((100, 174), "n8n / Make / Zapier / Agent / Webhook / JSON", font=small_bold, fill="#c7d2fe")
    draw.text((100, 218), "不碰账号，不收密钥，只看脱敏错误材料。", font=small_bold, fill="#d1fae5")

    y = 326

    def section(label: str, color: str = "#175cd3") -> None:
        nonlocal y
        draw.rounded_rectangle((72, y, 1008, y + 58), radius=18, fill=color)
        draw.text((104, y + 13), label, font=h2, fill="#ffffff")
        y += 82

    def bullet(text: str, fill: str = "#344054") -> None:
        nonlocal y
        draw.ellipse((94, y + 12, 110, y + 28), fill="#175cd3")
        y = _draw_wrapped(draw, text, 128, y, body, fill, 820, 36) + 14

    section("适合什么问题")
    bullet("AI 自动化流程报错、卡住、输出不稳定，或不知道问题出在提示词、节点配置、JSON、Webhook、API、权限还是模型调用。")
    bullet("适合 n8n、Make、Zapier、Coze、Dify、FastGPT、AI Agent、Node.js、Python、GitHub Actions 等故障定位。")

    section("你需要发什么", "#166534")
    checklist = [
        "平台或工具名称",
        "失败发生在哪一步",
        "完整错误文本或截图",
        "期望输出与实际输出",
        "最近改过的提示词、节点、字段、API 或环境变量",
        "脱敏后的样例输入和样例输出",
    ]
    for item in checklist:
        draw.rounded_rectangle((92, y, 988, y + 48), radius=16, fill="#ffffff", outline="#d0d5dd", width=2)
        draw.text((120, y + 10), "✓", font=body_bold, fill="#16a34a")
        draw.text((164, y + 9), item, font=body, fill="#111827")
        y += 62

    section("不要发这些", "#b42318")
    for item in [
        "密码、验证码、API Key、Token、Cookie",
        "身份证、银行卡、付款截图、钱包信息",
        "未脱敏客户数据、私有仓库、生产后台权限",
        "绕过平台、安全验证、付款规则或风控限制的内容",
    ]:
        bullet(item, "#b42318")

    section("299 元交付什么", "#7c3aed")
    for item in [
        "一页诊断报告：故障现象、可能原因排序、失败节点定位、优先修复顺序。",
        "最小测试步骤和风险提醒：权限、数据、Token、成本、重复调用、死循环。",
        "是否值得升级到 999 / 1999+ 修复服务的建议；升级前先确认范围。",
    ]:
        bullet(item)

    draw.rounded_rectangle((72, y + 12, 1008, y + 172), radius=24, fill="#111827")
    draw.text((112, y + 42), "可直接发给买家的第一句话", font=h2, fill="#ffffff")
    quote = "你先不用给账号，也不用发密钥。把报错截图、失败节点、期望输出和实际输出发我，我先判断能不能按 299 元做一次诊断。"
    _draw_wrapped(draw, quote, 112, y + 92, small_bold, "#d1fae5", 850, 32)
    y += 208

    draw.rounded_rectangle((72, y, 1008, y + 118), radius=22, fill="#fff7ed", outline="#fed7aa", width=2)
    draw.text((112, y + 22), "边界：299 只做诊断，不直接登录账号，不保证修好所有问题。", font=small_bold, fill="#9a3412")
    draw.text((112, y + 60), "目标是先定位问题、控制风险，再决定是否继续修复。", font=small, fill="#9a3412")

    draw.text((72, 2102), "Public proof: butianhua4.github.io/ai-agent-debug-kit  ·  Fiverr: aibuildflow", font=small, fill="#667085")
    img.save(output, "PNG")


def build_chinese_999_repair_plan_proof_png() -> None:
    ASSETS.mkdir(exist_ok=True)
    output = ASSETS / "domestic-999-repair-plan-proof.png"

    img = Image.new("RGB", (1280, 1280), "#f7f8fb")
    draw = ImageDraw.Draw(img)

    title = _cfont(62, bold=True)
    subtitle = _cfont(30, bold=True)
    h2 = _cfont(34, bold=True)
    body = _cfont(27)
    body_bold = _cfont(27, bold=True)
    small_bold = _cfont(23, bold=True)
    mono = _font(23)

    draw.rounded_rectangle((54, 54, 1226, 252), radius=34, fill="#111827")
    draw.text((92, 86), "999 元小范围修复方案", font=title, fill="#ffffff")
    draw.text((96, 172), "从 299 诊断升级：把原因变成可执行修复步骤", font=subtitle, fill="#d1fae5")

    draw.rounded_rectangle((74, 292, 1206, 486), radius=28, fill="#ffffff", outline="#d0d5dd", width=2)
    draw.text((110, 326), "适合什么情况？", font=h2, fill="#175cd3")
    y = 378
    for text in ["问题已定位在 1-2 个节点", "需要明确改哪里、怎么测、怎么回滚", "不需要代登录账号，不需要生产后台权限"]:
        draw.ellipse((112, y + 10, 130, y + 28), fill="#16a34a")
        draw.text((150, y), text, font=body, fill="#344054")
        y += 38

    cards = [
        ((74, 530, 395, 780), "#eff8ff", "01", "根因", "旧字段导致邮箱为空"),
        ((480, 530, 801, 780), "#ecfdf3", "02", "修改", "给出旧值 / 新值 / 节点位置"),
        ((885, 530, 1206, 780), "#fff7ed", "03", "测试", "最小测试、通过标准、回滚"),
    ]
    for box, fill, step, heading, text in cards:
        draw.rounded_rectangle(box, radius=28, fill=fill, outline="#d0d5dd", width=2)
        draw.text((box[0] + 28, box[1] + 28), step, font=title, fill="#175cd3")
        draw.text((box[0] + 34, box[1] + 104), heading, font=h2, fill="#111827")
        _draw_wrapped(draw, text, box[0] + 34, box[1] + 158, body_bold, "#344054", 250, 36)

    draw.rounded_rectangle((74, 820, 1206, 1018), radius=28, fill="#111827")
    draw.text((110, 852), "样例修复片段", font=h2, fill="#ffffff")
    draw.text((112, 914), "Before: email = json.email", font=mono, fill="#fecaca")
    draw.text((112, 958), "After:  email = json.lead.email", font=mono, fill="#bbf7d0")

    draw.rounded_rectangle((74, 1048, 1206, 1182), radius=24, fill="#ffffff", outline="#d0d5dd", width=2)
    draw.text((110, 1076), "交付内容", font=h2, fill="#7c3aed")
    draw.text((112, 1124), "根因排序 + 修改清单 + 脱敏测试 payload + 通过标准 + 回滚方案", font=body_bold, fill="#344054")

    draw.text((78, 1222), "公开样例，不是私人客户案例。只接收脱敏截图/日志，不收密码、Token、Cookie。", font=small_bold, fill="#667085")
    img.save(output, "PNG")


if __name__ == "__main__":
    build_automation_rescue_pdf()
    build_automation_rescue_gif()
    build_chinese_diagnosis_one_pager_png()
    build_chinese_999_repair_plan_proof_png()
