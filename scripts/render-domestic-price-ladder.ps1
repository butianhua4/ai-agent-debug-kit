Add-Type -AssemblyName System.Drawing

if ($MyInvocation.MyCommand.Path) {
  $root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
} else {
  $root = (Get-Location).Path
}
$output = Join-Path $root "assets\domestic-299-price-ladder.png"

$bitmap = [System.Drawing.Bitmap]::new(1080, 1080)
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

function Brush($hex) { return [System.Drawing.SolidBrush]::new([System.Drawing.ColorTranslator]::FromHtml($hex)) }
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
function FillRound($x, $y, $w, $h, $r, $fill, $stroke = $null, $strokeWidth = 2) {
  $path = RoundRect $x $y $w $h $r
  $graphics.FillPath((Brush $fill), $path)
  if ($stroke) {
    $graphics.DrawPath(([System.Drawing.Pen]::new([System.Drawing.ColorTranslator]::FromHtml($stroke), $strokeWidth)), $path)
  }
  $path.Dispose()
}
function Text($text, $x, $y, $size, $color, $bold = $false) {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  $graphics.DrawString($text, (Font $size $style), (Brush $color), $x, $y)
}
function PackageCard($x, $y, $w, $h, $fill, $stroke, $price, $title, $lines, $button, $accent, $featured = $false) {
  FillRound $x $y $w $h 28 $fill $stroke ($(if ($featured) { 3 } else { 2 }))
  Text $price ($x + 36) ($y + 34) 52 $accent $true
  Text $title ($x + 36) ($y + 96) 28 "#111827" $true
  $lineY = $y + 158
  foreach ($line in $lines) {
    Text $line ($x + 36) $lineY 21 "#374151"
    $lineY += 44
  }
  FillRound ($x + 36) ($y + $h - 72) 198 42 21 $accent
  Text $button ($x + 64) ($y + $h - 62) 20 "#ffffff" $true
}

$graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#f5f7fa"))
FillRound 64 64 952 952 36 "#ffffff" "#d7dee8"
Text "怎么选服务档位？" 108 112 54 "#111827" $true
Text "先定位，再修复；小问题不强推大单" 108 174 26 "#4b5563"

PackageCard 108 270 270 430 "#eff6ff" "#bfdbfe" "299 元" "入门诊断" @("适合单个报错", "看脱敏材料", "交付一页报告", "原因 + 修复顺序") "先从这里开始" "#1d4ed8"
PackageCard 405 238 270 494 "#f0fdf4" "#86efac" "999 元" "标准救援报告" @("适合多步骤流程", "字段/触发器排查", "before/after 测试", "完整修复建议") "常见成交档" "#16a34a" $true
PackageCard 702 270 270 430 "#fff7ed" "#fed7aa" "1999+" "紧急业务救援" @("影响线索/CRM", "内容生产/通知", "需要备用方案", "团队交接报告") "业务受影响时" "#ea580c"

FillRound 108 800 864 82 41 "#111827"
Text "不收密码 / API Key / Token / Cookie / 钱包 / KYC 信息" 154 824 28 "#ffffff" $true
Text "如果只是一个报错，先走 299；如果流程影响业务，再升级。" 108 914 24 "#4b5563"
Text "所有档位默认先看脱敏材料，不直接操作生产账号。" 108 964 22 "#6b7280"

$bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()

Write-Output $output
