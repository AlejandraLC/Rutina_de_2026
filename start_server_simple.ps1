# Servidor HTTP Simple para Rutina de 2026
param(
    [int]$Port = 8080
)

$ErrorActionPreference = "Continue"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "   Servidor Local - Rutina de 2026" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# Obtener IP local
try {
    $ip = (Get-NetIPAddress -AddressFamily IPv4 -ErrorAction SilentlyContinue | 
           Where-Object {$_.InterfaceAlias -notlike "*Loopback*" -and $_.IPAddress -like "192.168.*"} | 
           Select-Object -First 1).IPAddress
    
    if (-not $ip) {
        $ip = "192.168.1.229"  # IP detectada anteriormente
    }
} catch {
    $ip = "192.168.1.229"
}

Write-Host "SERVIDOR INICIADO!" -ForegroundColor Green
Write-Host ""
Write-Host "Accede desde tu PC:" -ForegroundColor Yellow
Write-Host "  http://localhost:$Port" -ForegroundColor White
Write-Host ""
Write-Host "Accede desde tu TABLET:" -ForegroundColor Yellow
Write-Host "  http://$ip`:$Port" -ForegroundColor White -BackgroundColor DarkGreen
Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Presiona Ctrl+C para detener el servidor" -ForegroundColor Gray
Write-Host ""

# Crear listener HTTP
$listener = $null
try {
    $listener = New-Object System.Net.HttpListener
    $listener.Prefixes.Add("http://*:$Port/")
    $listener.Start()
    
    Write-Host "Servidor escuchando en puerto $Port..." -ForegroundColor Green
    Write-Host ""
    
    while ($true) {
        try {
            $context = $listener.GetContext()
            $request = $context.Request
            $response = $context.Response
            
            # Obtener ruta del archivo solicitado
            $urlPath = $request.Url.LocalPath
            if ($urlPath -eq "/") { $urlPath = "/index.html" }
            
            $filePath = Join-Path (Get-Location) $urlPath.TrimStart('/')
            
            $timestamp = Get-Date -Format 'HH:mm:ss'
            Write-Host "[$timestamp] $($request.HttpMethod) $urlPath" -ForegroundColor Gray
            
            if (Test-Path $filePath -PathType Leaf) {
                # Determinar tipo de contenido
                $ext = [System.IO.Path]::GetExtension($filePath).ToLower()
                $contentType = switch ($ext) {
                    ".html" { "text/html; charset=utf-8" }
                    ".css"  { "text/css; charset=utf-8" }
                    ".js"   { "application/javascript; charset=utf-8" }
                    ".json" { "application/json; charset=utf-8" }
                    ".png"  { "image/png" }
                    ".jpg"  { "image/jpeg" }
                    ".jpeg" { "image/jpeg" }
                    ".gif"  { "image/gif" }
                    ".svg"  { "image/svg+xml" }
                    ".ico"  { "image/x-icon" }
                    ".woff" { "font/woff" }
                    ".woff2" { "font/woff2" }
                    ".ttf"  { "font/ttf" }
                    default { "application/octet-stream" }
                }
                
                $response.ContentType = $contentType
                $response.StatusCode = 200
                
                # Leer y enviar archivo
                $buffer = [System.IO.File]::ReadAllBytes($filePath)
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
                
                Write-Host "  → 200 OK ($($buffer.Length) bytes)" -ForegroundColor Green
            } else {
                # Archivo no encontrado
                $response.StatusCode = 404
                $html = @"
<!DOCTYPE html>
<html>
<head><title>404 - No encontrado</title></head>
<body style="font-family: Arial; text-align: center; padding: 50px;">
    <h1>404</h1>
    <p>Archivo no encontrado: $urlPath</p>
</body>
</html>
"@
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($html)
                $response.ContentType = "text/html; charset=utf-8"
                $response.ContentLength64 = $buffer.Length
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
                
                Write-Host "  → 404 Not Found" -ForegroundColor Red
            }
            
            $response.Close()
        } catch {
            if ($_.Exception.Message -notlike "*interrupted*") {
                Write-Host "Error procesando solicitud: $($_.Exception.Message)" -ForegroundColor Red
            }
        }
    }
} catch {
    Write-Host ""
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    
    if ($_.Exception.Message -like "*access*denied*" -or $_.Exception.Message -like "*acceso*denegado*") {
        Write-Host ""
        Write-Host "SOLUCION: Ejecuta PowerShell como Administrador" -ForegroundColor Yellow
        Write-Host "O usa un puerto mayor a 1024 (ej: 8080)" -ForegroundColor Yellow
    }
} finally {
    if ($listener -ne $null) {
        $listener.Stop()
        $listener.Close()
    }
    Write-Host ""
    Write-Host "Servidor detenido." -ForegroundColor Yellow
}
