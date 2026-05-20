Add-Type -AssemblyName System.Drawing

if ($MyInvocation.MyCommand.Path) {
  $root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
} else {
  $root = (Get-Location).Path
}
$output = Join-Path $root "assets\domestic-299-diagnosis-cover.png"

$bitmap = New-Object System.Drawing.Bitmap 1080, 1080
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function Brush($hex) {
  return New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($hex))
}

function Pen($hex, $width) {
  return New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml($hex)), $width
}

function Font($size, $style = [System.Drawing.FontStyle]::Regular) {
  return [System.Drawing.Font]::new("Microsoft YaHei", [single]$size, $style, [System.Drawing.GraphicsUnit]::Pixel)
}

function RoundRect($x, $y, $w, $h, $r) {
  $path = New-Object System.Drawing.Drawing2D.GraphicsPath
  $d = $r * 2
  $path.AddArc($x, $y, $d, $d, 180, 90)
  $path.AddArc($x + $w - $d, $y, $d, $d, 270, 90)
  $path.AddArc($x + $w - $d, $y + $h - $d, $d, $d, 0, 90)
  $path.AddArc($x, $y + $h - $d, $d, $d, 90, 90)
  $path.CloseFigure()
  return $path
}

function FillRound($x, $y, $w, $h, $r, $fill, $stroke = $null) {
  $path = RoundRect $x $y $w $h $r
  $graphics.FillPath((Brush $fill), $path)
  if ($stroke) {
    $graphics.DrawPath((New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml($stroke), 2)), $path)
  }
  $path.Dispose()
}

function Text($text, $x, $y, $size, $color, $bold = $false) {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  $graphics.DrawString($text, (Font $size $style), (Brush $color), $x, $y)
}

$graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#f6f8fb"))
FillRound 64 64 952 952 36 "#ffffff" "#d7dee8"
FillRound 64 64 952 168 36 "#111827"
$graphics.FillRectangle((Brush "#111827"), 64, 196, 952, 36)

Text "AI 自动化突然跑不通？" 108 116 58 "#ffffff" $true
Text "n8n / Make / Zapier / Agent / Webhook / JSON" 108 176 26 "#c7d2fe" $true

Text "299 元" 108 280 72 "#111827" $true
Text "先做脱敏诊断" 360 286 44 "#111827" $true
Text "不碰账号，不要密码，只看错误和流程截图" 108 360 28 "#4b5563"

$cards = @(
  @{ X=108; Fill="#eef6ff"; Stroke="#b2ddff"; Dot="#2563eb"; Title="找出卡点"; Body="失败步骤 / 报错原因"; TitleColor="#1e3a8a"; Icon="+" },
  @{ X=415; Fill="#f0fdf4"; Stroke="#abefc6"; Dot="#16a34a"; Title="修复顺序"; Body="先改哪里 / 怎么测"; TitleColor="#166534"; Icon="✓" },
  @{ X=722; Fill="#fff7ed"; Stroke="#fed7aa"; Dot="#ea580c"; Title="交付报告"; Body="一页故障地图"; TitleColor="#9a3412"; Icon="□" }
)

foreach ($card in $cards) {
  FillRound $card.X 452 250 190 24 $card.Fill $card.Stroke
  $graphics.FillEllipse((Brush $card.Dot), $card.X + 26, 480, 56, 56)
  Text $card.Icon ($card.X + 43) 488 34 "#ffffff" $true
  Text $card.Title ($card.X + 30) 574 28 $card.TitleColor $true
  Text $card.Body ($card.X + 30) 618 20 "#4b5563"
}

FillRound 108 704 864 118 28 "#f9fafb" "#e5e7eb"
Text "适合：AI 工作流、Webhook、JSON 映射、API 报错" 148 732 28 "#111827" $true
Text "先定位问题，再决定是否升级到 999 / 1999+ 救援" 148 776 23 "#4b5563"

FillRound 108 866 864 74 37 "#111827"
Text "不收密码 / API Key / Token / Cookie / 钱包 / KYC 信息" 154 892 26 "#ffffff" $true
Text "交付：可能原因 + 失败节点 + 修复顺序 + 安全测试清单" 108 952 22 "#6b7280"

$bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()

Write-Output $output
