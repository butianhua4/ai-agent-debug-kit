Add-Type -AssemblyName System.Drawing

if ($MyInvocation.MyCommand.Path) {
  $root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
} else {
  $root = (Get-Location).Path
}
$output = Join-Path $root "assets\domestic-299-do-not-send.png"

function U($base64) {
  return [Text.Encoding]::UTF8.GetString([Convert]::FromBase64String($base64))
}

function Brush($hex) {
  return New-Object System.Drawing.SolidBrush ([System.Drawing.ColorTranslator]::FromHtml($hex))
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

function FillRound($graphics, $x, $y, $w, $h, $r, $fill, $stroke = $null) {
  $path = RoundRect $x $y $w $h $r
  $graphics.FillPath((Brush $fill), $path)
  if ($stroke) {
    $graphics.DrawPath((New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml($stroke), 3)), $path)
  }
  $path.Dispose()
}

function Text($graphics, $text, $x, $y, $size, $color, $bold = $false) {
  $style = if ($bold) { [System.Drawing.FontStyle]::Bold } else { [System.Drawing.FontStyle]::Regular }
  $graphics.DrawString($text, (Font $size $style), (Brush $color), [single]$x, [single]$y)
}

$bitmap = New-Object System.Drawing.Bitmap 1080, 1080
$graphics = [System.Drawing.Graphics]::FromImage($bitmap)
$graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$graphics.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::ClearTypeGridFit

$graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#f8fafc"))
FillRound $graphics 54 54 972 972 42 "#ffffff" "#d7dee8"
FillRound $graphics 54 54 972 226 42 "#7f1d1d"
$graphics.FillRectangle((Brush "#991b1b"), 54, 212, 972, 68)
Text $graphics (U "6L+Z5Lqb5L+h5oGv5LiN6KaB5Y+R") 102 112 58 "#ffffff" $true
Text $graphics (U "5L+d5oqk6LSm5Y+35a6J5YWo77ya5YWI6ISx5pWP77yM5YaN6K+K5pat") 102 184 30 "#fee2e2" $true
FillRound $graphics 790 92 178 96 24 "#991b1b" "#b91c1c"
Text $graphics (U "5a6J5YWo6L6555WM") 824 124 30 "#ffffff" $true

FillRound $graphics 88 330 424 500 32 "#fef2f2" "#fecaca"
FillRound $graphics 568 330 424 500 32 "#f0fdf4" "#bbf7d0"
$graphics.FillEllipse((Brush "#dc2626"), 112, 361, 48, 48)
$penX = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml("#ffffff"), 8)
$penX.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$penX.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
$graphics.DrawLine($penX, 124, 373, 148, 397)
$graphics.DrawLine($penX, 148, 373, 124, 397)
Text $graphics (U "5LiN6KaB5Y+R") 178 368 38 "#111827" $true

$graphics.FillEllipse((Brush "#16a34a"), 592, 361, 48, 48)
$penOk = New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml("#ffffff"), 8)
$penOk.StartCap = [System.Drawing.Drawing2D.LineCap]::Round
$penOk.EndCap = [System.Drawing.Drawing2D.LineCap]::Round
$graphics.DrawLines($penOk, @(
  [System.Drawing.Point]::new(604, 386),
  [System.Drawing.Point]::new(613, 396),
  [System.Drawing.Point]::new(631, 373)
))
Text $graphics (U "5Y+v5Lul5Y+R") 658 368 38 "#111827" $true

$noItems = @("6LSm5Y+35a+G56CB", "6aqM6K+B56CBIC8g5LqM57u056CB", "QVBJIEtleSAvIFRva2Vu", "6ZO26KGM5Y2hIC8g6Lqr5Lu96K+B5Y6f5Lu2", "5ZCO5Y+w5a6M5pW05p2D6ZmQ")
$okItems = @("6ZSZ6K+v5oiq5Zu+", "6ISx5pWP5pel5b+X", "5rWB56iL5oiq5Zu+", "55uu5qCH57uT5p6c", "5aSN546w5q2l6aqk")
for ($i = 0; $i -lt 5; $i++) {
  Text $graphics (U $noItems[$i]) 126 (454 + ($i * 72)) 32 "#111827" $true
  Text $graphics (U $okItems[$i]) 606 (454 + ($i * 72)) 32 "#111827" $true
}

FillRound $graphics 98 878 884 76 22 "#111827"
Text $graphics (U "5aaC5p6c5b+F6aG755yL6YWN572u77yM6K+35YWI5omT56CB5pWP5oSf5a2X5q61") 146 902 26 "#ffffff" $true
Text $graphics (U "QUkgQnVpbGQgRmxvdyDCtyDlubPlj7DlhoXmsp/pgJogwrcg5LiN5o6l5pS25pWP5oSf6ZqQ56eB") 98 992 26 "#64748b" $true

$bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
Write-Output $output
