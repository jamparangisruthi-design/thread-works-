param(
    [int]$Port = 5500
)

$listener = New-Object System.Net.HttpListener
$prefix = "http://localhost:$Port/"
$listener.Prefixes.Add($prefix)

try {
    $listener.Start()
} catch {
    # If 5500 is busy, try 8080 or 3000
    $Port = 8080
    $prefix = "http://localhost:$Port/"
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add($prefix)
    try {
        $listener.Start()
    } catch {
        $Port = 3000
        $prefix = "http://localhost:$Port/"
        $listener = New-Object System.Net.HttpListener
        $listener.Prefixes.Add($prefix)
        $listener.Start()
    }
}

Write-Host "=========================================="
Write-Host " SRUTHI THREADS & DESIGNS LOCAL SERVER"
Write-Host " Server running at: http://localhost:$Port/"
Write-Host "=========================================="

$mimeTypes = @{
    ".html"  = "text/html; charset=utf-8"
    ".htm"   = "text/html; charset=utf-8"
    ".css"   = "text/css; charset=utf-8"
    ".js"    = "application/javascript; charset=utf-8"
    ".mjs"   = "application/javascript; charset=utf-8"
    ".json"  = "application/json; charset=utf-8"
    ".png"   = "image/png"
    ".jpg"   = "image/jpeg"
    ".jpeg"  = "image/jpeg"
    ".gif"   = "image/gif"
    ".svg"   = "image/svg+xml"
    ".ico"   = "image/x-icon"
    ".webp"  = "image/webp"
    ".woff"  = "font/woff"
    ".woff2" = "font/woff2"
    ".ttf"   = "font/ttf"
}

$root = $PSScriptRoot
if (-not $root) { $root = (Get-Location).Path }

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        $urlPath = $request.Url.LocalPath
        if ($urlPath -eq "/" -or [string]::IsNullOrWhiteSpace($urlPath)) {
            $urlPath = "/index.html"
        }

        $decoded = [System.Uri]::UnescapeDataString($urlPath).TrimStart('/')
        $decoded = $decoded.Replace('/', [System.IO.Path]::DirectorySeparatorChar)
        $filePath = [System.IO.Path]::Combine($root, $decoded)

        # CORS and caching headers for smooth dev preview
        $response.AddHeader("Access-Control-Allow-Origin", "*")
        $response.AddHeader("Cache-Control", "no-cache, no-store, must-revalidate")

        if ([System.IO.File]::Exists($filePath)) {
            $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
            $mime = if ($mimeTypes.ContainsKey($ext)) { $mimeTypes[$ext] } else { "application/octet-stream" }
            $response.ContentType = $mime

            $bytes = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $bytes.Length
            $response.StatusCode = 200
            $response.OutputStream.Write($bytes, 0, $bytes.Length)
        } else {
            $response.StatusCode = 404
            $msg = [System.Text.Encoding]::UTF8.GetBytes("<html><body><h2>404 - Page Not Found</h2><p><a href='/'>Back to Home</a></p></body></html>")
            $response.ContentType = "text/html; charset=utf-8"
            $response.ContentLength64 = $msg.Length
            $response.OutputStream.Write($msg, 0, $msg.Length)
        }
        $response.OutputStream.Close()
    } catch {
        # Keep listening even on broken client pipe
    }
}
