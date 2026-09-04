Add-Type -AssemblyName System.Drawing

function Set-ImageOrientation {
  param([System.Drawing.Image]$Image)

  if ($Image.PropertyIdList -notcontains 274) {
    return
  }

  switch ($Image.GetPropertyItem(274).Value[0]) {
    3 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate180FlipNone) }
    6 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone) }
    8 { $Image.RotateFlip([System.Drawing.RotateFlipType]::Rotate270FlipNone) }
  }
}

function Save-ScaledImage {
  param(
    [System.Drawing.Image]$Source,
    [string]$Destination,
    [int]$Width,
    [ValidateSet('Jpeg', 'Png')]
    [string]$Format,
    [long]$Quality = 82
  )

  $height = [Math]::Round($Source.Height * ($Width / $Source.Width))
  $pixelFormat = if ($Format -eq 'Png') {
    [System.Drawing.Imaging.PixelFormat]::Format32bppArgb
  } else {
    [System.Drawing.Imaging.PixelFormat]::Format24bppRgb
  }

  $bitmap = New-Object System.Drawing.Bitmap($Width, $height, $pixelFormat)
  $bitmap.SetResolution(96, 96)
  $graphics = [System.Drawing.Graphics]::FromImage($bitmap)

  try {
    $graphics.CompositingQuality = [System.Drawing.Drawing2D.CompositingQuality]::HighQuality
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $graphics.DrawImage($Source, 0, 0, $Width, $height)

    if ($Format -eq 'Png') {
      $bitmap.Save($Destination, [System.Drawing.Imaging.ImageFormat]::Png)
      return
    }

    $encoder = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() |
      Where-Object MimeType -eq 'image/jpeg'
    $parameters = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $parameters.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter(
      [System.Drawing.Imaging.Encoder]::Quality,
      $Quality
    )
    $bitmap.Save($Destination, $encoder, $parameters)
    $parameters.Dispose()
  } finally {
    $graphics.Dispose()
    $bitmap.Dispose()
  }
}

$assetsDirectory = Resolve-Path (Join-Path $PSScriptRoot '..\src\assets')
$publicDirectory = Resolve-Path (Join-Path $PSScriptRoot '..\public')

$portrait = [System.Drawing.Image]::FromFile((Join-Path $assetsDirectory 'milanphoto.JPG'))
try {
  Set-ImageOrientation -Image $portrait
  Save-ScaledImage -Source $portrait -Destination (Join-Path $assetsDirectory 'milanphoto-480.jpg') -Width 480 -Format Jpeg
  Save-ScaledImage -Source $portrait -Destination (Join-Path $assetsDirectory 'milanphoto-900.jpg') -Width 900 -Format Jpeg
} finally {
  $portrait.Dispose()
}

$logoSvg = [System.IO.File]::ReadAllText((Join-Path $assetsDirectory 'logo.svg'))
$logoMatches = [regex]::Matches($logoSvg, 'data:image/png;base64,([^\"'']+)')
$logoBytes = [Convert]::FromBase64String($logoMatches[$logoMatches.Count - 1].Groups[1].Value)
$logoStream = New-Object System.IO.MemoryStream(,$logoBytes)
$logo = [System.Drawing.Image]::FromStream($logoStream)
try {
  Save-ScaledImage -Source $logo -Destination (Join-Path $assetsDirectory 'logo-light.png') -Width 900 -Format Png
} finally {
  $logo.Dispose()
  $logoStream.Dispose()
}

$favicon = [System.Drawing.Image]::FromFile((Join-Path $assetsDirectory 'icon.jpg'))
try {
  Save-ScaledImage -Source $favicon -Destination (Join-Path $publicDirectory 'favicon.jpg') -Width 128 -Format Jpeg -Quality 85
} finally {
  $favicon.Dispose()
}

$workDirectory = Join-Path $assetsDirectory 'work'
$workImages = @(
  @{ Source = 'Eaastern travel mart.png'; Destination = 'eastern-travel-mart-320.png'; Format = 'Png' },
  @{ Source = 'gayatri katuwal bhandari.jpeg'; Destination = 'gayatri-bhandari-320.jpg'; Format = 'Jpeg' },
  @{ Source = 'Gupta nexus.png'; Destination = 'gupta-nexus-320.png'; Format = 'Png' },
  @{ Source = 'madhesh Torish mart.png'; Destination = 'madhesh-tourism-mart-320.png'; Format = 'Png' }
)

foreach ($workImage in $workImages) {
  $source = [System.Drawing.Image]::FromFile((Join-Path $workDirectory $workImage.Source))
  try {
    Set-ImageOrientation -Image $source
    Save-ScaledImage -Source $source -Destination (Join-Path $workDirectory $workImage.Destination) -Width 320 -Format $workImage.Format
  } finally {
    $source.Dispose()
  }
}
