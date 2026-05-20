Add-Type -AssemblyName System.Drawing

if ($MyInvocation.MyCommand.Path) {
  $root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
} else {
  $root = (Get-Location).Path
}
$output = Join-Path $root "assets\domestic-299-summary-card.png"

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
    $graphics.DrawPath((New-Object System.Drawing.Pen ([System.Drawing.ColorTranslator]::FromHtml($stroke), 2)), $path)
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

$graphics.Clear([System.Drawing.ColorTranslator]::FromHtml("#f6f8fb"))
FillRound $graphics 54 54 972 972 42 "#ffffff" "#d7dee8"
FillRound $graphics 54 54 972 244 42 "#0f172a"
$graphics.FillRectangle((Brush "#1d4ed8"), 54, 210, 486, 88)
$graphics.FillRectangle((Brush "#0f766e"), 540, 210, 486, 88)

Text $graphics (U "Mjk5IOiHquWKqOWMluaVhemanOiviuaWrQ==") 102 112 56 "#ffffff" $true
Text $graphics (U "5YWI5a6a5L2N77yM5YaN5Yaz5a6a6KaB5LiN6KaB5L+u") 102 190 30 "#dbeafe" $true
FillRound $graphics 780 96 174 102 28 "#1e293b" "#334155"
Text $graphics "299" 820 116 56 "#ffffff" $true
Text $graphics (U "5YWl6Zeo6K+K5pat") 806 176 24 "#ffffff" $true

FillRound $graphics 92 350 414 170 28 "#eff6ff" "#bfdbfe"
Text $graphics (U "6YCC5ZCI6L+Z5Lqb6Zeu6aKY") 128 384 33 "#111827" $true
Text $graphics "n8n / Make / Zapier" 128 446 24 "#64748b" $true
Text $graphics "Agent / Webhook / API" 128 480 24 "#64748b" $true

FillRound $graphics 574 350 414 170 28 "#f0fdf4" "#bbf7d0"
Text $graphics (U "5L2g6ZyA6KaB5Y+R6YCB") 610 384 33 "#111827" $true
Text $graphics (U "6ZSZ6K+v5oiq5Zu+44CB5rWB56iL5oiq5Zu+") 610 446 24 "#64748b" $true
Text $graphics (U "6ISx5pWP5pel5b+X44CB55uu5qCH57uT5p6c44CB5aSN546w5q2l6aqk") 610 480 24 "#64748b" $true

FillRound $graphics 92 548 896 152 28 "#fff7ed" "#fed7aa"
Text $graphics (U "5L2g5Lya5pS25Yiw") 128 584 33 "#111827" $true
Text $graphics (U "5LiA6aG16K+K5pat5oql5ZGK77ya5pWF6Zqc54K544CB5Y+v6IO95Y6f5Zug44CB5L+u5aSN6aG65bqP44CB5rWL6K+V5riF5Y2V") 128 646 27 "#64748b" $true

FillRound $graphics 92 742 896 118 28 "#fef2f2" "#fecaca"
Text $graphics (U "5LiN5YyF5ZCr") 128 778 33 "#111827" $true
Text $graphics (U "5LiN55m75b2V6LSm5Y+377yM5LiN5pS25a+G56CB5a+G6ZKl77yM5LiN55u05o6l5pS555Sf5Lqn5ZCO5Y+w") 300 782 25 "#64748b" $true
Text $graphics (U "6YCC5ZCI5YWI5Yik5pat6Zeu6aKY5YC85LiN5YC85b6X57un57ut5L+u") 128 824 24 "#64748b" $true

FillRound $graphics 92 904 896 70 22 "#111827"
Text $graphics (U "QUkgQnVpbGQgRmxvdyDCtyAyOTkg5YWl6Zeo6K+K5patIMK3IOWuieWFqOiEseaVj+S6pOS7mA==") 142 928 24 "#ffffff" $true

$bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
Write-Output $output
