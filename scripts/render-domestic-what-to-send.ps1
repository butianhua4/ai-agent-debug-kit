Add-Type -AssemblyName System.Drawing

if ($MyInvocation.MyCommand.Path) {
  $root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
} else {
  $root = (Get-Location).Path
}
$output = Join-Path $root "assets\domestic-299-what-to-send.png"

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
FillRound $graphics 54 54 972 226 42 "#0f172a"
$graphics.FillRectangle((Brush "#1d4ed8"), 54, 196, 486, 84)
$graphics.FillRectangle((Brush "#0f766e"), 540, 196, 486, 84)

Text $graphics (U "5LiL5Y2V5YmN6K+35YeG5aSH6L+ZIDUg5qC3") 102 106 50 "#ffffff" $true
Text $graphics (U "5Y+R5p2Q5paZ77yM5LiN5Y+R6LSm5Y+35a+G56CB77yb5oiR5Y+q55yL6ZSZ6K+v5ZKM5rWB56iL") 102 178 27 "#e0f2fe" $true
FillRound $graphics 764 92 206 96 24 "#1e293b" "#334155"
Text $graphics (U "Mjk5IOiviuaWrQ==") 792 112 24 "#ffffff" $true
Text $graphics (U "5YWI5a6a5L2N5YaN5L+u") 792 150 24 "#c7d2fe" $true

$rows = @(
  @{ Y=334; Fill="#eff6ff"; Stroke="#bfdbfe"; Dot="#2563eb"; N="1"; Title="6ZSZ6K+v5oiq5Zu+"; Body="57qi5a2X44CB5aSx6LSl5q2l6aqk44CB5oql6ZSZ5by556qX6KaB5riF5qWa" },
  @{ Y=448; Fill="#f0fdf4"; Stroke="#bbf7d0"; Dot="#16a34a"; N="2"; Title="5rWB56iL5oiq5Zu+"; Body="bjhuIC8gTWFrZSAvIFphcGllciAvIEFnZW50IOiKgueCueWFs+ezuw==" },
  @{ Y=562; Fill="#fff7ed"; Stroke="#fed7aa"; Dot="#f97316"; N="3"; Title="5pel5b+X5paH5pys"; Body="5aSN5Yi25aSx6LSl5pel5b+X77yM5pWP5oSfIHRva2VuIOivt+WFiOaJk+eggQ==" },
  @{ Y=676; Fill="#f5f3ff"; Stroke="#ddd6fe"; Dot="#7c3aed"; N="4"; Title="55uu5qCH57uT5p6c"; Body="5L2g5biM5pyb5pyA5ZCO6Ieq5Yqo5a6M5oiQ5LuA5LmI5Yqo5L2c" },
  @{ Y=790; Fill="#ecfeff"; Stroke="#a5f3fc"; Dot="#0891b2"; N="5"; Title="5aSN546w5q2l6aqk"; Body="54K55ZOq6YeM5Lya5aSx6LSl77yM5LuA5LmI5pe25YCZ5aSx6LSl" }
)

foreach ($row in $rows) {
  FillRound $graphics 98 $row.Y 884 92 24 $row.Fill $row.Stroke
  $graphics.FillEllipse((Brush $row.Dot), 121, ($row.Y + 21), 50, 50)
  Text $graphics $row.N 137 ($row.Y + 32) 25 "#ffffff" $true
  Text $graphics (U $row.Title) 190 ($row.Y + 26) 34 "#0f172a" $true
  Text $graphics (U $row.Body) 390 ($row.Y + 30) 28 "#64748b"
}

FillRound $graphics 98 922 884 78 22 "#111827"
Text $graphics (U "5LiN6KaB5Y+R6YCB77ya5a+G56CB44CB6aqM6K+B56CB44CB5a+G6ZKl44CB6ZO26KGM5Y2h44CB6Lqr5Lu96K+B5Y6f5Lu244CB5ZCO5Y+w5a6M5pW05p2D6ZmQ") 132 946 27 "#ffffff" $false
Text $graphics (U "QUkgQnVpbGQgRmxvdyDCtyBBSSDoh6rliqjljJbmlYXpmpzor4rmlq0gwrcg5YWI6ISx5pWP77yM5YaN6K+K5pat") 98 1034 24 "#64748b" $true

$bitmap.Save($output, [System.Drawing.Imaging.ImageFormat]::Png)
$graphics.Dispose()
$bitmap.Dispose()
Write-Output $output
