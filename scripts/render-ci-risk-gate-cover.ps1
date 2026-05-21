Add-Type -AssemblyName System.Drawing

if ($MyInvocation.MyCommand.Path) {
  $root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
} else {
  $root = (Get-Location).Path
}

$output = Join-Path $root "assets\ci-risk-gate-cover.png"

function Brush($hex) {
  return New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($hex))
}

function Pen($hex, $width = 2) {
  return New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml($hex), $width)
}

function Font($size, $style = [System.Drawing.FontStyle]::Regular) {
  return [System.Drawing.Font]::new("Segoe UI", [single]$size, $style, [System.Drawing.GraphicsUnit]::Pixel)
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

function FillRound($graphics, $x, $y, $w, $h, $r, $fill, $stroke = $null) {
  $path = RoundRect $x $y $w $h $r
  $graphics.FillPath((Brush $fill), $path)
  if ($stroke) {
    $graphics.DrawPath((Pen $stroke 2), $path)
  }
  $path.Dispose()
}

function Text($graphics, $text, $x, $y, $size, $color, $bold = $false) {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  $graphics.DrawString($text, (Font $size $style), (Brush $color), [single]$x, [single]$y)
}

$bitmap = New-Object System.Drawing.Bitmap 1280, 720
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

$graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#f6f8fb"))
FillRound $graphics 70 64 1140 592 28 "#ffffff" "#d8dee8"
FillRound $graphics 70 64 1140 122 28 "#101828"
$graphics.FillRectangle((Brush "#101828"), 70, 156, 1140, 30)

Text $graphics "AI Agent CI Risk Gate" 120 98 48 "#ffffff" $true
Text $graphics "Catch risky agent logs before they merge" 120 212 38 "#111827" $true
Text $graphics "Tool errors, failed JSON parsing, retry loops, and unsafe output patterns." 120 262 24 "#475467"

FillRound $graphics 118 335 260 178 20 "#eff6ff" "#bfdbfe"
Text $graphics "1. Read logs" 146 374 24 "#1d4ed8" $true
FillRound $graphics 148 411 198 12 6 "#93c5fd"
FillRound $graphics 148 441 156 12 6 "#bfdbfe"
FillRound $graphics 148 471 208 12 6 "#93c5fd"

FillRound $graphics 426 335 260 178 20 "#fff7ed" "#fed7aa"
Text $graphics "2. Flag risk" 454 374 24 "#c2410c" $true
$graphics.FillEllipse((Brush "#ea580c"), 454, 415, 24, 24)
Text $graphics "tool_error" 502 408 20 "#475467"
$graphics.FillEllipse((Brush "#dc2626"), 454, 451, 24, 24)
Text $graphics "retry_loop" 502 444 20 "#475467"

FillRound $graphics 734 335 260 178 20 "#f0fdf4" "#bbf7d0"
Text $graphics "3. Gate deploy" 762 374 24 "#047857" $true
FillRound $graphics 764 413 88 48 12 "#16a34a"
Text $graphics "PASS" 785 425 20 "#ffffff" $true
FillRound $graphics 870 413 88 48 12 "#dc2626"
Text $graphics "FAIL" 896 425 20 "#ffffff" $true

FillRound $graphics 1042 335 120 178 20 "#eef2ff" "#c7d2fe"
$checkPen = Pen "#4f46e5" 10
$checkPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$checkPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
$graphics.DrawLines($checkPen, [System.Drawing.Point[]]@(
  [System.Drawing.Point]::new(1085, 417),
  [System.Drawing.Point]::new(1102, 434),
  [System.Drawing.Point]::new(1135, 391)
))
Text $graphics "Report" 1070 463 22 "#3730a3" $true

$arrowPen = Pen "#94a3b8" 6
$arrowPen.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$arrowPen.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
$graphics.DrawLine($arrowPen, 384, 424, 418, 424)
$graphics.DrawLine($arrowPen, 692, 424, 726, 424)
$graphics.DrawLine($arrowPen, 1000, 424, 1034, 424)

FillRound $graphics 120 570 1040 56 28 "#101828"
Text $graphics "GitHub Actions ready - clear thresholds - redacted reports - no secrets needed" 154 587 23 "#ffffff" $true

$bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
Write-Output $output
