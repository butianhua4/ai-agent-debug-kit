Add-Type -AssemblyName System.Drawing

if ($MyInvocation.MyCommand.Path) {
  $root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
} else {
  $root = (Get-Location).Path
}
$output = Join-Path $root "assets\domestic-299-diagnosis-proof.png"

$bitmap = [System.Drawing.Bitmap]::new(1080, 1080)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function Brush($hex) {
  return [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($hex))
}

function Font($size, $style = [System.Drawing.FontStyle]::Regular) {
  return [System.Drawing.Font]::new("Microsoft YaHei", [single]$size, $style, [System.Drawing.GraphicsUnit]::Pixel)
}

function RoundRect($x, $y, $w, $h, $r) {
  $path = [System.Drawing.Drawing2D.GraphicsPath]::new()
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
    $graphics.DrawPath(([System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml($stroke), 2)), $path)
  }
  $path.Dispose()
}

function Text($text, $x, $y, $size, $color, $bold = $false) {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  $graphics.DrawString($text, (Font $size $style), (Brush $color), $x, $y)
}

function DotText($x, $y, $color, $text) {
  $graphics.FillEllipse((Brush $color), $x, $y + 8, 28, 28)
  Text $text ($x + 46) $y 28 "#111827"
}

$graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#f5f7fa"))
FillRound 64 64 952 952 36 "#ffffff" "#d7dee8"

Text "299 元诊断交付什么？" 108 116 56 "#111827" $true
Text "一页报告，把自动化故障讲清楚" 108 176 26 "#4b5563"

FillRound 108 256 864 500 30 "#f9fafb" "#e5e7eb"
Text "交付报告包含" 152 304 32 "#111827" $true
DotText 152 372 "#2563eb" "当前故障现象"
DotText 152 436 "#16a34a" "最可能原因"
DotText 152 500 "#ea580c" "失败节点地图"
DotText 152 564 "#7c3aed" "建议修复顺序"
DotText 152 628 "#0f766e" "安全测试清单"
DotText 152 692 "#be123c" "是否建议升级救援"

FillRound 588 340 314 330 24 "#ffffff" "#d7dee8"
$graphics.FillRectangle((Brush "#111827"), 620, 374, 250, 24)
$graphics.FillRectangle((Brush "#cbd5e1"), 620, 426, 214, 16)
$graphics.FillRectangle((Brush "#cbd5e1"), 620, 468, 250, 16)
$graphics.FillRectangle((Brush "#cbd5e1"), 620, 510, 178, 16)
FillRound 620 564 250 56 12 "#ecfdf5" "#86efac"
Text "修复优先级" 644 580 22 "#166534" $true

FillRound 108 808 864 72 36 "#111827"
Text "只看脱敏材料：报错、截图、输入输出样例、流程说明" 156 828 26 "#ffffff" $true

Text "不包含：" 108 904 26 "#be123c" $true
Text "登录账号、收密码、API Key、Cookie、付款/KYC/钱包信息" 218 904 24 "#4b5563"
Text "先定位，再决定是否需要 999 / 1999+ 完整救援" 108 962 22 "#6b7280"

$bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()

Write-Output $output
